import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveDataToFirebase } from '../redux/dataSlice';
import { createSelector } from '@reduxjs/toolkit';

const selectDataState = state => state.data;
const selectInputState = state => state.input.value;
const selectSelectState = state => state.select.value;


const selectButtonData = createSelector(
  [selectDataState, selectInputState, selectSelectState],
  (data, input, select) => ({ data, input, select })
);

const ButtonComponent = () => {
  const dispatch = useDispatch();
  const { status, error, input, select } = useSelector(selectButtonData);

  console.log('Input value:', input);
  console.log('Select value:', select);

  const handleClick = () => {
    const data = {
      inputValue: input,
      selectValue: select,
    };

    dispatch(saveDataToFirebase(data))
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch((err) => {
        console.error('Error saving data:', err);
      });
  };

  return (
    <div className='secondarybtn'>
      <button className='btnsbmt' onClick={handleClick} disabled={status === 'loading'}>
        {status === 'loading' ? 'Saving...' : 'Save Data'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ButtonComponent;
