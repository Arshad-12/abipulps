import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, CogIcon, ShieldCheckIcon, CpuChipIcon, ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// --- Import your local images for the slider ---
import paperMachine1 from '../assets/images/r4.jpg';


import papermill from '../assets/images/2c.jpg';


// --- Reusable list item component (Original Structure) ---
const MachineItem = ({ name }) => (
  // COLOR CHANGE
  <li className="flex items-center text-text-gray-light">
    <ChevronRightIcon className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
    <span>{name}</span>
  </li>
);

// --- Reusable feature card component (Original Structure) ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      {/* COLOR CHANGE */}
      <span className="p-3 rounded-full bg-brand-orange/10 text-brand-orange mr-4">{icon}</span>
      <h3 className="text-xl font-bold text-text-gray">{title}</h3>
    </div>
    <p className="text-text-gray-light">{children}</p>
  </div>
);


// --- Main Page Component ---
const PaperMillMachines = () => {
  const machineList = [
    "Paper Board Machines (upto 100 TPD)", "Pressure Screen", "Centricleaner", 
    "Head Box", "Fourdriner Wire Part", "Press Part", "Size Press & Kitchen Equipments",
    "Dryer Imported", "Calender Section", "Pope Reeler", "Rewinder", "Drive Section", "Press Roller"
  ];

  const galleryImages = [
    { src: paperMachine1, alt: 'State-of-the-art paper mill machine in operation' },
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

  const midIndex = Math.ceil(machineList.length / 2);
  const firstColumn = machineList.slice(0, midIndex);
  const secondColumn = machineList.slice(midIndex);

  return (
    // COLOR CHANGE
    <div className="bg-slate-50">
      {/* --- HERO SECTION --- */}
=        <section
          className="relative py-24 px-4 bg-cover bg-center text-white flex items-center justify-center"
          style={{ backgroundImage: `url(${papermill})` }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content on top of overlay */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
              Paper Mill Machines
            </h1>

            {/* Orange label */}
            <p className="mt-4 text-2xl font-semibold text-white bg-orange-600/30 px-4 py-2 inline-block rounded-lg">
              Maximising Performance and Efficiency
            </p>
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
                 MACHINES FOR PAPER INDUSTRY
               </h2>
            </div>
          </aside>
          
          {/* --- Right Content Area --- */}
          <div className="lg:col-span-3">
            {/* COLOR CHANGE */}
            <div className="prose prose-lg max-w-none text-text-gray-light mb-12">
              <p>
                Abi Pulp and Paper Industries advanced Paper Mill Equipments maximise the performance of a production line, forming, pressing, drying and finishing section. Our equipments covers are based on state-of-the-art polymer and latest technologies that provide excellent wear resistance, stable roughness & hardness and durability in demanding operating environment enabling trouble-free run period.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                {firstColumn.map(item => <MachineItem key={item} name={item} />)}
              </ul>
              <ul className="space-y-3">
                {secondColumn.map(item => <MachineItem key={item} name={item} />)}
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      {/* --- Features Section --- */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                {/* COLOR CHANGE */}
                <h2 className="text-3xl font-extrabold text-text-gray">Why Choose Our Machinery?</h2>
                <p className="mt-4 text-lg text-text-gray-light">Engineered for reliability, performance, and longevity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard icon={<CogIcon className="h-8 w-8"/>} title="High Performance">
                    Our machines are designed to maximize output and efficiency in any production line.
                </FeatureCard>
                <FeatureCard icon={<ShieldCheckIcon className="h-8 w-8"/>} title="Durability & Reliability">
                    Built with state-of-the-art polymers for superior wear resistance and a longer lifespan.
                </FeatureCard>
                <FeatureCard icon={<CpuChipIcon className="h-8 w-8"/>} title="Advanced Technology">
                    Leveraging the latest innovations to ensure stable roughness and hardness for consistent quality.
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

export default PaperMillMachines;