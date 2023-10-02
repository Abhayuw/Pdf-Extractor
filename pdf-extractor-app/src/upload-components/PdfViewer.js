import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PageSelection from './PageSelection';
import GeneratePdf from './GeneratePdf';
import './PdfViewer.css'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({ pdfFile }) {
  const [numOfPages, setNumOfPages] = useState(null);
 
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumOfPages(numPages);
  };

  const thumbnails = [];
  for (let i= 1; i <= numOfPages; i ++) {
    thumbnails.push(
      
      <div key={`page-${i}`} className="thumbnail-container">
        <PageSelection pageNum={i} /> {/* Pass the page number as a prop */}
       <Page
          className="pdf-thumbnail"
          renderMode="svg"
          pageNumber={i}
          width={250}
          />
        </div>
      
    );
  }

  return (
    <>
    <GeneratePdf uploadFile={pdfFile}/>
    <Document className="pdf-container" file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
      {thumbnails}
    </Document>
    </>
    
  );
}

export default PdfViewer;
