
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
    id: ''
};

/*
const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            state.value = action.payload;
        },
    },
});*/

const inputSlice = createSlice({
    name: 'input',
    initialState: {},
    reducers: {
        setInputValue: (state, action) => {
            const { id, value } = action.payload;
            state[id] = value;
        },
    },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
