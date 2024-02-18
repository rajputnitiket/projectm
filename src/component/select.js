import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectValue } from '../redux/actions';

const SelectComponent = () => {
  const dispatch = useDispatch();
  const selectValue = useSelector((state) => state.selectValue);

  const handleSelectChange = (event) => {
    dispatch(setSelectValue(event.target.value));
  };

  return (
    <div>
      <label>Select:</label>
      <select value={selectValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default SelectComponent;
