import React from 'react';
import { Search, Hammer, FlaskConical, Settings, Layout, ClipboardList, ShieldCheck, MapPin, Banknote, Sparkles, ArrowRight } from 'lucide-react';

interface ServiceCardData {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const services: ServiceCardData[] = [
  {
    icon: <Search className="w-7 h-7 text-brand-default" />,
    title: 'Home Inspections',
    desc: 'Thorough, licensed home inspections covering pre-purchase, pre-listing, and new construction with clear, detailed digital reports you can trust.'
  },
  {
    icon: <Hammer className="w-7 h-7 text-brand-default" />,
    title: 'Remodeling Services',
    desc: "Full kitchens, bathrooms, and complete renovations completed the Wright-Way from start to finish with an inspector's attention to detail."
  },
  {
    icon: <FlaskConical className="w-7 h-7 text-brand-default" />,
    title: 'Specialized Testing',
    desc: 'Protect your family with professional Radon and Mold testing. We provide accurate assessments and remediation guidance.'
  },
  {
    icon: <Settings className="w-7 h-7 text-brand-default" />,
    title: 'Maintenance & Repair',
    desc: 'Dependable maintenance and repair services handled with precision—identifying issues properly and fixing them the Wright-Way.'
  },
  {
    icon: <Layout className="w-7 h-7 text-brand-default" />,
    title: 'Home Additions',
    desc: 'Expanding your living space with custom additions and extensions designed and built with quality craftsmanship and care.'
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-brand-default" />,
    title: 'Consultation',
    desc: 'Expert advice for your home projects. We help you plan your next step correctly, avoiding costly mistakes from the start.'
  }
];

export const Services: React.FC = () => {
  return (
    <>
      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-28 bg-charcoal w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-light rounded-full px-4 py-1.5 mb-4 reveal visible">
              <Hammer className="w-4 h-4 text-brand-deep" /> 
              <span className="text-brand-deep text-sm font-semibold">Our Services</span>
            </div>
            <h2 id="services-heading" className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
              Comprehensive Home Services
            </h2>
            <p className="text-gray-400">
              From detailed inspections to full-scale remodels, we've got your home covered.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="service-card bg-navy-default/30 border border-white/10 rounded-2xl p-6 hover:border-brand-default/30 hover:bg-navy-default/50"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-default/10 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <a
                  href="#contact"
                  className="text-brand-default font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us" className="py-20 sm:py-28 bg-navy-default relative overflow-hidden w-full border-t border-b border-white/5">
        <div className="absolute inset-0 blueprint-grid opacity-30"></div>
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2" style={{ background: 'radial-gradient(circle,rgba(34,197,94,.05),transparent)' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Section Intro */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-brand-default/10 border border-brand-default/30 rounded-full px-4 py-1.5 mb-4">
                <ShieldCheck className="w-4 h-4 text-brand-default" /> 
                <span className="text-brand-default text-sm font-semibold">The Wright-Way Difference</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Why Choose Wright-Way Services?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                When hiring a professional for your home, you need more than just general checklist inspections or standard carpentry. You deserve exceptional, license-assured workmanship, rigorous attention to structural safety, and absolute transparency.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We manage every inspection report and construction detail personally under strict local Midlands standards, ensuring your investment is perfectly maintained.
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div>
                  <span className="text-3xl font-bold font-heading text-brand-default">100%</span>
                  <span className="text-gray-400 text-xs block font-medium">Guaranteed Care</span>
                </div>
                <div className="h-10 w-px bg-white/10"></div>
                <div>
                  <span className="text-3xl font-bold font-heading text-brand-default">15+</span>
                  <span className="text-gray-400 text-xs block font-medium">Years Experience</span>
                </div>
                <div className="h-10 w-px bg-white/10"></div>
                <div>
                  <span className="text-3xl font-bold font-heading text-brand-default">Same-Day</span>
                  <span className="text-gray-400 text-xs block font-medium">Rapid Response</span>
                </div>
              </div>
            </div>
            
            {/* Bento/Grid Features */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-default/30 hover:bg-navy-default/40 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-default/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-brand-default" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Licensed &amp; Insured</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Full peace of mind with 100% comprehensive general liability coverage. State licensed home inspector and certified framing builder.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-default/30 hover:bg-navy-default/40 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-default/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-brand-default" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Locally Owned &amp; Run</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Born and operated right out of Lexington, SC. No corporate franchises or distant dispatchers — just professional, local service.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-default/30 hover:bg-navy-default/40 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-default/10 flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6 text-brand-default" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Transparent Pricing</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Detailed, easy-to-read electronic quotes. We explain every cost item clearly upfront so you can make informed home decisions.
                </p>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-default/30 hover:bg-navy-default/40 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-default/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-brand-default" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Robert stands by every single report item and construction finish details. We aren't finished until the job is done your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
