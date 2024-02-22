import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, setSelectValue } from './reducers'; // Import your action creators

const MyComponent = () => {
    const dispatch = useDispatch();

    // Example of accessing state
    const { firstName, lastName, city } = useSelector(state => state.input);
    const { select1, select2, select3 } = useSelector(state => state.select);

    // Example of dispatching actions
    const updateInput = () => {
        dispatch(setInputValue({ firstName: 'John', lastName: 'Doe', city: 'New York' }));
    };

    const updateSelect = () => {
        dispatch(setSelectValue({ select1: 'option2', select2: 'value2', select3: 'value3' }));
    };

    return (
        <div>
            <div>
                First Name: {firstName}, Last Name: {lastName}, City: {city}
            </div>
            <div>
                Select 1: {select1}, Select 2: {select2}, Select 3: {select3}
            </div>
            <button onClick={updateInput}>Update Input</button>
            <button onClick={updateSelect}>Update Select</button>
        </div>
    );
};

export default MyComponent;
