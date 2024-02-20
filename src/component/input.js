
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


const InputComponent = ({ id }) => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input[id]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(setInputValue({ id, value }));
  };

  return (
    <div className='form-group'>
      <label>Input:</label>
      <input
        type="text"
        value={inputValue || ''}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default InputComponent;
