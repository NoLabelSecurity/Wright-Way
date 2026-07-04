import React, { useState, useRef } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

interface LocationInfo {
  name: string;
  query: string;
  subtext: string;
  countyName: string;
  zoom: number;
}

const locations: LocationInfo[] = [
  { 
    name: 'Lexington', 
    query: 'Lexington County, SC', 
    subtext: 'Primary Headquarters', 
    countyName: 'Lexington County',
    zoom: 10 
  },
  { 
    name: 'Columbia', 
    query: 'Richland County, SC', 
    subtext: 'Metro Area Coverage', 
    countyName: 'Richland County',
    zoom: 10 
  },
  { 
    name: 'West Columbia', 
    query: 'Lexington County, SC', 
    subtext: 'Serving Cayce & West Metro', 
    countyName: 'Lexington County',
    zoom: 10 
  },
  { 
    name: 'Richland County', 
    query: 'Richland County, SC', 
    subtext: 'Inspections & Remodeling', 
    countyName: 'Richland County',
    zoom: 10 
  },
  { 
    name: 'Batesburg-Leesville', 
    query: 'Lexington County, SC', 
    subtext: 'Extended Coverage Area', 
    countyName: 'Lexington County',
    zoom: 10 
  }
];

export const MapSection: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<LocationInfo>(locations[0]);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  const focusMap = (loc: LocationInfo) => {
    setSelectedLoc(loc);
    if (iframeContainerRef.current) {
      iframeContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(selectedLoc.query)}&z=${selectedLoc.zoom}&output=embed`;

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
            {locations.map((loc) => (
              <button
                key={loc.name}
                onClick={() => focusMap(loc)}
                className={`w-full text-left border p-5 rounded-2xl transition-all duration-300 group flex items-center justify-between ${
                  selectedLoc.name === loc.name
                    ? 'bg-brand-default/20 border-brand-default'
                    : 'bg-white/5 border-white/10 hover:bg-brand-default/10 hover:border-brand-default/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                    selectedLoc.name === loc.name
                      ? 'bg-brand-default text-navy-default'
                      : 'bg-brand-default/10 text-brand-default group-hover:bg-brand-default group-hover:text-navy-default'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-bold text-base leading-none">{loc.name}</h4>
                    <span className="text-gray-400 text-xs mt-1 block">{loc.subtext}</span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition ${
                  selectedLoc.name === loc.name ? 'text-brand-default' : 'text-gray-500 group-hover:text-brand-default'
                }`} />
              </button>
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
                <span>Highlighting: {selectedLoc.countyName} Border</span>
              </div>

              {/* Interactive map frame */}
              <iframe
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
