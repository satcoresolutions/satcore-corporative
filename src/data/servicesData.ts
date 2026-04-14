import { ServiceCategory } from "@/types/service";
import {
  Globe,
  Layout,
  ShoppingCart,
  AppWindow,
  Users,
  Zap,
  Server,
  Settings,
  Workflow,
} from "lucide-react";

export const servicesData: ServiceCategory[] = [
  // 🟢 LANDING PAGES
  {
    id: "SRV-LP",
    category: "Landing Pages",
    subtitle: "Captación de leads y campañas",
    icon: Globe,

    levels: [
      {
        id: "SRV-LP-01",
        name: "Básica",
        level: "🟢 Principiante",
        complexity: "⭐ (1/5)",
        time: "1-2 semanas",
        price: "$1.500.000 - $3.500.000 COP",
        description:
          "Página única orientada a conversión para campañas, lanzamientos o eventos.",

        stack: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind"],
        features: [
          "Formularios de captación",
          "CTAs",
          "Analytics básico",
          "Diseño responsive",
        ],
        deliverables: [
          "Código fuente",
          "Guía de usuario",
          "Acceso a hosting",
        ],
      },
      {
        id: "SRV-LP-02",
        name: "Avanzada",
        level: "🟢 Principiante",
        complexity: "⭐⭐ (2/5)",
        time: "2-3 semanas",
        price: "$3.500.000 - $4.000.000 COP",
        description:
          "Landing page con múltiples secciones, animaciones y funcionalidades intermedias.",

        stack: ["Next.js", "React", "Tailwind", "CMS Headless"],
        features: [
          "Múltiples CTAs",
          "Integración con CRM",
          "Formularios avanzados",
          "Animaciones",
        ],
        deliverables: [
          "Código fuente",
          "Panel administrativo",
          "Documentación técnica",
        ],
      },
    ],
  },

  // 🟡 WEB CORPORATIVA
  {
    id: "SRV-WC",
    category: "Web Corporativa",
    subtitle: "Presencia digital profesional",
    icon: Layout,

    levels: [
      {
        id: "SRV-WC-01",
        name: "Básico",
        level: "🟡 Intermedio",
        complexity: "⭐⭐ (2/5)",
        time: "4-6 semanas",
        price: "$4.000.000 - $6.000.000 COP",
        description:
          "Sitio web institucional con secciones estándar para presencia digital.",

        stack: ["Next.js", "CMS"],
        features: [
          "Blog básico",
          "Formulario de contacto",
          "SEO técnico básico",
        ],
        deliverables: [
          "Sitio completo",
          "Panel administrativo",
          "Manual de usuario",
        ],
      },
      {
        id: "SRV-WC-02",
        name: "Avanzado",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "6-8 semanas",
        price: "$6.000.000 - $8.000.000 COP",
        description:
          "Sitio corporativo completo con branding, SEO e integraciones.",

        stack: ["Next.js", "React", "Tailwind", "Strapi / Contentful"],
        features: [
          "Blog avanzado",
          "SEO completo",
          "Integraciones",
          "Analytics avanzado",
        ],
        deliverables: [
          "Código fuente",
          "CMS configurado",
          "Guía de estilo",
        ],
      },
    ],
  },

  // 🟡 / 🟠 E-COMMERCE
  {
    id: "SRV-EC",
    category: "E-commerce",
    subtitle: "Tiendas online y ventas digitales",
    icon: ShoppingCart,

    levels: [
      {
        id: "SRV-EC-01",
        name: "Básico",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "6-8 semanas",
        price: "$6.000.000 - $12.000.000 COP",
        description:
          "Tienda online funcional basada en WooCommerce.",

        stack: ["WordPress", "WooCommerce"],
        features: [
          "Catálogo de productos",
          "Carrito de compras",
          "Pagos (PayU / MercadoPago)",
          "Inventario básico",
        ],
        deliverables: [
          "Tienda funcional",
          "Panel administrativo",
          "Manual de gestión",
        ],
      },
      {
        id: "SRV-EC-02",
        name: "Profesional",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "8-10 semanas",
        price: "$8.000.000 - $12.000.000 COP",
        description:
          "E-commerce con funcionalidades avanzadas y personalización.",

        stack: ["Shopify", "WooCommerce Custom", "Medusa.js"],
        features: [
          "Filtros avanzados",
          "Reportes",
          "Gestión de pedidos",
          "Integración ERP básica",
        ],
        deliverables: [
          "Tienda personalizada",
          "Panel avanzado",
          "Documentación",
        ],
      },
      {
        id: "SRV-EC-03",
        name: "Empresarial",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "10-16 semanas",
        price: "$12.000.000 - $25.000.000 COP",
        description:
          "Plataforma e-commerce escalable con arquitectura avanzada.",

        stack: ["Node.js", "Medusa.js", "Shopify Plus"],
        features: [
          "Multi-canal",
          "API propia",
          "Multi-moneda",
          "Integraciones ERP/CRM",
        ],
        deliverables: [
          "Plataforma completa",
          "APIs documentadas",
          "App PWA",
        ],
      },
    ],
  },

  // 🔴 WEB APPS
  {
    id: "SRV-WA",
    category: "Web Apps",
    subtitle: "SaaS y plataformas digitales",
    icon: AppWindow,

    levels: [
      {
        id: "SRV-WA-01",
        name: "Básica",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "8-12 semanas",
        price: "$15.000.000 - $20.000.000 COP",
        description:
          "Aplicación web tipo MVP con funcionalidades básicas.",

        stack: ["Next.js", "Node.js", "PostgreSQL / MongoDB"],
        features: [
          "Autenticación",
          "Roles básicos",
          "CRUD",
          "Dashboard",
        ],
        deliverables: [
          "Código fuente",
          "APIs documentadas",
          "Base de datos",
        ],
      },
      {
        id: "SRV-WA-02",
        name: "Avanzada",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "12-16 semanas",
        price: "$20.000.000 - $30.000.000 COP",
        description:
          "Aplicación escalable con arquitectura empresarial.",

        stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
        features: [
          "Workflows",
          "Realtime",
          "Integraciones API",
          "Arquitectura escalable",
        ],
        deliverables: [
          "Sistema completo",
          "APIs REST/GraphQL",
          "Documentación técnica",
        ],
      },
    ],
  },

  // 🔴 PORTAL
  {
    id: "SRV-PORTAL",
    category: "Portales Web",
    subtitle: "Plataformas multiusuario",
    icon: Users,

    levels: [
      {
        id: "SRV-PORTAL-01",
        name: "Empresarial",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "12-24 semanas",
        price: "Desde $25.000.000 COP",
        description:
          "Plataforma multiusuario con roles y comunidades.",

        stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
        features: [
          "Roles avanzados",
          "Foros",
          "Mensajería",
          "Monetización",
        ],
        deliverables: [
          "Plataforma completa",
          "CMS avanzado",
          "APIs",
        ],
      },
    ],
  },

  // 🔴 CUSTOM
  {
    id: "SRV-CUSTOM",
    category: "Desarrollo a Medida",
    subtitle: "Soluciones personalizadas",
    icon: Workflow,

    levels: [
      {
        id: "SRV-CUSTOM-01",
        name: "Personalizado",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "16+ semanas",
        price: "Desde $15.000.000 COP",
        description:
          "Solución completamente adaptada a requerimientos específicos.",

        stack: ["A definir"],
        features: [
          "Arquitectura personalizada",
          "Desarrollo end-to-end",
        ],
        deliverables: [
          "Proyecto completo según alcance",
        ],
      },
    ],
  },

  {
    id: "SRV-MNT",
    category: "Mantenimiento y Soporte",
    subtitle: "Planes de soporte, seguridad y evolución",
    icon: Settings,

    levels: [
      {
        id: "SRV-MNT-01",
        name: "Básico",
        level: "🔵 Operación continua",
        complexity: "Soporte básico",
        time: "Mensual",
        price: "Desde $200.000 COP / mes",

        description:
          "Actualizaciones de seguridad y backup mensual.",

        stack: ["DevOps", "Monitoreo", "Seguridad"],

        features: [
          "Actualizaciones de seguridad",
          "Backup mensual",
          "Monitoreo básico",
        ],

        deliverables: [
          "Reporte mensual",
          "Soporte básico",
        ],
      },

      {
        id: "SRV-MNT-02",
        name: "Estándar",
        level: "🔵 Operación continua",
        complexity: "Soporte + monitoreo",
        time: "Mensual",
        price: "Desde $450.000 COP / mes",

        description:
          "Soporte técnico + monitoreo activo.",

        stack: ["DevOps", "Monitoring", "Security"],

        features: [
          "Todo lo del básico",
          "Soporte 8h/mes",
          "Monitoreo activo",
        ],

        deliverables: [
          "Reportes detallados",
          "Soporte extendido",
        ],
      },

      {
        id: "SRV-MNT-03",
        name: "Avanzado",
        level: "🔵 Operación continua",
        complexity: "Soporte + evolución",
        time: "Mensual",
        price: "Desde $850.000 COP / mes",

        description:
          "Incluye mejoras evolutivas y prioridad.",

        stack: ["DevOps", "Cloud", "Security"],

        features: [
          "Todo lo del estándar",
          "4h desarrollo evolutivo",
          "Prioridad en soporte",
        ],

        deliverables: [
          "Mejoras continuas",
          "Optimización mensual",
        ],
      },

      {
        id: "SRV-MNT-04",
        name: "Empresarial",
        level: "🔵 Operación continua",
        complexity: "SLA 24/7",
        time: "Mensual",

        price: "Cotización",

        description:
          "Soporte 24/7 con SLA empresarial.",

        stack: ["DevOps", "AWS", "Security"],

        features: [
          "SLA 24/7",
          "Respuesta inmediata",
          "Equipo dedicado",
        ],

        deliverables: [
          "Soporte completo",
        ],
      },
    ],
  },

  {
    id: "SRV-HOST",
    category: "Hosting y Deploy",
    subtitle: "Despliegue y puesta en producción",
    icon: Server,

    levels: [
      {
        id: "SRV-HOST-01",
        name: "Landing / Sitio básico",
        level: "🔵 Infraestructura",
        complexity: "Básico",
        time: "1-2 días",
        price: "$400.000 - $800.000 COP",

        description:
          "Configuración y despliegue en hosting optimizado para sitios estáticos o landing pages.",

        stack: ["Vercel", "Hostinger"],

        features: [
          "Deploy automático",
          "Configuración de dominio",
          "SSL incluido",
        ],

        deliverables: [
          "Sitio en producción",
          "Configuración DNS",
        ],
      },

      {
        id: "SRV-HOST-02",
        name: "Sitio corporativo",
        level: "🔵 Infraestructura",
        complexity: "Intermedio",
        time: "2-4 días",
        price: "$800.000 - $1.500.000 COP",

        description:
          "Deploy con CMS y optimización básica de performance.",

        stack: ["Cloudways", "SiteGround"],

        features: [
          "Deploy con CMS",
          "Optimización SEO base",
          "SSL + dominio",
        ],

        deliverables: [
          "Sitio en producción",
          "CMS funcionando",
        ],
      },

      {
        id: "SRV-HOST-03",
        name: "E-commerce",
        level: "🔵 Infraestructura",
        complexity: "Avanzado",
        time: "3-7 días",
        price: "$1.200.000 - $3.000.000 COP",

        description:
          "Infraestructura para tiendas online con alta disponibilidad.",

        stack: ["AWS", "Cloudways"],

        features: [
          "Deploy escalable",
          "Balanceo básico",
          "Seguridad SSL + firewall",
          "Backup automático del servidor",
        ],

        deliverables: [
          "Tienda en producción",
          "Configuración completa",
        ],
      },

      {
        id: "SRV-HOST-04",
        name: "Web App / Alto tráfico",
        level: "🔵 Infraestructura",
        complexity: "Enterprise",
        time: "5-10 días",
        price: "Cotización",

        description:
          "Arquitectura cloud para aplicaciones escalables.",

        stack: ["AWS", "Azure"],

        features: [
          "Escalabilidad",
          "CI/CD",
          "Monitoreo",
        ],

        deliverables: [
          "Infraestructura completa",
        ],
      },
    ],
  },

  // 🚧 FUTURO
  {
    id: "SRV-FUTURE",
    category: "Próximamente",
    subtitle: "Nuevas soluciones en desarrollo",
    icon: Zap,

    levels: [
      {
        id: "SRV-FUTURE-01",
        name: "En desarrollo",
        level: "🚧 Próximamente",
        complexity: "-",
        time: "-",
        price: "-",
        description:
          "Estamos desarrollando nuevas soluciones.",

        stack: ["-"],
        features: ["En desarrollo"],
        deliverables: ["-"],
      },
    ],
  },
];