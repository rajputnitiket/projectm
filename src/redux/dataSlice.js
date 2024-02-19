// redux/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { app } from '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import 'firebase/database';


const initialState = {
    // Define initial state for data slice if needed
};

const db = getDatabase(app);

export const saveDataToFirebase = createAsyncThunk(
    'data/saveDataToFirebase',
    async (_, { getState }) => {
        const { input, select } = getState();
        const dataToSave = {
            inputValue: input.value,
            selectValue: select.value,
        };

        // Save data to Firebase Realtime Database
        await app.database().ref('data').push(dataToSave);
        //await app.database()
    }
);

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
            console.log(dataToSave);
            app.database().ref('data').push(dataToSave);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveDataToFirebase.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(saveDataToFirebase.fulfilled, (state) => {
                state.status = 'idle';
            })
            .addCase(saveDataToFirebase.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            });
    },
});

export const { saveData, addCase } = dataSlice.actions;
export default dataSlice.reducer;
