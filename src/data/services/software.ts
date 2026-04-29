// data/services/software.ts
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

export const softwareServices: ServiceCategory[] = [
    // 🟢 LANDING PAGES
    {
        id: "SRV-LP",
        category: "Landing Pages",
        subtitle: "Captación de leads y optimización de conversiones",
        icon: Globe,

        levels: [
            {
                id: "SRV-LP-01",
                name: "Landing Page Básica",
                level: "🟢 Básico",
                complexity: "⭐ (1/5)",
                time: "1-2 semanas",
                price: "$1.500.000 - $3.500.000 COP",

                description:
                    "Landing page optimizada para conversión enfocada en campañas específicas, captación de leads o validación de ideas.",

                // 🔥 NEGOCIO
                target:
                    "Emprendedores, startups y negocios que necesitan validar productos o captar leads rápidamente.",

                useCases: [
                    "Lanzamiento de producto",
                    "Captación de leads",
                    "Campañas publicitarias",
                    "Eventos o webinars",
                ],

                includes: [
                    "Diseño UX/UI enfocado en conversión",
                    "Formulario de captación",
                    "Optimización básica SEO",
                    "Configuración inicial",
                ],

                notIncludes: [
                    "Integraciones complejas con CRM",
                    "Automatizaciones avanzadas",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["Next.js", "HTML", "CSS", "Tailwind", "JavaScript"],

                features: [
                    "Call To Actions (CTAs)",
                    "Formulario de contacto",
                    "Diseño responsive",
                    "Carga optimizada",
                ],

                deliverables: [
                    "Landing page funcional",
                    "Código fuente",
                    "Guía básica de uso",
                ],

                integrations: ["Google Analytics (básico)"],
                automationLevel: "low",

                support: "7 días soporte post-entrega",
            },

            {
                id: "SRV-LP-02",
                name: "Landing Page Avanzada",
                level: "🟡 Intermedio",
                complexity: "⭐⭐ (2/5)",
                time: "2-3 semanas",
                price: "$3.500.000 - $6.000.000 COP",

                description:
                    "Landing page avanzada con múltiples secciones, integraciones y optimización orientada a conversión y marketing digital.",

                // 🔥 NEGOCIO
                target:
                    "Empresas y negocios que ejecutan campañas activas y necesitan optimización de conversión y automatización de leads.",

                useCases: [
                    "Funnels de marketing",
                    "Captación automatizada de leads",
                    "Campañas con tráfico pago",
                    "Validación de productos",
                ],

                includes: [
                    "Diseño UX/UI avanzado",
                    "Formularios dinámicos",
                    "Integración con CRM",
                    "Animaciones e interactividad",
                ],

                notIncludes: [
                    "Sistema completo de marketing automation",
                    "Desarrollo backend complejo",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["Next.js", "React", "Tailwind", "Headless CMS"],

                features: [
                    "Múltiples CTAs",
                    "Integración con CRM",
                    "Tracking avanzado",
                    "Animaciones",
                ],

                deliverables: [
                    "Landing page completa",
                    "Panel administrativo (CMS)",
                    "Documentación técnica",
                ],

                integrations: ["CRM", "Google Analytics", "Email Marketing"],
                automationLevel: "medium",

                support: "15 días soporte + ajustes menores",
            },
        ],
    },

    // 🟡 WEB CORPORATIVA
    {
        id: "SRV-WC",
        category: "Web Corporativa",
        subtitle: "Presencia digital profesional y escalable",
        icon: Layout,

        levels: [
            {
                id: "SRV-WC-01",
                name: "Web Corporativa Básica",
                level: "🟡 Intermedio",
                complexity: "⭐⭐ (2/5)",
                time: "4-6 semanas",
                price: "$4.000.000 - $6.000.000 COP",

                description:
                    "Sitio web institucional con estructura profesional para establecer presencia digital y credibilidad de marca.",

                // 🔥 NEGOCIO
                target:
                    "Pequeñas y medianas empresas que necesitan presencia digital profesional.",

                useCases: [
                    "Sitio institucional",
                    "Presentación de servicios",
                    "Captación de clientes",
                ],

                includes: [
                    "Diseño UX/UI corporativo",
                    "Secciones estándar (inicio, servicios, contacto)",
                    "Blog básico",
                    "Formulario de contacto",
                ],

                notIncludes: [
                    "Integraciones avanzadas",
                    "Automatizaciones complejas",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["Next.js", "CMS básico"],

                features: [
                    "SEO técnico básico",
                    "Responsive design",
                    "Blog integrado",
                    "Formulario de contacto",
                ],

                deliverables: [
                    "Sitio web completo",
                    "Panel administrativo",
                    "Manual de uso",
                ],

                integrations: ["Google Analytics"],
                automationLevel: "low",

                support: "15 días soporte post-entrega",
            },

            {
                id: "SRV-WC-02",
                name: "Web Corporativa Avanzada",
                level: "🟠 Avanzado",
                complexity: "⭐⭐⭐ (3/5)",
                time: "6-8 semanas",
                price: "$6.000.000 - $10.000.000 COP",

                description:
                    "Sitio corporativo completo con enfoque en escalabilidad, SEO avanzado e integraciones para marketing y operaciones.",

                // 🔥 NEGOCIO
                target:
                    "Empresas en crecimiento que requieren posicionamiento digital y automatización de procesos.",

                useCases: [
                    "Plataforma corporativa completa",
                    "Generación constante de leads",
                    "Marketing de contenido",
                ],

                includes: [
                    "Diseño UX/UI avanzado",
                    "SEO técnico y estratégico",
                    "CMS headless",
                    "Integraciones con herramientas externas",
                ],

                notIncludes: [
                    "Desarrollo de plataformas SaaS",
                    "Sistemas complejos a medida",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["Next.js", "React", "Tailwind", "Strapi / Contentful"],

                features: [
                    "Blog avanzado",
                    "SEO completo",
                    "Analytics avanzado",
                    "Integraciones",
                ],

                deliverables: [
                    "Código fuente",
                    "CMS configurado",
                    "Guía de estilo",
                ],

                integrations: ["CRM", "Analytics", "Email Marketing"],
                automationLevel: "medium",

                support: "30 días soporte + optimización inicial",
            },
        ],
    },

    // 🟡 / 🟠 E-COMMERCE
    {
        id: "SRV-EC",
        category: "E-commerce",
        subtitle: "Plataformas de venta online escalables y optimizadas",
        icon: ShoppingCart,

        levels: [
            {
                id: "SRV-EC-01",
                name: "E-commerce Básico",
                level: "🟡 Intermedio",
                complexity: "⭐⭐⭐ (3/5)",
                time: "6-8 semanas",
                price: "$6.000.000 - $12.000.000 COP",

                description:
                    "Tienda online funcional con gestión de productos, pagos y pedidos, ideal para comenzar a vender en internet.",

                // 🔥 NEGOCIO
                target:
                    "Emprendedores y pequeñas empresas que buscan iniciar ventas online de forma rápida y efectiva.",

                useCases: [
                    "Venta de productos físicos",
                    "Catálogo digital",
                    "Primer canal de e-commerce",
                ],

                includes: [
                    "Configuración de tienda",
                    "Catálogo de productos",
                    "Pasarela de pagos",
                    "Panel administrativo",
                ],

                notIncludes: [
                    "Integraciones ERP avanzadas",
                    "Automatización de marketing",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["WordPress", "WooCommerce"],

                features: [
                    "Carrito de compras",
                    "Gestión de inventario",
                    "Pagos (PayU, MercadoPago)",
                    "Responsive design",
                ],

                deliverables: [
                    "Tienda funcional",
                    "Panel administrativo",
                    "Manual de uso",
                ],

                integrations: ["Pasarelas de pago"],
                automationLevel: "low",

                support: "15 días soporte post-entrega",
            },

            {
                id: "SRV-EC-02",
                name: "E-commerce Profesional",
                level: "🟠 Avanzado",
                complexity: "⭐⭐⭐⭐ (4/5)",
                time: "8-10 semanas",
                price: "$8.000.000 - $15.000.000 COP",

                description:
                    "Tienda online con funcionalidades avanzadas, optimización de conversión y gestión eficiente de pedidos.",

                // 🔥 NEGOCIO
                target:
                    "Empresas en crecimiento que necesitan escalar ventas digitales y optimizar procesos.",

                useCases: [
                    "Escalamiento de ventas",
                    "Optimización de conversiones",
                    "Gestión avanzada de pedidos",
                ],

                includes: [
                    "Diseño UX/UI optimizado",
                    "Filtros avanzados",
                    "Reportes",
                    "Gestión de pedidos",
                ],

                notIncludes: [
                    "Arquitectura completamente custom",
                    "Microservicios avanzados",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["Shopify", "WooCommerce Custom", "Medusa.js"],

                features: [
                    "Filtros avanzados",
                    "Analytics",
                    "Gestión de pedidos",
                    "Integración básica ERP",
                ],

                deliverables: [
                    "Tienda personalizada",
                    "Panel avanzado",
                    "Documentación",
                ],

                integrations: ["ERP básico", "Analytics"],
                automationLevel: "medium",

                support: "30 días soporte + optimización inicial",
            },

            {
                id: "SRV-EC-03",
                name: "E-commerce Empresarial",
                level: "🔴 Experto",
                complexity: "⭐⭐⭐⭐⭐ (5/5)",
                time: "10-16 semanas",
                price: "$12.000.000 - $25.000.000 COP",

                description:
                    "Plataforma e-commerce escalable con arquitectura avanzada, integraciones empresariales y enfoque multi-canal.",

                // 🔥 NEGOCIO
                target:
                    "Empresas consolidadas que requieren escalabilidad, automatización y alto volumen de ventas.",

                useCases: [
                    "Venta multi-canal",
                    "Integración con ERP/CRM",
                    "Escalamiento de operaciones",
                ],

                includes: [
                    "Arquitectura escalable",
                    "Integraciones ERP/CRM",
                    "Multi-moneda",
                    "API personalizada",
                ],

                notIncludes: [
                    "Infraestructura cloud dedicada (opcional)",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["Node.js", "Medusa.js", "Shopify Plus"],

                features: [
                    "Multi-canal",
                    "APIs",
                    "Alta escalabilidad",
                    "Gestión avanzada",
                ],

                deliverables: [
                    "Plataforma completa",
                    "APIs documentadas",
                    "PWA (opcional)",
                ],

                integrations: ["ERP", "CRM", "Pagos"],
                automationLevel: "high",

                support: "45 días soporte + acompañamiento",
            },
        ],
    },

    // 🔴 WEB APPS
    {
        id: "SRV-WA",
        category: "Web Apps",
        subtitle: "Aplicaciones web, SaaS y plataformas digitales",
        icon: AppWindow,

        levels: [
            {
                id: "SRV-WA-01",
                name: "Web App MVP",
                level: "🔴 Experto",
                complexity: "⭐⭐⭐⭐ (4/5)",
                time: "8-12 semanas",
                price: "$15.000.000 - $20.000.000 COP",

                description:
                    "Aplicación web tipo MVP para validar ideas de negocio con funcionalidades esenciales.",

                target:
                    "Startups y emprendedores que buscan lanzar un producto digital rápidamente.",

                useCases: [
                    "Validación de startup",
                    "MVP funcional",
                    "Producto digital inicial",
                ],

                includes: [
                    "Autenticación",
                    "Dashboard",
                    "CRUD completo",
                    "Base de datos",
                ],

                notIncludes: [
                    "Alta escalabilidad",
                    "Microservicios complejos",
                ],

                pricingType: "fixed",

                stack: ["Next.js", "Node.js", "PostgreSQL / MongoDB"],

                features: [
                    "Login y roles",
                    "Panel de usuario",
                    "Gestión de datos",
                ],

                deliverables: [
                    "Código fuente",
                    "APIs",
                    "Base de datos",
                ],

                integrations: ["Auth", "DB"],
                automationLevel: "medium",

                support: "30 días soporte",
            },

            {
                id: "SRV-WA-02",
                name: "Web App Avanzada",
                level: "🔴 Experto",
                complexity: "⭐⭐⭐⭐⭐ (5/5)",
                time: "12-16 semanas",
                price: "$20.000.000 - $30.000.000 COP",

                description:
                    "Aplicación web escalable con arquitectura empresarial, integraciones y alto rendimiento.",

                target:
                    "Empresas y startups que requieren productos digitales robustos y escalables.",

                useCases: [
                    "SaaS",
                    "Plataformas digitales",
                    "Sistemas internos",
                ],

                includes: [
                    "Arquitectura escalable",
                    "Integraciones API",
                    "Realtime",
                    "Workflows complejos",
                ],

                notIncludes: [
                    "Infraestructura dedicada (opcional)",
                ],

                pricingType: "fixed",

                stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],

                features: [
                    "Realtime",
                    "APIs",
                    "Escalabilidad",
                    "Seguridad",
                ],

                deliverables: [
                    "Sistema completo",
                    "APIs REST/GraphQL",
                    "Documentación",
                ],

                integrations: ["Cloud", "APIs externas"],
                automationLevel: "high",

                support: "60 días soporte + acompañamiento",
            },
        ],
    },

    // 🔴 PORTAL
    {
        id: "SRV-PORTAL",
        category: "Portales Web",
        subtitle: "Plataformas multiusuario y ecosistemas digitales",
        icon: Users,

        levels: [
            {
                id: "SRV-PORTAL-01",
                name: "Portal Empresarial",
                level: "🔴 Experto",
                complexity: "⭐⭐⭐⭐⭐ (5/5)",
                time: "12-24 semanas",
                price: "Desde $25.000.000 COP",

                description:
                    "Plataforma web multiusuario con gestión de roles, comunidades e interacción avanzada.",

                target:
                    "Empresas, startups o instituciones que requieren plataformas digitales complejas con múltiples usuarios.",

                useCases: [
                    "Comunidades digitales",
                    "Plataformas educativas",
                    "Sistemas internos",
                ],

                includes: [
                    "Sistema de roles",
                    "Panel administrativo",
                    "Gestión de usuarios",
                    "Módulos personalizados",
                ],

                notIncludes: [
                    "Infraestructura dedicada (opcional)",
                ],

                pricingType: "custom",

                stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],

                features: [
                    "Roles avanzados",
                    "Mensajería",
                    "Foros",
                    "Monetización",
                ],

                deliverables: [
                    "Plataforma completa",
                    "CMS avanzado",
                    "APIs",
                ],

                integrations: ["Pagos", "CRM", "Analytics"],
                automationLevel: "high",

                support: "90 días soporte + acompañamiento",
            },
        ],
    },

    // 🔴 CUSTOM
    {
        id: "SRV-CUSTOM",
        category: "Desarrollo a Medida",
        subtitle: "Soluciones tecnológicas diseñadas desde cero",
        icon: Workflow,

        levels: [
            {
                id: "SRV-CUSTOM-01",
                name: "Solución Personalizada",
                level: "🔴 Experto",
                complexity: "⭐⭐⭐⭐⭐ (5/5)",
                time: "16+ semanas",
                price: "Desde $15.000.000 COP",

                description:
                    "Desarrollo completamente adaptado a necesidades específicas, con arquitectura personalizada, escalabilidad y enfoque en negocio.",

                target:
                    "Empresas con requerimientos únicos, procesos complejos o necesidad de software diferencial.",

                useCases: [
                    "Sistemas internos empresariales",
                    "Plataformas digitales personalizadas",
                    "Automatización avanzada de procesos",
                ],

                includes: [
                    "Análisis y levantamiento de requerimientos",
                    "Arquitectura de software personalizada",
                    "Desarrollo full-stack",
                    "Testing y QA",
                    "Deploy y puesta en producción",
                ],

                notIncludes: [
                    "Infraestructura (opcional)",
                    "Soporte continuo (se cotiza aparte)",
                ],

                pricingType: "custom",

                stack: ["Next.js", "Node.js", "Cloud", "Arquitectura custom"],

                features: [
                    "Arquitectura escalable",
                    "Desarrollo modular",
                    "Integraciones API",
                    "Seguridad avanzada",
                ],

                deliverables: [
                    "Sistema completo",
                    "Código fuente",
                    "Documentación técnica",
                ],

                integrations: ["APIs externas", "Sistemas internos"],
                automationLevel: "high",

                support: "Opcional (planes mensuales)",
            },
        ],
    },

    {
        id: "SRV-MNT",
        category: "Mantenimiento y Soporte",
        subtitle: "Operación, seguridad y evolución continua",
        icon: Settings,

        levels: [
            {
                id: "SRV-MNT-01",
                name: "Plan Básico",
                level: "🔵 Operación continua",
                complexity: "⭐ (1/5)",
                time: "Mensual",
                price: "Desde $200.000 COP / mes",

                description:
                    "Mantenimiento esencial para mantener el sistema seguro, actualizado y funcionando correctamente.",

                // 🔥 NEGOCIO
                target:
                    "Landing pages, sitios pequeños o proyectos con bajo tráfico que requieren mantenimiento básico.",

                useCases: [
                    "Sitios corporativos simples",
                    "Landing pages",
                    "Proyectos personales",
                ],

                includes: [
                    "Actualizaciones de seguridad",
                    "Backup mensual",
                    "Monitoreo básico",
                ],

                notIncludes: [
                    "Soporte prioritario",
                    "Desarrollo evolutivo",
                ],

                pricingType: "subscription",

                // ⚙️ TÉCNICO
                stack: ["DevOps", "Monitoring", "Security"],

                features: [
                    "Actualización de dependencias",
                    "Backups automatizados",
                    "Monitoreo básico del sistema",
                ],

                deliverables: [
                    "Reporte mensual",
                    "Soporte básico",
                ],

                integrations: ["Sistema actual"],
                automationLevel: "low",

                support: "Soporte por email (respuesta en 48h)",
            },

            {
                id: "SRV-MNT-02",
                name: "Plan Estándar",
                level: "🔵 Operación continua",
                complexity: "⭐⭐ (2/5)",
                time: "Mensual",
                price: "Desde $450.000 COP / mes",

                description:
                    "Soporte técnico activo con monitoreo continuo y resolución de incidencias.",

                target:
                    "Empresas pequeñas o medianas que necesitan estabilidad y soporte regular.",

                useCases: [
                    "Sitios corporativos activos",
                    "Blogs con tráfico",
                    "Sistemas internos básicos",
                ],

                includes: [
                    "Todo lo del plan básico",
                    "Soporte técnico hasta 8h/mes",
                    "Monitoreo activo",
                ],

                notIncludes: [
                    "Desarrollo evolutivo complejo",
                    "Soporte 24/7",
                ],

                pricingType: "subscription",

                stack: ["DevOps", "Monitoring", "Security"],

                features: [
                    "Resolución de incidencias",
                    "Monitoreo continuo",
                    "Optimización básica",
                ],

                deliverables: [
                    "Reportes detallados",
                    "Soporte extendido",
                ],

                integrations: ["Sistema actual"],
                automationLevel: "medium",

                support: "Soporte prioritario (respuesta en 24h)",
            },

            {
                id: "SRV-MNT-03",
                name: "Plan Avanzado",
                level: "🔵 Operación continua",
                complexity: "⭐⭐⭐ (3/5)",
                time: "Mensual",
                price: "Desde $850.000 COP / mes",

                description:
                    "Plan completo con soporte prioritario y mejoras evolutivas continuas.",

                target:
                    "Empresas que necesitan evolución constante del sistema y soporte ágil.",

                useCases: [
                    "E-commerce",
                    "Sistemas empresariales",
                    "Plataformas en crecimiento",
                ],

                includes: [
                    "Todo lo del plan estándar",
                    "Horas de desarrollo evolutivo",
                    "Soporte prioritario",
                ],

                notIncludes: [
                    "SLA 24/7 completo",
                ],

                pricingType: "subscription",

                stack: ["DevOps", "Cloud", "Security"],

                features: [
                    "Optimización continua",
                    "Mejoras mensuales",
                    "Ajustes funcionales",
                ],

                deliverables: [
                    "Mejoras continuas",
                    "Optimización mensual",
                ],

                integrations: ["APIs", "Servicios cloud"],
                automationLevel: "high",

                support: "Alta prioridad (respuesta en horas)",
            },

            {
                id: "SRV-MNT-04",
                name: "Plan Empresarial",
                level: "🔵 Operación continua",
                complexity: "⭐⭐⭐⭐ (4/5)",
                time: "Mensual",
                price: "Cotización",

                description:
                    "Soporte empresarial con SLA 24/7, monitoreo avanzado y equipo dedicado.",

                target:
                    "Empresas con sistemas críticos que requieren alta disponibilidad y respuesta inmediata.",

                useCases: [
                    "SaaS",
                    "Plataformas de alto tráfico",
                    "Sistemas críticos de negocio",
                ],

                includes: [
                    "Soporte 24/7",
                    "Equipo dedicado",
                    "Monitoreo avanzado",
                    "Gestión proactiva",
                ],

                notIncludes: [
                    "Desarrollos fuera del alcance acordado",
                ],

                pricingType: "custom",

                stack: ["DevOps", "AWS", "Cloud", "Security"],

                features: [
                    "SLA garantizado",
                    "Alta disponibilidad",
                    "Escalabilidad",
                ],

                deliverables: [
                    "Soporte completo",
                    "Reportes ejecutivos",
                ],

                integrations: ["Cloud", "Infraestructura empresarial"],
                automationLevel: "enterprise",

                support: "SLA 24/7 (respuesta inmediata)",
            },
        ],
    },
    {
        id: "SRV-HOST",
        category: "Hosting y Deploy",
        subtitle: "Infraestructura, despliegue y escalabilidad",
        icon: Server,

        levels: [
            {
                id: "SRV-HOST-01",
                name: "Landing / Sitio Básico",
                level: "🔵 Infraestructura",
                complexity: "⭐ (1/5)",
                time: "1-2 días",
                price: "$400.000 - $800.000 COP",

                description:
                    "Despliegue optimizado para landing pages y sitios estáticos con configuración rápida, segura y lista para producción.",

                // 🔥 NEGOCIO
                target:
                    "Emprendedores, campañas de marketing o negocios que necesitan lanzar rápidamente una página web funcional.",

                useCases: [
                    "Landing pages de campañas",
                    "Sitios informativos básicos",
                    "Lanzamientos rápidos de productos",
                ],

                includes: [
                    "Configuración de hosting",
                    "Deploy automático",
                    "Configuración de dominio y SSL",
                ],

                notIncludes: [
                    "Infraestructura escalable avanzada",
                    "Integraciones complejas",
                ],

                pricingType: "fixed",

                // ⚙️ TÉCNICO
                stack: ["Vercel", "Hostinger", "DNS", "SSL"],

                features: [
                    "Configuración DNS",
                    "SSL automático",
                    "Deploy continuo básico",
                ],

                deliverables: [
                    "Sitio en producción",
                    "Dominio configurado",
                    "Acceso a plataforma de hosting",
                ],

                integrations: ["Dominio", "Hosting"],
                automationLevel: "low",

                support: "3 días soporte post-deploy",
            },

            {
                id: "SRV-HOST-02",
                name: "Sitio Corporativo",
                level: "🔵 Infraestructura",
                complexity: "⭐⭐ (2/5)",
                time: "2-4 días",
                price: "$800.000 - $1.500.000 COP",

                description:
                    "Despliegue profesional para sitios corporativos con CMS, optimización básica y configuración de rendimiento.",

                target:
                    "Empresas que requieren presencia digital estable con capacidad de gestión de contenido.",

                useCases: [
                    "Sitios corporativos",
                    "Blogs empresariales",
                    "Webs con CMS",
                ],

                includes: [
                    "Configuración de hosting",
                    "Deploy con CMS",
                    "Optimización básica de performance",
                    "Configuración de dominio y SSL",
                ],

                notIncludes: [
                    "Arquitectura cloud escalable",
                    "Alta disponibilidad avanzada",
                ],

                pricingType: "fixed",

                stack: ["Cloudways", "SiteGround", "CMS", "DNS"],

                features: [
                    "Deploy CMS",
                    "Optimización SEO básica",
                    "Configuración de servidor",
                ],

                deliverables: [
                    "Sitio en producción",
                    "CMS funcionando",
                    "Acceso administrativo",
                ],

                integrations: ["CMS", "Hosting"],
                automationLevel: "medium",

                support: "5 días soporte post-deploy",
            },

            {
                id: "SRV-HOST-03",
                name: "E-commerce",
                level: "🔵 Infraestructura",
                complexity: "⭐⭐⭐ (3/5)",
                time: "3-7 días",
                price: "$1.200.000 - $3.000.000 COP",

                description:
                    "Infraestructura optimizada para tiendas online con enfoque en disponibilidad, seguridad y rendimiento.",

                target:
                    "Negocios digitales que requieren estabilidad y rendimiento para ventas online.",

                useCases: [
                    "Tiendas WooCommerce o Shopify",
                    "E-commerce en crecimiento",
                    "Plataformas de venta digital",
                ],

                includes: [
                    "Configuración de servidor optimizado",
                    "Backups automáticos",
                    "Seguridad SSL y firewall básico",
                    "Optimización de rendimiento",
                ],

                notIncludes: [
                    "Arquitectura multi-región",
                    "Alta disponibilidad enterprise",
                ],

                pricingType: "fixed",

                stack: ["AWS", "Cloudways", "CDN", "Security"],

                features: [
                    "Escalabilidad básica",
                    "Backups automáticos",
                    "Optimización de carga",
                    "Seguridad reforzada",
                ],

                deliverables: [
                    "Infraestructura en producción",
                    "Configuración completa",
                    "Acceso al servidor",
                ],

                integrations: ["Pasarelas de pago", "CDN"],
                automationLevel: "high",

                support: "7 días soporte post-deploy",
            },

            {
                id: "SRV-HOST-04",
                name: "Web App / Alto Tráfico",
                level: "🔵 Infraestructura",
                complexity: "⭐⭐⭐⭐ (4/5)",
                time: "5-10 días",
                price: "Cotización",

                description:
                    "Arquitectura cloud escalable diseñada para aplicaciones web de alto tráfico, con automatización, monitoreo y alta disponibilidad.",

                target:
                    "Empresas con plataformas SaaS, apps o sistemas críticos que requieren escalabilidad y disponibilidad constante.",

                useCases: [
                    "SaaS",
                    "Aplicaciones web escalables",
                    "Plataformas con alto tráfico",
                ],

                includes: [
                    "Arquitectura cloud personalizada",
                    "CI/CD pipeline",
                    "Autoescalado",
                    "Monitoreo avanzado",
                ],

                notIncludes: [
                    "Gestión continua (MSSP o mantenimiento aparte)",
                ],

                pricingType: "custom",

                stack: ["AWS", "Azure", "CI/CD", "Docker", "Monitoring"],

                features: [
                    "Autoescalado",
                    "Alta disponibilidad",
                    "Monitoreo en tiempo real",
                    "Despliegue automatizado",
                ],

                deliverables: [
                    "Infraestructura completa",
                    "Pipelines de despliegue",
                    "Documentación técnica",
                ],

                integrations: ["Cloud", "APIs", "DevOps tools"],
                automationLevel: "enterprise",

                support: "Soporte inicial + opción de mantenimiento",
            },
        ],
    },
    // 🚧 FUTURO
    {
        id: "SRV-FUTURE",
        category: "Próximamente",
        subtitle: "Innovación en desarrollo",
        icon: Zap,

        levels: [
            {
                id: "SRV-FUTURE-01",
                name: "Nuevas Soluciones",
                level: "🚧 Próximamente",
                complexity: "-",
                time: "-",
                price: "-",

                description:
                    "Estamos desarrollando nuevas soluciones tecnológicas para ampliar nuestro portafolio.",

                target:
                    "Empresas interesadas en innovación y nuevas tecnologías.",

                useCases: [
                    "IA avanzada",
                    "Automatización empresarial",
                    "Nuevos productos SaaS",
                ],

                includes: [
                    "Acceso anticipado",
                    "Participación en beta",
                ],

                stack: ["-"],

                features: [
                    "En desarrollo",
                ],

                deliverables: [
                    "Próximamente",
                ],
            },
        ],
    },
];