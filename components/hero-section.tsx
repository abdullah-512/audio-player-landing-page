'use client';

import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { PlayerCard } from './player-card';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-40" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium glow-text-blue">
              ✨ Premium Audio Experience
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent glow-text-blue">
                Immerse in Sound
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Experience crystal-clear audio with our advanced audio player. Stream unlimited music with lossless quality and cutting-edge visualization technology.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold flex items-center gap-2 glow-neon-blue hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Play className="w-5 h-5" />
              Start Listening
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 rounded-lg glass-strong text-foreground font-semibold hover:scale-105 hover:bg-muted/50 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { value: '50M+', label: 'Songs' },
              { value: '192kbps', label: 'Max Quality' },
              { value: '24/7', label: 'Streaming' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Player */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-sm">
            <PlayerCard />
          </div>
        </div>
      </div>
    </section>
  );
}
