const express = require('express');
const { PDFDocument } = require('pdf-lib');
const fs_stream = require('fs');
const fs = require('fs/promises');
const path = require('path');
const { log } = require('console');

const router = express.Router();

router.get('/retrieve-pages', async (req, res) => {
  console.log("recieved a get request at /retrieve-pages")
  try {
    // Step 3: Get the user-provided filename from the query parameter
    const requestedFileName = req.query.filename;

    if (!requestedFileName || !requestedFileName.endsWith('.pdf')) {
      return res.status(400).json({ error: 'Invalid or missing filename in the query parameter.' });
    }

    // Step 4: Construct the full path to the requested PDF file
    const currentDirectory = process.cwd();
    const pdfFilePath = path.join(currentDirectory, 'uploads', 'shared', requestedFileName);
    
    // Step 5: Load the requested PDF file into a pdf-lib document
    const pdfBuffer = await fs.readFile(pdfFilePath);
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    

    // Step 6: Extract the requested pages based on user input
    const pageNumbers = req.query.pageNumbers.split(',').map(Number);//split the pageNumbers query parameter into an array
    const extractedPdfDoc = await PDFDocument.create();
    
    for (const pageNumber of pageNumbers) {
      // Ensure that the page number is within a valid range
      if (pageNumber >= 1 && pageNumber <= pdfDoc.getPageCount()) {
        // Copy the page from the original PDF to the new document
        const [copiedPage] = await extractedPdfDoc.copyPages(pdfDoc, [pageNumber - 1]);
        extractedPdfDoc.addPage(copiedPage);
      } else {
        // Handle invalid page numbers
        return res.status(400).json({ error: 'Invalid page number(s) provided.' });
      }
    }
    
    // Step 7: Serialize the extracted pages as PDF bytes
    const extractedPdfBytes = await extractedPdfDoc.save();
    
    
    await fs.writeFile( pdfFilePath, extractedPdfBytes);
    //console.log(`Extracted PDF saved to: ${pdfFilePath}`);
    // Step 8: Send the extracted pages as a PDF response
    const newFs =fs_stream.createReadStream(pdfFilePath)
    res.setHeader('Content-Length', extractedPdfBytes.length);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
    newFs.pipe(res);
    //res.send(extractedPdfBytes);
    //console.log(extractedPdfBytes);
    // Step : Delete the file from the server
    fs.unlink(pdfFilePath, (err => {
      if (err) console.log(err);
      else {
        console.log("Stream file Deleted");
      }}))

  } catch (error) {
    // Step 9: Error handling
    console.error('Error retrieving pages:', error);
    res.status(500).json({ error: 'An error occurred while retrieving pages.' });
  }
});

// Export the router for use in your Express application
module.exports = router;
