import React, { useState, createContext } from 'react';

// create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {

  return (
    <SidebarContext.Provider >
    </SidebarContext.Provider>

  );
};


export default SidebarProvider;