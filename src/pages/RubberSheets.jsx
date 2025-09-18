import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// --- UPDATED ICONS for new features ---
import { ChevronRightIcon, ShieldCheckIcon, FireIcon, BeakerIcon, ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// --- UPDATE these with your actual local images ---
import rubberSheetHero from '../assets/images/r6.jpg'; // Example: Replace with a hero image for rubber sheets
import rubberSheetMain from '../assets/images/r6.jpg'; // Example: Replace with a main image for rubber sheets

// --- Reusable list item component ---
const SheetItem = ({ name }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center">
      <ChevronRightIcon className="h-6 w-6 text-brand-orange mr-4 flex-shrink-0" />
      <span className="text-xl font-semibold text-text-gray">{name}</span>
    </div>
  </div>
);

// --- Reusable feature card component ---
const FeatureCard = ({ icon, title, children }) => (
    <div className="text-center p-6">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-orange text-white mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text-gray mb-2">{title}</h3>
      <p className="text-text-gray-light">{children}</p>
    </div>
  );

// --- Main Page Component ---
const RubberSheets = () => {
  // --- UPDATED list for Rubber Sheet types ---
  const sheetList = [
    "Natural Rubber Sheets",
    "Neoprene Rubber Sheets",
    "EPDM Rubber Sheets",
    "Silicone Rubber Sheets",
    "Nitrile Rubber Sheets",
    "Viton Rubber Sheets"
  ];

  const galleryImages = [
    { src: rubberSheetMain, alt: 'High-grade industrial rubber sheets' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="bg-slate-50">
      {/* --- UPDATED Hero Section --- */}
      <section 
        className="relative py-28 px-4 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${rubberSheetHero})`
        }}
      >
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase text-white drop-shadow-lg">
            Rubber Sheets
          </h1>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="mb-12">
          <Link to="/projects" className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <aside className="lg:col-span-2">
            <div className="sticky top-28">
               {/* --- UPDATED Title --- */}
               <h2 className="text-2xl font-bold text-text-gray flex items-center">
                 <span className="w-1.5 h-10 bg-brand-orange mr-4"></span>
                 SHEETS FOR RUBBER INDUSTRY
               </h2>
            </div>
          </aside>
          
          <div className="lg:col-span-3">
             {/* --- UPDATED Description --- */}
            <div className="prose prose-lg max-w-none text-text-gray-light mb-12">
              <p>
                We manufacture high-performance rubber sheets using advanced polymer formulations to deliver superior durability and resistance. Our products are engineered for demanding applications across various industries, including industrial lining, gaskets, and insulation, ensuring optimal performance and a long service life.
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
            
            {/* --- UPDATED Equipment List --- */}
            <div className="space-y-6">
              {sheetList.map(item => <SheetItem key={item} name={item} />)}
            </div>
          </div>
        </div>
      </main>
      
      {/* --- UPDATED Features Section --- */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-text-gray">Engineered for Peak Performance</h2>
                <p className="mt-4 text-lg text-text-gray-light max-w-2xl mx-auto">Our rubber sheets are formulated to withstand the toughest industrial conditions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard icon={<ShieldCheckIcon className="h-8 w-8"/>} title="High Abrasion Resistance">
                    Formulated for exceptional durability in high-wear and abrasive environments.
                </FeatureCard>
                <FeatureCard icon={<FireIcon className="h-8 w-8"/>} title="Chemical & Heat Resistance">
                    Maintains stability and performance when exposed to harsh chemicals and high temperatures.
                </FeatureCard>
                <FeatureCard icon={<BeakerIcon className="h-8 w-8"/>} title="Custom Formulations">
                    We develop custom compounds to meet specific client needs for hardness, thickness, and color.
                </FeatureCard>
            </div>
        </div>
      </section>

      {/* --- Call to Action Section (no changes) --- */}
      <section className="bg-text-gray">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-3xl font-extrabold text-white text-center sm:text-left">
            <span className="block">INTERESTED WITH THIS SERVICE?</span>
          </h2>
          <div className="mt-8 sm:mt-0 flex-shrink-0">
            <Link 
              to="/contact"
              className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-dark transition-transform transform hover:scale-105"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RubberSheets;