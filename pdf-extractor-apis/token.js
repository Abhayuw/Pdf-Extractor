const admin = require('firebase-admin');
const serviceAccount = require('./service_account_key/pdf-extractor-5943b-firebase-adminsdk-6am1g-0f06943c40.json'); // path to the service account JSON file
// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://pdf-extractor-5943b-default-rtdb.firebaseio.com/', // Firebase project's database URL
  });

const uid = 'dcz8rKha1BPPR2zfnwj2wWGhrF22'; // Replace with your UID

// Generate a custom token for the specified UID
admin
  .auth()
  .createCustomToken(uid)
  .then((customToken) => {
    console.log('Custom Token:', customToken);
  })
  .catch((error) => {
    console.log('Error creating custom token:', error);
  });
