import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export const AccordionProvider = ({ children }) => {
  const [openFeatureId, setOpenFeatureId] = useState(null);

  const toggleFeature = (id) => {
    setOpenFeatureId((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openFeatureId, toggleFeature }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => useContext(AccordionContext);
