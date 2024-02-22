import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selections: {
        select1: 'option1', // Default value for select1
        select2: '',        // Default value for select2
        select3: '',        // Default value for select3
    }
};

const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectValue: (state, action) => {
            const { select1, select2, select3 } = action.payload;
            state.selections = {
                ...state.selections,
                select1: select1 !== undefined ? select1 : state.selections.select1,
                select2: select2 !== undefined ? select2 : state.selections.select2,
                select3: select3 !== undefined ? select3 : state.selections.select3,
            };
        },
    },
});

export const { setSelectValue } = selectSlice.actions;
export default selectSlice.reducer;
