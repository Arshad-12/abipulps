import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// --- Import your local images for the slider ---
import pulpMachine1 from '../assets/images/r3.png'; // Replace with your actual image file
// Replace with your actual image file

// --- Reusable list item component ---
const EquipmentItem = ({ name }) => (
  <li className="flex items-center text-gray-700 text-lg">
    <ChevronRightIcon className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
    <span>{name}</span>
  </li>
);

// --- Main Page Component ---
const PulpMillEquipments = () => {
  const equipmentList = [
    "High Consistency Pulper", "Dilution Pulper", "Medium Consistency Pulper",
    "Conveyor", "HD Cleaner", "Turbo Separator", "Decker Thickener",
    "Viberating Screen", "Stock Test Agitators", "Cylinder Module",
    "Former", "Sludge Press"
  ];

  // --- Array for the new image slider ---
  const galleryImages = [
    { src: pulpMachine1, alt: 'High Consistency Pulper in operation' },
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

  // Split the list for a two-column layout
  const midIndex = Math.ceil(equipmentList.length / 2);
  const firstColumn = equipmentList.slice(0, midIndex);
  const secondColumn = equipmentList.slice(midIndex);

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1624353365286-9a17a3a0595b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="text-center">
          <p className="text-lg font-semibold text-yellow-400 uppercase tracking-wider">State-of-the-Art Solutions</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
            Pulp Mill Equipments
          </h1>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* --- Back to Projects Link --- */}
        <div className="mb-12">
          <Link to="/projects" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* --- Left Title --- */}
          <aside className="lg:col-span-2">
            <div className="sticky top-28">
               <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                 <span className="w-1.5 h-10 bg-yellow-400 mr-4"></span>
                 EQUIPMENTS FOR PULP INDUSTRY
               </h2>
            </div>
          </aside>
          
          {/* --- Right Content Area --- */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>
                Abi pulp and paper industries advanced Pulp mill Equipments maximise the performance of a production line, forming, pressing, drying and finishing section. Our equipments covers are based on state-of-the-art polymer and latest technologies that provide excellent wear resistance, stable roughness & hardness and durability in demanding operating environment enabling trouble-free run period.
              </p>
            </div>

            {/* --- Image Slider --- */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mb-12">
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
            
            {/* --- Equipment List --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-4">
                {firstColumn.map(item => <EquipmentItem key={item} name={item} />)}
              </ul>
              <ul className="space-y-4">
                {secondColumn.map(item => <EquipmentItem key={item} name={item} />)}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* --- Call to Action Section --- */}
      <section className="bg-slate-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-3xl font-extrabold text-white text-center sm:text-left">
            <span className="block">INTERESTED WITH THIS SERVICE?</span>
          </h2>
          <div className="mt-8 sm:mt-0 flex-shrink-0">
            <Link 
              to="/contact"
              className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PulpMillEquipments;