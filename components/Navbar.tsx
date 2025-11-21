import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { APP_NAME, PLAY_STORE_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-lg text-white">
            <MessageCircle size={24} fill="currentColor" className="stroke-emerald-700" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            {APP_NAME}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How it Works</a>
          <a href="#reviews" className="hover:text-emerald-600 transition-colors">Reviews</a>
        </div>

        <a 
          href={PLAY_STORE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30"
        >
          Download App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
