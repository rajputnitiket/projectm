// firebaseAPI.js
import { db } from './firebase';

// Function to fetch states from Firebase
export const fetchStates = async () => {
    const statesRef = db.collection('states');
    const snapshot = await statesRef.get();
    const states = [];
    snapshot.forEach((doc) => {
        states.push({ id: doc.id, ...doc.data() });
    });
    return states;
};

// Function to fetch districts from Firebase based on stateId
export const fetchDistricts = async (stateId) => {
    const districtsRef = db.collection('districts').where('stateId', '==', stateId);
    const snapshot = await districtsRef.get();
    const districts = [];
    snapshot.forEach((doc) => {
        districts.push({ id: doc.id, ...doc.data() });
    });
    return districts;
};

// Function to fetch talukas from Firebase based on districtId
export const fetchTalukas = async (districtId) => {
    const talukasRef = db.collection('talukas').where('districtId', '==', districtId);
    const snapshot = await talukasRef.get();
    const talukas = [];
    snapshot.forEach((doc) => {
        talukas.push({ id: doc.id, ...doc.data() });
    });
    return talukas;
};
