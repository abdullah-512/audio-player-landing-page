'use client';

import React, { useMemo } from 'react';

export function WaveformVisualizer() {
  // Generate consistent random values that don't change between renders
  const bars = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      height: 40 + ((Math.sin(i * 0.5) + 1) / 2) * 60, // Use deterministic function instead of Math.random()
      isEven: i % 2 === 0,
    }));
  }, []);

  return (
    <div className="flex items-end justify-center gap-1 h-32">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`wave-bar rounded-full transition-all duration-300`}
          style={{
            width: '6px',
            height: `${bar.height}px`,
            background: bar.isEven 
              ? 'linear-gradient(to top, #00d9ff, #9d4edd)'
              : 'linear-gradient(to top, #9d4edd, #00d9ff)',
            boxShadow: bar.isEven 
              ? '0 0 10px rgba(0, 217, 255, 0.8)'
              : '0 0 10px rgba(157, 78, 221, 0.8)'
          }}
        />
      ))}
    </div>
  );
}
