import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveDataToFirebase } from '../redux/dataSlice';
import { createSelector } from '@reduxjs/toolkit';

// Define selectors for input fields
const selectFirstName = state => state.input.firstName;
const selectLastName = state => state.input.lastName;
const selectCity = state => state.input.city;

// Define selectors for select fields
const selectSelect1 = state => state.select.select1;
const selectSelect2 = state => state.select.select2;
const selectSelect3 = state => state.select.select3;

// Create a combined selector for input and select data
const selectInputAndSelectData = createSelector(
  [selectFirstName, selectLastName, selectCity, selectSelect1, selectSelect2, selectSelect3],
  (firstName, lastName, valid, select1, select2, select3) => ({
    firstName,
    lastName,
    valid,
    select1,
    select2,
    select3
  })
);

const ButtonComponent = () => {
  const dispatch = useDispatch();
  const { status, error, firstName, lastName, valid, select1, select2, select3 } = useSelector(selectInputAndSelectData);

  console.log('Input values:', { firstName, lastName, valid });
  console.log('Select values:', { select1, select2, select3 });

  const handleClick = () => {
    const data = {
      firstName,
      lastName,
      valid,
      select1,
      select2,
      select3
    };
    console.log("buttondata", data);
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
