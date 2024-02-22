import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatesAsync, fetchDistrictsAsync, fetchTalukasAsync } from '../redux/StateSlice';
import { setSelectValue } from '../redux/selectSlice';

const DropdownComponent = () => {
    const states = useSelector((state) => state.states);
    const districts = useSelector((state) => state.states.districts);
    const talukas = useSelector((state) => state.states.talukas);
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
        if (states.length > 0) {
            setSelectValues((prevValues) => ({
                ...prevValues,
                select1: states[0].id
            }));
        }
    }, [states]);

    const handleStateChange = (stateId) => {
        dispatch(fetchDistrictsAsync(stateId));
        setSelectValues({ ...selectValues, select1: stateId, select2: '', select3: '' });
        dispatch(setSelectValue({ select1: stateId, select2: '', select3: '' }));
    };

    const handleDistrictChange = (districtId) => {
        dispatch(fetchTalukasAsync(districtId));
        setSelectValues({ ...selectValues, select2: districtId, select3: '' });
        dispatch(setSelectValue({ select1: selectValues.select1, select2: districtId, select3: '' }));
    };

    const handleTalukaChange = (talukaId) => {
        setSelectValues({ ...selectValues, select3: talukaId });
        dispatch(setSelectValue({ select1: selectValues.select1, select2: selectValues.select2, select3: talukaId }));
    };

    return (
        <div className=' col-lg-12 form-group-sl'>
            <div>
                <label>Select 1:</label>
                <select onChange={(e) => handleStateChange(e.target.value)} >
                    {states.states && states.states.length > 0 && states.states.map((state) => (
                        <option key={state.id} value={state.stateId}>{state.name}</option>
                    ))}
                </select>
            </div>
            <div className='form-group'>
                <label>Select 2:</label>
                <select onChange={(e) => handleDistrictChange(e.target.value)}>
                    {districts && districts.length > 0 && districts.map((district) => (
                        <option key={district.id} value={district.districtId}>{district.name}</option>
                    ))}
                </select>
            </div>
            <div className='form-group'>
                <label>Select 3:</label>
                <select onChange={(e) => handleTalukaChange(e.target.value)}>
                    {talukas && talukas.length > 0 && talukas.map((taluka) => (
                        <option key={taluka.id} value={taluka.name}>{taluka.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DropdownComponent;
