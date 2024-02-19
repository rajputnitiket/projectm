
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'option1', // Default value
};

const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setSelectValue } = selectSlice.actions;
export default selectSlice.reducer;
