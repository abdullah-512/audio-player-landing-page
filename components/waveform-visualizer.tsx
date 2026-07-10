'use client';

import React from 'react';

export function WaveformVisualizer() {
  return (
    <div className="flex items-end justify-center gap-1 h-32">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`wave-bar rounded-full transition-all duration-300`}
          style={{
            width: '6px',
            height: `${40 + Math.random() * 60}px`,
            background: i % 2 === 0 
              ? 'linear-gradient(to top, #00d9ff, #9d4edd)'
              : 'linear-gradient(to top, #9d4edd, #00d9ff)',
            boxShadow: i % 2 === 0 
              ? '0 0 10px rgba(0, 217, 255, 0.8)'
              : '0 0 10px rgba(157, 78, 221, 0.8)'
          }}
        />
      ))}
    </div>
  );
}
