import React, { useState, useEffect } from 'react';
import { useToggle } from "./ToggleContext";

export const ToggleButton = () => {
    const { isToggled, toggle } = useToggle();

  const [alertBox, toggleAlertBox] = useState<boolean>(false);

  return (
    <button 
    onClick={() => {
        toggle()
        localStorage.setItem("toggleAlertBox", isToggled.toString());
    }}  
      className={`px-4 py-2 rounded-full focus:outline-none transition-colors ${
        isToggled ? 'bg-gray-300 text-black' : 'bg-green-500 text-white'
      }`}
    >
      {isToggled ? 'Disabled' : 'Enabled'}
    </button>
  );
};

export default ToggleButton

