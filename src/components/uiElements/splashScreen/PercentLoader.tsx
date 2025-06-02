/**
 * @file PercentLoader.tsx
 * @module UI/PercentLoader
 * @desc Displays a horizontal loading indicator with a percentage label.
 *       Visually shows load progress using two flexible bars on either side of a numeric label.
 *
 * @features
 * - Symmetrical loading bar animation using flex-based scaling
 * - Displays percentage text at center
 * - Minimum visible fill at 0% to avoid collapse
 *
 * @example
 * <PercentLoader loadPercent={75} />
 *
 * @author Chace Nielson
 * @created May 23, 2025
 * @updated Jun 2, 2025
 */

import React from 'react';

interface PercentLoaderProps {
  loadPercent: number;
}

const PercentLoader: React.FC<PercentLoaderProps> = ({ loadPercent }) => {
  const percentText = `${loadPercent}%`;

  return (
    <div className="flex items-center justify-center gap-2 px-4 w-screen">
      {/* Left Bar */}
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full min-w-1.5"
        style={{ flex: loadPercent / 200 }}
      />

      {/* Center Label */}
      <h3 className="whitespace-nowrap text-lg font-medium w-24 text-secondary text-center">
        {percentText}
      </h3>

      {/* Right Bar */}
      <div
        className="h-[7px] bg-secondary transition-all duration-300 w-full rounded-full min-w-1.5"
        style={{ flex: loadPercent / 200 }}
      />
    </div>
  );
};

export default PercentLoader;
