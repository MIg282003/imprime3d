import React from 'react';
import { Layers } from 'lucide-react';

const MaterialsSection = () => {
  const materials = [
  {
    name: 'PLA',
    description: 'Biodegradable, ideal para prototipos',
    color: 'from-cyan-400 to-cyan-500',
    placeholder: true
  },
  {
    name: 'PETG',
    description: 'Resistente y duradero',
    color: 'from-green-400 to-green-500',
    placeholder: true
  },
  {
    name: 'TPU (Flexible 95A)',
    description: 'Material flexible y elástico',
    color: 'from-purple-400 to-purple-500',
    placeholder: true
  }];


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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {materials.map((material, index) =>
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">

              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
                    <Layers className="w-10 h-10 text-gray-500" />
                  </div>
                  <p className="text-gray-600 text-sm">Espacio para tu imagen</p>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent"></div>

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${material.color} mb-3 group-hover:w-full transition-all duration-300`}></div>
                <h3 className="text-white font-bold text-2xl mb-1">{material.name}</h3>
                <p className="text-gray-400 text-sm">{material.description}</p>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:bg-gradient-to-r ${material.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          )}
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
    </section>);

};

export default MaterialsSection;