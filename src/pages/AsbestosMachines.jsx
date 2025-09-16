import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, ShieldCheckIcon, CogIcon, ScaleIcon, ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// --- Import your local images for the slider ---
import asbestosMachine1 from '../assets/images/r3.png'; 
import image2 from '../assets/images/r2.png';
import image3 from '../assets/images/r4.png';
import image4 from '../assets/images/r5.png';
import image5 from '../assets/images/r6.png';
import image6 from '../assets/images/r7.png';
import image7 from '../assets/images/r8.png';

import asbestos from '../assets/images/2d.jpg';

// --- Reusable list item component ---
const MachineItem = ({ name }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center">
      {/* COLOR CHANGE */}
      <ChevronRightIcon className="h-6 w-6 text-brand-orange mr-4 flex-shrink-0" />
      <span className="text-xl font-semibold text-text-gray">{name}</span>
    </div>
  </div>
);

// --- Reusable feature card component ---
const FeatureCard = ({ icon, title, children }) => (
    <div className="text-center p-6">
      {/* COLOR CHANGE */}
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-orange text-white mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-text-gray mb-2">{title}</h3>
      <p className="text-text-gray-light">{children}</p>
    </div>
  );

// --- Main Page Component ---
const AsbestosMachines = () => {
  const machineList = [
    "Sieve Cylinder with VAT",
    "Ball Mill",
    "HI-Consistency Pulpersr"
  ];

  const galleryImages = [
    { src: asbestosMachine1, alt: 'Sieve Cylinder with VAT for asbestos processing' },
    { src: image2, alt: 'State-of-the-art paper mill machine in operation' },
    { src: image3, alt: 'State-of-the-art paper mill machine in operation' },
    { src: image4, alt: 'State-of-the-art paper mill machine in operation' },
    { src: image5, alt: 'State-of-the-art paper mill machine in operation' },
    { src: image6, alt: 'State-of-the-art paper mill machine in operation' },
    { src: image7, alt: 'State-of-the-art paper mill machine in operation' },
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
    // COLOR CHANGE
    <div className="bg-slate-50">
  {/* --- Hero Section --- */}
  <section 
  className="relative py-28 px-4 bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${asbestos})`
  }}
>
  {/* Text on top */}
  <div className="relative z-10 text-center">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase text-white drop-shadow-lg">
      Asbestos Machines
    </h1>
  </div>
</section>


      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* --- Back to Projects Link --- */}
        <div className="mb-12">
          {/* COLOR CHANGE */}
          <Link to="/projects" className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* --- Left Title --- */}
          <aside className="lg:col-span-2">
            <div className="sticky top-28">
               {/* COLOR CHANGE */}
               <h2 className="text-2xl font-bold text-text-gray flex items-center">
                 <span className="w-1.5 h-10 bg-brand-orange mr-4"></span>
                 MACHINES FOR ASBESTOS INDUSTRY
               </h2>
            </div>
          </aside>
          
          {/* --- Right Content Area --- */}
          <div className="lg:col-span-3">
             {/* COLOR CHANGE */}
            <div className="prose prose-lg max-w-none text-text-gray-light mb-12">
              <p>
                Abi Pulp and Paper Industries advanced Asbestos Mill Equipments maximise the performance of a production line, forming, pressing, drying and finishing section. Our equipments covers are based on state-of-the-art polymer and latest technologies that provide excellent wear resistance, stable roughness & hardness and durability in demanding operating environment enabling trouble-free run period.
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
            <div className="space-y-6">
              {machineList.map(item => <MachineItem key={item} name={item} />)}
            </div>
          </div>
        </div>
      </main>
      
      {/* --- Features Section --- */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                {/* COLOR CHANGE */}
                <h2 className="text-3xl font-extrabold text-text-gray">Engineered for Demanding Environments</h2>
                <p className="mt-4 text-lg text-text-gray-light max-w-2xl mx-auto">Our machinery is built with a focus on safety, precision, and long-term reliability.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard icon={<ShieldCheckIcon className="h-8 w-8"/>} title="Safety & Compliance">
                    Designed to meet stringent safety standards for handling and processing materials.
                </FeatureCard>
                <FeatureCard icon={<CogIcon className="h-8 w-8"/>} title="Robust Durability">
                    Constructed with high-wear resistance polymers to ensure a long operational life.
                </FeatureCard>
                <FeatureCard icon={<ScaleIcon className="h-8 w-8"/>} title="Consistent Performance">
                    Delivers stable roughness and hardness for uniform output and a trouble-free run period.
                </FeatureCard>
            </div>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      {/* COLOR CHANGE */}
      <section className="bg-text-gray">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-3xl font-extrabold text-white text-center sm:text-left">
            <span className="block">INTERESTED WITH THIS SERVICE?</span>
          </h2>
          <div className="mt-8 sm:mt-0 flex-shrink-0">
            <Link 
              to="/contact"
              // COLOR CHANGE
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

export default AsbestosMachines;