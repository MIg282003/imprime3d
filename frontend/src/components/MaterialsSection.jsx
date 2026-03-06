import React from 'react';
import { Layers, Sparkles } from 'lucide-react';

const MaterialsSection = () => {
  const materials = [
    {
      name: 'PLA',
      description: 'Biodegradable, ideal para prototipos',
      color: 'from-cyan-400 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1642969164999-979483e21601?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwZmlsYW1lbnR8ZW58MHx8fHwxNzcyODEzODA1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'PETG',
      description: 'Resistente y duradero',
      color: 'from-green-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1702863361902-93c51bfbd923?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHwzRCUyMHByaW50aW5nJTIwZmlsYW1lbnR8ZW58MHx8fHwxNzcyODEzODA1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'ABS',
      description: 'Alta resistencia al impacto',
      color: 'from-orange-400 to-orange-500',
      image: 'https://images.unsplash.com/photo-1726219836525-7038d30f8219?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwM0QlMjBwcmludGVyfGVufDB8fHx8MTc3MjgxMzc5N3ww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'TPU',
      description: 'Flexible y elástico',
      color: 'from-purple-400 to-purple-500',
      image: 'https://images.unsplash.com/photo-1700830151586-d0df2714cb28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxtZWNoYW5pY2FsJTIwcGFydHMlMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NzI4MTM4MDF8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Nylon PA12',
      description: 'Resistencia química superior',
      color: 'from-blue-400 to-blue-500',
      image: 'https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwzfHxtZWNoYW5pY2FsJTIwcGFydHMlMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NzI4MTM4MDF8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Fibra de Carbono',
      description: 'Máxima resistencia estructural',
      color: 'from-gray-400 to-gray-600',
      image: 'https://images.unsplash.com/photo-1769971361854-9e0927a2d8dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxtZWNoYW5pY2FsJTIwcGFydHMlMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NzI4MTM4MDF8MA&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <section id="materiales" className="py-24 relative bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <Layers className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">Materiales Técnicos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Amplia Gama de
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> Materiales</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Desde plásticos básicos hasta compuestos de ingeniería de alto rendimiento
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4">
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${material.color} mb-3 group-hover:w-full transition-all duration-300`}></div>
                <h3 className="text-white font-bold text-lg mb-1">{material.name}</h3>
                <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {material.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:bg-gradient-to-r ${material.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Alta Precisión</h3>
            <p className="text-gray-400 text-sm">
              Tolerancias de hasta ±0.1mm para piezas de precisión industrial
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/5 to-green-600/5 border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Variedad de Acabados</h3>
            <p className="text-gray-400 text-sm">
              Pulido, pintado, metalizado y tratamientos superficiales especiales
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/5 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Certificaciones</h3>
            <p className="text-gray-400 text-sm">
              Materiales certificados para aplicaciones industriales y médicas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
