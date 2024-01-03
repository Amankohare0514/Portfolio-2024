// DarkModeToggle.js
import React from 'react';
import { useDarkMode } from './DarkModeContext'
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    // Additional logic if needed
  };

  return (
    <div onClick={handleToggleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-500" />
      )}
    </div>
  );
};

export default DarkModeToggle;
