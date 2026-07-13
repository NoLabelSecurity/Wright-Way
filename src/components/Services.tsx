import React, { useState, useEffect } from 'react';
import { Search, Hammer, FlaskConical, Settings, Layout, ClipboardList, ShieldCheck, MapPin, Banknote, Sparkles, ArrowRight, X, CheckCircle2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceCardData {
  icon: React.ReactNode;
  title: string;
  desc: string;
  details: {
    subtitle: string;
    description: string;
    features: string[];
    process: string[];
    whyUs: string;
    timeframe: string;
  };
}

const services: ServiceCardData[] = [
  {
    icon: <Search className="w-7 h-7 text-brand-default" />,
    title: 'Home Inspections',
    desc: 'Thorough, licensed home inspections covering pre-purchase, pre-listing, and new construction with clear, detailed digital reports you can trust.',
    details: {
      subtitle: 'State-Licensed Inspection & Expert Reporting',
      description: 'Our comprehensive, certified home inspections go deep under the surface to protect your biggest investment. Whether you are buying, selling, or building, we analyze the entire property from roof to foundation with an expert builder\'s eye.',
      features: [
        'Structural systems (foundation, framing, load-bearing walls)',
        'Complete roof covering, flashing, and attic insulation/ventilation',
        'Full electrical panels, main line, grounding, and receptacle testing',
        'Plumbing system, water pressure, leaks, and drainage checks',
        'HVAC performance testing and thermal integrity checks',
        'Comprehensive interior and exterior material inspection'
      ],
      process: [
        'Thorough visual and physical walk-through using premium tools',
        'Thermal imaging and advanced moisture measurement scans',
        'Same-day generation of an easy-to-read electronic defect report',
        'Personal review to explain all findings and priority levels clearly'
      ],
      whyUs: 'Licensed Home Inspector (#RBI 49302) with 15+ years of custom framing and building experience. We don\'t just find issues; we understand exactly what it takes to fix them properly.',
      timeframe: 'Typically completed in 2.5 to 4 hours depending on home size. Electronic reports delivered within 24 hours.'
    }
  },
  {
    icon: <Hammer className="w-7 h-7 text-brand-default" />,
    title: 'Remodeling Services',
    desc: "Full kitchens, bathrooms, and complete renovations completed the Wright-Way from start to finish with an inspector's attention to detail.",
    details: {
      subtitle: 'Premium Kitchens, Bathrooms & Full Renovations',
      description: 'Transform your living space with master-level carpentry, smart layout planning, and high-end finishes. We combine premium design aesthetics with structural integrity to deliver renovations that last a lifetime.',
      features: [
        'Custom kitchen design, cabinetry, and island builds',
        'Luxury bathroom remodels, custom tiling, and walk-in showers',
        'High-performance flooring installations (LVP, tile, hardwood)',
        'Open-concept conversions and structural wall modifications',
        'Modern decorative finish carpentry, built-ins, and trim work'
      ],
      process: [
        'In-depth onsite assessment and creative design collaboration',
        'Itemized material selection and detailed cost-breakdown quote',
        'Clean, non-disruptive demolition with strict dust containment',
        'Precision framing, mechanical rough-ins, and structural setup',
        'Master-level trim, painting, fixture installation, and final detailing'
      ],
      whyUs: 'Every remodel is managed with a licensed home inspector\'s attention to detail. This means we make sure the internal framing, waterproofing, and mechanicals are 100% correct before any finishes go up.',
      timeframe: 'Project durations range from 1 to 4 weeks depending on scope, with fixed milestones and clear daily updates.'
    }
  },
  {
    icon: <FlaskConical className="w-7 h-7 text-brand-default" />,
    title: 'Specialized Testing',
    desc: 'Protect your family with professional Radon and Mold testing. We provide accurate assessments and remediation guidance.',
    details: {
      subtitle: 'Certified Radon, Mold & Moisture Diagnostics',
      description: 'Protect your family\'s health from invisible environmental dangers. We utilize certified active measurement equipment and lab-analyzed testing to identify radon levels, mold spore counts, and hidden moisture leaks.',
      features: [
        'Continuous electronic Radon monitoring (48-hour active tests)',
        'Indoor/outdoor comparative air sampling for mold spore counts',
        'Non-invasive moisture mapping and wall-humidity scanning',
        'Surface tape and swab sampling for physical mold confirmation',
        'Comprehensive diagnostic laboratory reporting'
      ],
      process: [
        'Deployment of specialized active testing instruments at the property',
        'Secure collection and shipping of samples to certified analysis labs',
        'Detailed breakdown of allergen and hazard density levels',
        'Clear remediation recommendations and action plan presentation'
      ],
      whyUs: 'We are an independent inspection firm — we do not sell mold remediation services. This ensures absolute honesty and zero conflict of interest in your test results.',
      timeframe: 'Radon tests require a minimum of 48 hours of active monitoring. Mold and air sample lab analyses are returned in 2 to 3 business days.'
    }
  },
  {
    icon: <Settings className="w-7 h-7 text-brand-default" />,
    title: 'Maintenance & Repair',
    desc: 'Dependable maintenance and repair services handled with precision—identifying issues properly and fixing them the Wright-Way.',
    details: {
      subtitle: 'Structural Wood Rot & Precision Handyman Care',
      description: 'Prevent minor issues from turning into major structural disasters. From replacing structural wood rot to fixing siding, drywall, and deck components, we treat small repairs with extreme care and precision.',
      features: [
        'Fascia, soffit, and siding wood rot repairs',
        'Exterior trim, window sills, and door frame replacements',
        'Attic/crawlspace moisture barriers and ventilation corrections',
        'Deck structural updates, joist sistering, and handrail safety',
        'Premium interior drywall patching and texture matching'
      ],
      process: [
        'Structural inspection to trace the root cause of the damage or leak',
        'Removal of deteriorated material back to sound, healthy timber',
        'Application of weatherproofing, sealing, and insect treatment',
        'Installation of matching premium materials and structural fasteners',
        'Seamless painting or staining to match the surrounding area'
      ],
      whyUs: 'With decades of specialized framing background, we understand exactly how load paths work. We don\'t just cover up rot; we fix the source and reinforce the structural framing correctly.',
      timeframe: 'Most minor maintenance and wood rot repairs are completed in 1 to 2 business days.'
    }
  },
  {
    icon: <Layout className="w-7 h-7 text-brand-default" />,
    title: 'Home Additions',
    desc: 'Expanding your living space with custom additions and extensions designed and built with quality craftsmanship and care.',
    details: {
      subtitle: 'Expanding Your Living Space Seamlessly',
      description: 'Whether you need a sunroom, a detached garage, a master suite extension, or a complete ADU, we handle every detail from soil-compaction and foundation pouring to structural framing and final roof flashing.',
      features: [
        'Custom master suite extensions and room expansions',
        'Premium screened-in porches, sunrooms, and detached structures',
        'Accessory Dwelling Units (ADUs) and mother-in-law suites',
        'Detached workshops, garages, and structured outbuildings',
        'Seamless tie-ins to existing rooflines and siding'
      ],
      process: [
        'Feasibility check, zoning verification, and plan drafting',
        'Site grading, excavation, and foundation concrete pouring',
        'High-integrity wall framing, truss setting, and roof dry-in',
        'Sub-contracted mechanicals (HVAC, plumbing, electric) with strict oversight',
        'Drywall, siding, painting, and high-end trim finishes'
      ],
      whyUs: 'Framing is our core expertise. We construct additions to meet and exceed local South Carolina building codes, ensuring proper load transfer and complete structural integration with your current home.',
      timeframe: 'Additions generally take 4 to 12 weeks depending on the complexity, foundation requirements, and weather conditions.'
    }
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-brand-default" />,
    title: 'Consultation',
    desc: 'Expert advice for your home projects. We help you plan your next step correctly, avoiding costly mistakes from the start.',
    details: {
      subtitle: 'Expert Contractor Oversight & Project Planning',
      description: 'Ensure your upcoming home projects run smoothly and correctly. We act as your unbiased advisor, reviewing contractor bids, checking other builders\' framing/rough-in phases, and planning structural DIY projects to avoid code violations.',
      features: [
        'Detailed contractor bid reviews and budget verification',
        'Third-party framing and rough-in phase inspections',
        'Structural feasibility consultations for load-bearing walls',
        'Pre-purchase remodeling consultations (cost and scope advice)',
        'Zoning and South Carolina building code compliance coaching'
      ],
      process: [
        'Review of architectural plans, contracts, or target spaces',
        'Professional walkthrough or detailed document analysis',
        'Comprehensive identification of potential bottlenecks or overcharges',
        'Written findings and objective action plan provided to you'
      ],
      whyUs: 'As an active building inspector, we are fully up-to-date on SC residential codes. We don\'t have skin in the game other than your complete protection, giving you a powerful, knowledgeable advocate.',
      timeframe: 'Consultations can be booked for 1 to 2-hour onsite visits, with follow-up reports delivered within 24 hours.'
    }
  }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  useEffect(() => {
    const wrapper = document.getElementById('app-wrapper');
    if (selectedService) {
      if (wrapper) {
        wrapper.style.overflowY = 'hidden';
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (wrapper) {
        wrapper.style.overflowY = 'auto';
      }
      document.body.style.overflow = 'unset';
    }
    return () => {
      if (wrapper) {
        wrapper.style.overflowY = 'auto';
      }
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

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
              From detailed inspections to full-scale remodels, we\'ve got your home covered.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="service-card bg-navy-default/30 border border-white/10 rounded-2xl p-6 hover:border-brand-default/30 hover:bg-navy-default/50 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-default/10 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                </div>
                <div>
                  <button
                    onClick={() => setSelectedService(item)}
                    className="text-brand-default font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer bg-transparent border-none p-0 outline-none"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl bg-navy-light border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors cursor-pointer z-20"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-white/10 flex items-start gap-4 pr-14 flex-shrink-0 bg-navy-default/20">
                <div className="w-14 h-14 rounded-xl bg-brand-default/10 flex items-center justify-center flex-shrink-0 text-brand-default">
                  {selectedService.icon}
                </div>
                <div>
                  <span className="text-brand-default text-xs font-bold uppercase tracking-widest block mb-1">
                    {selectedService.details.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow flex flex-col gap-6 custom-scrollbar">
                {/* Intro Description */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {selectedService.details.description}
                </p>

                {/* Timeline / QA Stats */}
                <div className="grid sm:grid-cols-2 gap-4 bg-navy-default/40 border border-white/5 rounded-xl p-4 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-brand-default flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Typical Timeline</span>
                      <span className="text-gray-400 text-xs">{selectedService.details.timeframe}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-default flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold block">Quality Assurance</span>
                      <span className="text-gray-400 text-xs">Fully compliant, state-licensed oversight</span>
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 text-brand-default/90">
                    Key Services &amp; Coverage
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {selectedService.details.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-default flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Steps */}
                <div className="border-t border-white/5 pt-5">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-brand-default/90">
                    The Wright-Way Process
                  </h4>
                  <div className="flex flex-col gap-3">
                    {selectedService.details.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-3.5 text-sm text-gray-300">
                        <div className="w-6 h-6 rounded-full bg-brand-default/10 border border-brand-default/20 flex items-center justify-center text-brand-default font-semibold text-xs flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="mt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Us Highlight */}
                <div className="bg-brand-default/5 border border-brand-default/10 rounded-xl p-4 mt-2">
                  <h4 className="text-brand-default font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> The Wright-Way Difference
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{selectedService.details.whyUs}"
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-navy-default/50 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-shrink-0">
                <div className="text-xs text-gray-400">
                  Ready to start? Let us assess your home the Wright-Way.
                </div>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 border border-white/15 hover:border-white/30 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer bg-transparent"
                  >
                    Close Window
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="btn-gradient px-5 py-2 rounded-lg text-sm font-semibold text-center hover:opacity-95 transition-opacity"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                  Robert stands by every single report item and construction finish details. We aren\'t finished until the job is done your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
