import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <AppContext.Provider value={{ isSubmitted, setIsSubmitted }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
