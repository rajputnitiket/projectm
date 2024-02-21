<<<<<<< HEAD
// App.js
import React from "react";
import Input from "./component/Input.js";
import Select from "./component/Select.js";
import Button from "./component/Button.js";
=======
import React, { useState } from "react";
>>>>>>> 1da485a52563f939bbf83b6609d361ce7e158ca9
import { getDatabase } from "firebase/database";
import { app } from "./firebase.js";
import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setInputValue } from "./redux/inputslice.js";
import Input from "./component/Input.js";
import Select from "./component/Select";
import Button from "./component/Button";
import lefticon from "./left-arrow.svg";
import cross from "./cross.svg";
import DropdownComponent from "./redux/DropdownComponent.js";

const db = getDatabase(app);

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: ""
  });

  const dispatch = useDispatch();

  const handleInputChange = (callBackDataName) => {
    const { name, value } = callBackDataName;
    setFormData({ ...formData, [name]: value });
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
                <Select />
                <DropdownComponent />
              </div>
              <div className=" col-lg-12 form-group-sl">
                <Input
                  type={"text"}
                  label="First Name"
                  name={"firstName"}
                  value={formData.firstName}
                  placeholder={"Enter First Name"}
                  callbackInputChange={handleInputChange}
                />
                <Input
                  type={"text"}
                  name={"lastName"}
                  value={formData.lastName}
                  placeholder={"Enter lastName"}
                  callbackInputChange={handleInputChange}
                />
                <Input
                  type={"text"}
                  name={"city"}
                  value={formData.city}
                  placeholder={"Enter City"}
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
