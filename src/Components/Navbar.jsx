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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0ac7] shadow-lg py-3 backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-8 flex flex-row items-center justify-between">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={NeurLogo}
              alt="Neuraq Technologies"
              className="w-[150px] object-contain"
            />
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`text-white text-[13px] font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-white"
                    : "hover:text-[#00FF9C]"
                }`}
              >
                {item.label}
              </Link>

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                  isActive(item.path)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </div>
          ))}
        </div>

        {/* Right - Contact Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="relative inline-block px-6 py-2 text-black font-semibold rounded-full transition-all duration-300 bg-gradient-to-r from-[#00FF9C] to-[#00FFF0] hover:scale-[1.05] shadow-[0_0_15px_rgba(0,255,160,0.5)]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0af2] backdrop-blur-lg border-t border-gray-800">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-[#00FF9C] bg-white/10"
                    : "text-white hover:text-[#00FF9C]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-[#00FF9C] to-[#00FFF0] text-black font-semibold py-3 rounded-full"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
