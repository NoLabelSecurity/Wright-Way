import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  ClipboardList,
  MessageSquare,
  Loader2,
  Send,
  ShieldCheck,
  Clock,
  DollarSign,
  Check,
  PhoneCall,
  Calendar,
  Home,
  Share2
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setFeedback({
        type: 'error',
        message: 'Please fill out all required fields.'
      });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFeedback({
          type: 'success',
          message: '✓ Message sent successfully! We’ll get back to you shortly.'
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or call us directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch w-full mx-auto">
      {/* LEFT CONTENT COLUMN - EQUAL 50% WIDTH CARD */}
      <div className="bg-navy-light/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden text-left h-full">
        <div className="absolute top-0 left-0 w-40 h-40 bg-brand-default/10 rounded-full blur-2xl -ml-10 -mt-10 pointer-events-none"></div>

        <div className="space-y-4 relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-brand-default font-semibold text-[10px] uppercase tracking-widest bg-brand-default/10 px-3 py-1 rounded-full mb-2 border border-brand-default/20">
              Get In Touch
            </span>
            <h2 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
              Let's Get Your Project Started
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">
              Whether you're buying a home, planning a remodel, or tackling repairs, Wright-Way Services is here to help. We provide honest inspections, quality craftsmanship, and dependable service throughout Lexington, SC and the surrounding Midlands.
            </p>
          </div>

          {/* WHAT YOU CAN REQUEST */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
            <h3 className="font-heading font-bold text-xs sm:text-sm text-white mb-2 flex items-center gap-2">
              <ClipboardList className="w-3.5 h-3.5 text-brand-default" />
              <span>What You Can Request</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-200">
              {[
                'Home Inspections',
                'Pre-Listing Inspections',
                'Kitchen Remodeling',
                'Bathroom Remodeling',
                'Interior & Exterior Repairs',
                'Custom Home Improvement Projects'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-brand-default shrink-0" />
                  <span className="text-[11px] sm:text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WHY HOMEOWNERS CHOOSE WRIGHT-WAY */}
          <div>
            <h3 className="font-heading font-bold text-xs sm:text-sm text-white mb-2">
              Why Homeowners Choose Wright-Way
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-brand-default/15 text-brand-default flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-xs">Licensed &amp; Insured</h4>
                </div>
                <p className="text-gray-400 text-[11px] leading-tight">
                  Your home is protected by experienced professionals.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-brand-default/15 text-brand-default flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-xs">Fast Response</h4>
                </div>
                <p className="text-gray-400 text-[11px] leading-tight">
                  Prompt inspection reports and estimate turnarounds.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-brand-default/15 text-brand-default flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-xs">Local Expertise</h4>
                </div>
                <p className="text-gray-400 text-[11px] leading-tight">
                  Serving Lexington, Columbia, and nearby communities.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-2.5 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-brand-default/15 text-brand-default flex items-center justify-center shrink-0">
                    <DollarSign className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-xs">Transparent Pricing</h4>
                </div>
                <p className="text-gray-400 text-[11px] leading-tight">
                  No hidden fees. Honest estimates from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* WHAT HAPPENS NEXT */}
          <div className="border-t border-white/10 pt-3">
            <h3 className="font-heading font-bold text-xs sm:text-sm text-white mb-2">
              What Happens Next?
            </h3>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-300">
              {[
                'Submit your request.',
                "Contacted within 1 business day.",
                'Schedule inspection or estimate.',
                'Job done the Wright-Way.'
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="w-4 h-4 rounded-full bg-brand-default text-navy-dark font-bold text-[9px] flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[11px] text-gray-200">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* RIGHT FORM COLUMN - EQUAL 50% WIDTH CARD */}
      <div className="bg-navy-light/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden h-full w-full">
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-default/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex flex-col h-full justify-between">
            <div className="mb-3">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white">Request a Free Quote</h3>
              <p className="text-gray-400 text-xs mt-0.5">Get an estimate for inspection, remodeling, or custom projects.</p>
            </div>

            {feedback && (
              <div
                className={`mb-3 p-3 rounded-lg text-xs font-medium border ${
                  feedback.type === 'success'
                    ? 'bg-brand-default/10 text-brand-default border-brand-default/20'
                    : 'bg-red-500/10 text-red-500 border-red-500/20'
                }`}
              >
                {feedback.message}
              </div>
            )}

            <form
              id="contact-form"
              action="https://formsubmit.co/wrightway.homeinspection@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-3 flex-1 flex flex-col justify-between"
            >
              <input type="hidden" name="_subject" value="New Service Request from Wright-Way Website" />
              <input type="hidden" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="name">
                    Full Name <span className="text-brand-default">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="email">
                    Email Address <span className="text-brand-default">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="phone">
                    Phone Number <span className="text-brand-default">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs"
                      placeholder="(803) 555-0199"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="location">
                    Project Location (City/Zip)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="w-full bg-white/5 border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs"
                      placeholder="Lexington, SC"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="service">
                    Requested Service <span className="text-brand-default">*</span>
                  </label>
                  <div className="relative">
                    <ClipboardList className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full bg-navy-light border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="Home Inspection">Home Inspection (Licensed)</option>
                      <option value="Home Remodeling">Kitchen/Bathroom Remodeling</option>
                      <option value="Home Maintenance">Home Maintenance &amp; Repair</option>
                      <option value="Water/Mold Testing">Radon, Water &amp; Mold Testing</option>
                      <option value="Custom Project">Other Custom Project</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="contactMethod">
                    Preferred Contact Method <span className="text-gray-400 font-normal text-[10px]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <PhoneCall className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <select
                      id="contactMethod"
                      name="preferred_contact_method"
                      defaultValue=""
                      className="w-full bg-navy-light border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs appearance-none cursor-pointer"
                    >
                      <option value="">Preferred Contact Method</option>
                      <option value="Phone">Phone</option>
                      <option value="Text">Text</option>
                      <option value="Email">Email</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="timeline">
                    Timeline <span className="text-gray-400 font-normal text-[10px]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue=""
                      className="w-full bg-navy-light border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs appearance-none cursor-pointer"
                    >
                      <option value="">When would you like this completed?</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within a Week">Within a Week</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="1–3 Months">1–3 Months</option>
                      <option value="Just Gathering Quotes">Just Gathering Quotes</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="occupied">
                    Occupied? <span className="text-gray-400 font-normal text-[10px]">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                    <select
                      id="occupied"
                      name="is_occupied"
                      defaultValue=""
                      className="w-full bg-navy-light border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs appearance-none cursor-pointer"
                    >
                      <option value="">Select Occupancy Status</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="referral">
                  Referral <span className="text-gray-400 font-normal text-[10px]">(Optional)</span>
                </label>
                <div className="relative">
                  <Share2 className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500" />
                  <select
                    id="referral"
                    name="referral_source"
                    defaultValue=""
                    className="w-full bg-navy-light border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs appearance-none cursor-pointer"
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Realtor">Realtor</option>
                    <option value="Friend">Friend</option>
                    <option value="Yard Sign">Yard Sign</option>
                    <option value="Repeat Customer">Repeat Customer</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col min-h-[100px]">
                <label className="block text-gray-300 text-[11px] font-semibold mb-1" htmlFor="message">
                  Project Details &amp; Message
                </label>
                <div className="relative flex-1 flex flex-col">
                  <MessageSquare className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-500 z-10" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full h-full flex-1 min-h-[90px] bg-white/5 border border-white/15 rounded-lg py-2 pl-8 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-1 focus:ring-brand-default/20 transition-all text-xs resize-y"
                    placeholder="Tell us about your home project, timing, or inspection requirements..."
                  />
                </div>
              </div>

              <button
                id="submit-btn"
                type="submit"
                disabled={loading}
                className="w-full btn-gradient py-3 rounded-lg font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-3 shadow-md"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

