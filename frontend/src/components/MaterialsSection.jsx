import React from 'react';
import { Layers, Mail } from 'lucide-react';

const MaterialsSection = () => {
  const materials = [
    {
      name: 'PLA',
      description: 'Biodegradable, ideal para prototipos',
      color: 'from-cyan-400 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80'
    },
    {
      name: 'PETG',
      description: 'Resistente y duradero',
      color: 'from-green-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80'
    },
    {
      name: 'TPU (Flexible 95A)',
      description: 'Material flexible y elástico',
      color: 'from-purple-400 to-purple-500',
      image: 'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?w=400&q=80'
    },
    {
      name: 'ABS',
      description: 'Alta resistencia al impacto',
      color: 'from-orange-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&q=80'
    },
    {
      name: '¿Otro Material?',
      description: 'Consúltanos para materiales especiales',
      color: 'from-cyan-400 via-lime-400 to-orange-400',
      isSpecial: true
    }
  ];

  const handleContactForMaterial = () => {
    const whatsappNumber = '34644382702';
    const message = encodeURIComponent('¡Hola! Necesito consultar sobre un material especial para mi proyecto de impresión 3D.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="materiales" className="py-24 relative bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <Layers className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">Materiales Disponibles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Materiales que
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> Trabajamos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Selección de materiales de calidad para tus proyectos
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
          {materials.map((material, index) => (
            <div
              key={index}
              onClick={material.isSpecial ? handleContactForMaterial : undefined}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/3] border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 ${material.isSpecial ? 'cursor-pointer hover:scale-105' : ''}`}
            >
              {material.isSpecial ? (
                // Special "Contact Us" Card
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-6 text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${material.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{material.name}</h3>
                  <p className="text-gray-400 text-sm">{material.description}</p>
                  <div className="mt-4 text-cyan-400 text-xs font-semibold">
                    Click para consultar →
                  </div>
                </div>
              ) : (
                // Regular Material Card
                <>
                  {/* Material Image */}
                  <div className="absolute inset-0">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative h-full flex flex-col justify-end p-4">
                    <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${material.color} mb-3 group-hover:w-full transition-all duration-300`}></div>
                    <h3 className="text-white font-bold text-lg mb-1">{material.name}</h3>
                    <p className="text-gray-400 text-xs">{material.description}</p>
                  </div>
                </>
              )}

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:bg-gradient-to-r ${material.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="text-cyan-400 font-semibold">Nota:</span> Si necesitas información específica sobre propiedades técnicas o compatibilidad para tu proyecto, no dudes en consultarnos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
