// ButtonComponent.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { saveData } from '../redux/dataSlice';

const Button = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // Dispatch action to save data to Firebase
    console.log("hii");
    dispatch(saveData());

  };

  return (
    <div>
      <button onClick={handleClick}>Save Data</button>
    </div>
  );
};

export default Button;
