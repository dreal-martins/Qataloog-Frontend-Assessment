import React, { createContext, useState, useContext } from "react";

const OverviewContext = createContext();

export const OverviewProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <OverviewContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </OverviewContext.Provider>
  );
};

export const useOverviewContext = () => {
  const context = useContext(OverviewContext);
  if (!context) {
    throw new Error("useOverviewContext must be used within a SidebarProvider");
  }
  return context;
};
