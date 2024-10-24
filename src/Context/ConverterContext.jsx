import React, { createContext, useState } from "react";

export const ConverterContext = createContext();

const ConverterContextProvider = ({ children }) => {
    const [converterState, setConverterState] = useState("");


  const contextValues = {
    converterState,
    setConverterState,
  };

  return (
    <ConverterContext.Provider value={contextValues}>
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterContextProvider;
