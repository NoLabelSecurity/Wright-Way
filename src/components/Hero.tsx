import React from 'react';
import { ShieldCheck, Zap, MapPin, ClipboardCheck, Calculator } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden" style={{ minHeight: '600px' }}>
      {/* Background container */}
      <div className="absolute inset-0 bg-navy-default">
        {/* Real Project background with overlay for high credibility */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://www.pexels.com/download/video/15857103/" type="video/mp4" />
        </video>
        
        {/* Blueprint grid */}
        <div className="absolute inset-0 blueprint-grid"></div>
        
        {/* Gradient overlay shapes */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0B2239 0%, #0B2239 25%, rgba(11, 34, 57, 0.70) 50%, rgba(11, 34, 57, 0.35) 100%)'
          }}
        ></div>
        
        {/* Animated measure lines */}
        <div className="absolute top-[20%] left-0 w-full measure-line-h" style={{ animationDelay: '.5s' }}></div>
        <div className="absolute top-[60%] left-0 w-full measure-line-h" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-[30%] h-full measure-line-v" style={{ animationDelay: '.8s' }}></div>
        <div className="absolute top-0 left-[70%] h-full measure-line-v" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-default/10 border border-brand-default/30 rounded-full px-4 py-1.5 mb-6 reveal visible">
            <ShieldCheck className="w-4 h-4 text-brand-default" /> 
            <span className="text-brand-default text-sm font-medium">Licensed &amp; Insured • Lexington, SC</span>
          </div>
          
          <h1 id="hero-headline" className="font-heading font-black text-white text-5xl sm:text-7xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
            Done your way,<br />
            the <span className="text-brand-default">Wright-Way</span> <span className="text-white">—</span><br />
            <span
              className="text-brand-default inline-block relative font-normal mt-2 pb-2"
              style={{ fontFamily: "'Caveat', cursive", fontSize: '1.15em' }}
            >
              Every Time.
              <span className="absolute bottom-1 left-0 w-full h-[5px] bg-brand-default rounded-full"></span>
            </span>
          </h1>

          <p id="hero-subheadline" className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl leading-relaxed">
            Professional Home Inspection &amp; Remodeling Services in Lexington, SC and surrounding areas.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 justify-start">
            {/* Primary Action Button */}
            <button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2.5 bg-brand-default hover:bg-brand-deep text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-heading font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(34,197,94,0.2)] cursor-pointer"
            >
              <ClipboardCheck className="w-5 h-5 text-white" />
              <span>Request Inspection</span>
            </button>
            {/* Secondary Action Button */}
            <button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2.5 bg-navy-default/40 border border-brand-default/50 hover:bg-brand-default/15 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-heading font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Calculator className="w-5 h-5 text-brand-default" />
              <span>Remodeling Quote</span>
            </button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8 max-w-3xl">
            {/* Item 1: Licensed & Insured */}
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 text-brand-default shrink-0" />
              <div>
                <span className="text-white font-bold text-sm sm:text-base block">Licensed &amp; Insured</span>
                <span className="text-gray-400 text-xs block mt-0.5">Full Coverage</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            
            {/* Item 2: Fast Reports */}
            <div className="flex items-center gap-3.5">
              <Zap className="w-6 h-6 text-brand-default shrink-0" />
              <div>
                <span className="text-white font-bold text-sm sm:text-base block">Fast Reports</span>
                <span className="text-gray-400 text-xs block mt-0.5">24–48 Hours</span>
              </div>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            
            {/* Item 3: Local & Reliable */}
            <div className="flex items-center gap-3.5">
              <MapPin className="w-6 h-6 text-brand-default shrink-0" />
              <div>
                <span className="text-white font-bold text-sm sm:text-base block">Local &amp; Reliable</span>
                <span className="text-gray-400 text-xs block mt-0.5">Midlands SC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave with multi-layer seamless gradient to charcoal next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 120" className="relative block w-full h-[60px] sm:h-[100px]" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-wave-grad-charcoal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B2239" stopOpacity="0" />
              <stop offset="40%" stopColor="#14314F" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
          </defs>
          {/* Parallax background wave matching charcoal color with minor transparency */}
          <path d="M0 30C360 80 720 10 1080 60S1440 90 1440 90V120H0Z" fill="#1F2937" opacity={0.35} />
          {/* Dominant foreground wave with smooth glow gradient directly into #1F2937 (bg-charcoal) */}
          <path d="M0 50C360 100 720 30 1080 80S1440 100 1440 100V120H0Z" fill="url(#hero-wave-grad-charcoal)" />
        </svg>
      </div>
    </section>
  );
};
