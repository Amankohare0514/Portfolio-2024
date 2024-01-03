// DarkModeToggle.js
import React from 'react';
import { useDarkMode } from './DarkModeContext'
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  return (
    <div onClick={handleToggleDarkMode} className="cursor-pointer">
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-white" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-700" />
      )}
    </div>
  );
};

export default DarkModeToggle;
