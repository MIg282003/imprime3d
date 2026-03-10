import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import MaterialsSection from '../components/MaterialsSection';
import ProductCatalogSection from '../components/ProductCatalogSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <MaterialsSection />
      <ProductCatalogSection />
      <PortfolioSection />
      <ProcessSection />
      <GoogleReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
