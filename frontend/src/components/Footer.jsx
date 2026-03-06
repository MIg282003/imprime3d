import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Impresión 3D Pro', href: '#servicios' },
      { name: 'Diseño y Modelado', href: '#servicios' },
      { name: 'Soluciones a Medida', href: '#servicios' },
      { name: 'Materiales', href: '#materiales' }
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#' },
      { name: 'Proceso', href: '#proceso' },
      { name: 'Contacto', href: '#contacto' },
      { name: 'Presupuesto', href: '#contacto' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'Aviso Legal', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-cyan-500/10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_build-reality-2/artifacts/yjqf6swi_Captura%20de%20pantalla%202026-03-06%20171233.png"
                alt="Matrix3D Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-orange-400 bg-clip-text text-transparent">
                Matrix3D
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Expertos en impresión 3D industrial. Transformamos tus ideas en realidad con 
              tecnología de vanguardia y materiales de alto rendimiento.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:miguelamozamora@gmail.com"
                className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm">miguelamozamora@gmail.com</span>
              </a>

              <a
                href="tel:+34644382702"
                className="flex items-center text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-sm">+34 644 382 702</span>
              </a>

              <div className="flex items-start text-gray-400 group">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">
                  Prado de Enebros N24<br />
                  Colmenar Viejo, Madrid 28770
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Matrix3D. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
