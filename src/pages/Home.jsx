import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/32022.jpg';

// --- SVG Icon Components (no changes needed) ---
const ArrowRightIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
const TrophyIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2-6H3m18 6h-2m2-6h-2M9 6h6M5 9h14M5 15h14M9 18h6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2z" /></svg>;
const TeamIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const CogIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const RefreshIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <polyline points="23 4 23 10 17 10"></polyline> <polyline points="1 20 1 14 7 14"></polyline> <path d="M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0020.49 15"></path> </svg>);
const ThumbsUpIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v9c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>;

export default function Home() {
  return (
    // COLOR CHANGE: Default text color is now lighter
    <div className="bg-white text-text-gray">
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
            <Link to="/projects" className="inline-block text-white bg-brand-orange font-bold py-4 px-10 rounded-lg text-lg hover:bg-brand-orange-dark transition-all duration-300 shadow-lg transform hover:scale-105">
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
                    // COLOR CHANGE: Heading text is lighter
                    <div key={service.title} className="bg-white p-8 rounded-2xl shadow-2xl text-text-gray text-center transform hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-orange text-white mx-auto transition-transform duration-300 group-hover:scale-110">
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
              <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand-orange/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative aspect-w-1 aspect-h-1">
                <img src ={image1} alt="Engineers inspecting machinery" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
              </div>
            </div>
            <div>
              <p className="text-base font-semibold uppercase tracking-wider text-brand-orange">Our Legacy</p>
              {/* COLOR CHANGE: Heading and paragraph text is lighter */}
              <h2 className="mt-2 text-4xl font-extrabold text-text-gray tracking-tight">Landmark Products Since 1996</h2>
              <p className="mt-4 text-lg text-text-gray-light">
                With decades of expertise, ABI PULP AND PAPER EQUIPMENTS supplies a comprehensive range of machinery to both large and small-scale paper mills, offering complete renovations and custom manufacturing.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-brand-orange pl-4">
                  {/* COLOR CHANGE: Heading and paragraph text is lighter */}
                  <p className="text-4xl font-bold text-text-gray">25+</p>
                  <p className="text-text-gray-light">Years of Experience</p>
                </div>
                <div className="border-l-4 border-brand-orange pl-4">
                  {/* COLOR CHANGE: Heading and paragraph text is lighter */}
                  <p className="text-4xl font-bold text-text-gray">100+</p>
                  <p className="text-text-gray-light">Satisfied Mills</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

{/* --- UPDATED: Animated Marquee with a new background --- */}
<section className="bg-text-gray bg-grid-pattern py-24 sm:py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      {/* --- Text color changed to white for contrast --- */}
      <h2 className="text-4xl font-extrabold tracking-tight text-white">Our Support & Technical Capabilities</h2>
      <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-300">
        We invite mills to utilize our comprehensive services for re-rubberizing, re-coating, and precision grinding.
      </p>
    </div>
  </div>

  {/* --- The Marquee Container --- */}
  {/* The py-10 gives the cards space to "pop up" without being cut off */}
  <div className="mt-16 group flex gap-8 whitespace-nowrap py-10">
    <div className="flex-shrink-0 flex gap-8 justify-around animate-marquee group-hover:[animation-play-state:paused]">
      {[
        { title: "All Roller Types" },
        { title: "Roll Re-coating", details: "up to 1550mm Dia" },
        { title: "Roll Grinding", details: "up to 1860mm Dia" },
        { title: "Lathe Work", details: "up to 7000mm Length" },
        { title: "Vulcanizer Machine", details: "up to 1650mm Dia" },
        { title: "Mixing Mill" },
        { title: "Cold Feed Extruder" },
        // --- The list is duplicated below for a seamless loop ---
        { title: "All Roller Types" },
        { title: "Roll Re-coating", details: "up to 1550mm Dia" },
        { title: "Roll Grinding", details: "up to 1860mm Dia" },
        { title: "Lathe Work", details: "up to 7000mm Length" },
        { title: "Vulcanizer Machine", details: "up to 1650mm Dia" },
        { title: "Mixing Mill" },
        { title: "Cold Feed Extruder" },
      ].map((item, index) => (
        <div 
          key={index} 
          className="flex-shrink-0 w-[350px] bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-orange transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:z-10"
        >
          <h3 className="text-2xl font-bold text-text-gray">{item.title}</h3>
          {item.details && <p className="mt-2 text-brand-orange font-semibold">{item.details}</p>}
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Core Values Section */}
        <section className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    {/* COLOR CHANGE: Heading and paragraph text is lighter */}
                    <h2 className="text-4xl font-extrabold text-text-gray tracking-tight">Our Commitment to Excellence</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-text-gray-light">The principles that drive our performance and partnerships.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-brand-orange transition-all duration-300">
                        <TrophyIcon className="h-12 w-12 text-brand-orange mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-text-gray tracking-wide">Reputation Par Excellence</h3>
                    </div>
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-brand-orange transition-all duration-300">
                        <TeamIcon className="h-12 w-12 text-brand-orange mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-text-gray tracking-wide">We Build Partnerships</h3>
                    </div>
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-brand-orange transition-all duration-300">
                        <TeamIcon className="h-12 w-12 text-brand-orange mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-text-gray tracking-wide">A Team of Professionals</h3>
                    </div>
                    <div className="text-center p-6 border border-slate-200 rounded-xl hover:shadow-xl hover:border-brand-orange transition-all duration-300">
                        <ThumbsUpIcon className="h-12 w-12 text-brand-orange mx-auto" />
                        <h3 className="mt-4 text-lg font-bold text-text-gray tracking-wide">Guided By Commitment</h3>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="bg-brand-orange">
             <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
                {/* COLOR CHANGE: Text on orange background is now white for contrast */}
                <h2 className="text-4xl font-extrabold text-white">
                    Ready to enhance your production line?
                </h2>
                <p className="mt-4 text-xl text-white/90">
                    Contact our team today for a consultation or to learn more about our equipment.
                </p>
                <div className="mt-8">
                    {/* COLOR CHANGE: Button is now white with orange text to stand out */}
                    <Link to="/contact" className="inline-flex items-center gap-2 text-brand-orange bg-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105">
                        Get In Touch <ArrowRightIcon className="h-6 w-6"/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}