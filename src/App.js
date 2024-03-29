import React, { useState } from "react";
import Input from "./component/Input.js";
import Select from "./component/Select.js";
import Button from "./component/Button.js";
import { getDatabase } from "firebase/database";
import { app } from "./firebase.js";
import "./style.css";
import { Card } from "react-bootstrap";
import lefticon from "./left-arrow.svg";
import cross from "./cross.svg";
import { useDispatch } from "react-redux";
import { setInputValue } from "./redux/inputslice.js";
import DropdownComponent from "./redux/DropdownComponent.js";

const db = getDatabase(app);

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
  });


  const dispatch = useDispatch();

  const handleInputChange = (callBackDataName) => {
    const { name, value } = callBackDataName;
    setFormData({ ...formData, [name]: value });
    console.log("inputvalue", formData);
    dispatch(setInputValue(formData));
  };

  return (
    <>
      <div className="container form-container ">
        <div className="row form-row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <a href="#" className="link">
                {" "}
                <img
                  src={lefticon}
                  title="Back To Master"
                  width="15"
                  height="15"
                />{" "}
                Back To Master
              </a>
              <img
                src={cross}
                className="cross-icon"
                title="Close"
                width="30"
                height="30"
              />
            </div>

            <h6>Add New PHC</h6>
            <Card>
              <div className=" col-lg-12 form-group-sl">

                <DropdownComponent />
              </div>
              <div className=" col-lg-12 form-group-sl">
                <Input
                  type={"text"}
                  label="*PHC Code"
                  name={"firstName"}
                  value={formData.firstName}
                  placeholder={"Enter First Name"}
                  callbackInputChange={handleInputChange}
                />
                <Input
                  type={"text"}
                  label="*PHC Name"
                  name={"lastName"}
                  value={formData.lastName}
                  placeholder={"Enter lastName"}
                  callbackInputChange={handleInputChange}
                />
                <Input
                  type={"radio"}
                  name={"validity"}
                  value={"valid"}
                  //placeholder={"Enter City"}
                  checked={formData.valid === "valid"}
                  callbackInputChange={handleInputChange}
                />
                <Input
                  type={"radio"}
                  name={"validity"}
                  value={"notValid"}
                  checked={formData.validity === "notValid"}
                  // placeholder={"invalid"}
                  callbackInputChange={handleInputChange}
                />
              </div>
              <div className=" text-center form-group-bt">
                <Button />
                <Button />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
