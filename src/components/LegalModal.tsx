import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Cookie, Eye } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'cookie' | 'accessibility' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docType, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (docType) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [docType, onClose]);

  if (!docType) return null;

  const renderContent = () => {
    switch (docType) {
      case 'privacy':
        return (
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-brand-default pb-2 border-b border-white/10">
              <ShieldCheck className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-heading font-bold text-white">Privacy Policy</h2>
            </div>
            <p className="text-xs text-gray-400">Effective Date: January 1, 2026 | Last Updated: August 2026</p>
            
            <h3 className="text-white font-semibold text-base pt-2">1. Overview</h3>
            <p>
              Wright-Way Services LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard personal information submitted through our website and service channels.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">2. Information We Collect</h3>
            <p>
              When you submit a request or contact form on our site, we collect information necessary to provide quotes and perform services, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Property address &amp; service area details</li>
              <li>Project scope or service notes</li>
            </ul>

            <h3 className="text-white font-semibold text-base pt-2">3. How We Use Your Information</h3>
            <p>
              Your information is used strictly to communicate with you regarding service inquiries, generate electronic quotes, schedule home inspections or remodeling work, and provide customer support. We do NOT sell, rent, or trade your personal information to third parties or marketing brokers.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">4. Data Security</h3>
            <p>
              We implement industry-standard encryption and secure handling practices for all digital communications and form submissions. Access to personal records is limited strictly to authorized company personnel.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">5. Contact Us</h3>
            <p>
              If you have any questions regarding this Privacy Policy or your personal information, please contact Robert Wright at:
            </p>
            <p className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs">
              <strong>Wright-Way Services LLC</strong><br />
              Email: wrightway.homeinspection@gmail.com<br />
              Phone: (803) 530-3722<br />
              Location: Lexington, SC 29072
            </p>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-brand-default pb-2 border-b border-white/10">
              <FileText className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-heading font-bold text-white">Terms of Service</h2>
            </div>
            <p className="text-xs text-gray-400">Effective Date: January 1, 2026 | Last Updated: August 2026</p>

            <h3 className="text-white font-semibold text-base pt-2">1. Agreement to Terms</h3>
            <p>
              By accessing our website or requesting service quotes, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please do not use our online services.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">2. Scope of Services</h3>
            <p>
              Wright-Way Services LLC provides licensed home inspections, home remodeling, property repairs, and maintenance in Lexington, Columbia, and surrounding South Carolina areas. All contractual work, scope of work, and pricing agreements are detailed in written service proposals before job initiation.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">3. Quotations &amp; Estimates</h3>
            <p>
              Estimates provided via our website or telephone are based on initial information furnished by the client. Formal binding agreements require an on-site property evaluation or detailed inspection agreement signed by both parties.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">4. Intellectual Property</h3>
            <p>
              All content on this website—including images, logos, copy, inspection report formats, and graphics—is the property of Wright-Way Services LLC and protected under copyright laws.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">5. Contact Information</h3>
            <p className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs">
              <strong>Wright-Way Services LLC</strong><br />
              Email: wrightway.homeinspection@gmail.com<br />
              Phone: (803) 530-3722
            </p>
          </div>
        );

      case 'cookie':
        return (
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-brand-default pb-2 border-b border-white/10">
              <Cookie className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-heading font-bold text-white">Cookie Policy</h2>
            </div>
            <p className="text-xs text-gray-400">Effective Date: January 1, 2026 | Last Updated: August 2026</p>

            <h3 className="text-white font-semibold text-base pt-2">1. What Are Cookies?</h3>
            <p>
              Cookies are small text files stored on your device when visiting a website. They help optimize site navigation and remember user preferences.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">2. How We Use Cookies &amp; Storage</h3>
            <p>
              Wright-Way Services LLC uses minimal essential browser storage strictly for essential website functionality, such as maintaining theme settings, smooth layout rendering, and interactive form feedback.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">3. Third-Party Tracking</h3>
            <p>
              We do NOT use invasive advertising tracking pixels, cross-site profiling cookies, or third-party data broker scripts.
            </p>

            <h3 className="text-white font-semibold text-base pt-2">4. Managing Preferences</h3>
            <p>
              You can adjust your browser settings at any time to block or delete cookies. Note that disabling essential web storage may affect interactive form features.
            </p>
          </div>
        );

      case 'accessibility':
        return (
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <div className="flex items-center gap-3 text-brand-default pb-2 border-b border-white/10">
              <Eye className="w-6 h-6 shrink-0" />
              <h2 className="text-xl font-heading font-bold text-white">Accessibility Statement</h2>
            </div>
            <p className="text-xs text-gray-400">Effective Date: January 1, 2026 | Last Updated: August 2026</p>

            <h3 className="text-white font-semibold text-base pt-2">1. Our Commitment</h3>
            <p>
              Wright-Way Services LLC is committed to ensuring digital accessibility for people of all abilities. We continuously improve the user experience for everyone and apply relevant accessibility standards (WCAG 2.1 Level AA).
            </p>

            <h3 className="text-white font-semibold text-base pt-2">2. Measures Taken</h3>
            <p>
              To ensure accessibility across our site, we implement the following measures:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Semantic HTML5 structure for assistive technology compatibility</li>
              <li>High contrast ratio colors compliant with WCAG AA standards</li>
              <li>Keyboard navigable menus, forms, interactive components, and dialogs</li>
              <li>Descriptive alt text on images and interactive graphics</li>
              <li>Skip navigation links for screen reader users</li>
            </ul>

            <h3 className="text-white font-semibold text-base pt-2">3. Feedback &amp; Contact</h3>
            <p>
              We welcome your feedback on the accessibility of the Wright-Way Services website. If you encounter any accessibility barriers or require assistance, please contact us:
            </p>
            <p className="bg-white/5 p-3 rounded-lg border border-white/10 text-xs">
              <strong>Wright-Way Services LLC</strong><br />
              Email: wrightway.homeinspection@gmail.com<br />
              Phone: (803) 530-3722
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-navy-default border border-white/20 rounded-2xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {renderContent()}

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-brand-default hover:bg-brand-default/80 text-white rounded-xl text-sm font-semibold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
