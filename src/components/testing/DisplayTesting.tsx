/**
 * @file DisplayTesting.tsx
 * @module DisplayTesting
 * @description A React component that conditionally renders development-only testing components.
 * This component checks the `VITE_ENVIRONMENT` environment variable to ensure it only renders in development mode.
 * It includes components for testing purposes, such as `TailwindBreakPoints` and `DarkModeTestingToggle`.
 * 
 * @notes
 * - This component ensures the `TailwindBreakPoints` and `DarkModeTestingToggle` components are only visible in development mode.
 * - Checks the `VITE_ENVIRONMENT` environment variable for the value `development`.
 * 
 * @author Chace Nielson
 * @since 1.0
 * @created 2025-01-22
 * @updated 2025-06-02
 */

import React from 'react';
import TailwindBreakPoints from './TailwindBreakPoints';
import DarkModeTestingToggle from './DarkModeTestingToggle';

const DisplayTesting: React.FC = () => {
  const isDevelopment = import.meta.env.VITE_ENVIRONMENT === 'development';

  if (!isDevelopment) return null;

  if (!document.title.startsWith('Dev | ')) {
    document.title = `Dev | ${document.title}`;
  }

  return (
    <>
      <TailwindBreakPoints />
      <DarkModeTestingToggle />
    </>
  );
};

export default DisplayTesting;
