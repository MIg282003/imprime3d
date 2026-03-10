import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      'bg-gray-950/95 backdrop-blur-lg border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5' :
      'bg-transparent'}`
      }>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://customer-assets.emergentagent.com/job_build-reality-2/artifacts/vlaerbh6_Captura_de_pantalla_2026-03-01_161738-removebg-preview.png"
              alt="Matrix3D Logo"
              className="h-14 w-14 object-contain !pt-[7px] !pb-[7px] !pl-[5px] !pr-[2px]" />

            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent">
              Matrix3D
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium">

              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium">

              Servicios
            </button>
            <button
              onClick={() => scrollToSection('materiales')}
              className="text-gray-300 hover:text-orange-300 transition-colors duration-200 font-medium">

              Materiales
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-lime-300 transition-colors duration-200 font-medium">

              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium">

              Contacto
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+34644382702"
              className="flex items-center text-gray-400 hover:text-orange-400 transition-colors duration-200">

              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+34 644 382 702</span>
            </a>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-cyan-400 to-orange-400 hover:from-cyan-300 hover:to-orange-300 text-white font-semibold px-6 py-2 rounded-lg shadow-lg shadow-cyan-400/30 transition-all duration-300 hover:shadow-cyan-400/50 hover:scale-105">

              Solicitar Presupuesto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
        <div className="lg:hidden py-4 space-y-4 border-t border-cyan-500/10 bg-gray-950/95 backdrop-blur-lg">
            <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/5 rounded transition-colors">

              Inicio
            </button>
            <button
            onClick={() => scrollToSection('servicios')}
            className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/5 rounded transition-colors">

              Servicios
            </button>
            <button
            onClick={() => scrollToSection('materiales')}
            className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-300 hover:bg-orange-500/5 rounded transition-colors">

              Materiales
            </button>
            <button
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-left px-4 py-2 text-gray-300 hover:text-lime-300 hover:bg-lime-500/5 rounded transition-colors">

              Portfolio
            </button>
            <button
            onClick={() => scrollToSection('contacto')}
            className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/5 rounded transition-colors">

              Contacto
            </button>
            <div className="px-4 pt-4 border-t border-cyan-500/10">
              <a
              href="tel:+34644382702"
              className="flex items-center text-gray-400 hover:text-orange-400 mb-3">

                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+34 644 382 702</span>
              </a>
              <Button
              onClick={() => scrollToSection('contacto')}
              className="w-full bg-gradient-to-r from-cyan-400 to-orange-400 hover:from-cyan-300 hover:to-orange-300 text-white font-semibold">

                Solicitar Presupuesto
              </Button>
            </div>
          </div>
        }
      </div>
    </header>);

};

export default Header;