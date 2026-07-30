import React, { useState } from 'react';
import { Award, ShieldCheck, UserCheck, FileText, BadgeCheck, Clock, Map, MapPin, Building, Home, CloudRain, Compass, Shuffle } from 'lucide-react';

interface ServiceLocation {
  id: string;
  name: string;
  subtext: string;
  badge?: string;
  lat: number;
  lng: number;
  zoom: number;
}

const serviceLocations: ServiceLocation[] = [
  {
    id: 'lexington',
    name: 'Lexington, SC',
    subtext: 'Primary Headquarters',
    badge: 'HQ',
    lat: 33.9822,
    lng: -81.2362,
    zoom: 13
  },
  {
    id: 'columbia',
    name: 'Columbia, SC',
    subtext: 'Metro Area Coverage',
    lat: 34.0007,
    lng: -81.0348,
    zoom: 12
  },
  {
    id: 'west-columbia',
    name: 'West Columbia, SC',
    subtext: 'Cayce & West Metro',
    lat: 33.9935,
    lng: -81.0739,
    zoom: 13
  },
  {
    id: 'irmo',
    name: 'Irmo, SC',
    subtext: 'Suburban & Lake Corridor',
    lat: 34.0863,
    lng: -81.1832,
    zoom: 13
  },
  {
    id: 'chapin',
    name: 'Chapin, SC',
    subtext: 'Lake Murray Region',
    lat: 34.1673,
    lng: -81.3484,
    zoom: 13
  },
  {
    id: 'richland',
    name: 'Richland County',
    subtext: 'Forest Acres & Blythewood',
    lat: 34.0370,
    lng: -80.9066,
    zoom: 11
  },
  {
    id: 'batesburg',
    name: 'Batesburg-Leesville, SC',
    subtext: 'Extended Coverage Area',
    lat: 33.9101,
    lng: -81.5373,
    zoom: 12
  }
];

interface AreaCardData {
  icon: React.ReactNode;
  name: string;
  desc: string;
}

const areas: AreaCardData[] = [
  {
    icon: <Building className="w-5 h-5 text-brand-default" />,
    name: 'Columbia, SC',
    desc: "As the state capital, Columbia features a diverse range of historic homes in areas like Shandon and Forest Acres, alongside modern student living and expanding suburbs. Our professional home inspections in Columbia specialize in detecting foundation shifts, analyzing historical electrical configurations, evaluating load-bearing structures, and identifying aging utility lines. In remodeling, our crew is dedicated to preserving your property's classic architectural soul while integrating state-of-the-art kitchens and luxurious bathroom expansions. We ensure full historic preservation guidelines are respected."
  },
  {
    icon: <Home className="w-5 h-5 text-brand-default" />,
    name: 'Lexington, SC',
    desc: 'Our headquarters of Lexington is booming with new custom developments, family communities, and lakeside estates on Lake Murray. For new constructions, we conduct rigorous pre-drywall checks and comprehensive structural sign-offs to keep builders accountable to the highest South Carolina code standards. In Lexington’s established neighborhoods, we are the go-to specialists for high-end kitchen remodels, master bathroom renovations, and custom structural additions, providing detailed itemization and inspector-grade execution from floor joists to shingles.'
  },
  {
    icon: <CloudRain className="w-5 h-5 text-brand-default" />,
    name: 'Irmo, SC',
    desc: 'Suburban communities in Irmo, SC, primarily developed between the 1980s and early 2000s, present unique structural priorities. Irmo’s proximity to water tables introduces distinct crawl space challenges, mold risks, and elevated Radon potentials. Our specialized Radon and Mold testing protocols deliver absolute accuracy. For families in Irmo, we combine inspections with carpentry assets, restoring degraded structural decks, installing active crawl space moisture barriers, and building screened-in porches optimized for Midlands weather.'
  },
  {
    icon: <Compass className="w-5 h-5 text-brand-default" />,
    name: 'Chapin, SC',
    desc: 'Chapin, celebrated as "The Capital on Lake Murray," features upscale lakefront custom homes, historical country estates, and rugged wood properties. Inspecting lakeside structures requires evaluating soil erosion, sub-structure lumber decay, and wood-boring insects. We focus heavily on these critical safety checks. In Chapin, we upgrade outdoor lifestyles with master deck expansions, high-durability screened porches, and timber additions that stand up to waterfront moisture and elevate home value.'
  },
  {
    icon: <Shuffle className="w-5 h-5 text-brand-default" />,
    name: 'West Columbia, SC',
    desc: 'West Columbia offers an exciting mix of historic cottage houses near the Riverwalk and post-war ranch-style homes. Homes of this era require deep expertise in historical foundation framing, structural remediation, and plumbing updates. We provide clear digital reports within 24 hours of inspection. For those looking to remodel in West Columbia or Cayce, we create modern, open-concept floor plans, removing load-bearing walls safely and upgrading kitchens and basements to yield maximum equity.'
  },
  {
    icon: <Map className="w-5 h-5 text-brand-default" />,
    name: 'Richland County, SC',
    desc: 'Serving broad regions across Richland County—including historic Forest Acres, Fort Jackson corridors, and northern Blythewood communities. Older subdivisions require targeted inspections focusing on aging drain fields, sewer line scopes, and obsolete electrical services. Our structural remodeling services in Richland County feature custom sunrooms, framing repairs, and home improvements matching building regulations. Whether buying commercial properties or residential homes, we ensure the integrity of your investments.'
  }
];

