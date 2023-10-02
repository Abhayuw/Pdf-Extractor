import React, { useContext,useState } from 'react';
import DownloadLink from './DownloadLink';
import { PageContext } from '../context/PageContextProvider';
import './GeneratePdf.css'


function GeneratePdf({uploadFile}) {
  // Access globalVar from the context
  const { selectedPages } = useContext(PageContext);
  const [extractedPdfBytes, setExtractedPdfBytes] = useState(null); 
 
  // Function to handle the click event
 const handleClick = () => {
    // Create a comma-separated string of selected pages
    const pageNumbers = selectedPages.join(',');
    // Create the URL with query parameters
    const apiUrl =`http://localhost:3000/retrieve-pages/retrieve-pages?filename=${uploadFile.name}&pageNumbers=${pageNumbers}`;
    console.log(apiUrl)
    console.log(uploadFile.name)
   // Make the GET request
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response;
      })
      .then(data => {
        // Handle the response data as needed
        console.log("This is resolved promise Data",data);
        setExtractedPdfBytes(data); // Updates the state with the PDF bytes
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  
// Use globalVar as needed
  return(<>
         {extractedPdfBytes !== null && (
          <DownloadLink streamBytes={extractedPdfBytes} />
         )}
         <div className='page_no_display'>Selected Pages-[{selectedPages.join(', ')}]</div>
         <div className='Generate_btn'> 
             <button onClick ={handleClick}>Generate new Pdf</button>
         </div>
         </>
  );
}

export default GeneratePdf;