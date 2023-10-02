const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { PDFDocument } = require('pdf-lib'); // Import pdf-lib for PDF processing
const fs = require('fs/promises'); // Use fs/promises for file operations (async)

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/shared/'); // Define the destination folder for shared uploaded files
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname; // Create a unique filename
    cb(null, fileName);
  },
});
const upload = multer({ storage });


router.post('/upload-shared', upload.single('pdfFile'), async (req, res) => {
  // The uploaded file is available as req.file
  console.log('Received a POST request to /upload-shared');
  console.log(req.file)

  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
 try {
  res.status(200).json({ message: 'File successfully saved on the server' });
 } catch (error) {
    // Handle processing or file saving errors
    console.error('Error processing PDF:', error);
    res.status(500).json({ error: 'An error occurred while processing the PDF.' });
  }
});

module.exports = router;
