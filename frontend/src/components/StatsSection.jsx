import React from 'react';
import { TrendingUp, Users, Package, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Package className="w-8 h-8" />,
      number: '500+',
      label: 'Proyectos Completados',
      color: 'cyan'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '98%',
      label: 'Satisfacción Cliente',
      color: 'lime'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '15+',
      label: 'Materiales Disponibles',
      color: 'orange'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: '24h',
      label: 'Entrega Express',
      color: 'purple'
    }
  ];

  const colorClasses = {
    cyan: {
      gradient: 'from-cyan-300 to-cyan-400',
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/30',
      icon: 'text-cyan-300'
    },
    lime: {
      gradient: 'from-lime-300 to-lime-400',
      bg: 'bg-lime-400/10',
      border: 'border-lime-400/30',
      icon: 'text-lime-300'
    },
    orange: {
      gradient: 'from-orange-300 to-orange-400',
      bg: 'bg-orange-400/10',
      border: 'border-orange-400/30',
      icon: 'text-orange-300'
    },
    purple: {
      gradient: 'from-purple-300 to-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/30',
      icon: 'text-purple-300'
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const colors = colorClasses[stat.color];
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} hover:border-${stat.color}-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${stat.color}-400/20`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${colors.bg} ${colors.icon} mb-4`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
