import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [currency, setCurrency] = useState('RWF');
  const [seatsLeft, setSeatsLeft] = useState(15);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  // Handle path-based deep linking for SEO and direct URLs
  useEffect(() => {
    const pathToIdMap = {
      '/about': 'about',
      '/services': 'services',
      '/enterprise': 'services',
      '/bootcamp': 'programs',
      '/programs': 'programs',
      '/curriculum': 'curriculum',
      '/syllabus': 'curriculum',
      '/simulator': 'simulator',
      '/instructors': 'instructors',
      '/faculty': 'instructors',
      '/faq': 'faq',
      '/certificate': 'certificate'
    };

    const pathname = window.location.pathname.replace(/\/$/, '') || '/';
    const targetId = pathToIdMap[pathname] || (window.location.hash ? window.location.hash.substring(1) : null);

    if (targetId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
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
      />

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

      <Footer />

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
