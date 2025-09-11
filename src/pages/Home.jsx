import React from 'react';
import { Link } from 'react-router-dom';

// --- SVG Icon Components (no changes needed) ---
const ArrowRightIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
const TrophyIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2-6H3m18 6h-2m2-6h-2M9 6h6M5 9h14M5 15h14M9 18h6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2z" /></svg>;
const TeamIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const CogIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const RefreshIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0119.5 19.5" /></svg>;
const ThumbsUpIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.993 0-1.85-1.007-1.85-2.25V11a2.25 2.25 0 012.25-2.25zM7.5 15V11a2.25 2.25 0 00-2.25-2.25h-1A2.25 2.25 0 002 11v4a2.25 2.25 0 002.25 2.25h1A2.25 2.25 0 007.5 15z" /></svg>;

export default function Home() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto-format=fit=crop" alt="Industrial Machinery" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/5 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Engineering the Future of Paper Production
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-xl text-slate-100">
            High-performance pulp and paper equipment designed for maximum reliability and unparalleled excellence.
          </p>
          <div className="mt-10">
            <Link to="/products" className="inline-block text-slate-900 bg-amber-400 font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-300 transition-all duration-300 shadow-lg transform hover:scale-105">
              Explore Our Equipment
            </Link>
          </div>
        </div>
      </div>
      
      <div className="relative bg-slate-50">
        {/* Overlapping Services Section */}
        <section className="relative max-w-7xl mx-auto -mt-20 z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{title: "Paper Machine Manufacturing", icon: CogIcon}, {title: "New Roll Manufacturing", icon: RefreshIcon}, {title: "Rubberizing and Grinding", icon: CogIcon}].map(service => (
                    <div key={service.title} className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900 text-center transform hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-400 text-slate-900 mx-auto transition-transform duration-300 group-hover:scale-110">
                            <service.icon className="h-8 w-8" />
                        </div>
                        <h3 className="mt-6 text-xl font-bold tracking-wider">{service.title}</h3>
                    </div>
                ))}
            </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 sm:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative aspect-w-1 aspect-h-1">
                <img src="https://images.unsplash.com/photo-1581092921447-4a0b3a3d5b8a?q=80&w=2070&auto-format=fit=crop" alt="Engineers inspecting machinery" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
              </div>
            </div>
            <div>
              <p className="text-base font-semibold uppercase tracking-wider text-amber-600">Our Legacy</p>
              <h2 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight">Landmark Products Since 1996</h2>
              <p className="mt-4 text-lg text-slate-600">
                With decades of expertise, ABI PULP AND PAPER EQUIPMENTS supplies a comprehensive range of machinery to both large and small-scale paper mills, offering complete renovations and custom manufacturing.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-amber-400 pl-4">
                  <p className="text-4xl font-bold text-slate-900">25+</p>
                  <p className="text-slate-500">Years of Experience</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <p className="text-4xl font-bold text-slate-900">100+</p>
                  <p className="text-slate-500">Satisfied Mills</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

        {/* Bento Grid Capabilities Section */}
        <section className="bg-slate-100 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Our Support & Technical Capabilities</h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-600">
                We invite mills to utilize our comprehensive services for re-rubberizing, re-coating, and precision grinding.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "All Roller Types", size: "lg:col-span-1" }, { title: "Roll Re-coating", details: "up to 1550mm Dia", size: "lg:col-span-2" },
                { title: "Roll Grinding", details: "up to 1860mm Dia", size: "lg:col-span-2" }, { title: "Lathe Work", details: "up to 7000mm Length", size: "lg:col-span-1" },
                { title: "Vulcanizer Machine", details: "up to 1650mm Dia", size: "lg:col-span-1" }, { title: "Mixing Mill", size: "lg:col-span-1" },
                { title: "Cold Feed Extruder", size: "lg:col-span-1" },
              ].map(item => (
                <div key={item.title} className={`${item.size} bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                  <h3 className="text-2xl font-bold text-amber-600">{item.title}</h3>
                  {item.details && <p className="mt-2 text-slate-500">{item.details}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Our Commitment to Excellence</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">The principles that drive our performance and partnerships.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                        <TrophyIcon className="h-12 w-12 text-amber-500 mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-slate-900 tracking-wide">Reputation Par Excellence</h3>
                    </div>
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                        <TeamIcon className="h-12 w-12 text-amber-500 mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-slate-900 tracking-wide">We Build Partnerships</h3>
                    </div>
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                        <TeamIcon className="h-12 w-12 text-amber-500 mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-slate-900 tracking-wide">A Team of Professionals</h3>
                    </div>
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                        <ThumbsUpIcon className="h-12 w-12 text-amber-500 mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-slate-900 tracking-wide">Guided By Commitment</h3>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="bg-amber-400">
             <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-slate-900">
                    Ready to enhance your production line?
                </h2>
                <p className="mt-4 text-xl text-slate-800">
                    Contact our team today for a consultation or to learn more about our equipment.
                </p>
                <div className="mt-8">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-amber-500 bg-slate-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-slate-800 transition-all duration-300 shadow-lg transform hover:scale-105">
                        Get In Touch <ArrowRightIcon className="h-6 w-6"/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}