import React, { useContext } from 'react';
import { PageContext } from '../context/PageContextProvider';
import './PageSelection.css'

function PageSelection({ pageNum }) {
const { selectedPages, setSelectedPages } = useContext(PageContext);
  
  const handlePageSelection = () => {
    setSelectedPages((prevSelectedPages) => {
      if (prevSelectedPages.includes(pageNum)) {
        // If the page is already selected, remove it from the array
        return prevSelectedPages.filter((page) => page !== pageNum);
      } else {
        // If the page is not selected, add it to the array
        return [...prevSelectedPages, pageNum];
      }
    });
  };

  return (
    <div className="page-selection">
      <label>
        <input
          type="checkbox"
          checked={selectedPages.includes(pageNum)}
          onChange={handlePageSelection}
        />
        Page {pageNum}
      </label>
      {/* Display selected pages as an array */ console.log()}
      
    </div>
  );
}

export default PageSelection;
