'use client';

import React, { useState } from 'react';
import { Music, Home, Library, Radio, Settings, User } from 'lucide-react';

export function SidebarNav() {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'library', label: 'Library', icon: Library },
    { id: 'radio', label: 'Radio', icon: Radio },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="glass-strong w-20 h-screen flex flex-col items-center justify-between py-8 border-r border-border fixed left-0 top-0">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-neon-blue">
          <Music className="w-6 h-6 text-primary-foreground" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  active === item.id
                    ? 'bg-primary/20 text-primary glow-neon-blue'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title={item.label}
              >
                <Icon className="w-6 h-6" />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Settings */}
      <button className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/10 transition-all duration-300">
        <Settings className="w-6 h-6" />
      </button>
    </div>
  );
}
