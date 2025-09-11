import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'; // Assumes heroicons is installed

// --- Reusable list item component for consistency ---
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

  // Split the list for a two-column layout
  const midIndex = Math.ceil(equipmentList.length / 2);
  const firstColumn = equipmentList.slice(0, midIndex);
  const secondColumn = equipmentList.slice(midIndex);

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1624353365286-9a17a3a0595b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} // Replace with a relevant, high-quality image
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* --- Left Title --- */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
               <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                 <span className="w-1.5 h-10 bg-yellow-400 mr-4"></span>
                 EQUIPMENTS FOR PULP INDUSTRY
               </h2>
            </div>
          </div>
          
          {/* --- Right Content Area --- */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>
                Abi pulp and paper industries advanced Pulp mill Equipments maximise the performance of a production line, forming, pressing, drying and finishing section. Our equipments covers are based on state-of-the-art polymer and latest technologies that provide excellent wear resistance, stable roughness & hardness and durability in demanding operating environment enabling trouble-free run period.
              </p>
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
      
      {/* --- Image Gallery Section (Optional but Recommended) --- */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Equipment in Action</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Replace these with your actual images */}
                <div className="aspect-w-1 aspect-h-1"><img className="w-full h-full object-cover rounded-lg shadow-lg" src="https://via.placeholder.com/500x500.png?text=High+Consistency+Pulper" alt="High Consistency Pulper"/></div>
                <div className="aspect-w-1 aspect-h-1"><img className="w-full h-full object-cover rounded-lg shadow-lg" src="https://via.placeholder.com/500x500.png?text=Vibrating+Screen" alt="Viberating Screen"/></div>
                <div className="aspect-w-1 aspect-h-1"><img className="w-full h-full object-cover rounded-lg shadow-lg" src="https://via.placeholder.com/500x500.png?text=Decker+Thickener" alt="Decker Thickener"/></div>
            </div>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-3xl font-extrabold text-white text-center sm:text-left">
            <span className="block">INTERESTED WITH THIS SERVICE.</span>
          </h2>
          <div className="mt-8 sm:mt-0 flex-shrink-0">
            <button className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-transform transform hover:scale-105">
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PulpMillEquipments;