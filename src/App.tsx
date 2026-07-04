import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div id="app-wrapper" className="w-full h-screen overflow-y-auto bg-white text-charcoal font-body scroll-smooth">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* GALLERY & BEFORE/AFTER */}
      <Gallery />

      {/* ABOUT & SERVICE AREAS */}
      <About />

      {/* REVIEWS */}
      <Reviews />

      {/* CONTACT */}
      <section id="contact-section" className="py-20 sm:py-28 w-full bg-navy-default relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full" style={{ background: 'linear-gradient(135deg,rgba(34,197,94,.05),transparent)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING CONVERSION CALL BUTTON */}
      <a
        href="tel:8035303722"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-3.5 rounded-full shadow-[0_15px_30px_rgba(34,197,94,0.3)] border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 font-heading font-extrabold text-xs tracking-wider uppercase cursor-pointer"
        style={{ boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)' }}
      >
        <PhoneCall className="w-4 h-4 text-white animate-bounce" />
        <span>Call Now</span>
      </a>
    </div>
  );
};

export default App;
