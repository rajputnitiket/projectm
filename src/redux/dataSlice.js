// redux/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { app } from '../firebase';

const initialState = {
    // Define initial state for data slice if needed
};



const postData = createAsyncThunk(
    'user/dataSlice',
    async (userId, thunkAPI) => {
        const response = await userAPI.fetchById(userId)
        return response.data
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
});

export const { saveData } = dataSlice.actions;
export default dataSlice.reducer;
