// src/components/UploadForm.js
import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import './UploadForm.css';
import spinner from './spinner.svg';

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false); // Define uploadSuccess as a state variable
  const [ requestSent, setRequestSent] = useState(false); // To track request- response duration and render spinner/Loader

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
    setRequestSent(true);
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    // Send the file to the backend using fetch
    fetch('https://mern-pdf-extractor.onrender.com/upload-shared/upload-shared/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('File uploaded successfully');
          setUploadSuccess(true); // Set uploadSuccess to true on success
          setRequestSent(false); //To reset the state for next render
        } 
        else if (response.status === 400) {
          alert('Bad request: No file uploaded--400.');
          setUploadSuccess(false); // Set uploadSuccess to false on 400 error
          setRequestSent(false); //To reset the state for next render
        }
        else {
          alert('File upload failed');
          setUploadSuccess(false); // Set uploadSuccess to false on failure
          setRequestSent(false); //To reset the state for next render
        }
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        alert('An error occurred while uploading the file.');
        setUploadSuccess(false); // Set uploadSuccess to false on failure
        setRequestSent(false); //To reset the state for next render
      });
  };

  return (
    
    <div className='Form_container'>
     <h1>Pdf Extractor</h1>
     <p>
      An easy way to extract and separate PDF pages online.
     </p>
   {!uploadSuccess && (
     <> 
     <div className='Form_header'> 
            {requestSent ?(<object type="image/svg+xml" data={spinner} style={{height: "4em"}}></object>):(<></>)}
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
    <div className='Footer'> 
        <div>
            <h5>Separate PDF Pages in Two Clicks</h5>
            <p>
            Instantly divide your PDF into individual one-pagers, or extract specific pages to form a new PDF document. You can also add and extract pages from multiple PDFs.
            </p>
        </div>
        <div>
            <h5>Secure Online PDF Splitter</h5>
            <p>
              We have a privacy policy that explains exactly how important security and your privacy is to us. We delete all your files permanently from our servers one hour after upload.
            </p>
        </div>
        <div>
            <h5>Split PDF Pages on Any Platform</h5>
            <p>
            As a web application, you can split PDFs on all operating systems using the latest web browsers. It works on Windows, Mac, and Linux.
            </p>
        </div>
    </div>
    </>
    
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
