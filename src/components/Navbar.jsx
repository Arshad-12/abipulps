import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Logo1.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Common link styles
  const linkStyles =
    "text-slate-gray px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 relative hover:text-orange-600 hover:border-t-2 hover:border-orange-600";
  const activeLinkStyles = "text-brand-blue font-bold";

  const mobileLinkStyles =
    "block text-slate-gray px-3 py-2 rounded-md text-base font-semibold transition-all duration-300 relative hover:text-orange-600 hover:border-t-2 hover:border-orange-600";

  return (
    <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-10" alt="Abi Pulps & Paper Logo" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `${linkStyles} ${isActive ? activeLinkStyles : ''}`}
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-slate-gray hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) => `${mobileLinkStyles} ${isActive ? activeLinkStyles : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => `${mobileLinkStyles} ${isActive ? activeLinkStyles : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${mobileLinkStyles} ${isActive ? activeLinkStyles : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
