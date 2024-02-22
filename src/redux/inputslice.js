
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
    name: '',
    obj: ''
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
    initialState: initialState,

    reducers: {
        setInputValue: (state, action) => {
            console.log("inputsliceAsa:", action.payload);
            //const { id, value } = action.payload;
            state = action.payload;

        },
    },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
