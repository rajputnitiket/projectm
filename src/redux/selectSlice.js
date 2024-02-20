import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    select1: 'option1', // Default value for select1
    select2: '',        // Default value for select2
    select3: '',        // Default value for select3
};

const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectValue: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
    },
});

export const { setSelectValue } = selectSlice.actions;
export default selectSlice.reducer;
