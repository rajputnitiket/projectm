
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
const initialState = {
    // value: '',
    // id: '',
    // data:{}
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
