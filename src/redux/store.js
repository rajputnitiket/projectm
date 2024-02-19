
import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import sharedInputReducer from './sharedInputSlice';
import inputReducer from './redux/inputSlice';
import selectReducer from './redux/selectSlice';
import dataReducer from './redux/dataSlice';
import firebase from 'firebase/app';



export const store = configureStore({
    reducer: {
        input: inputReducer,
        select: selectReducer,
        data: dataReducer,
    },
});
