import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenEnroll, currency, setCurrency, seatsLeft, currentView = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > 60 && currentScrollY > lastScrollY.current && !mobileMenuOpen) {
        setNavHidden(true);
      } else if (currentScrollY < lastScrollY.current || currentScrollY <= 20) {
        setNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const handleNavClick = (targetId = null) => {
    setMobileMenuOpen(false);
    if (targetId && onNavigate) {
      onNavigate('home', targetId);
    }
  };

  const handleHomeLinkClick = (e, targetId) => {
    if (currentView !== 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('home', targetId);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${navHidden ? 'navbar-hidden' : ''}`}>
      <div className="container navbar-container">
        <a 
          href="/" 
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
          }}
        >
          <div className="logo-badge">
            <img src="/baza_logo_badge.webp" alt="BazaDevSpace Logo" className="logo-img" />
          </div>
          <div className="logo-text">
            <span className="logo-title">BAZADEVSPACE</span>
            <span className="logo-subtitle">AI ACADEMY & ENTERPRISE</span>
          </div>
        </a>

        {/* Streamlined Desktop Links */}
        <nav className="navbar-links desktop-only">
          <a 
            href="#products" 
            className={currentView === 'products' ? 'active-nav-link' : ''}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('products');
            }}
          >
            Products
            <span className="nav-new-badge">Baza AI</span>
          </a>
          <a href="#about" onClick={(e) => handleHomeLinkClick(e, 'about')}>About</a>
          <a href="#services" onClick={(e) => handleHomeLinkClick(e, 'services')}>Services</a>
          <a href="#programs" onClick={(e) => handleHomeLinkClick(e, 'programs')}>Bootcamp</a>
          <a href="#simulator" onClick={(e) => handleHomeLinkClick(e, 'simulator')}>Simulator</a>
          <a href="#instructors" onClick={(e) => handleHomeLinkClick(e, 'instructors')}>Instructors</a>
          <a href="#faq" onClick={(e) => handleHomeLinkClick(e, 'faq')}>FAQ</a>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions desktop-only">
          <div className="currency-selector">
            <span className="currency-label">Currency:</span>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="RWF">RWF (Fr)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="KES">KES (KSh)</option>
            </select>
          </div>

          <button className="btn-primary btn-nav" onClick={onOpenEnroll}>
            <Sparkles size={16} />
            <span>Apply Now</span>
            <span className="seats-badge">{seatsLeft} seats</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-hamburger-btn mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-drawer-links">
            <a 
              href="#products" 
              className={currentView === 'products' ? 'active-nav-link' : ''}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onNavigate) onNavigate('products');
              }}
            >
              ✨ Products (Baza AI)
            </a>
            <a href="#about" onClick={() => handleNavClick('about')}>About Us</a>
            <a href="#mission" onClick={() => handleNavClick('mission')}>Mission & Vision</a>
            <a href="#services" onClick={() => handleNavClick('services')}>Enterprise Services</a>
            <a href="#programs" onClick={() => handleNavClick('programs')}>Flagship Bootcamp</a>
            <a href="#simulator" onClick={() => handleNavClick('simulator')}>Loop Simulator</a>
            <a href="#curriculum" onClick={() => handleNavClick('curriculum')}>Syllabus & Curriculum</a>
            <a href="#instructors" onClick={() => handleNavClick('instructors')}>Instructors</a>
            <a href="#faq" onClick={() => handleNavClick('faq')}>FAQ</a>
          </nav>

          <div className="mobile-drawer-actions">
            <div className="currency-selector mobile-currency">
              <span className="currency-label"><Globe size={14} /> Select Currency:</span>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <option value="RWF">RWF (Fr)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="KES">KES (KSh)</option>
              </select>
            </div>

            <button className="btn-primary btn-full-mobile" onClick={() => { setMobileMenuOpen(false); onOpenEnroll(); }}>
              <Sparkles size={18} />
              <span>Apply Now ({seatsLeft} seats remaining)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
