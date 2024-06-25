"use client";

import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an activeSectionContextProvider"
    );
  }

  return context;
}
