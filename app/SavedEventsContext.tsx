"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SavedEventsContextType = {
  savedEventIds: number[];
  toggleSavedEvent: (id: number) => void;
};

const SavedEventsContext = createContext<SavedEventsContextType | undefined>(
  undefined
);

export function SavedEventsProvider({ children }: { children: ReactNode }) {
  const [savedEventIds, setSavedEventIds] = useState<number[]>([]);

  const toggleSavedEvent = (id: number) => {
    setSavedEventIds((previous) =>
      previous.includes(id)
        ? previous.filter((eventId) => eventId !== id)
        : [...previous, id]
    );
  };

  return (
    <SavedEventsContext.Provider value={{ savedEventIds, toggleSavedEvent }}>
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  const context = useContext(SavedEventsContext);

  if (!context) {
    throw new Error("useSavedEvents must be used within SavedEventsProvider");
  }

  return context;
}