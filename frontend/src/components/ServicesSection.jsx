import React from 'react';
import { Printer, Pen, Cog, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: <Printer className="w-12 h-12" />,
      title: 'Impresión 3D Pro',
      description: 'Fabricación con materiales técnicos y de ingeniería de alto rendimiento',
      features: [
        'Fibra de Carbono',
        'Nylon PA12',
        'TPU Flexible',
        'PETG Industrial',
        'Materiales Compuestos'
      ],
      gradient: 'from-cyan-500/10 to-cyan-600/5',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/20',
      image: 'https://images.unsplash.com/photo-1738305992246-1c7fcdb80f38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwM0QlMjBwcmludGVyfGVufDB8fHx8MTc3MjgxMzc5N3ww&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Pen className="w-12 h-12" />,
      title: 'Diseño y Modelado',
      description: 'Creación de piezas desde cero o mejora de archivos existentes',
      features: [
        'Modelado 3D CAD',
        'Optimización de Diseños',
        'Ingeniería Inversa',
        'Preparación de Archivos',
        'Simulación Estructural'
      ],
      gradient: 'from-green-500/10 to-green-600/5',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/20',
      image: 'https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxtZWNoYW5pY2FsJTIwcGFydHMlMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NzI4MTM4MDF8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: 'Soluciones a Medida',
      description: 'Prototipado rápido y series cortas de producción industrial',
      features: [
        'Prototipos Funcionales',
        'Series Cortas',
        'Piezas de Repuesto',
        'Herramientas Custom',
        'Producción bajo Demanda'
      ],
      gradient: 'from-orange-500/10 to-orange-600/5',
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/20',
      image: 'https://images.unsplash.com/photo-1769971361854-9e0927a2d8dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxtZWNoYW5pY2FsJTIwcGFydHMlMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NzI4MTM4MDF8MA&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <section id="servicios" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Soluciones de Fabricación
            <span className="bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent"> Avanzada</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnología de punta para llevar tus proyectos de la idea a la realidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group bg-gradient-to-br ${service.gradient} backdrop-blur-sm border ${service.borderColor} hover:border-${service.iconColor.split('-')[1]}-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${service.iconColor.split('-')[1]}-500/20 overflow-hidden`}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
                <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gray-950/80 backdrop-blur-sm ${service.iconColor}`}>
                  {service.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-white mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace('text', 'bg')} mr-3`}></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className={`w-full ${service.iconColor} hover:bg-${service.iconColor.split('-')[1]}-500/10 group/btn`}
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Más información
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
