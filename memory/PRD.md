# Matrix3D - Landing Page de Impresión 3D Industrial

## Información del Proyecto
**Empresa**: Matrix3D  
**Fecha de Inicio**: 6 de Marzo, 2026  
**Estado**: Fase 1 Completada - Frontend con Mock Data

## Información de Contacto
- **Email**: miguelamozamora@gmail.com
- **Teléfono**: +34 644 382 702
- **Dirección**: Prado de Enebros N24, Colmenar Viejo, Madrid 28770

## Problema Statement Original
Crear una landing page profesional y moderna para empresa de impresión 3D con:
- Diseño tecnológico, limpio y que transmita precisión
- Modo oscuro con acentos en azul cian y naranja industrial
- Secciones: Hero, Servicios, Materiales, Proceso, Contacto
- Formulario que envíe solicitudes por WhatsApp
- Mapa de ubicación integrado
- Imágenes realistas de impresoras industriales y piezas mecánicas

## User Personas
1. **Ingeniero de Producto** - Busca prototipado rápido para validación de diseños
2. **Fabricante PYME** - Necesita piezas de repuesto o series cortas
3. **Diseñador Industrial** - Requiere materialización de conceptos creativos
4. **Startup Tecnológica** - Busca fabricación ágil para iteración de producto

## Arquitectura Técnica
- **Frontend**: React 19 + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI + Python (Fase 2)
- **Base de Datos**: MongoDB (Fase 2)
- **Notificaciones**: WhatsApp Web API (integración directa)
- **Mapa**: Google Maps Embed API

## Funcionalidades Implementadas ✅
*Completado: 6 de Marzo, 2026*

### 1. Header con Navegación
- Logo Matrix3D con imagen proporcionada por cliente
- Navegación sticky con efecto glassmorphism
- Menú responsive mobile
- Smooth scroll a secciones
- CTA "Solicitar Presupuesto" destacado

### 2. Hero Section
- Título impactante con gradientes cyan-orange
- Estadísticas clave (10+ materiales, 24h entrega, 100% precisión)
- Imagen de fondo de impresora industrial con overlay
- Elementos animados de fondo
- Dual CTA (Solicitar Presupuesto + Ver Servicios)
- Scroll indicator animado

### 3. Servicios Section
- 3 tarjetas de servicios principales:
  * Impresión 3D Pro (materiales técnicos)
  * Diseño y Modelado (CAD)
  * Soluciones a Medida (prototipos/series cortas)
- Imágenes profesionales de alta calidad
- Hover effects con scale y shadow
- Lista de características por servicio
- Color coding: cyan, green, orange

### 4. Materiales Section
- Grid de 6 materiales (PLA, PETG, ABS, TPU, Nylon PA12, Fibra de Carbono)
- Tarjetas visuales con imágenes
- Hover effects con expansión de barra de color
- 3 tarjetas informativas adicionales (Precisión, Acabados, Certificaciones)

### 5. Proceso Section
- 4 pasos del proceso con iconografía:
  1. Envío de Archivo/Idea (Upload)
  2. Análisis Técnico (Search)
  3. Fabricación (Factory)
  4. Entrega (Truck)
- Cada paso con color distintivo y detalles
- Línea de conexión visual en desktop
- CTA final "Listo para empezar"

### 6. Contacto Section
- Formulario completo con validación
- Campos: Nombre, Email, Teléfono, Tipo de Proyecto, Mensaje
- Integración directa con WhatsApp (wa.me)
- Tarjetas de contacto (Teléfono, Email, Dirección)
- Google Maps embebido con ubicación real
- Toast notifications (Sonner)
- Estados de loading/success

### 7. Footer Completo
- Logo y descripción de empresa
- 3 columnas de links (Servicios, Empresa, Legal)
- Información de contacto con iconos
- Redes sociales (Facebook, Instagram, LinkedIn, Twitter)
- Copyright dinámico
- Smooth scroll integrado

### 8. Diseño y UX
- Modo oscuro completo (gray-950/900)
- Gradientes cyan (#06b6d4) y orange (#f97316)
- Glassmorphism effects con backdrop-blur
- Micro-animaciones en hover/focus
- Responsive design (mobile, tablet, desktop)
- Scroll suave entre secciones
- Custom scrollbar con gradiente
- Accesibilidad (focus states, ARIA labels)

## Integraciones Utilizadas
1. **WhatsApp Web API** - Envío directo de formularios vía wa.me
2. **Google Maps Embed** - Visualización de ubicación de oficina
3. **Unsplash Images** - Imágenes profesionales de impresoras y piezas 3D
4. **Shadcn/UI** - Componentes: Button, Card, Input, Textarea, Label, Sonner

## Próximas Fases (Backlog Priorizado)

### P0 - Crítico (Requerido para Launch)
- [ ] Backend para almacenar solicitudes de presupuesto
- [ ] Panel de administración para ver/gestionar solicitudes
- [ ] Email notifications al recibir solicitudes
- [ ] Formulario de carga de archivos STL/OBJ

### P1 - Alta Prioridad (Post-Launch Inmediato)
- [ ] Galería de proyectos completados (portfolio)
- [ ] Sistema de cotización automática basada en volumen/material
- [ ] Chat en vivo o chatbot para consultas
- [ ] Blog/recursos sobre impresión 3D
- [ ] SEO optimization y meta tags

### P2 - Media Prioridad (Mejoras Futuras)
- [ ] Sistema de tracking de pedidos
- [ ] Portal de cliente para ver estado de proyectos
- [ ] Calculadora de precio estimado
- [ ] Testimonios y casos de éxito
- [ ] Videos demostrativos del proceso
- [ ] Integración con ERP/CRM
- [ ] Multi-idioma (inglés)

## Métricas de Éxito (KPIs)
- Tasa de conversión de formulario >5%
- Tiempo promedio en página >2 min
- Bounce rate <40%
- Solicitudes de presupuesto por mes
- Tráfico mobile >60%

## Notas Técnicas
- Todas las URLs configuradas via .env (REACT_APP_BACKEND_URL)
- Imágenes optimizadas para web
- Hot reload habilitado en desarrollo
- No se usan emojis como iconos (lucide-react solamente)
- Gradientes limitados al 20% del viewport (regla 80/20)
- Formulario envía directamente a WhatsApp (sin backend por ahora)

## Assets
- Logo: https://customer-assets.emergentagent.com/job_build-reality-2/artifacts/yjqf6swi_Captura%20de%20pantalla%202026-03-06%20171233.png
- Imágenes: 8 imágenes profesionales de Unsplash (impresoras, piezas, filamentos)

