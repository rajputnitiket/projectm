import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveDataToFirebase } from '../redux/dataSlice';

const ButtonComponent = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.data);

  
  const { input, select } = useSelector((state) => ({
    input: state.input.value,
    select: state.select.value
  }));

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
