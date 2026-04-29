// data/services/marketing.ts
import { ServiceCategory } from "@/types/service";
import { Palette } from "lucide-react";

export const marketingServices: ServiceCategory[] = [
  // =====================================================
  // 🧱 1. BRANDING E IDENTIDAD VISUAL (PRODUCTO INDEPENDIENTE)
  // =====================================================
  {
    id: "MKT-BRAND-IDENTITY",
    category: "Branding e Identidad Visual",
    subtitle: "Construcción estratégica de identidad visual para posicionamiento de marca",
    icon: Palette,

    levels: [
      {
        id: "MKT-BRAND-LOGO-BAS",
        name: "Logo Básico",
        level: "🟢 Básico",
        complexity: "⭐ (1/5)",
        time: "3-5 días",
        price: "$800.000 - $1.500.000 COP",

        description:
          "Creación de identidad visual inicial enfocada en marcas en etapa temprana que necesitan presencia profesional.",

        // 🔥 NEGOCIO
        target:
          "Emprendedores, freelancers o startups que necesitan una identidad visual básica para iniciar su marca.",

        useCases: [
          "Lanzamiento de marca",
          "Creación de identidad inicial",
          "Presencia en redes sociales",
        ],

        includes: [
          "2 propuestas de logo",
          "3 rondas de revisión",
          "Versiones básicas (color, blanco y negro)",
        ],

        notIncludes: [
          "Manual de marca",
          "Estrategia de branding",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Figma", "Adobe Illustrator"],

        features: [
          "Diseño personalizado",
          "Adaptación a múltiples formatos",
          "Entrega optimizada para digital",
        ],

        deliverables: [
          "Logo final",
          "Variantes del logo",
          "Archivos exportables (PNG, SVG, JPG)",
        ],

        integrations: ["Redes sociales", "Web básica"],
        automationLevel: "low",

        support: "7 días soporte post-entrega",
      },

      {
        id: "MKT-BRAND-LOGO-PRO",
        name: "Logo Profesional",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "5-7 días",
        price: "$2.000.000 - $4.000.000 COP",

        description:
          "Desarrollo de identidad visual con sistema de marca básico orientado a coherencia y escalabilidad.",

        // 🔥 NEGOCIO
        target:
          "Empresas o marcas en crecimiento que necesitan una identidad consistente y profesional.",

        useCases: [
          "Rebranding parcial",
          "Construcción de identidad sólida",
          "Unificación visual de marca",
        ],

        includes: [
          "3 propuestas de logo",
          "Manual de marca básico",
          "Sistema de colores y tipografía",
          "Variantes de logo",
        ],

        notIncludes: [
          "Estrategia de marca profunda",
          "Aplicaciones corporativas completas",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Figma", "Illustrator", "Brand System"],

        features: [
          "Sistema visual coherente",
          "Escalabilidad de marca",
          "Consistencia en múltiples plataformas",
        ],

        deliverables: [
          "Logo final",
          "Manual básico de marca",
          "Sistema visual",
        ],

        integrations: ["Redes sociales", "Sitio web"],
        automationLevel: "low",

        support: "10 días soporte + ajustes menores",
      },

      {
        id: "MKT-BRAND-CORP",
        name: "Branding Corporativo",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "2-4 semanas",
        price: "$4.000.000+ COP",

        description:
          "Sistema completo de identidad corporativa con enfoque estratégico y posicionamiento de marca.",

        // 🔥 NEGOCIO
        target:
          "Empresas que buscan construir o redefinir su identidad de marca a nivel profesional y competitivo.",

        useCases: [
          "Rebranding completo",
          "Posicionamiento de marca",
          "Expansión empresarial",
        ],

        includes: [
          "Estrategia de marca",
          "Manual completo",
          "Sistema visual integral",
          "Aplicaciones básicas",
        ],

        notIncludes: [
          "Implementación completa en todos los canales",
        ],

        pricingType: "custom",

        // ⚙️ TÉCNICO
        stack: ["Brand Strategy", "Figma", "Adobe Suite"],

        features: [
          "Estrategia visual alineada a negocio",
          "Sistema escalable",
          "Consistencia multicanal",
        ],

        deliverables: [
          "Manual de marca completo",
          "Sistema visual integral",
          "Guías de uso",
        ],

        integrations: ["Web", "Redes", "Material corporativo"],
        automationLevel: "low",

        support: "15 días soporte + ajustes",
      },
    ],
  },

  // =====================================================
  // 📱 2. DISEÑO PARA REDES SOCIALES
  // =====================================================
  {
    id: "MKT-SOCIAL-DESIGN",
    category: "Diseño para Redes Sociales",
    subtitle: "Creación de contenido visual estratégico para crecimiento digital",
    icon: Palette,

    levels: [
      {
        id: "MKT-SOCIAL-POST",
        name: "Post para Redes",
        level: "🟢 Básico",
        complexity: "⭐ (1/5)",
        time: "1-3 días",
        price: "$150.000 - $300.000 COP",

        description:
          "Diseño de piezas visuales optimizadas para redes sociales con enfoque en engagement y claridad visual.",

        // 🔥 NEGOCIO
        target:
          "Emprendedores o marcas que necesitan contenido visual puntual para redes sociales.",

        useCases: [
          "Publicaciones en Instagram o Facebook",
          "Promociones o anuncios",
          "Contenido visual rápido",
        ],

        includes: [
          "Diseño de post o story",
          "Adaptaciones básicas",
          "Optimización para redes",
        ],

        notIncludes: [
          "Estrategia de contenido",
          "Calendario mensual",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Figma", "Canva"],

        features: [
          "Diseño optimizado",
          "Adaptación a formatos",
          "Entrega rápida",
        ],

        deliverables: [
          "Archivos editables",
          "Exportaciones listas para publicación",
        ],

        integrations: ["Instagram", "Facebook", "LinkedIn"],
        automationLevel: "low",

        support: "3 días soporte",
      },

      {
        id: "MKT-SOCIAL-PACK",
        name: "Pack de Contenido",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "1-2 semanas",
        price: "$1.200.000 - $2.000.000 COP",

        description:
          "Sistema de contenido mensual diseñado estratégicamente para mantener consistencia visual y crecimiento en redes.",

        // 🔥 NEGOCIO
        target:
          "Empresas o marcas que buscan presencia constante y profesional en redes sociales.",

        useCases: [
          "Gestión mensual de contenido",
          "Crecimiento en redes",
          "Consistencia visual de marca",
        ],

        includes: [
          "10 piezas de contenido",
          "Calendario de publicaciones",
          "Estrategia visual básica",
        ],

        notIncludes: [
          "Gestión de redes sociales (posting)",
          "Publicidad paga",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Figma", "Meta Tools", "Canva"],

        features: [
          "Sistema visual coherente",
          "Optimización para engagement",
          "Consistencia de marca",
        ],

        deliverables: [
          "Pack de diseños",
          "Calendario de contenido",
          "Archivos editables",
        ],

        integrations: ["Instagram", "Facebook", "TikTok"],
        automationLevel: "medium",

        support: "7 días soporte",
      },
    ],
  },

  // =====================================================
  // 📣 3. GESTIÓN DE REDES SOCIALES
  // =====================================================
  {
    id: "MKT-SOCIAL-MANAGEMENT",
    category: "Gestión de Redes Sociales",
    subtitle: "Estrategia, contenido y crecimiento sostenido en redes sociales",
    icon: Palette,

    levels: [
      {
        id: "MKT-SOCIAL-BASIC",
        name: "Gestión Básica",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "Mensual",
        price: "$800.000 - $1.200.000 COP",

        description:
          "Gestión mensual de redes sociales enfocada en mantener presencia activa y contenido constante.",

        // 🔥 NEGOCIO
        target:
          "Emprendedores o pequeñas empresas que necesitan presencia digital básica sin estrategia compleja.",

        useCases: [
          "Mantener redes activas",
          "Publicación constante de contenido",
          "Presencia básica de marca",
        ],

        includes: [
          "Gestión de 1 red social",
          "3 publicaciones por semana",
          "Diseño básico de contenido",
          "Reporte mensual",
        ],

        notIncludes: [
          "Estrategia avanzada",
          "Publicidad paga",
          "Producción audiovisual",
        ],

        pricingType: "subscription",

        // ⚙️ TÉCNICO
        stack: ["Meta Business Suite", "Instagram", "Canva"],

        features: [
          "Publicación programada",
          "Consistencia visual",
          "Seguimiento básico",
        ],

        deliverables: [
          "Contenido mensual",
          "Reporte de desempeño",
        ],

        integrations: ["Instagram", "Facebook"],
        automationLevel: "low",

        support: "Soporte durante mensualidad",
      },

      {
        id: "MKT-SOCIAL-ADV",
        name: "Gestión Avanzada",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "Mensual",
        price: "$2.500.000 - $4.000.000 COP",

        description:
          "Gestión estratégica de redes sociales enfocada en crecimiento, posicionamiento y conversión.",

        // 🔥 NEGOCIO
        target:
          "Empresas que buscan crecimiento real en redes y generación de clientes.",

        useCases: [
          "Escalar redes sociales",
          "Posicionamiento de marca",
          "Generación de leads",
        ],

        includes: [
          "Gestión de hasta 3 redes sociales",
          "Publicación diaria (5-7 posts/semana)",
          "Estrategia de contenido",
          "Calendario mensual",
          "Reporte con métricas",
        ],

        notIncludes: [
          "Inversión en publicidad (ads)",
          "Producción audiovisual avanzada",
        ],

        pricingType: "subscription",

        // ⚙️ TÉCNICO
        stack: ["Meta Business Suite", "TikTok", "Analytics", "Figma"],

        features: [
          "Estrategia de crecimiento",
          "Optimización de contenido",
          "Análisis de métricas",
        ],

        deliverables: [
          "Plan mensual de contenido",
          "Contenido diseñado",
          "Reportes detallados",
        ],

        integrations: ["Instagram", "Facebook", "TikTok", "LinkedIn"],
        automationLevel: "medium",

        support: "Soporte continuo + ajustes mensuales",
      },
    ],
  },

  // =====================================================
  // 📢 4. PUBLICIDAD DIGITAL
  // =====================================================
  {
    id: "MKT-ADS",
    category: "Publicidad Digital",
    subtitle: "Estrategia, ejecución y optimización de campañas pagadas",
    icon: Palette,

    levels: [
      {
        id: "MKT-ADS-SETUP",
        name: "Setup de Ads",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "3-5 días",
        price: "$1.000.000 - $2.000.000 COP",

        description:
          "Configuración inicial de campañas publicitarias con estructura y tracking profesional.",

        // 🔥 NEGOCIO
        target:
          "Empresas que desean iniciar en publicidad digital con una base sólida y bien configurada.",

        useCases: [
          "Lanzamiento de campañas",
          "Validación de mercado",
          "Generación inicial de leads",
        ],

        includes: [
          "Configuración de cuentas publicitarias",
          "Instalación de píxeles y tracking",
          "Creación de campañas iniciales",
          "Segmentación básica",
        ],

        notIncludes: [
          "Optimización continua",
          "Gestión mensual",
          "Producción creativa avanzada",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Meta Ads", "Google Ads", "Pixel Tracking"],

        features: [
          "Tracking correcto",
          "Estructura optimizada",
          "Base para escalamiento",
        ],

        deliverables: [
          "Campañas activas",
          "Configuración de tracking",
        ],

        integrations: ["Meta", "Google", "Sitio web"],
        automationLevel: "medium",

        support: "7 días soporte post-setup",
      },

      {
        id: "MKT-ADS-MANAGEMENT",
        name: "Gestión de Ads",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "Mensual",
        price: "$1.500.000+ COP + inversión publicitaria",

        description:
          "Gestión continua de campañas publicitarias enfocada en optimización, escalamiento y retorno de inversión.",

        // 🔥 NEGOCIO
        target:
          "Empresas que buscan adquirir clientes de forma constante mediante publicidad digital.",

        useCases: [
          "Generación de leads",
          "Ventas online",
          "Escalamiento de campañas",
        ],

        includes: [
          "Gestión de campañas publicitarias",
          "Optimización continua",
          "Testing de anuncios",
          "Análisis de resultados",
          "Reporte mensual",
        ],

        notIncludes: [
          "Inversión en ads (ad spend)",
          "Landing pages (servicio adicional)",
        ],

        pricingType: "subscription",

        // ⚙️ TÉCNICO
        stack: ["Meta Ads", "Google Ads", "Analytics", "Conversion Tracking"],

        features: [
          "Optimización constante",
          "A/B testing",
          "Escalamiento de campañas",
        ],

        deliverables: [
          "Reportes de rendimiento",
          "Optimización continua",
          "Insights estratégicos",
        ],

        integrations: ["Meta", "Google", "CRM", "Web"],
        automationLevel: "high",

        support: "Soporte continuo + reuniones estratégicas",
      },
    ],
  },
];
