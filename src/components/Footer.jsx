import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-gray text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-base text-gray-400">
          &copy; 2025 Abi Pulps & Paper Equipments. All Rights Reserved.
        </p>
        
        {/* --- Watermark Line Added Below --- */}
        <p className="mt-4 text-sm text-gray-500">
          Designed & Developed by 
          <a 
            href="https://your-website.com" // <-- IMPORTANT: Change this link
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            {' '}Strategic knights {/* <-- IMPORTANT: Change this text */}
          </a>
        </p>
      </div>
    </footer>
  );
}