// src/redux/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dbref } from '../firebase';
import { push } from "firebase/database";

const initialState = {
    status: 'idle',
    error: null
};

export const saveDataToFirebase = createAsyncThunk(
    'data/saveDataToFirebase',
    async (data) => {
        try {
            const dataToSave = {
                inputValue: data.inputValue,
                selectValue: data.selectValue,
            };
            console.log("dataslice",dataToSave);
            await push(dbref, dataToSave);
        } catch (error) {
            throw Error('Error saving data to Firebase: ' + error.message);
        }
    }
);

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
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

export default dataSlice.reducer;
