
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
