'use client';

import React from 'react';
import { Zap, Radio, Headphones, BarChart3, Shield, Infinity } from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: 'Ultra HD Audio',
      description: '320kbps lossless streaming',
      color: 'from-primary to-secondary',
    },
    {
      icon: Radio,
      title: 'Live Radio',
      description: 'Thousands of stations',
      color: 'from-secondary to-accent',
    },
    {
      icon: Headphones,
      title: 'Immersive Sound',
      description: 'Spatial audio technology',
      color: 'from-accent to-primary',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Track your listening',
      color: 'from-primary to-accent',
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'End-to-end encryption',
      color: 'from-secondary to-primary',
    },
    {
      icon: Infinity,
      title: 'Unlimited Skips',
      description: 'No restrictions ever',
      color: 'from-accent to-secondary',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <div
            key={idx}
            className="glass rounded-2xl p-6 space-y-4 group hover:glow-neon-blue transition-all duration-500 cursor-pointer hover:scale-105"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
