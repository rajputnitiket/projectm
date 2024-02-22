
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: "",
    lastName: "",
    valid: "",
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
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.valid = action.payload.valid;

        },
    },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
