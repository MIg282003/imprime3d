import React from 'react';
import { Upload, Search, Factory, Truck, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: <Upload className="w-8 h-8" />,
      title: 'Envío de Archivo/Idea',
      description: 'Sube tu archivo 3D (STL, OBJ, STEP) o comparte tu idea con nuestro equipo',
      color: 'cyan',
      details: ['Formatos: STL, OBJ, STEP, IGES', 'Consultoría inicial gratuita', 'NDA disponible']
    },
    {
      number: '02',
      icon: <Search className="w-8 h-8" />,
      title: 'Análisis Técnico',
      description: 'Evaluamos viabilidad, recomendamos materiales y optimizamos el diseño',
      color: 'green',
      details: ['Análisis de factibilidad', 'Selección de materiales', 'Optimización de costes']
    },
    {
      number: '03',
      icon: <Factory className="w-8 h-8" />,
      title: 'Fabricación',
      description: 'Imprimimos tu pieza con control de calidad en cada etapa del proceso',
      color: 'orange',
      details: ['Impresión de precisión', 'Control de calidad', 'Post-procesamiento']
    },
    {
      number: '04',
      icon: <Truck className="w-8 h-8" />,
      title: 'Entrega',
      description: 'Envío seguro a tu ubicación o recogida en nuestras instalaciones',
      color: 'purple',
      details: ['Embalaje profesional', 'Envío nacional 24-48h', 'Certificado de calidad']
    }
  ];

  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      gradient: 'from-cyan-500 to-cyan-600',
      shadow: 'shadow-cyan-500/20'
    },
    green: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      gradient: 'from-green-500 to-green-600',
      shadow: 'shadow-green-500/20'
    },
    orange: {
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      gradient: 'from-orange-500 to-orange-600',
      shadow: 'shadow-orange-500/20'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/20'
    }
  };

  return (
    <section id="proceso" className="py-24 relative bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-medium">Nuestro Proceso</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            De la Idea a la
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> Realidad</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un proceso simple y transparente en 4 pasos
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-green-500 via-orange-500 to-purple-500 opacity-20" 
                 style={{ top: '5rem', width: 'calc(100% - 8rem)', left: '4rem' }}></div>

            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:border-${step.color}-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl ${colors.shadow}`}>
                    {/* Step Number */}
                    <div className={`text-6xl font-bold ${colors.text} opacity-20 absolute top-4 right-4`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg ${colors.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-500 text-xs">
                          <div className={`w-1 h-1 rounded-full ${colors.text.replace('text', 'bg')} mt-1.5 mr-2 flex-shrink-0`}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className={`w-6 h-6 ${colors.text} animate-pulse`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/5 via-green-500/5 via-orange-500/5 to-purple-500/5 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¿Listo para empezar tu proyecto?
                </h3>
                <p className="text-gray-400">
                  Envíanos tu archivo o idea y recibe un presupuesto en 24 horas
                </p>
              </div>
              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-cyan-400 to-orange-400 hover:from-cyan-300 hover:to-orange-300 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-400/40 transition-all duration-300 hover:shadow-cyan-400/60 hover:scale-105 whitespace-nowrap"
              >
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
