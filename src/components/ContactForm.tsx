import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, ClipboardList, MessageSquare, Loader2, Send } from 'lucide-react';

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
    <div className="bg-navy-light/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-default/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      
      <div className="mb-8">
        <h3 className="font-heading font-black text-2xl text-white">Request a Free Quote</h3>
        <p className="text-gray-400 text-sm mt-1">Get an estimate for inspection, remodeling, or custom projects.</p>
      </div>

      {feedback && (
        <div
          className={`mb-5 p-4 rounded-xl text-sm font-medium border ${
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
        className="space-y-6"
      >
        <input type="hidden" name="_subject" value="New Service Request from Wright-Way Website" />
        <input type="hidden" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
              Full Name <span className="text-brand-default">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-2 focus:ring-brand-default/20 transition-all text-sm"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
              Email Address <span className="text-brand-default">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-2 focus:ring-brand-default/20 transition-all text-sm"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="phone">
              Phone Number <span className="text-brand-default">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full bg-white/5 border border-white/15 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-2 focus:ring-brand-default/20 transition-all text-sm"
                placeholder="(803) 555-0199"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="location">
              Project Location (City/Zip)
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                id="location"
                name="location"
                className="w-full bg-white/5 border border-white/15 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-2 focus:ring-brand-default/20 transition-all text-sm"
                placeholder="Lexington, SC"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="service">
            Requested Service <span className="text-brand-default">*</span>
          </label>
          <div className="relative">
            <ClipboardList className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full bg-navy-light border border-white/15 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-2 focus:ring-brand-default/20 transition-all text-sm appearance-none"
            >
              <option value="" disabled>Select a Service</option>
              <option value="Home Inspection">Home Inspection (Licensed)</option>
              <option value="Home Remodeling">Kitchen/Bathroom Remodeling</option>
              <option value="Home Maintenance">Home Maintenance &amp; Repair</option>
              <option value="Water/Mold Testing">Radon, Water &amp; Mold Testing</option>
              <option value="Custom Project">Other Custom Project</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
              ▼
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
            Project Details &amp; Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-white/5 border border-white/15 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-default focus:ring-2 focus:ring-brand-default/20 transition-all text-sm"
              placeholder="Tell us about your home project, timing, or inspection requirements..."
            />
          </div>
        </div>

        <button
          id="submit-btn"
          type="submit"
          disabled={loading}
          className="w-full btn-gradient py-4 rounded-xl font-heading font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Request</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
