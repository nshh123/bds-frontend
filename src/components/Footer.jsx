import React from 'react';
import { Cpu, Mail, Globe, ArrowUp, Code, MessageSquare, Share2 } from 'lucide-react';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, view, targetId) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(view, targetId);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a 
              href="/" 
              className="navbar-logo"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              <div className="logo-badge">
                <img src="/baza_logo_badge.webp" alt="BazaDevSpace Logo" className="logo-img" />
              </div>
              <div className="logo-text">
                <span className="logo-title">BAZADEVSPACE</span>
                <span className="logo-subtitle">ADVANCED AI ACADEMY</span>
              </div>
            </a>
            <p className="footer-mission">
              Empowering engineers, builders, and leaders to master cutting-edge AI coding 
              and autonomous loop engineering workflows.
            </p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title font-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleNavClick(e, 'products')}
                  style={{ color: 'var(--primary-blue)', fontWeight: '700' }}
                >
                  ✨ Products (Baza AI)
                </a>
              </li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'home', 'about')}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'home', 'services')}>Services</a></li>
              <li><a href="#simulator" onClick={(e) => handleNavClick(e, 'home', 'simulator')}>Loop Simulator</a></li>
              <li><a href="#curriculum" onClick={(e) => handleNavClick(e, 'home', 'curriculum')}>Curriculum</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'home', 'programs')}>Bootcamp</a></li>
              <li><a href="#certificate" onClick={(e) => handleNavClick(e, 'home', 'certificate')}>Certificate</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, 'home', 'faq')}>FAQ</a></li>
            </ul>
          </div>

          {/* Official Contact Info from Flyer */}
          <div className="footer-col">
            <h4 className="footer-col-title font-heading">Contact & Details</h4>
            <div className="contact-list">
              <div className="contact-item">
                <Globe size={16} className="text-cyan" />
                <a href="https://www.bazadevspace.com" target="_blank" rel="noreferrer">
                  www.bazadevspace.com
                </a>
              </div>
              <div className="contact-item">
                <Mail size={16} className="text-cyan" />
                <a href="mailto:info@bazadevspace.com">
                  info@bazadevspace.com
                </a>
              </div>
            </div>

            <div className="cohort-launch-pill glass-card-solid">
              <span className="pill-dot"></span>
              <span>Cohort Starts: August 10th, 2026</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BazaDevSpace. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
