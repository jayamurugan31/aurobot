import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`sticky top-0 z-10 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
        
        <div className="text-sm text-neutral-700">
          <span className="hidden md:inline">Your Health &amp; Wellness Guide</span>
        </div>
      </div>
    </header>
  );
};

export default Header;