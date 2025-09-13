import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// --- Import your local images for the slider ---
import rollerImage1 from '../assets/images/r3.png'; // Replace with your actual image file


// --- Component for list items ---
const ListItem = ({ children }) => (
  <li className="flex items-start">
    <ChevronRightIcon className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

// --- Main Page Component ---
const RubberizingRollers = () => {
  const industries = [
    'Paper Mills', 'Paper Packaging Industries', 'Printing Rollers', 'Plywood Industries', 'Steel Industries', 'Garments', 'Roofing Industries'
  ];

  const sections = {
    "FORMING SECTION": ["Breast roll", "Couch roll", "Forming roll", "Lump breaker roll", "Table roll", "Wire roll", "Wire suction roll", "FDR roll"],
    "PRESS SECTION": ["Press roll", "Center press roll", "Top press roll", "Felt guide roll", "Suction press roll", "Vented or grooved press roll"],
    "DRYER SECTION": ["Felt roll", "Dryer paper guide roll", "Touch roll", "Spreader roll", "Paper lead roll"],
    "COATING AND SIZING": ["Coater applicator roll", "Backing roll", "Size press roll hard", "Size press roll soft", "Film press roll"],
    "CALENDAR ROLLS GRINDING": ["Calendar hard coating for single nip & multi nip (plain & Custer).", "Soft nip calendar", "Chilled roll."],
    "REELING AND WINDING": ["Reel spool roll (Tambour roll)", "Reel drum hard & soft roll."]
  };

  // --- Array for the new image slider ---
  const galleryImages = [
    { src: rollerImage1, alt: 'High-performance rubberized rollers' },
  ];

  // --- State to track the current image index ---
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Functions to handle slider navigation ---
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === galleryImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section className="relative h-96 bg-gray-800 text-white flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594027389473-1323ea11a3d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
            Rubberizing Rollers
          </h1>
          <p className="mt-4 text-2xl font-semibold text-yellow-400">For All Industries</p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* --- Back to Projects Link --- */}
        <div className="mb-12">
          <Link to="/projects" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* --- Left Sidebar --- */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg text-gray-800 border-b-2 border-yellow-400 pb-2 mb-4">WE ARE RUBBERIZING THE ROLLERS FOR THE FOLLOWING INDUSTRIES</h3>
              <ul className="space-y-2">
                {industries.map((industry, index) => (
                  <li 
                    key={index} 
                    className="p-3 font-medium rounded-md transition-colors duration-200"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          {/* --- Right Content Area --- */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Rubber Material Technology</h2>
              <p>
                Abi pulp and paper industries advanced rubber material technology lets maximize the performance of a production line, forming, pressing, drying and finishing section. Our roll covers are based on state-of-the-art polymer and latest technologies that provide excellent wear resistance, stable roughness & hardness and durability in demanding operating environment enabling trouble-free roll run period.
              </p>
            </div>

            {/* --- Image Slider --- */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl my-12">
              <img 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].alt} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={goToPrevious} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={goToNext} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* --- Detailed Sections Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-12 text-gray-700">
              {Object.entries(sections).map(([title, items]) => (
                <div key={title}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <ListItem key={index}>{item}</ListItem>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* --- Highlight Section --- */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-extrabold text-yellow-500 tracking-wide uppercase">
            Rubberizing & Re-Rubberizing will be done for all types of rolls
          </h3>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="bg-slate-800">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Interested in our Products and Services?</span>
          </h2>
          <Link 
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-transform transform hover:scale-105 sm:w-auto"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RubberizingRollers;