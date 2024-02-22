import { database, statesRef, districtsRef, talukasRef } from './firebase';
import { getDatabase, ref, set, get, query, orderByChild, equalTo } from "firebase/database";

// Function to fetch states from Firebase Realtime Database

export const fetchStates = async () => {
    try {
        const snapshot = await get(statesRef);
        const states = [];
        snapshot.forEach((childSnapshot) => {
            states.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });

        return states;
    } catch (error) {
        console.error('Error fetching states:', error);
        throw error;
    }
};



// Function to fetch districts from Firebase Realtime Database based on stateId
export const fetchDistricts = async (stateId) => {
    try {
        //const districtsRef = ref(database, 'districts').orderByChild('stateId').equalTo(stateId);
        const queryRef = query(districtsRef, orderByChild('stateId'), equalTo(stateId));
        const snapshot = await get(queryRef);
        const districts = [];
        snapshot.forEach((childSnapshot) => {
            districts.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        console.log('Fetched district:', districts);
        return districts;
    } catch (error) {
        console.error('Error fetching district:', error);
        throw error;
    }

};

// Function to fetch talukas from Firebase Realtime Database based on districtId
export const fetchTalukas = async (districtId) => {
    try {
        //const talukasRef = database.ref('talukas').orderByChild('districtId').equalTo(districtId);
        const queryRefd = query(talukasRef, orderByChild('districtId'), equalTo(districtId));
        const snapshot = await get(queryRefd);
        const talukas = [];
        snapshot.forEach((childSnapshot) => {
            talukas.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        return talukas;
    } catch (error) {
        console.error('Error fetching taulkas:', error);
        throw error;
    }

};


