import React from 'react';

function DownloadLink({streamBytes }) {
  async function downloadPDF() {
    try {
      // Read the ReadStream and convert it into binary data
      const pdfBlob = new Blob([await streamBytes.arrayBuffer()], {
        type: 'application/pdf',
      });

      // Create a temporary download link
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(pdfBlob);
      downloadLink.download = 'downloaded.pdf'; // Set the desired filename

      // Trigger a click event on the download link to initiate the download
      downloadLink.click();

      // Clean up the URL object to release resources
      URL.revokeObjectURL(downloadLink.href);
      window.location.reload();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  }

  return (
    <div>
      {/* component content here */}
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default DownloadLink;
