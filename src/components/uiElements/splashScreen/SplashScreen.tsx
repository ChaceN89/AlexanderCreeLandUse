/**
 * @file SplashScreen.tsx
 * @module SplashScreen
 * @desc Displays a loading state with a logo while the site content is being loaded, or an error message.
 *
 * @author Chace Nielson
 * @created Mar 15, 2025
 * @updated Jun 2, 2025 by Chace Nielson
 */

import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import HexSeparator from '../hexSparator/HexSeparator';
import PercentLoader from './PercentLoader'
import './SplashScreen.styles.css';

interface ErrorInfo {
  errorText: string;
  errorLocation?: string;
}

interface SplashScreenProps {
  loadPercent?: number;
  transitionOut?: boolean;
  errorInfo?: ErrorInfo | null;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  loadPercent = 0,
  transitionOut = false,
  errorInfo = null,
}) => {
  return (
    <div
      className={`
        overflow-hidden fixed inset-0 z-50 flex flex-col justify-between min-h-screen bg-accent
        ${transitionOut ? 'splash-exit' : ''}
      `}
    >
      {/* SVG Filter for Noise */}
      <div
        className="absolute inset-0 pointer-events-none z-[0]"
        style={{
          filter: 'url(#noiseFilter)',
          mixBlendMode: 'multiply',
          opacity: 0.7,
        }}
      />

      {/* 🔵 Top Separator - high */}
      <div className="z-[30]">
        <HexSeparator rows={6} hexClass="bg-black opacity-65" bottom={false} />
      </div>

      {/* 🟢 Main Content - medium */}
      <div className="z-[10] flex flex-col items-center justify-center flex-grow">
        <img
          src="/logos/my-logos/logoFull-tight.png"
          alt="Site Logo"
          className="min-w-[300px] overflow-hidden px-4"
        />
        <div className="text-xl text-center">
          {errorInfo ? (
            <ErrorDisplay errorInfo={errorInfo} />
          ) : (
            <PercentLoader loadPercent={loadPercent} />
          )}
        </div>
      </div>

      {/* 🔵 Bottom Separator - high */}
      <div className="z-[30]">
        <HexSeparator rows={6} hexClass="bg-black opacity-65" bottom={true} />
      </div>
    </div>
  );
};

export default SplashScreen;

// 🔺 Error message block shown when `errorInfo` is passed
interface ErrorDisplayProps {
  errorInfo: ErrorInfo;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errorInfo }) => (
  <div className="flex flex-col items-center">
    <FiAlertCircle className="w-12 h-12 mb-2" />
    <span>{errorInfo.errorText}</span>
    {errorInfo.errorLocation && (
      <span className="text-sm mt-2">📍 {errorInfo.errorLocation}</span>
    )}
  </div>
);
