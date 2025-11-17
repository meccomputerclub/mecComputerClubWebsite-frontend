"use client";

import React, { createContext, useContext, useState } from 'react';

/**
 * BLACK FRIDAY CAMPAIGN CONTROL
 * 
 * To enable/disable the Black Friday campaign:
 * 1. Open this file: lib/BlackFridayContext.tsx
 * 2. Change MANUAL_BLACK_FRIDAY_STATE to true (enable) or false (disable)
 * 3. Save the file
 * 
 * When enabled:
 * - BlackFridayBar appears under header
 * - BlackFridayHero replaces default hero
 * - /offer/blackfriday page is accessible
 * 
 * When disabled:
 * - All Black Friday elements are hidden
 * - Default hero section is shown
 * - /offer/blackfriday redirects to home
 */

interface BlackFridayContextType {
  isBlackFridayActive: boolean;
  toggleBlackFriday: () => void;
  setBlackFridayActive: (active: boolean) => void;
}

const BlackFridayContext = createContext<BlackFridayContextType | undefined>(undefined);

export const BlackFridayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // MANUAL CONTROL: Change this value to true/false to enable/disable Black Friday campaign
  const MANUAL_BLACK_FRIDAY_STATE = true; // Set to true to enable Black Friday campaign
  
  const [isBlackFridayActive, setIsBlackFridayActive] = useState(MANUAL_BLACK_FRIDAY_STATE);

  const toggleBlackFriday = () => {
    setIsBlackFridayActive(prev => !prev);
  };

  const setBlackFridayActive = (active: boolean) => {
    setIsBlackFridayActive(active);
  };

  return (
    <BlackFridayContext.Provider value={{
      isBlackFridayActive,
      toggleBlackFriday,
      setBlackFridayActive
    }}>
      {children}
    </BlackFridayContext.Provider>
  );
};

export const useBlackFriday = () => {
  const context = useContext(BlackFridayContext);
  if (context === undefined) {
    throw new Error('useBlackFriday must be used within a BlackFridayProvider');
  }
  return context;
};
