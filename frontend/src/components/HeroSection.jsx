import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1603974739172-4ad6a3117e40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwM0QlMjBwcmludGVyfGVufDB8fHx8MTc3MjgxMzc5N3ww&ixlib=rb-4.1.0&q=85"
          alt="Impresión 3D Industrial"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/80 to-gray-950"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Tecnología de Impresión 3D Industrial</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              Transformamos Ideas
            </span>
            <br />
            <span className="text-white">en Objetos Físicos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fabricación aditiva de precisión con materiales técnicos avanzados. 
            Desde prototipos hasta series cortas de producción.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Materiales Técnicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent mb-2">
                24h
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Entrega Rápida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent mb-2">
                ±0.1mm
              </div>
              <div className="text-gray-300 text-sm sm:text-base">Precisión Industrial</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-orange-400 hover:from-cyan-300 hover:to-orange-300 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-cyan-400/40 transition-all duration-300 hover:shadow-cyan-400/60 hover:scale-105 group"
            >
              Solicitar Presupuesto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('servicios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
