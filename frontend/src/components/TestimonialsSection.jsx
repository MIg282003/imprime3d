import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos M.',
      role: 'Ingeniero de Producto',
      company: 'TechSolutions',
      text: 'La rapidez en la entrega y la precisión de las piezas superaron nuestras expectativas. Matrix3D se ha convertido en nuestro socio de confianza para todos nuestros prototipos.',
      rating: 5,
      avatar: 'CM'
    },
    {
      name: 'Laura G.',
      role: 'Diseñadora Industrial',
      company: 'InnoDesign Studio',
      text: 'El acabado de las impresiones es impecable. Pudimos materializar nuestros diseños más complejos con un nivel de detalle que no habíamos conseguido antes. Totalmente recomendable.',
      rating: 5,
      avatar: 'LG'
    },
    {
      name: 'Miguel R.',
      role: 'Gerente de Producción',
      company: 'ProtoLab',
      text: 'Excelente servicio técnico y asesoramiento. Nos ayudaron a optimizar nuestras piezas para reducir costes sin perder funcionalidad. La entrega en 24h es real, no marketing.',
      rating: 5,
      avatar: 'MR'
    }
  ];

  return (
    <section id="testimonios" className="py-24 relative bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/30 mb-4">
            <Quote className="w-4 h-4 text-purple-300 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Testimonios</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Lo que opinan
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> nuestros clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-cyan-400" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>

                {/* Info */}
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-cyan-400">{testimonial.company}</p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                CM
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-lime-400 to-lime-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                LG
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                MR
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                +50
              </div>
            </div>
            <span className="text-gray-400 text-sm">
              Más de <span className="text-cyan-400 font-semibold">50 empresas</span> confían en nosotros
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
