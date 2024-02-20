// App.js
import React from "react";
import Input from "./component/Input";
import Select from "./component/Select";
import Button from "./component/Button";
import { getDatabase } from "firebase/database";
import { app } from "./firebase.js";
import "./style.css";
import { Card } from "react-bootstrap";
import lefticon from "./left-arrow.svg";
import cross from "./cross.svg";

const db = getDatabase(app);

function App() {
  {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      city: "",
    });
    const [formSelect, setFormSelect] = useState({ value: "", name: "" });
    const dispatch = useDispatch();
    const handleInputChange = (callBackDataName) => {
      const { name, value } = callBackDataName;
      setFormData({ ...formData, [name]: value });

      dispatch(setInputValue(formData));
    };
  }
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
