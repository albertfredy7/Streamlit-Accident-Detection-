const firebaseAdmin = require('firebase-admin');
const express = require('express');
const serviceAccount = require('D:\projects\MainProject\Streamlit-Accident-Detection-\Accident detection\ResqApp\serviceAccountKey.json');

// Initialize the Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
});

// Create an instance of the Express server
const app = express();

// Define a route for sending push notifications
app.post('/send-notification', (req, res) => {
  const { token, title, body } = req.body;

  // Construct the message object
  const message = {
    token: token,
    notification: {
      title: title,
      body: body,
    },
  };

  // Send the push notification
  firebaseAdmin.messaging().send(message)
    .then((response) => {
      console.log('Push notification sent:', response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error sending push notification:', error);
      res.sendStatus(500);
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
