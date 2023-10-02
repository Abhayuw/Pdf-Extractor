import React, { createContext, useState } from 'react';

// Step 1: Create a React context
const PageContext = createContext();

// Step 2: Define state within the context
const PageContextProvider = ({ children }) => {
  // Define the state variable and its setter function
  const [selectedPages, setSelectedPages] = useState([]);

  // You can add other global state variables here if needed

  return (
    // Step 3: Provide the context with the state and setter function
    <PageContext.Provider value={{ selectedPages, setSelectedPages }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageContextProvider };
