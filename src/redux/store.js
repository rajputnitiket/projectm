
import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import sharedInputReducer from './sharedInputSlice';
import inputReducer from './inputslice';
import selectReducer from './selectSlice';
import dataReducer from './dataSlice';




export const store = configureStore({
    reducer: {
        input: inputReducer,
        select: selectReducer,
        data: dataReducer,
    },
});
