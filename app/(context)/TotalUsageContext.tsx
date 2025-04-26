'use client'

import React, { createContext, useState, useContext } from 'react';

type TotalUsageContextType = [number, React.Dispatch<React.SetStateAction<number>>];

export const TotalUsageContext = createContext<TotalUsageContextType>([0, () => {}]);

export function TotalUsageProvider({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState(0);

  return (
    <TotalUsageContext.Provider value={[totalUsage, setTotalUsage]}>
      {children}
    </TotalUsageContext.Provider>
  );
}

export const useTotalUsage = () => useContext(TotalUsageContext);
