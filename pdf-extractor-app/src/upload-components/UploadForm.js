// src/components/UploadForm.js
import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import './UploadForm.css';

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false); // Define uploadSuccess as a state variable
  

   const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setUploadSuccess(false); // Reset uploadSuccess when a new file is selected
      
    
    } else {
      alert('Please select a valid PDF file.');
    }
  };
  
  const handleUpload = () => {
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    // Send the file to the backend using fetch
    fetch('http://localhost:3000/upload-shared/upload-shared/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('File uploaded successfully');
          setUploadSuccess(true); // Set uploadSuccess to true on success
        } 
        else if (response.status === 400) {
          alert('Bad request: No file uploaded--400.');
          setUploadSuccess(false); // Set uploadSuccess to false on 400 error
        }
        else {
          alert('File upload failed');
          setUploadSuccess(false); // Set uploadSuccess to false on failure
        }
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        alert('An error occurred while uploading the file.');
        setUploadSuccess(false); // Set uploadSuccess to false on failure
      });
  };

  return (
    <div className='Form_container'>
     <h2>Pdf Extractor</h2>
   {!uploadSuccess && (
     <div className='Form_header'>  
            <label for='Choose_file' className='Choose_file_label'>
            {selectedFile ?(<img width="60" height="60" src="https://img.icons8.com/dotty/80/pdf-2.png" alt="pdf-2"/>):(<></>)}
             Select file
            </label>
            <input id='Choose_file'
              type="file"
              name="pdfFile"
              accept=".pdf"
              onChange={handleFileChange}
              />
            <input type="submit" value="Upload"onClick={handleUpload} />
      
    </div>
   )}
      {uploadSuccess && selectedFile && (
        <>
        
            <div>Selected File: {selectedFile.name || 'No file name available'}</div>
            <div className='Form_middle'>
              <PdfViewer pdfFile={selectedFile} />
            </div>
        
        </>
      )}
    </div>
  );
  
}

export default UploadForm;
