import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NeurLogo from "../assets/images/logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/innovation", label: "Innovations" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#0a0a0ac7] shadow-lg py-3 backdrop-blur-md"
          : "bg-transparent py-4"
        }`}
      aria-label="Primary Navigation"
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" aria-label="Neuraq Technologies Home">
            <img
              src={NeurLogo}
              alt="Neuraq Technologies Logo"
              className="w-[150px] object-contain"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative text-[13px] font-semibold font-orbitron transition-all duration-300 ${isActive(path)
                  ? "text-white"
                  : "text-white hover:text-[#00FF9C]"
                }`}
              aria-current={isActive(path) ? "page" : undefined}
            >
              {label}
              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${isActive(path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="relative inline-block px-6 py-2 font-semibold font-orbitron rounded-full transition-transform duration-300 bg-gradient-to-r from-[#00FF9C] to-[#00FFF0] text-black hover:scale-[1.05] shadow-[0_0_15px_rgba(0,255,160,0.5)]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0af2] backdrop-blur-lg border-t border-gray-800"
        >
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center py-3 rounded-lg transition-colors duration-300 ${isActive(path)
                    ? "text-[#00FF9C] bg-white/10"
                    : "text-white hover:text-[#00FF9C]"
                  }`}
                aria-current={isActive(path) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-[#00FF9C] to-[#00FFF0] text-black font-semibold py-3 rounded-full text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
