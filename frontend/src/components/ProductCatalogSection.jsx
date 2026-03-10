import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from './ui/button';

const ProductCatalogSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: false
  });

  const products = [
    {
      id: 1,
      title: 'Llaveros Personalizados',
      description: 'Diseños únicos y personalizables para regalar o uso personal',
      price: 'Desde 5€',
      category: 'Accesorios',
      placeholder: true
    },
    {
      id: 2,
      title: 'Lámparas Litofanía',
      description: 'Convierte tus fotos en lámparas con efecto 3D',
      price: 'Desde 20€',
      category: 'Decoración',
      placeholder: true
    },
    {
      id: 3,
      title: 'Macetas Geométricas',
      description: 'Diseños modernos para tus plantas favoritas',
      price: 'Desde 8€',
      category: 'Hogar',
      placeholder: true
    },
    {
      id: 4,
      title: 'Organizadores Escritorio',
      description: 'Mantén tu espacio ordenado con estilo',
      price: 'Desde 12€',
      category: 'Oficina',
      placeholder: true
    },
    {
      id: 5,
      title: 'Figuras Decorativas',
      description: 'Personajes, animales y diseños artísticos',
      price: 'Desde 15€',
      category: 'Coleccionables',
      placeholder: true
    },
    {
      id: 6,
      title: 'Soportes Móvil/Tablet',
      description: 'Prácticos y ergonómicos para tu dispositivo',
      price: 'Desde 10€',
      category: 'Tech',
      placeholder: true
    }
  ];

  const handleOrderProduct = (productTitle) => {
    const whatsappNumber = '34644382702';
    const message = encodeURIComponent(`¡Hola! Me interesa el producto: "${productTitle}". ¿Podrías darme más información?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="productos" className="py-24 relative bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
            <ShoppingCart className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Catálogo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ideas Listas para
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> Imprimir</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Productos populares disponibles para entrega rápida
          </p>
          <p className="text-sm text-gray-400">
            ← Desliza para ver más productos →
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                    {/* Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                      {/* Placeholder Content */}
                      <div className="text-center p-6">
                        <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-600 text-sm">Espacio para imagen del producto</p>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/40">
                        <span className="text-xs font-semibold text-purple-300">{product.category}</span>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                            {product.price}
                          </span>
                        </div>
                        <Button
                          onClick={() => handleOrderProduct(product.title)}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 group"
                        >
                          Lo quiero
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-800/90 hover:bg-purple-500/90 backdrop-blur-sm border border-gray-700 hover:border-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-800/90 hover:bg-purple-500/90 backdrop-blur-sm border border-gray-700 hover:border-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            ¿No encuentras lo que buscas? Podemos crear diseños personalizados
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline"
            className="border-2 border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500 px-8 py-3 rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            Solicitar Diseño Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
