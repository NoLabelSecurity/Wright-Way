import React, { useState, useEffect } from 'react';
import { Menu, X, Share2 } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = document.getElementById('app-wrapper');
      if (wrapper) {
        if (wrapper.scrollTop > 80) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    const wrapper = document.getElementById('app-wrapper');
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (wrapper) {
        wrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleShare = async () => {
    const shareUrl = 'https://wright-way-services.netlify.app/';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Wright-Way Services LLC',
          text: 'Expert Home Inspection & Remodeling Services in South Carolina',
          url: shareUrl,
        });
      } catch (err) {
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: (scrolled || mobileMenuOpen) ? 'rgba(11, 34, 57, 0.98)' : 'transparent',
        backdropFilter: (scrolled || mobileMenuOpen) ? 'blur(12px)' : 'none',
        boxShadow: (scrolled || mobileMenuOpen) ? '0 4px 20px rgba(0,0,0,0.25)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          <a href="#hero" className="flex items-center gap-2 hover:opacity-95 transition-opacity">
            <img
              src="https://raw.githubusercontent.com/NoLabelSecurity/Wright-Way-Services-LLC/content/img/logo-transparent-bg.png"
              alt="Wright-Way Services LLC Logo"
              className="h-[90px] sm:h-[105px] w-auto shrink-0 select-none object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-heading font-black text-white text-2xl leading-none tracking-tight block">
                Wright-Way
              </span>
              <span
                className="block text-[10px] text-brand-default font-black tracking-widest uppercase mt-0.5"
                style={{ letterSpacing: '0.15em' }}
              >
                Services LLC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#hero" className="nav-link text-white text-sm font-medium">Home</a>
            <a href="#services" className="nav-link text-white text-sm font-medium">Services</a>
            <a href="#gallery" className="nav-link text-white text-sm font-medium">Gallery</a>
            <a href="#about" className="nav-link text-white text-sm font-medium">About</a>
            <a href="#reviews" className="nav-link text-white text-sm font-medium">Reviews</a>
            <a href="#contact" className="nav-link text-white text-sm font-medium">Contact</a>
            
            {/* Share Button */}
            <button
              onClick={handleShare}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                copied
                  ? 'bg-brand-default/20 border-brand-default text-brand-default'
                  : 'border-white/20 text-white hover:border-brand-default hover:text-brand-default'
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>

            <a href="#contact" className="btn-gradient px-5 py-2 rounded-lg text-sm font-semibold">
              Get a Quote
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            id="mobile-toggle"
            className="lg:hidden text-white cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`mobile-menu lg:hidden transition-all duration-350 ease-in-out ${
            mobileMenuOpen ? 'open' : ''
          }`}
        >
          <div className="bg-navy-light/95 border border-white/10 rounded-2xl p-4 mb-4 shadow-2xl backdrop-blur-lg flex flex-col gap-2">
            <a href="#hero" onClick={closeMobileMenu} className="text-white py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors">Home</a>
            <a href="#services" onClick={closeMobileMenu} className="text-white py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors">Services</a>
            <a href="#gallery" onClick={closeMobileMenu} className="text-white py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors">Gallery</a>
            <a href="#about" onClick={closeMobileMenu} className="text-white py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors">About</a>
            <a href="#reviews" onClick={closeMobileMenu} className="text-white py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors">Reviews</a>
            <a href="#contact" onClick={closeMobileMenu} className="text-white py-2.5 px-3 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors">Contact</a>
            
            {/* Mobile Share Button */}
            <button
              onClick={() => {
                handleShare();
                setTimeout(closeMobileMenu, 1000);
              }}
              className={`w-full py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                copied
                  ? 'bg-brand-default/20 text-brand-default'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Share2 className="w-4.5 h-4.5" />
              <span>{copied ? 'COPIED!' : 'SHARE'}</span>
            </button>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="btn-gradient text-center py-3 px-3 rounded-xl text-sm font-semibold shadow-lg mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
