import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/contact';
import Projects from './pages/Projects';
import RubberizingRollers from './pages/RubberizingRollers';
import PulpMillEquipments from './pages/PulpMillEquipments';
import PaperMillMachines from './pages/PaperMillMachines';
import AsbestosMachines from './pages/AsbestosMachines';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/rubberizing-rollers" element={<RubberizingRollers />} />
            <Route path="/projects/pulp-mill-equipments" element={<PulpMillEquipments />} />
            <Route path="/projects/paper-mill-machines" element={<PaperMillMachines />} />
            <Route path="/projects/asbestos-machines" element={<AsbestosMachines />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;