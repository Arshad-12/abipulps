import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyles = "text-slate-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300";
  const activeLinkStyles = "text-brand-blue font-bold";

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-slate-gray tracking-tight">
              Abi Pulps & Paper
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => isActive ? activeLinkStyles : linkStyles}>Home</NavLink>
              
              {/* CHANGE THIS LINE */}
              <NavLink to="/projects" className={({ isActive }) => isActive ? activeLinkStyles : linkStyles}>Products</NavLink>
              
              <NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkStyles : linkStyles}>Contact Us</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}