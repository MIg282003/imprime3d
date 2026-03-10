import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustedCompanies from '../components/TrustedCompanies';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import MaterialsSection from '../components/MaterialsSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />
      <HeroSection />
      <TrustedCompanies />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <MaterialsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
