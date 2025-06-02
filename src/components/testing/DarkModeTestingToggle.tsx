/**
 * @file DarkModeTestingToggle.tsx
 * @module DarkModeTestingToggle
 * @description A development-only component for toggling between dark and light modes in the application.
 * This component checks the environment variable `VITE_ENVIRONMENT` to ensure it only renders in development mode.
 * It updates the `dark` class on the HTML root element to apply the appropriate theme styles.
 *
 * @notes
 * - Adds or removes the `dark` class on the HTML root element (`<html>`).
 * - Only renders when `VITE_ENVIRONMENT` is set to 'development'.
 * - Displays a button in the top-right corner of the screen with icons for light mode (☀️) and dark mode (🌙).
 * 
 * @author Chace Nielson
 * @since 1.0
 * @created 2025-01-08
 * @updated 2025-06-02
 */

import React, { useState, useEffect } from 'react';

const DarkModeTestingToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const isDevelopment = import.meta.env.VITE_ENVIRONMENT === 'development';

  const toggleDarkMode = () => {
    const html = document.documentElement;
    setIsDarkMode((prev) => {
      if (!prev) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      return !prev;
    });
  };

  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  if (!isDevelopment) return null;

  return (
    <div
      onClick={toggleDarkMode}
      className={`cursor-pointer opacity-30 fixed top-32 right-0 m-1 p-1 z-[100] font-mono text-white h-10 w-10 rounded-full flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-700'
      }`}
    >
      {isDarkMode ? '🌙' : '☀️'}
    </div>
  );
};

export default DarkModeTestingToggle;
