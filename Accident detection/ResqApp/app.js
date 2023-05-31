const admin = require('firebase-admin');

// Provide the path to your service account key JSON file
const serviceAccount = require('D:\projects\MainProject\Streamlit-Accident-Detection-\Accident detection\ResqApp\resqapp-97d1a-firebase-adminsdk-pinj7-b005b5f2d6.json');

// Initialize the app with the service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Access Firebase services using the admin SDK
// For example:
const firestore = admin.firestore();
const storage = admin.storage();
// ... other Firebase services

// Your server logic goes here
// You can use the initialized Firebase Admin SDK to perform operations such as sending push notifications, accessing the database, managing storage, etc.
