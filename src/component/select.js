// SelectComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectValue } from '../redux/selectSlice';
import '../style.css'

const Select = () => {
  const dispatch = useDispatch();
  const selectValue = useSelector((state) => state.select.value);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    dispatch(setSelectValue(value));
  };

  return (
    <div className='form-group'>
      <label>Select:</label>
      <select value={selectValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default Select;
