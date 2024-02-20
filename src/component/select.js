// SelectComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectValue } from '../redux/selectSlice';
import '../style.css';

const SelectComponent = () => {
  const dispatch = useDispatch();
  const [selectValues, setSelectValues] = useState({
    select1: '',
    select2: '',
    select3: ''
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectValues(prevState => ({
      ...prevState,
      [name]: value
    }));
    dispatch(setSelectValue(name, value));
  };

  return (
    <div className=' col-lg-12 form-group-sl'>
      <div className='form-group'>
        <label>Select 1:</label>
        <select name="select1" value={selectValues.select1} onChange={handleSelectChange}>
          <option value="">Select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className='form-group'>
        <label>Select 2:</label>
        <select name="select2" value={selectValues.select2} onChange={handleSelectChange} disabled={!selectValues.select1}>
          <option value="">Select</option>
          {selectValues.select1 === 'option1' && <option value="suboption1">Suboption 1</option>}
          {selectValues.select1 === 'option2' && <option value="suboption2">Suboption 2</option>}
          {selectValues.select1 === 'option3' && <option value="suboption3">Suboption 3</option>}
        </select>
      </div>
      <div className='form-group'>
        <label>Select 3:</label>
        <select name="select3" value={selectValues.select3} onChange={handleSelectChange} disabled={!selectValues.select2}>
          <option value="">Select</option>
          {selectValues.select2 === 'suboption1' && <option value="subsuboption1">Subsuboption 1</option>}
          {selectValues.select2 === 'suboption2' && <option value="subsuboption2">Subsuboption 2</option>}
          {selectValues.select2 === 'suboption3' && <option value="subsuboption3">Subsuboption 3</option>}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectValue } from '../redux/selectSlice';
// import '../style.css'

// const Select = () => {
//   const dispatch = useDispatch();
//   const selectValue = useSelector((state) => state.select.value);

//   const handleSelectChange = (event) => {
//     const value = event.target.value;
//     dispatch(setSelectValue(value));
//   };

//   return (
//     <div className='form-group'>
//       <label>Select:</label>
//       <select value={selectValue} onChange={handleSelectChange}>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//     </div>
//   );
// };

// export default Select;
