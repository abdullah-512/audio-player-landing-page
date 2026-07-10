'use client';

import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';
import { WaveformVisualizer } from './waveform-visualizer';

export function PlayerCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="glass-strong rounded-3xl p-8 max-w-md w-full space-y-6 glow-neon-blue">
      {/* Album Art */}
      <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <WaveformVisualizer />
        </div>
      </div>

      {/* Track Info */}
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold text-foreground glow-text-blue">Sonic Horizon</h2>
        <p className="text-muted-foreground">Neon Dreams • 3:42</p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="w-full h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-primary to-secondary rounded-full glow-neon-blue" />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>2:28</span>
          <span>3:42</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`p-3 rounded-lg transition-all duration-300 ${
            isFavorite
              ? 'bg-accent/20 text-accent glow-neon-blue'
              : 'bg-muted/30 text-muted-foreground hover:text-accent'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        <div className="flex items-center gap-4">
          <button className="p-3 rounded-lg bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300">
            <SkipBack className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-neon-blue hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>

          <button className="p-3 rounded-lg bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        <button className="p-3 rounded-lg bg-muted/30 text-muted-foreground hover:text-foreground transition-all duration-300">
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="w-full h-1 bg-border rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-gradient-to-r from-secondary to-primary rounded-full glow-neon-purple" />
      </div>
    </div>
  );
}
