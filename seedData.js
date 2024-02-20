// seedData.js

const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://projectm-3f33b-default-rtdb.firebaseio.com' // Replace with your database URL
});

const db = admin.database();

const statesData = [
    { name: 'State 1' },
    { name: 'State 2' }
];

const districtsData = [
    { name: 'District 1', stateId: 'stateId1' },
    { name: 'District 2', stateId: 'stateId1' },
    // Add more districts here
];

const talukasData = [
    { name: 'Taluka 1', districtId: 'districtId1' },
    { name: 'Taluka 2', districtId: 'districtId1' },
    // Add more talukas here
];

const seedData = async () => {
    try {
        // Seed states
        const statesRef = db.ref('states');
        await Promise.all(statesData.map(state => statesRef.push(state)));

        // Seed districts
        const districtsRef = db.ref('districts');
        await Promise.all(districtsData.map(district => districtsRef.push(district)));

        // Seed talukas
        const talukasRef = db.ref('talukas');
        await Promise.all(talukasData.map(taluka => talukasRef.push(taluka)));

        console.log('Data seeded successfully!');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        process.exit(); // Terminate script after seeding data
    }
};

seedData();
