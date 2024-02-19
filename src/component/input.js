
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../redux/inputslice';

const InputComponent = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.value);

  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(setInputValue(value));
  };

  return (
    <div>
      <label>Input:</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default InputComponent;