export const About: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<ServiceLocation>(serviceLocations[0]);

  const mapUrl = `https://maps.google.com/maps?q=${selectedLoc.lat},${selectedLoc.lng}&z=${selectedLoc.zoom}&output=embed`;

  return (
    <>
      {/* ABOUT ROBERT */}
      <section id="about" className="py-20 sm:py-28 bg-charcoal w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
            <div className="hidden lg:block lg:col-span-5 lg:order-1">
              {/* Robert Photo (Large and Prominent) */}
              <div className="relative max-w-md mx-auto lg:mx-0 p-2 bg-gradient-to-tr from-brand-default to-brand-accent rounded-3xl shadow-2xl">
                <div className="w-full aspect-[4/5] bg-navy-default rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-4">
                  <img
                    src="https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way-Services-LLC/main/img/robert.png"
                    alt="Robert Wright"
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Experience badge */}
                <div className="absolute bottom-3 right-3 bg-navy-default/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex items-center gap-3 border border-white/10 z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2 shrink-0 bg-gradient-to-br from-brand-default to-brand-deep">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="font-heading font-black text-brand-default text-2xl block leading-none">15+</span> 
                    <span className="text-gray-300 text-xs font-semibold">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:col-span-7 text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-default/10 border border-brand-default/30 rounded-full px-4 py-1.5 mb-4 mx-auto lg:mx-0">
                <Award className="w-4 h-4 text-brand-default" /> 
                <span className="text-brand-default text-sm font-semibold">Meet the Owner &amp; Lead Inspector</span>
              </div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-2">Robert Wright</h2>
              <span className="block text-brand-default text-sm font-mono tracking-wider uppercase mb-6">
                Licensed SC Home Inspector #49581 • Certified Remodeler
              </span>
              
              {/* Photo on mobile */}
              <div className="lg:hidden mb-10">
                <div className="relative max-w-[280px] mx-auto p-1.5 bg-gradient-to-tr from-brand-default to-brand-accent rounded-3xl">
                  <div className="w-full aspect-square bg-navy-default rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center p-4">
                    <img
                      src="https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way-Services-LLC/main/img/robert.png"
                      alt="Robert Wright"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-navy-default/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 flex items-center gap-3 border border-white/10 z-10">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-brand-default to-brand-deep">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="font-heading font-black text-brand-default text-lg block leading-none">15+</span> 
                      <span className="text-gray-300 text-[10px] font-semibold">Years Exp</span>
                    </div>
                  </div>
                </div>
              </div>

              <div id="about-bio" className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base space-y-4 text-left">
                <p>
                  Robert Wright founded Wright-Way Services LLC on a clear, non-negotiable principle: <strong>Do it the right way, or don't do it at all.</strong> For over 15 years, Robert has built a reputation throughout the Midlands for unparalleled attention to detail, working seamlessly on both sides of residential security — first as a hands-on specialty framing builder, custom builder, and lead carpentry designer, and now as a state-licensed South Carolina Home Inspector.
                </p>
                <p>
                  This dual expertise is Robert's biggest asset. When inspecting a home, he doesn't just read checklists — he knows exactly how framing layouts, drainage patterns, and electrical configurations affect load stress over semesters. When renovating your kitchen or bathroom, he builds with an inspector's hawk-like caution, guarding against moisture intrusions, poor ventilation, and foundation settling before they ever occur.
                </p>
                <p className="text-gray-400 text-sm italic">
                  Based in Lexington, SC, Robert is a proud family man who treats every property he services with the exact same level of caution, care, and code-aligned safety he insists upon for his own household.
                </p>
              </div>
              
              {/* Credentials Badges */}
              <h4 className="text-white font-heading font-bold text-base mb-4 text-left">Professional Credentials &amp; Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {/* Badge 1 */}
                <div className="bg-navy-default/30 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-brand-default/40 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-brand-default shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-sm block leading-tight">Licensed SC Home Inspector</span>
                    <span className="text-gray-400 text-xs mt-1 block">License #49581 verifying complete compliance with South Carolina residential inspection regulations.</span>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="bg-navy-default/30 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-brand-default/40 transition-colors">
                  <UserCheck className="w-6 h-6 text-brand-default shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-sm block leading-tight">Certified InterNACHI Member</span>
                    <span className="text-gray-400 text-xs mt-1 block">Certified member of the International Association of Certified Home Inspectors with continuous education.</span>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="bg-navy-default/30 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-brand-default/40 transition-colors">
                  <Award className="w-6 h-6 text-brand-default shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-sm block leading-tight">15+ Years Field Builder</span>
                    <span className="text-gray-400 text-xs mt-1 block">Over fifteen years of real-world carpentry, structural framing, and home remodeling expertise.</span>
                  </div>
                </div>

                {/* Badge 4 */}
                <div className="bg-navy-default/30 border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-brand-default/40 transition-colors">
                  <FileText className="w-6 h-6 text-brand-default shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white text-sm block leading-tight">Fully Insured &amp; Bonded</span>
                    <span className="text-gray-400 text-xs mt-1 block">Full General Liability coverage ensuring safe, guaranteed inspector-grade workmanship on every job.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA MAP AND TEXT CHUNKS */}
      <section id="service-area" className="py-20 sm:py-28 w-full" style={{ background: '#0f1419' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-default/10 border border-brand-default/30 rounded-full px-4 py-1.5 mb-4">
              <Map className="w-4 h-4 text-brand-default" /> 
              <span className="text-brand-default text-sm font-semibold">Service Area</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
              Proudly Serving the Midlands Area
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Map Canvas (Increased Map Width: 8 out of 12 columns) */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy-default h-[380px] sm:h-[450px]">
                {/* Active Location Focus Badge */}
                <div className="absolute top-3 left-3 z-20 bg-navy-default/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-white/15 shadow-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-default animate-pulse" />
                  <span>Focused on: <strong className="text-brand-default font-heading">{selectedLoc.name}</strong></span>
                </div>

                <iframe
                  key={selectedLoc.id}
                  id="static-map-iframe"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen={false}
                  title={`Map focused on ${selectedLoc.name}`}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Areas We Cover: Reduced Button Size (4 out of 12 columns) */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-bold text-brand-default text-lg">
                  Areas We Cover
                </h3>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                  Click to center
                </span>
              </div>
              <div className="space-y-2">
                {serviceLocations.map((loc) => {
                  const isSelected = selectedLoc.id === loc.id;
                  return (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setSelectedLoc(loc)}
                      className={`w-full text-left transition-all duration-200 rounded-xl p-2.5 sm:p-3 border flex items-center justify-between cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-default ${
                        isSelected
                          ? 'bg-brand-default/20 border-brand-default text-white shadow-md ring-1 ring-brand-default/40'
                          : 'bg-navy-default/40 border-white/10 text-gray-300 hover:bg-white/10 hover:border-brand-default/30 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-brand-default text-navy-default font-bold' : 'bg-brand-default/10 text-brand-default'
                        }`}>
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <div className="truncate">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-xs sm:text-sm truncate">{loc.name}</span>
                            {loc.badge && (
                              <span className="text-[9px] font-black bg-brand-default/20 text-brand-default border border-brand-default/30 px-1.5 py-0.2 rounded shrink-0">
                                {loc.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-gray-400 block truncate">{loc.subtext}</span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md shrink-0 uppercase tracking-wider transition-all ml-2 ${
                        isSelected ? 'bg-brand-default text-navy-default' : 'bg-white/5 text-gray-400'
                      }`}>
                        {isSelected ? 'Centered' : 'Select'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Local Focus SEO Segment */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="font-heading font-bold text-white text-2xl mb-8 text-center">
              Areas We Serve: Regional Expertise &amp; Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="bg-navy-default/30 border border-white/10 rounded-2xl p-6 hover:border-brand-default/20 transition duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {area.icon}
                      <h4 className="text-white font-bold font-heading text-sm">{area.name}</h4>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
