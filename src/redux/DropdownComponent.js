// DropdownComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatesAsync, fetchDistrictsAsync, fetchTalukasAsync } from '../stateSlice';

const DropdownComponent = () => {
    const states = useSelector((state) => state.states);
    const districts = useSelector((state) => state.districts);
    const talukas = useSelector((state) => state.talukas);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStatesAsync());
    }, [dispatch]);

    const handleStateChange = (stateId) => {
        dispatch(fetchDistrictsAsync(stateId));
    };

    const handleDistrictChange = (districtId) => {
        dispatch(fetchTalukasAsync(districtId));
    };

    return (
        <div>
            <select onChange={(e) => handleStateChange(e.target.value)}>
                {states.map((state) => (
                    <option key={state.id} value={state.id}>{state.name}</option>
                ))}
            </select>
            <select onChange={(e) => handleDistrictChange(e.target.value)}>
                {districts.map((district) => (
                    <option key={district.id} value={district.id}>{district.name}</option>
                ))}
            </select>
            <select>
                {talukas.map((taluka) => (
                    <option key={taluka.id} value={taluka.id}>{taluka.name}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownComponent;
