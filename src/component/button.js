// ButtonComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveDataToFirebase } from '../redux/dataSlice';

const ButtonComponent = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.data);

  const handleClick = () => {
    // Dispatch the async thunk action
    dispatch(saveDataToFirebase());
  };

  return (
    <div>
      <button onClick={handleClick} disabled={status === 'loading'}>
        {status === 'loading' ? 'Saving...' : 'Save Data'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ButtonComponent;
