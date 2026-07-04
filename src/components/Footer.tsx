import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-default w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4 hover:opacity-95 transition-opacity inline-flex">
              <img
                src="https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way-Services-LLC/content/img/logo-transparent-bg.png"
                alt="Wright-Way Services LLC Logo"
                className="h-[90px] sm:h-[108px] w-auto shrink-0 select-none object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-heading font-black text-white text-lg leading-none">Wright-Way</span>
                <span className="block text-[10px] text-brand-accent font-medium tracking-widest uppercase">
                  Services, LLC
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Licensed home inspection &amp; remodeling services. Done your way, the Wright-Way — every time.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-brand-default transition">Home Inspections</a></li>
              <li><a href="#services" className="hover:text-brand-default transition">Remodeling</a></li>
              <li><a href="#services" className="hover:text-brand-default transition">Maintenance &amp; Repair</a></li>
              <li><a href="#services" className="hover:text-brand-default transition">Radon &amp; Mold Testing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Lexington, SC</li>
              <li>Columbia, SC</li>
              <li>West Columbia, SC</li>
              <li>Richland County</li>
              <li>Batesburg-Leesville, SC</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-default" />
                <span id="footer-phone">(803) 530-3722</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-default" />
                <span id="footer-email">wrightway.homeinspection@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-default" />
                Lexington, SC 29072
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-default hover:text-white transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-default hover:text-white transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-default hover:text-white transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2026 Wright-Way Services LLC. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Licensed Home Inspector • Lexington, South Carolina</p>
        </div>
      </div>
    </footer>
  );
};
