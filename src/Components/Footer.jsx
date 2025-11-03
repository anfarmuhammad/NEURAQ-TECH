// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import NeuLOgo from '../assets/images/logo.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/career' },
      { label: 'Team', path: '/about#team' }
    ],
    products: [
      { label: 'Products', href: 'https://product.neuraq.in/' },
      { label: 'Smart Care App', href: 'https://care.neuraq.in/' },
      { label: 'Easy', href: 'https://online.neuraq.in/' },
      { label: 'Innovation', path: '/innovation' }
    ],
    resources: [
      { label: 'Support', path: '/contact' },
      { label: 'Community', path: '/about' },
      { label: 'Legal', path: '/legal' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
    { icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-black text-light relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={NeuLOgo} 
                alt="Neuraq Technologies" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-8 font-montserrat">
              Make your online identity
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-white font-semibold mb-6 font-orbitron uppercase tracking-wider">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                <ul className="space-y-3">
                  {items.map((item, index) => (
                    <li key={index}>
                      {item.path ? (
                        <Link
                          to={item.path}
                          className="text-gray-400 hover:text-primary transition-colors duration-300 font-montserrat hover:translate-x-1 transform block"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="text-gray-400 hover:text-primary transition-colors duration-300 font-montserrat hover:translate-x-1 transform block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Neuraq Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/legal" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/legal" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Binary Code Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden opacity-10">
        <div className="whitespace-nowrap animate-scroll-binary font-mono text-sm">
          01001110 01100101 01110101 01110010 01100001 01110001 00100000 01010100 01100101 01100011 01101000 01101110 01101111 01101100 01101111 01100111 01101001 01100101 01110011
        </div>
      </div>
    </footer>
  );
};