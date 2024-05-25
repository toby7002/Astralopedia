import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext({
    isToggled: false,
    toggle: () => {},
});

export const ToggleProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled((prev) => !prev);

  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);