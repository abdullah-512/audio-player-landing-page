'use client';

import React from 'react';
import { Music, MessageSquare, Share2, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass-strong border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Music className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">SoundWave</span>
            </div>
            <p className="text-sm text-muted-foreground">Premium audio streaming for the discerning listener.</p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Cookies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">License</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">© 2026 SoundWave. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/30 transition-all duration-300" aria-label="GitHub">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/30 transition-all duration-300" aria-label="Twitter">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/30 transition-all duration-300" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
