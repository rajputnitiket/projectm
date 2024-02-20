// ButtonComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveData, saveDataToFirebase, sendDataToFirebase } from '../redux/dataSlice';


const ButtonComponent = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.data);

  const input = useSelector((state) => state.input.value);
  const select = useSelector((state) => state.select.value);

  const handleClick = () => {
    // Dispatch the async thunk action

    dispatch(saveDataToFirebase());
    //dispatch(sendDataToFirebase(data, dispatch, getState));

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
