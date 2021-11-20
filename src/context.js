import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reloadPage = () => {
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <AppContext.Provider value={{ isSubmitted, setIsSubmitted, reloadPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
