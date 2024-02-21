import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk'; // Import 'thunk' from 'redux-thunk'
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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk), // Apply 'thunk' middleware
});
