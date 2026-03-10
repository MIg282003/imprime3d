import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = '34644382702';
  const whatsappMessage = encodeURIComponent('¡Hola! Me gustaría obtener más información sobre sus servicios de impresión 3D.');

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Contactar por WhatsApp"
      >
        {/* Main Button */}
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          {/* Button */}
          <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-gray-950 animate-pulse">
            1
          </div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <span className="text-sm font-medium">¿Necesitas ayuda? Chatea con nosotros</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
          </div>
        </div>
      </button>
    </>
  );
};

export default WhatsAppButton;
