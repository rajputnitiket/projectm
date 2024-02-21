import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatesAsync, fetchDistrictsAsync, fetchTalukasAsync } from '../redux/StateSlice';

const DropdownComponent = () => {
    const states = useSelector((state) => state.states);
    const districts = useSelector((state) => state.districts);
    const talukas = useSelector((state) => state.talukas);
    console.log('districts:', districts);
    const dispatch = useDispatch();
    const [selectValues, setSelectValues] = useState({
        select1: '',
        select2: '',
        select3: ''
    });

    useEffect(() => {
        dispatch(fetchStatesAsync());
    }, [dispatch]);

    useEffect(() => {
        // Update selectValues when states change
        if (states.length > 0) {
            setSelectValues((prevValues) => ({
                ...prevValues,
                select1: states[0].id // Set the first state as the default value
            }));
        }
    }, [states]);
    const handleStateChange = (stateId) => {
        console.log('hii', stateId);
        dispatch(fetchDistrictsAsync(stateId));
        setSelectValues({ ...selectValues, select1: stateId, select2: '', select3: '' });
    };

    const handleDistrictChange = (districtId) => {
        dispatch(fetchTalukasAsync(districtId));
        setSelectValues({ ...selectValues, select2: districtId, select3: '' });
    };

    const handleTalukaChange = (talukaId) => {
        setSelectValues({ ...selectValues, select3: talukaId });
    };

    return (
        <>
            <div>
                <select onChange={(e) => handleStateChange(e.target.value)} onClick={console.log(states)}>
                    {states.states && states.states.length > 0 && states.states.map((state) => (

                        <option key={state.id} value={state.id}>{state.name}</option>
                    ))}

                </select>
                <select onChange={(e) => handleDistrictChange(e.target.value)} >
                    {districts && districts.length > 0 && districts.map((district) => (
                        <option key={district.id} value={district.id}>{district.name}</option>
                    ))}
                </select>
                <select onChange={(e) => handleTalukaChange(e.target.value)}>
                    {talukas && talukas.length > 0 && talukas.map((taluka) => (
                        <option key={taluka.id} value={taluka.id}>{taluka.name}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default DropdownComponent;
