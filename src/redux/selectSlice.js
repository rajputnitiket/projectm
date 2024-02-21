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
            const { select1, select2, select3 } = action.payload;
            state.select1 = select1 !== undefined ? select1 : state.select1;
            state.select2 = select2 !== undefined ? select2 : state.select2;
            state.select3 = select3 !== undefined ? select3 : state.select3;
        },
    },
});

export const { setSelectValue } = selectSlice.actions;
export default selectSlice.reducer;
