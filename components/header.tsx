'use client';

import React from 'react';
import { Music, Menu } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="glass-strong border-b border-border sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-neon-blue">
            <Music className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            SoundWave
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300">
            Features
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors duration-300">
            Pricing
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:px-6 md:py-2 md:rounded-lg md:bg-muted/30 md:text-foreground md:hover:bg-muted/50 md:transition-all md:duration-300 md:inline-block">
            Sign In
          </button>
          <button className="hidden md:px-6 md:py-2 md:rounded-lg md:bg-gradient-to-r md:from-primary md:to-secondary md:text-primary-foreground md:hover:scale-105 md:hover:shadow-lg md:transition-all md:duration-300 md:inline-block glow-neon-blue">
            Get Started
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted/30 transition-all duration-300"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-strong border-t border-border p-4 space-y-3">
          <a href="#features" className="block px-4 py-2 text-foreground hover:text-primary transition-colors duration-300">
            Features
          </a>
          <a href="#pricing" className="block px-4 py-2 text-foreground hover:text-primary transition-colors duration-300">
            Pricing
          </a>
          <a href="#about" className="block px-4 py-2 text-foreground hover:text-primary transition-colors duration-300">
            About
          </a>
          <a href="#contact" className="block px-4 py-2 text-foreground hover:text-primary transition-colors duration-300">
            Contact
          </a>
          <button className="w-full px-4 py-2 rounded-lg bg-muted/30 text-foreground hover:bg-muted/50 transition-all duration-300">
            Sign In
          </button>
          <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-neon-blue">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
