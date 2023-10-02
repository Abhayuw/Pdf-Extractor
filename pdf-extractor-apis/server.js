const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
const serviceAccount = require('./service_account_key/pdf-extractor-5943b-firebase-adminsdk-6am1g-0f06943c40.json'); // path to the service account JSON file

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pdf-extractor-5943b-default-rtdb.firebaseio.com/', // Firebase project's database URL
});
// Define your protected routes and their middleware here
const { firebaseAuthMiddleware } = require('firebase-admin-auth');

// Import the route files
const uploadRoutes = require('./routes/protected-upload');
app.use('/upload-protected', uploadRoutes); // Define the base URL for the upload routes

const port = process.env.PORT || 3000;
// Allow requests from http://localhost:3001
app.use(cors({ origin: 'http://localhost:3001' }));
// Middleware for JSON parsing
app.use(express.json());


// Import routes
const uploadRoute = require('./routes/upload');
const retrieveSharedPDFRoute = require('./routes/retrieve');

// Use routes
app.use('/retrieve-pages', retrieveSharedPDFRoute); // Define the base URL for the new route
app.use('/upload-shared', uploadRoute)


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
