import { combineReducers } from 'redux';
import stateReducer from './StateSlice';
import inputReducer from './inputslice';
import selectReducer from './selectSlice';
import dataReducer from './dataSlice';

const rootReducer = combineReducers({
    state: stateReducer,
    input: inputReducer,
    select: selectReducer,
    data: dataReducer,
    // Add other reducers if you have them
});

export default rootReducer;