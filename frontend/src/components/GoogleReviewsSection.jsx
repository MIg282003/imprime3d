import React from 'react';
import { Star } from 'lucide-react';

const GoogleReviewsSection = () => {
  // ⚠️ INSTRUCCIONES: Copia tus reseñas reales de Google Maps y reemplaza estos datos
  // Ve a: https://www.google.com/maps y busca "Matrix3D Impresion 3D"
  // Copia el texto de cada reseña, el nombre del cliente y la fecha
  
  const reviews = [
    {
      id: 1,
      stars: 5,
      text: 'Copia aquí el texto de tu primera reseña de Google Maps. Mantén las comillas y el formato.',
      author: 'Nombre Cliente 1',
      date: 'Hace X meses',
      avatar: 'NC1' // Cambia por las iniciales del cliente
    },
    {
      id: 2,
      stars: 5,
      text: 'Copia aquí el texto de tu segunda reseña de Google Maps. El texto puede ser tan largo como necesites.',
      author: 'Nombre Cliente 2',
      date: 'Hace X meses',
      avatar: 'NC2'
    },
    {
      id: 3,
      stars: 5,
      text: 'Copia aquí el texto de tu tercera reseña de Google Maps.',
      author: 'Nombre Cliente 3',
      date: 'Hace X meses',
      avatar: 'NC3'
    },
    {
      id: 4,
      stars: 5,
      text: 'Copia aquí el texto de tu cuarta reseña de Google Maps.',
      author: 'Nombre Cliente 4',
      date: 'Hace X meses',
      avatar: 'NC4'
    },
    {
      id: 5,
      stars: 5,
      text: 'Copia aquí el texto de tu quinta reseña de Google Maps.',
      author: 'Nombre Cliente 5',
      date: 'Hace X meses',
      avatar: 'NC5'
    }
  ];

  return (
    <section id="reseñas" className="py-24 relative bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
            <svg className="w-5 h-5 text-yellow-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-yellow-400 text-sm font-medium">Google Reviews</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestras Reseñas en
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> Google</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Opiniones reales de nuestros clientes
          </p>
        </div>

        {/* Reviews Grid - Google Maps Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Header with Avatar and Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-semibold truncate">{review.author}</h4>
                  <p className="text-gray-500 text-xs">{review.date}</p>
                </div>
              </div>

              {/* Stars - Google Style (Yellow) */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Google Badge */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Matrix3D+Impresion+3D+Colmenar+Viejo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="text-gray-900 font-bold">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-xs">Ver más en Google</p>
            </div>
          </a>
        </div>

        {/* Instructions Note (remove this in production) */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
            <p className="text-blue-300 text-sm">
              💡 <strong>Para actualizar:</strong> Edita el archivo <code className="bg-blue-900/30 px-2 py-1 rounded">GoogleReviewsSection.jsx</code> y 
              reemplaza los textos placeholder con tus reseñas reales de Google Maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
