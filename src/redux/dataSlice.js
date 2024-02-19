// redux/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

const initialState = {
    // Define initial state for data slice if needed
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        saveData: () => (dispatch, getState) => {
            const { input, select } = getState();
            const dataToSave = {
                inputValue: input.value,
                selectValue: select.value,
            };

            // Save data to Firebase Realtime Database
            firebase.database().ref('data').push(dataToSave);
        },
    },
});

export const { saveData } = dataSlice.actions;
export default dataSlice.reducer;
