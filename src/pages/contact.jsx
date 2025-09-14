import React, { useState } from 'react';

// --- ICONS UPDATED FOR FLEXIBILITY ---
// The icon components now accept a className prop to easily change color and size.
const LocationMarkerIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const MailIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ fullName: '', email: '', company: '', message: '' });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1621976392233-ea636a04fb1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Modern paper mill machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Contact Our Experts
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We provide cutting-edge solutions for the pulp and paper industry. Let's discuss how we can help you.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Form and Contact Details */}
      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Column 1: Contact Form */}
          <div className="bg-gray-50 p-8 sm:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Consultation</h2>
            <p className="text-gray-600 mb-8">Fill out the form and our team will be in touch within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700">Company</label>
                <input
                  type="text" name="company" id="company" value={formData.company} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">How can we help?</label>
                <textarea
                  name="message" id="message" rows="5" value={formData.message} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 transition"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className="w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-bold rounded-lg text-base px-6 py-3.5 text-center transition-transform transform hover:scale-105">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Direct Contact Section */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white">Direct Contact</h3>
            <p className="mt-3 text-gray-300">
              Prefer to reach out directly? We're here to help. Contact us via phone, email, or visit our office during business hours.
            </p>
            <div className="mt-10 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-500 p-3 rounded-lg">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Phone</p>
                  <a href="tel:+919600942102" className="text-lg text-gray-300 hover:text-amber-400 transition-colors">
                    (+91) 96009 42102 <br/>
                  </a>
                   <a href="tel:+919345022800" className="text-lg text-gray-300 hover:text-amber-400 transition-colors">
                    (+91) 93450 22800
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-500 p-3 rounded-lg">
                  <MailIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Email</p>
                  <a href="mailto:sales@abipulps.com" className="text-lg text-gray-300 hover:text-amber-400 transition-colors">
                    sales@abipulps.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber-500 p-3 rounded-lg">
                  <LocationMarkerIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">Address</p>
                  <p className="text-lg text-gray-300">
                    Plot No 35, SF No 144/1, Codissia Industrial Park Ltd, Kallapalayam, Coimbatore 641201. INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Large Map -- THIS SECTION IS NOW UPDATED */}
      <div className="max-w-7xl mx-auto pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Visit Our Headquarters</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">We are located in the heart of the industrial district, ready to serve our clients.</p>
        </div>
        <div className="h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.18948780024!2d77.07411587451931!3d10.949054555986804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba851d2be65774d%3A0xdd6e834b85a932fa!2sABI%20PULP%20AND%20PAPER%20EQUIPMENTS!5e0!3m2!1sen!2sca!4v1757817589089!5m2!1sen!2sca"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ABI PULP AND PAPER EQUIPMENTS Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}