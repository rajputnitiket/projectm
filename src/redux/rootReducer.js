import { createSlice } from '@reduxjs/toolkit';

// Initial state for input values
const initialInputState = {
    firstName: '',
    lastName: '',
    city: ''
};

// Initial state for select values
const initialSelectState = {
    select1: 'option1',
    select2: '',
    select3: ''
};

// Create slice for input values
const inputSlice = createSlice({
    name: 'input',
    initialState: initialInputState,
    reducers: {
        setInputValue: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

// Create slice for select values
const selectSlice = createSlice({
    name: 'select',
    initialState: initialSelectState,
    reducers: {
        setSelectValue: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

// Export actions for input and select slices
export const { setInputValue } = inputSlice.actions;
export const { setSelectValue } = selectSlice.actions;

// Combine reducers for input and select slices
const rootReducer = {
    input: inputSlice.reducer,
    select: selectSlice.reducer
};

export default rootReducer;
