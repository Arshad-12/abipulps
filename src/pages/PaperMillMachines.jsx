import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, CogIcon, ShieldCheckIcon, CpuChipIcon, ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

// --- Import your local images for the slider ---
import paperMachine1 from '../assets/images/r3.png';



// --- Reusable list item component (no changes) ---
const MachineItem = ({ name }) => (
  <li className="flex items-center text-gray-700">
    <ChevronRightIcon className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
    <span>{name}</span>
  </li>
);

// --- Reusable feature card component (no changes) ---
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <span className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">{icon}</span>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{children}</p>
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
    <div className="bg-gray-50">
      {/* --- HERO SECTION (UPDATED WITH UNSPLASH IMAGE) --- */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1629818823573-0427b363712c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
            Paper Mill Machines
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-yellow-400">Maximising Performance and Efficiency</p>
        </div>
      </section>

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* --- Back to Projects Link (no changes) --- */}
        <div className="mb-12">
          <Link to="/projects" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* --- Left Title (no changes) --- */}
          <aside className="lg:col-span-2">
            <div className="sticky top-28">
               <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                 <span className="w-1.5 h-10 bg-yellow-400 mr-4"></span>
                 MACHINES FOR PAPER INDUSTRY
               </h2>
            </div>
          </aside>
          
          {/* --- Right Content Area --- */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>
                Abi Pulp and Paper Industries advanced Paper Mill Equipments maximise the performance of a production line, forming, pressing, drying and finishing section. Our equipments covers are based on state-of-the-art polymer and latest technologies that provide excellent wear resistance, stable roughness & hardness and durability in demanding operating environment enabling trouble-free run period.
              </p>
            </div>

            {/* --- Image Slider (no changes) --- */}
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
            
            {/* --- Equipment List (no changes) --- */}
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
      
      {/* --- Features Section (no changes) --- */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Our Machinery?</h2>
                <p className="mt-4 text-lg text-gray-600">Engineered for reliability, performance, and longevity.</p>
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

      {/* --- Call to Action Section (no changes) --- */}
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

export default PaperMillMachines;