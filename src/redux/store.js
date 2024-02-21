
import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import inputReducer from './inputslice';
import selectReducer from './selectSlice';
import dataReducer from './dataSlice';
import stateReducer, { fetchStatesAsync } from './StateSlice';




export const store = configureStore({
    reducer: {
        input: inputReducer,
        select: selectReducer,
        data: dataReducer,
        states: stateReducer,
    },
});
