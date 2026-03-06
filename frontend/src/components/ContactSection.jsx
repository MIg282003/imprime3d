import React, { useState } from 'react';
import { Send, Mail, Phone, User, MessageSquare, FileText, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const whatsappMessage = `
🔷 *NUEVA SOLICITUD DE PRESUPUESTO - MATRIX3D* 🔷

👤 *Cliente:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}

📋 *Tipo de Proyecto:*
${formData.project}

💬 *Mensaje:*
${formData.message}

---
Enviado desde matrix3d.com
    `.trim();

    // WhatsApp business number (replace with your actual number)
    const whatsappNumber = '34644382702'; // Your phone number without + or spaces
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate processing time
    setTimeout(() => {
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Show success message
      toast.success('¡Solicitud enviada!', {
        description: 'Te contactaremos en breve para discutir tu proyecto.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 relative bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="text-orange-400 text-sm font-medium">Contáctanos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hablemos de tu
            <span className="bg-gradient-to-r from-cyan-300 via-lime-400 to-orange-400 bg-clip-text text-transparent"> Proyecto</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Completa el formulario y te responderemos en menos de 24 horas
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Solicitar Presupuesto</CardTitle>
              <CardDescription className="text-gray-400">
                Cuéntanos sobre tu proyecto y te enviaremos una cotización detallada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300 flex items-center">
                    <User className="w-4 h-4 mr-2 text-cyan-400" />
                    Nombre completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 XXX XXX XXX"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label htmlFor="project" className="text-gray-300 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                    Tipo de proyecto *
                  </Label>
                  <Input
                    id="project"
                    name="project"
                    type="text"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Ej: Prototipo funcional, pieza de repuesto, serie corta..."
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-cyan-400" />
                    Descripción del proyecto *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre tu proyecto, dimensiones, cantidad, plazo, etc."
                    rows={5}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-400 to-orange-400 hover:from-cyan-300 hover:to-orange-300 text-white font-semibold py-6 text-lg rounded-xl shadow-lg shadow-cyan-400/40 transition-all duration-300 hover:shadow-cyan-400/60 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Enviar Solicitud por WhatsApp
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, serás redirigido a WhatsApp para completar tu solicitud
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                      <a href="tel:+34644382702" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        +34 644 382 702
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:miguelamozamora@gmail.com" className="text-green-400 hover:text-green-300 transition-colors break-all">
                        miguelamozamora@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Dirección</h3>
                      <p className="text-orange-400">
                        Prado de Enebros N24<br />
                        Colmenar Viejo, Madrid 28770
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.2!2d-3.76!3d40.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM5JzM2LjAiTiAzwrA0NSczNi4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Matrix3D"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
