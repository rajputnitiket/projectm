// redux/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { app, database, dbref } from '../firebase';
import { getDatabase, ref, set, push } from "firebase/database";

import 'firebase/database';



const initialState = {
    inputs: [], // Initialize inputs as an array to hold multiple input values with IDs
    status: 'idle',
    error: null
};



export const saveDataToFirebase = createAsyncThunk(
    'data/saveDataToFirebase',
    async (_, { getState }) => {
        const { input, select } = getState();
       // const { inputs } = getState().data;
        const dataToSave = {
            inputValue: input,
            selectValue: select.value,
        };

        // Save data to Firebase Realtime Database
        console.log(dataToSave);
        await push(dbref, dataToSave);
        //await database.ref('data').push(dataToSave);
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
        updateInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        updateSelectValue: (state, action) => {
            state.selectValue = action.payload;
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

export const { updateInputValue, updateSelectValue } = dataSlice.actions;

export const sendDataToFirebase = (data) => async (dispatch) => {
    console.log("11");
    console.log(data);
    try {
        // Check if any property in the data object is undefined
        const isDataValid = Object.values(data).every(value => value !== undefined);
        console.log("22");
        console.log(data);
        if (isDataValid) {
            // Assuming you have a 'data' node in your Firebase Realtime Database
            console.log("33");
            console.log(data);
            await database.ref('data').push(data);
            // You can dispatch any further actions upon successful data submission if needed
        } else {

            console.error('Error sending data to Firebase: Data contains undefined values');
        }
    } catch (error) {
        console.error('Error sending data to Firebase: ', error);
    }
};

export const { saveData, addCase } = dataSlice.actions;
export default dataSlice.reducer;
