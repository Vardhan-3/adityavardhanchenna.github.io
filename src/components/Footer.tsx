import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Aditya Vardhan Chenna</h3>
            <p className="text-gray-400">Data Engineer • Problem Solver • Innovation Driver</p>
          </div>
          
         
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Aditya Vardhan Chenna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;