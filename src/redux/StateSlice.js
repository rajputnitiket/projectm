// stateSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStates, fetchDistricts, fetchTalukas } from './firebaseAPI';

// Async thunk action to fetch states
export const fetchStatesAsync = createAsyncThunk('states/fetchStates', async () => {
    const response = await fetchStates();
    return response;
});

// Async thunk action to fetch districts based on stateId
export const fetchDistrictsAsync = createAsyncThunk('districts/fetchDistricts', async (stateId) => {
    const response = await fetchDistricts(stateId);
    return response;
});

// Async thunk action to fetch talukas based on districtId
export const fetchTalukasAsync = createAsyncThunk('talukas/fetchTalukas', async (districtId) => {
    const response = await fetchTalukas(districtId);
    return response;
});

const initialState = {
    states: [],
    districts: [],
    talukas: [],
};

const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStatesAsync.fulfilled, (state, action) => {
                state.states = action.payload;
            })
            .addCase(fetchDistrictsAsync.fulfilled, (state, action) => {
                state.districts = action.payload;
            })
            .addCase(fetchTalukasAsync.fulfilled, (state, action) => {
                state.talukas = action.payload;
            });
    },
});

export default stateSlice.reducer;


// StateSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchStates, fetchDistricts, fetchTalukas } from './firebaseAPI';

// export const fetchStatesAsync = createAsyncThunk('states/fetchStates', async () => {
//     const response = await fetchStates();
//     return response.data;
// });

// export const fetchDistrictsAsync = createAsyncThunk('districts/fetchDistricts', async (stateId) => {
//     const response = await fetchDistricts(stateId);
//     return response.data;
// });

// export const fetchTalukasAsync = createAsyncThunk('talukas/fetchTalukas', async (districtId) => {
//     const response = await fetchTalukas(districtId);
//     return response.data;
// });

// const initialState = {
//     states: [],
//     districts: [],
//     talukas: [],
// };

// const stateSlice = createSlice({
//     name: 'state',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchStatesAsync.fulfilled, (state, action) => {
//                 state.states = action.payload;
//             })
//             .addCase(fetchDistrictsAsync.fulfilled, (state, action) => {
//                 state.districts = action.payload;
//             })
//             .addCase(fetchTalukasAsync.fulfilled, (state, action) => {
//                 state.talukas = action.payload;
//             });
//     },
// });

// export default stateSlice.reducer;
// export const { } = stateSlice.actions;