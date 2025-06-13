'use client'

import React, { useState } from 'react';

export default function CEO() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 max-w-lg z-10">
          <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight">
            Un singur nume.<br />
            <span className="text-gray-700">O viziune unică.</span>
          </h1>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">CEO</h2>
            <h3 className="text-lg text-gray-700 mb-1">Designer interior</h3>
            <p className="text-sm text-gray-600 italic mb-8">Ana Diaconu-Savu</p>
            
            <button 
              className="bg-white border border-gray-300 px-6 py-3 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
              onMouseEnter={() => setHoveredSection('about')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              Aflați despre noi ↗
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <div className="w-80 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for portrait image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <p className="text-sm">Portrait Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative h-screen">
        {/* Dark overlay background */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="w-24 h-24 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <p className="text-sm">Interior Design Background</p>
            </div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight">
              Hai să creăm interioare care<br />
              <span className="text-gray-300">inspiră și rămân în memorie.</span>
            </h2>
            
            <button 
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredSection('contact')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              Contactează-ne
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="fixed top-20 right-20 w-2 h-2 bg-gray-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="fixed bottom-32 left-16 w-1 h-1 bg-gray-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
      
      {/* Hover effects */}
      {hoveredSection && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-10 animate-pulse"></div>
        </div>
      )}
    </div>
  );
}