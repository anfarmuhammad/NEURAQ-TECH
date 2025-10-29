// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/innovation', label: 'Innovations' },
    { path: '/contact', label: 'Contact', cta: true }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark/95 backdrop-blur-md py-4 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/images/logo.png" 
              alt="Neuraq Technologies" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 transition-all duration-300 ${
                    item.cta
                      ? 'bg-gradient-primary text-dark rounded-full px-6 font-semibold hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1'
                      : 'text-white hover:text-primary'
                  } ${isActive(item.path) && !item.cta ? 'text-primary' : ''}`}
                >
                  {item.label}
                  {!item.cta && isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-darker/95 backdrop-blur-md border-t border-gray-800">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-3 px-4 rounded-lg transition-all ${
                    item.cta
                      ? 'bg-gradient-primary text-dark font-semibold text-center'
                      : 'text-white hover:bg-white/10'
                  } ${isActive(item.path) && !item.cta ? 'text-primary bg-white/5' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tech Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><path d='M0,50 L100,50 M50,0 L50,100' stroke='rgba(57,255,20,0.1)' stroke-width='0.5'/></svg>")`,
            backgroundSize: '100px 100px'
          }}
        ></div>
        
        {/* Floating Tech Orbs */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-accent rounded-full blur-sm animate-pulse delay-1000"></div>
      </div>
    </nav>
  );
};