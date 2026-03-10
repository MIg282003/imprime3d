import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    {
      title: 'Prototipos Funcionales',
      image: 'https://images.unsplash.com/photo-1563520240533-66480a3916fe',
      category: 'Ingeniería',
      material: 'Nylon PA12',
      color: 'cyan'
    },
    {
      title: 'Figuras Decorativas',
      image: 'https://images.unsplash.com/photo-1767498051832-47727a2e2267',
      category: 'Diseño',
      material: 'PLA Multi-color',
      color: 'orange'
    },
    {
      title: 'Piezas de Precisión',
      image: 'https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1',
      category: 'Industrial',
      material: 'Fibra de Carbono',
      color: 'lime'
    },
    {
      title: 'Juguetes Personalizados',
      image: 'https://images.pexels.com/photos/59720/pexels-photo-59720.jpeg',
      category: 'Consumo',
      material: 'PLA',
      color: 'pink'
    },
    {
      title: 'Herramientas Custom',
      image: 'https://images.unsplash.com/photo-1761454165168-cfdf007c6a31',
      category: 'Industrial',
      material: 'PETG',
      color: 'purple'
    },
    {
      title: 'Modelos Detallados',
      image: 'https://images.unsplash.com/photo-1760446411816-f5484549fb51',
      category: 'Arte',
      material: 'Resina',
      color: 'green'
    }
  ];

  const filters = ['Todos', 'Ingeniería', 'Industrial', 'Diseño', 'Arte', 'Consumo'];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const colorClasses = {
    cyan: {
      gradient: 'from-cyan-400 to-cyan-600',
      text: 'text-cyan-300',
      bg: 'bg-cyan-400/20',
      border: 'border-cyan-400/40',
      shadow: 'hover:shadow-cyan-400/40'
    },
    orange: {
      gradient: 'from-orange-400 to-orange-600',
      text: 'text-orange-300',
      bg: 'bg-orange-400/20',
      border: 'border-orange-400/40',
      shadow: 'hover:shadow-orange-400/40'
    },
    lime: {
      gradient: 'from-lime-400 to-lime-600',
      text: 'text-lime-300',
      bg: 'bg-lime-400/20',
      border: 'border-lime-400/40',
      shadow: 'hover:shadow-lime-400/40'
    },
    pink: {
      gradient: 'from-pink-400 to-pink-600',
      text: 'text-pink-300',
      bg: 'bg-pink-400/20',
      border: 'border-pink-400/40',
      shadow: 'hover:shadow-pink-400/40'
    },
    purple: {
      gradient: 'from-purple-400 to-purple-600',
      text: 'text-purple-300',
      bg: 'bg-purple-400/20',
      border: 'border-purple-400/40',
      shadow: 'hover:shadow-purple-400/40'
    },
    green: {
      gradient: 'from-green-400 to-green-600',
      text: 'text-green-300',
      bg: 'bg-green-400/20',
      border: 'border-green-400/40',
      shadow: 'hover:shadow-green-400/40'
    }
  };

  return (
    <section id="portfolio" className="py-24 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/30 mb-4">
            <Eye className="w-4 h-4 text-lime-300 mr-2" />
            <span className="text-lime-300 text-sm font-medium">Nuestros Trabajos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proyectos
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> Realizados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre la calidad y precisión de nuestras impresiones 3D
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-400 to-orange-400 text-white shadow-lg shadow-cyan-400/30 scale-105'
                  : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-cyan-400/50 hover:text-cyan-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => {
            const colors = colorClasses[project.color];
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border ${colors.border} bg-gray-900/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 ${colors.shadow} hover:shadow-2xl`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${colors.bg} backdrop-blur-sm border ${colors.border}`}>
                    <span className={`text-xs font-semibold ${colors.text}`}>{project.category}</span>
                  </div>

                  {/* View Icon */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}>
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:${colors.text} transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Sparkles className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-sm text-gray-400">{project.material}</span>
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} animate-pulse`}></div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
