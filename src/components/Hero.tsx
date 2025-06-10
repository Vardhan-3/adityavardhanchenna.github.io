import React from 'react';
import { ArrowDown, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="/WhatsApp Image 2024-01-14 at 10.25.08 PM (2).png" 
                alt="Aditya Vardhan Chenna - Professional Photo"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Aditya Vardhan Chenna
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            Data Engineer
          </p>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            M.tech in Data Science • Ex-BOSCH Data Engineer • Specializing in ETL, Big Data, and Cloud Technologies
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Open to Relocate</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>Available for Opportunities</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              View My Work
            </button>
            <button className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200">
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <ArrowDown size={24} className="mx-auto text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;