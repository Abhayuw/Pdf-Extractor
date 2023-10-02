const express = require('express');
const router = express.Router();
const checkIfAuthenticated = require('../middlewares/firebase-auth-middleware');

const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// Protected route for uploading PDFs
router.post('/upload-protected',checkIfAuthenticated, (req, res) => {
  // Get the authenticated user's UID from the request object
  const uid = req.auth.uid;

  // Define the base directory where PDFs will be stored (adjust as needed)
  const baseDirectory = '../uploads';

  // Create a unique directory for the user based on their UID
  const userDirectory = path.join(baseDirectory, uid);

  // Ensure the user's directory exists; create it if it doesn't
  if (!fs.existsSync(userDirectory)) {
    fs.mkdirSync(userDirectory, { recursive: true });
  }

  // Your logic for uploading PDFs here
  // req.file contains the uploaded PDF file

  // Generate a unique filename for the PDF (e.g., based on timestamp)
  const timestamp = Date.now();
  const pdfFilename = `${timestamp}.pdf`;

  // Define the full path to save the PDF file
  const pdfFilePath = path.join(userDirectory, pdfFilename);

  // Sample code to save the uploaded PDF file
  fs.writeFileSync(pdfFilePath, req.file.buffer);

  // Respond with a success message
  res.json({ message: 'PDF uploaded and saved successfully' });
});

module.exports = router;
