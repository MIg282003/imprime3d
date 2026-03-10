import React from 'react';

const TrustedCompanies = () => {
  // Placeholder logos - estos pueden ser reemplazados con logos reales de clientes
  const companies = [
    { name: 'TechCorp', width: 120 },
    { name: 'InnoDesign', width: 140 },
    { name: 'ProtoLab', width: 110 },
    { name: 'MakerSpace', width: 130 },
    { name: 'FabHub', width: 100 }
  ];

  return (
    <section className="py-12 bg-gray-900/50 border-y border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale hover:opacity-60 transition-opacity duration-300">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{ width: company.width }}
            >
              {/* Placeholder - Reemplazar con logos reales */}
              <div className="w-full h-12 bg-gray-700 rounded flex items-center justify-center text-gray-500 text-xs font-semibold">
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
