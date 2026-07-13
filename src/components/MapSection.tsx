import React, { useState, useRef } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

interface LocationInfo {
  name: string;
  subtext: string;
  countyName: string;
  embedUrl: string;
}

const locations: LocationInfo[] = [
  { 
    name: 'Lexington', 
    subtext: 'Primary Headquarters', 
    countyName: 'Lexington County',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105953.51860367323!2d-81.33230635!3d33.91421715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8eb0409c95191%3A0xc6cb1c738e4a9042!2sLexington%20County%2C%20SC!5e0!3m2!1sen!2sus!4v1715812345678!5m2!1sen!2sus'
  },
  { 
    name: 'Columbia', 
    subtext: 'Metro Area Coverage', 
    countyName: 'Richland County',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105953.51860367323!2d-80.9126279!3d34.0150937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a379f8ee4a95%3A0x1b5708cbcf5c3fc8!2sRichland%20County%2C%20SC!5e0!3m2!1sen!2sus!4v1715812345678!5m2!1sen!2sus'
  },
  { 
    name: 'West Columbia', 
    subtext: 'Serving Cayce & West Metro', 
    countyName: 'Lexington County',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105953.51860367323!2d-81.33230635!3d33.91421715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8eb0409c95191%3A0xc6cb1c738e4a9042!2sLexington%20County%2C%20SC!5e0!3m2!1sen!2sus!4v1715812345678!5m2!1sen!2sus'
  },
  { 
    name: 'Richland County', 
    subtext: 'Inspections & Remodeling', 
    countyName: 'Richland County',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105953.51860367323!2d-80.9126279!3d34.0150937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a379f8ee4a95%3A0x1b5708cbcf5c3fc8!2sRichland%20County%2C%20SC!5e0!3m2!1sen!2sus!4v1715812345678!5m2!1sen!2sus'
  },
  { 
    name: 'Batesburg-Leesville', 
    subtext: 'Extended Coverage Area', 
    countyName: 'Lexington County',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105953.51860367323!2d-81.33230635!3d33.91421715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8eb0409c95191%3A0xc6cb1c738e4a9042!2sLexington%20County%2C%20SC!5e0!3m2!1sen!2sus!4v1715812345678!5m2!1sen!2sus'
  }
];

export const MapSection: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<LocationInfo>(locations[0]);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  const focusMap = (loc: LocationInfo) => {
    // If the user has highlighted/selected text, do not change the map focus
    const selection = window.getSelection()?.toString();
    if (selection) return;

    setSelectedLoc(loc);
    if (iframeContainerRef.current) {
      iframeContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const mapUrl = selectedLoc.embedUrl;

  return (
    <section id="coverage" className="bg-navy-light py-24 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30"></div>
      
      {/* Top wavy divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg viewBox="0 0 1440 120" className="relative block w-full h-[40px] sm:h-[80px]" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C360 100 720 30 1080 80S1440 100 1440 100V120H0Z" fill="#1F2937" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-default font-heading font-extrabold text-xs tracking-wider uppercase bg-brand-default/10 px-3 py-1.5 rounded-full border border-brand-default/20">
            Service Coverage
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-6 leading-tight">
            Lexington &amp; Greater Columbia Area
          </h2>
          <p className="text-gray-400 text-lg">
            Click on any location below to center the interactive map and highlight the county service boundary.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Locations panel */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase block mb-2 px-1">
              Select an area to focus:
            </span>
            {locations.map((loc) => (
              <div
                role="button"
                tabIndex={0}
                key={loc.name}
                onClick={() => focusMap(loc)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    focusMap(loc);
                  }
                }}
                className={`w-full text-left border p-5 rounded-2xl transition-all duration-300 group flex items-center justify-between cursor-pointer select-text hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-default ${
                  selectedLoc.name === loc.name
                    ? 'bg-brand-default/20 border-brand-default ring-2 ring-brand-default/30 shadow-lg shadow-brand-default/5'
                    : 'bg-white/5 border-white/10 hover:bg-brand-default/10 hover:border-brand-default/30'
                }`}
              >
                <div className="flex items-center gap-4 select-text">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    selectedLoc.name === loc.name
                      ? 'bg-brand-default text-navy-default scale-110'
                      : 'bg-brand-default/10 text-brand-default group-hover:bg-brand-default group-hover:text-navy-default'
                  }`}>
                    <MapPin className={`w-5 h-5 ${selectedLoc.name === loc.name ? 'animate-bounce' : ''}`} />
                  </div>
                  <div className="select-text">
                    <div className="flex items-center gap-2 select-text">
                      <h4 className="text-white font-heading font-bold text-base leading-none select-text">
                        {loc.name}{loc.name !== 'Richland County' ? ', SC' : ''}
                      </h4>
                      {loc.name === 'Lexington' && (
                        <span className="bg-brand-default/10 text-brand-default border border-brand-default/25 text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                          HQ
                        </span>
                      )}
                      {selectedLoc.name === loc.name && (
                        <span className="bg-brand-default text-navy-default text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider animate-pulse">
                          Active
                        </span>
                      )}
                    </div>
                    <span className="text-gray-400 text-xs mt-1 block select-text">{loc.subtext}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-1">
                    {selectedLoc.name === loc.name ? 'Selected' : 'View Boundary'}
                  </span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    selectedLoc.name === loc.name ? 'text-brand-default translate-x-1' : 'text-gray-500 group-hover:text-brand-default group-hover:translate-x-0.5'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Map canvas container */}
          <div className="lg:col-span-8">
            <div
              ref={iframeContainerRef}
              className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-navy-default/50"
            >
              {/* County Borderline Active Overlay */}
              <div className="absolute top-4 left-4 z-20 bg-brand-default/95 text-navy-default backdrop-blur-sm text-xs font-black px-4 py-2.5 rounded-xl shadow-lg border border-brand-accent/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-navy-default animate-pulse" />
                <span>Showing: {selectedLoc.countyName} Boundary</span>
              </div>

              {/* Interactive map frame */}
              <iframe
                key={selectedLoc.name}
                id="map-iframe"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Google Maps Service Coverage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
