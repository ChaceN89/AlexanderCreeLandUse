/**
 * @file ColorBoxes.tsx
 * @module ColorBoxes
 * @desc React component to display a palette of theme colors using Tailwind CSS classes.
 * This component renders a set of color boxes to visually test the Tailwind theme colors.
 *
 * @component ColorBoxes
 * 
 * @requires react
 * @requires tailwindcss
 * 
 * @see {@link https://reactjs.org/docs/getting-started.html | React Documentation}
 * @see {@link https://tailwindcss.com/docs | Tailwind CSS Documentation}
 * 
 * @returns {JSX.Element} The rendered ColorBoxes component.
 * 
 * @example
 * <ColorBoxes />
 * 
 * @author Chace Nielson
 * @created 2024-07-26
 * @updated 2025-06-02
 * @since 2.1
 */

import React from 'react';
type ColorItem = {
  name: string;
  cssVar: string;
};

const ColorBoxes: React.FC = () => {
  const colors: ColorItem[] = [
    { name: 'Primary', cssVar: '--color-primary' },
    { name: 'Primary Alt', cssVar: '--color-primary-alt' },
    { name: 'Secondary', cssVar: '--color-secondary' },
    { name: 'Secondary Alt', cssVar: '--color-secondary-alt' },
    { name: 'Accent', cssVar: '--color-accent' },
    { name: 'Accent Alt', cssVar: '--color-accent-alt' },
    { name: 'Tertiary', cssVar: '--color-tertiary' },
    { name: 'Tertiary Alt', cssVar: '--color-tertiary-alt' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Color Palette</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {colors.map((color) => (
          <div
            key={color.name}
            className="rounded-lg p-4 text-sm font-medium shadow-md flex flex-col items-center justify-center h-28 border"
            style={{
              backgroundColor: `var(${color.cssVar})`,
              color: color.name.toLowerCase().includes('secondary') ? 'white' : 'black',
              borderColor: 'rgba(0,0,0,0.1)',
            }}
          >
            <p>{color.name}</p>
            <p className="text-xs opacity-70">{color.cssVar}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxes;
