import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("Page Not Found");

  return (
    <AppContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a SidebarProvider");
  }
  return context;
};
