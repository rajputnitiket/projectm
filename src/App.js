// App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue ,dispatch} from './redux/inputslice.js';
import Input from './component/Input';
import Select from './component/Select';
import Button from './component/Button';
import { getDatabase } from "firebase/database";
import { app } from './firebase.js';

const db = getDatabase(app);


function App() {
  const[formData,setFormData] = useState({firstName:"",lastName:"",city:""})
  const[formSelect,setFormSelect] = useState({value:"",name:""})
  const dispatch = useDispatch();
  const handleInputChange = (callBackDataName)=>{
    const {  name,value} = callBackDataName
    setFormData({...formData,[name]:value})
    
    dispatch(setInputValue(formData));
  }
  const handleSelectChange = (callBackDataName) =>{
    const {  name,value} = callBackDataName
    setFormSelect({...formData,[name]:value})
  }

  return (
    <div>
      <h1>Redux Toolkit Shared Components</h1>

      <Input type={"text"} label="First Name" name={"firstName"} value={formData.firstName} placeholder={"Enter First Name"} callbackInputChange={handleInputChange}/>
      <Input type={"text"} name={"lastName"} value={formData.lastName} placeholder={"Enter lastName"} callbackInputChange={handleInputChange}/>
      <Input type={"text"} name={"city"} value={formData.city} placeholder={"Enter City"} callbackInputChange={handleInputChange}/>

      <button onClick={()=>{console.log(formData)}}>Submit</button>
       <Select/>
      <Button /> 
    </div>
  );
}

export default App;
