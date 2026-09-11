import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyAbout from './components/CompanyAbout';
import CompanyServices from './components/CompanyServices';
import BootcampCard from './components/BootcampCard';
import LoopVisualizer from './components/LoopVisualizer';
import Curriculum from './components/Curriculum';
import Instructors from './components/Instructors';
import CertificatePreview from './components/CertificatePreview';
import FAQ from './components/FAQ';
import EnrollmentModal from './components/EnrollmentModal';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import PrivacyPage from './components/PrivacyPage';

const PATH_TO_META_MAP = {
  '/': { title: 'BazaDevSpace | Advanced AI Coding & Loop Engineering Bootcamp' },
  '/products': { title: 'Products & Baza AI | BazaDevSpace' },
  '/privacy': { title: 'Privacy Policy - Baza AI | BazaDevSpace' },
  '/privacy-policy': { title: 'Privacy Policy - Baza AI | BazaDevSpace' },
  '/baza-ai/privacy': { title: 'Privacy Policy - Baza AI | BazaDevSpace' },
  '/about': { id: 'about', title: 'About Us | BazaDevSpace' },
  '/services': { id: 'services', title: 'Enterprise AI Services | BazaDevSpace' },
  '/enterprise': { id: 'services', title: 'Enterprise AI Services | BazaDevSpace' },
  '/bootcamp': { id: 'programs', title: 'AI Bootcamp & Programs | BazaDevSpace' },
  '/programs': { id: 'programs', title: 'AI Bootcamp & Programs | BazaDevSpace' },
  '/curriculum': { id: 'curriculum', title: 'Curriculum & Syllabus | BazaDevSpace' },
  '/syllabus': { id: 'curriculum', title: 'Curriculum & Syllabus | BazaDevSpace' },
  '/simulator': { id: 'simulator', title: 'Autonomous Loop Simulator | BazaDevSpace' },
  '/instructors': { id: 'instructors', title: 'Mentors & Instructors | BazaDevSpace' },
  '/faculty': { id: 'instructors', title: 'Mentors & Instructors | BazaDevSpace' },
  '/faq': { id: 'faq', title: 'Frequently Asked Questions | BazaDevSpace' },
  '/certificate': { id: 'certificate', title: 'Certified AI Loop Engineer | BazaDevSpace' }
};

export default function App() {
  const [currency, setCurrency] = useState('RWF');
  const [seatsLeft, setSeatsLeft] = useState(15);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (path === '/privacy' || path === '/privacy-policy' || path === '/baza-ai/privacy' || window.location.hash === '#privacy') {
      return 'privacy';
    }
    return path === '/products' || window.location.hash === '#products' ? 'products' : 'home';
  });

  const navigateTo = useCallback((view, targetId = null) => {
    setCurrentView(view);
    const newPath = view === 'products' ? '/products' : (view === 'privacy' ? '/privacy' : (targetId ? `/#${targetId}` : '/'));
    
    if (window.location.pathname !== (view === 'products' ? '/products' : (view === 'privacy' ? '/privacy' : '/'))) {
      window.history.pushState({ view, targetId }, '', newPath);
    }

    const meta = PATH_TO_META_MAP[view === 'products' ? '/products' : (view === 'privacy' ? '/privacy' : '/')];
    if (meta) {
      document.title = meta.title;
    }

    if (view === 'products' || view === 'privacy') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Handle path-based deep linking for SEO, direct URLs and popstate
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      const isPrivacy = pathname === '/privacy' || pathname === '/privacy-policy' || pathname === '/baza-ai/privacy' || window.location.hash === '#privacy';
      const isProd = pathname === '/products' || window.location.hash === '#products';

      if (isPrivacy) {
        setCurrentView('privacy');
      } else if (isProd) {
        setCurrentView('products');
      } else {
        setCurrentView('home');
      }

      const routeConfig = PATH_TO_META_MAP[pathname] || (isPrivacy ? PATH_TO_META_MAP['/privacy'] : (isProd ? PATH_TO_META_MAP['/products'] : PATH_TO_META_MAP['/']));
      if (routeConfig) {
        document.title = routeConfig.title;
      }
    };

    window.addEventListener('popstate', handlePopState);

    const pathname = window.location.pathname.replace(/\/$/, '') || '/';
    const routeConfig = PATH_TO_META_MAP[pathname];
    const targetId = routeConfig ? routeConfig.id : (window.location.hash ? window.location.hash.substring(1) : null);

    if (routeConfig) {
      document.title = routeConfig.title;
      const canonical = document.querySelector("link[rel='canonical']");
      if (canonical) {
        canonical.setAttribute('href', `https://bazadevspace.company${pathname}`);
      }
    }

    if (targetId && pathname !== '/products' && pathname !== '/privacy' && pathname !== '/privacy-policy' && pathname !== '/baza-ai/privacy') {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('popstate', handlePopState);
      };
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Multi-Currency Converter
  const formatPrice = (amountRWF) => {
    switch (currency) {
      case 'USD':
        return `$ ${(amountRWF / 1350).toFixed(0)}`;
      case 'EUR':
        return `€ ${(amountRWF / 1450).toFixed(0)}`;
      case 'KES':
        return `KSh ${(amountRWF / 10).toLocaleString()}`;
      case 'RWF':
      default:
        return `RWF ${amountRWF.toLocaleString()}`;
    }
  };

  const handleEnrollSuccess = () => {
    if (seatsLeft > 1) {
      setSeatsLeft(prev => prev - 1);
    }
  };

  return (
    <div className="app">
      <Navbar
        onOpenEnroll={() => setIsEnrollOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
        seatsLeft={seatsLeft}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {currentView === 'privacy' ? (
        <PrivacyPage onBackToHome={() => navigateTo('home')} />
      ) : currentView === 'products' ? (
        <ProductsPage 
          onBackToHome={() => navigateTo('home')}
          onOpenEnroll={() => setIsEnrollOpen(true)}
        />
      ) : (
        <main>
          <Hero
            onOpenEnroll={() => setIsEnrollOpen(true)}
            formatPrice={formatPrice}
            seatsLeft={seatsLeft}
          />

          <CompanyAbout />

          <CompanyServices onOpenEnroll={() => setIsEnrollOpen(true)} />

          <BootcampCard
            onOpenEnroll={() => setIsEnrollOpen(true)}
            formatPrice={formatPrice}
            seatsLeft={seatsLeft}
          />

          <LoopVisualizer />

          <Curriculum />

          <Instructors />

          <CertificatePreview />

          <FAQ />
        </main>
      )}

      <Footer onNavigate={navigateTo} />

      <EnrollmentModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        currency={currency}
        formatPrice={formatPrice}
        onEnrollSuccess={handleEnrollSuccess}
        seatsLeft={seatsLeft}
      />
    </div>
  );
}
