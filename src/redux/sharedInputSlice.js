
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch('link');
    return response.json();
});

export const sharedInputSlice = createSlice({
    name: 'sharedInput',
    initialState: {
        inputValue: '',
        selectValue: '',
    },
    reducers: {
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        setSelectValue: (state, action) => {
            state.selectValue = action.payload;
        },
        clearValues: (state) => {
            state.inputValue = '';
            state.selectValue = '';
        },
    },


});

export const { setInputValue, setSelectValue, clearValues } = sharedInputSlice.actions;

export default sharedInputSlice.reducer;
