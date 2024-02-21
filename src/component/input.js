
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../redux/inputslice';
import { useState } from 'react';

/*const InputComponent = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.value);

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(setInputValue(value));
  };*/


const InputComponent = ({ id, type, name, value, placeholder, callbackInputChange, label }) => {


  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const obj = { name, value }

    callbackInputChange(obj)

  };

  return (
    <div className='form-group'>
      <label>{label || "Input"}:</label>
      <input
        type={type || "text"}
        value={value || ''}
        name={name || ''}
        onChange={handleInputChange}
        placeholder={placeholder || "Type something..."}
      />
    </div>
  );
};

export default InputComponent;




