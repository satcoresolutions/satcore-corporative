// data/services/automation.ts
import { ServiceCategory } from "@/types/service";
import { Workflow, Bot, Database, Cloud } from "lucide-react";

export const automationServices: ServiceCategory[] = [
  // =========================
  // 📂 AUTOMATIZACIÓN DE ARCHIVOS
  // =========================
  {
    id: "AUT-FILES",
    category: "Automatización de Archivos",
    subtitle: "Optimización, organización y control inteligente de archivos",
    icon: Workflow,

    levels: [
      {
        id: "AUT-FILES-BAS-001",
        name: "Organizador de Archivos",
        level: "🟢 Básico",
        complexity: "⭐ (1/5)",
        time: "2-5 días",
        price: "$500.000 - $1.000.000 COP",

        description:
          "Automatización básica para organizar archivos de forma estructurada, eliminando procesos manuales repetitivos.",

        // 🔥 NEGOCIO
        target:
          "Usuarios individuales, freelancers o pequeñas empresas con alto volumen de archivos desordenados.",

        useCases: [
          "Organización de descargas",
          "Clasificación de documentos empresariales",
          "Orden automático de imágenes o archivos multimedia",
        ],

        includes: [
          "Script de automatización personalizado",
          "Reglas de organización (por tipo, fecha o nombre)",
          "Configuración inicial",
        ],

        notIncludes: [
          "Interfaces gráficas avanzadas",
          "Integraciones con sistemas externos",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Python (os, shutil)", "Bash"],

        features: [
          "Renombrado automático",
          "Organización por tipo y fecha",
          "Ejecución manual o programada",
        ],

        deliverables: [
          "Script ejecutable",
          "README de uso",
          "Video tutorial básico",
        ],

        integrations: ["Sistema local"],
        automationLevel: "low",

        support: "7 días soporte post-entrega",
      },

      {
        id: "AUT-FILES-ADV-001",
        name: "Gestor de Archivos Avanzado",
        level: "🟡 Intermedio",
        complexity: "⭐⭐ (2/5)",
        time: "1-2 semanas",
        price: "$1.000.000 - $2.500.000 COP",

        description:
          "Sistema automatizado avanzado para gestión de archivos con detección inteligente, optimización y control de datos.",

        // 🔥 NEGOCIO
        target:
          "Empresas o profesionales que manejan grandes volúmenes de archivos y requieren control, eficiencia y reducción de errores.",

        useCases: [
          "Gestión de repositorios empresariales",
          "Eliminación de archivos duplicados",
          "Automatización de backups",
          "Optimización de almacenamiento",
        ],

        includes: [
          "Sistema automatizado configurable",
          "Detección de duplicados",
          "Procesamiento de metadatos",
          "Backups automáticos",
        ],

        notIncludes: [
          "Infraestructura cloud (opcional adicional)",
          "Dashboards avanzados",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Python", "pandas", "Pillow (opcional)", "Node.js (opcional)"],

        features: [
          "Detección de duplicados",
          "Extracción de metadatos",
          "Compresión automática",
          "Backups programados",
        ],

        deliverables: [
          "Aplicación CLI o GUI básica",
          "Documentación técnica",
          "Configuración personalizada",
        ],

        integrations: ["Sistema local", "Google Drive (opcional)"],
        automationLevel: "medium",

        support: "15 días soporte + ajustes menores",
      },
    ],
  },

  // =========================
  // 🌐 WEB SCRAPING
  // =========================
  {
    id: "AUT-SCRAP",
    category: "Web Scraping",
    subtitle: "Extracción, análisis y automatización de datos web",
    icon: Cloud,

    levels: [
      {
        id: "SCRAP-BAS-001",
        name: "Web Scraper Básico",
        level: "🟢 Básico",
        complexity: "⭐⭐ (2/5)",
        time: "2-5 días",
        price: "$800.000 - $1.500.000 COP",

        description:
          "Extracción automatizada de datos desde sitios web estáticos para análisis, monitoreo o generación de bases de datos.",

        // 🔥 NEGOCIO
        target:
          "Emprendedores, analistas o pequeñas empresas que necesitan recopilar datos sin procesos manuales.",

        useCases: [
          "Extracción de precios de productos",
          "Monitoreo de competencia",
          "Recolección de listados o directorios",
        ],

        includes: [
          "Script de scraping personalizado",
          "Exportación de datos (CSV / Excel)",
          "Configuración inicial",
        ],

        notIncludes: [
          "Scraping de sitios protegidos o dinámicos",
          "Infraestructura cloud",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Python", "BeautifulSoup", "Requests"],

        features: [
          "Extracción estructurada de datos",
          "Limpieza básica de información",
          "Exportación automática",
        ],

        deliverables: [
          "Script funcional",
          "Dataset generado",
          "Guía de uso",
        ],

        integrations: ["Sistema local"],
        automationLevel: "low",

        support: "7 días soporte post-entrega",
      },

      {
        id: "SCRAP-INT-001",
        name: "Web Scraper Avanzado",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "1-2 semanas",
        price: "$1.500.000 - $3.000.000 COP",

        description:
          "Scraping automatizado de sitios dinámicos con interacción, autenticación y navegación avanzada.",

        target:
          "Empresas o profesionales que necesitan extraer datos de plataformas complejas o protegidas.",

        useCases: [
          "Scraping con login",
          "Extracción en plataformas dinámicas (scroll infinito)",
          "Automatización de reportes periódicos",
        ],

        includes: [
          "Sistema de scraping automatizado",
          "Manejo de sesiones (login)",
          "Automatización programada",
        ],

        notIncludes: [
          "Infraestructura distribuida",
          "Dashboards avanzados",
        ],

        pricingType: "fixed",

        stack: ["Python", "Playwright", "Selenium"],

        features: [
          "Simulación de usuario",
          "Scroll automático",
          "Manejo de sesiones",
        ],

        deliverables: [
          "Script robusto",
          "Configuración de ejecución automática",
          "Documentación técnica",
        ],

        integrations: ["APIs básicas", "Google Sheets (opcional)"],
        automationLevel: "medium",

        support: "15 días soporte + ajustes menores",
      },

      {
        id: "SCRAP-ENT-001",
        name: "Web Scraper Empresarial",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "2-4 semanas",
        price: "$3.000.000 - $6.000.000 COP",

        description:
          "Sistema escalable de scraping con infraestructura robusta, almacenamiento y procesamiento de datos a nivel empresarial.",

        target:
          "Empresas que requieren extracción continua de datos a gran escala con alta disponibilidad.",

        useCases: [
          "Inteligencia competitiva",
          "Big data scraping",
          "Monitoreo continuo de mercados",
        ],

        includes: [
          "Sistema de scraping distribuido",
          "Rotación de proxies",
          "Almacenamiento estructurado",
          "Automatización completa",
        ],

        notIncludes: [
          "Costos de infraestructura cloud",
        ],

        pricingType: "project",

        stack: ["Scrapy", "Python", "AWS", "Docker"],

        features: [
          "Escalabilidad",
          "Manejo de bloqueos",
          "Procesamiento de datos",
        ],

        deliverables: [
          "Sistema completo",
          "Infraestructura base",
          "Documentación técnica",
        ],

        integrations: ["APIs", "Bases de datos", "Dashboards"],
        automationLevel: "high",

        support: "30 días soporte + mantenimiento inicial",
      },
    ],
  },

  // =========================
  // 🤖 BOTS
  // =========================
  {
    id: "AUT-BOTS",
    category: "Bots y Automatización de Comunidades",
    subtitle: "Automatización de interacción, soporte y gestión de comunidades",
    icon: Bot,

    levels: [
      {
        id: "BOT-DSC-001",
        name: "Bot Community",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "1-2 semanas",
        price: "$1.000.000 - $2.000.000 COP",

        description:
          "Bot automatizado para gestión básica de comunidades, moderación y automatización de interacciones.",

        target:
          "Comunidades online, startups o creadores que necesitan automatizar la gestión de usuarios.",

        useCases: [
          "Moderación automática",
          "Asignación de roles",
          "Bienvenida de usuarios",
        ],

        includes: [
          "Bot funcional",
          "Configuración inicial",
          "Comandos personalizados básicos",
        ],

        notIncludes: [
          "Panel administrativo avanzado",
          "Integraciones externas complejas",
        ],

        pricingType: "fixed",

        stack: ["Node.js", "discord.js"],

        features: [
          "Moderación automática",
          "Sistema de roles",
          "Comandos personalizados",
        ],

        deliverables: [
          "Bot desplegado",
          "Código fuente",
          "Guía de uso",
        ],

        integrations: ["Discord"],
        automationLevel: "medium",

        support: "10 días soporte post-entrega",
      },

      {
        id: "BOT-DSC-ENT-001",
        name: "Bot Enterprise",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "2-4 semanas",
        price: "$4.000.000 - $8.000.000 COP",

        description:
          "Bot avanzado con funcionalidades complejas, automatización de procesos y panel de administración.",

        target:
          "Empresas, comunidades grandes o proyectos que requieren automatización avanzada y escalabilidad.",

        useCases: [
          "Sistemas de tickets",
          "Economías internas",
          "Automatización de soporte",
          "Integración con sistemas externos",
        ],

        includes: [
          "Bot avanzado",
          "Panel de administración",
          "Base de datos",
          "Automatizaciones personalizadas",
        ],

        notIncludes: [
          "Infraestructura cloud (opcional)",
        ],

        pricingType: "project",

        stack: ["Node.js", "MongoDB", "Express"],

        features: [
          "Sistema de tickets",
          "Persistencia de datos",
          "Automatización avanzada",
        ],

        deliverables: [
          "Bot + panel web",
          "Base de datos configurada",
          "Documentación técnica",
        ],

        integrations: ["Discord", "APIs externas"],
        automationLevel: "high",

        support: "20 días soporte + mejoras menores",
      },
    ],
  },

  // =========================
  // 🔗 INTEGRACIONES
  // =========================
  {
    id: "AUT-INTEGRATIONS",
    category: "Integraciones y APIs",
    subtitle: "Conexión inteligente entre sistemas, plataformas y flujos de datos",
    icon: Database,

    levels: [
      {
        id: "API-CONN-001",
        name: "Conector de APIs",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "1-2 semanas",
        price: "$2.000.000 - $4.000.000 COP",

        description:
          "Integración básica entre sistemas mediante APIs para automatizar el flujo de datos y reducir procesos manuales.",

        // 🔥 NEGOCIO
        target:
          "Empresas o profesionales que necesitan conectar herramientas digitales sin intervención manual.",

        useCases: [
          "Conectar CRM con formularios web",
          "Sincronización entre plataformas",
          "Automatización de envíos de datos",
        ],

        includes: [
          "Desarrollo de integración API",
          "Transformación de datos",
          "Configuración inicial",
        ],

        notIncludes: [
          "Arquitectura compleja multi-sistema",
          "Infraestructura cloud",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["REST APIs", "Node.js", "Python"],

        features: [
          "Sincronización de datos",
          "Transformación de formatos",
          "Automatización básica",
        ],

        deliverables: [
          "Script o microservicio",
          "Documentación técnica",
          "Configuración inicial",
        ],

        integrations: ["APIs externas", "Webhooks básicos"],
        automationLevel: "medium",

        support: "10 días soporte post-entrega",
      },

      {
        id: "API-ENT-001",
        name: "Integración Empresarial",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "2-4 semanas",
        price: "$4.000.000 - $8.000.000 COP",

        description:
          "Sistema de integración avanzado entre múltiples plataformas con automatización robusta, tolerancia a errores y escalabilidad.",

        target:
          "Empresas que operan con múltiples sistemas y requieren integración estable y automatizada.",

        useCases: [
          "Integración CRM + ERP + Marketing",
          "Automatización de pipelines de datos",
          "Orquestación de procesos digitales",
        ],

        includes: [
          "Arquitectura de integración",
          "Automatización multi-sistema",
          "Manejo de errores y reintentos",
          "Logs y monitoreo básico",
        ],

        notIncludes: [
          "Infraestructura cloud avanzada (opcional)",
        ],

        pricingType: "project",

        stack: ["Node.js", "n8n", "Webhooks", "Queues"],

        features: [
          "Orquestación de servicios",
          "Reintentos automáticos",
          "Logs de ejecución",
        ],

        deliverables: [
          "Sistema de integración completo",
          "Flujos automatizados",
          "Documentación técnica",
        ],

        integrations: ["CRM", "ERP", "APIs externas"],
        automationLevel: "high",

        support: "20 días soporte + ajustes menores",
      },
    ],
  },

  // =========================
  // ⚙️ RPA
  // =========================
  {
    id: "AUT-RPA",
    category: "Automatización RPA",
    subtitle: "Automatización inteligente de procesos empresariales",
    icon: Workflow,

    levels: [
      {
        id: "RPA-BAS-001",
        name: "RPA Básico",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "1-2 semanas",
        price: "$3.000.000 - $6.000.000 COP",

        description:
          "Automatización de procesos repetitivos simples mediante bots o scripts que replican acciones humanas.",

        target:
          "Empresas con tareas manuales repetitivas que buscan eficiencia operativa.",

        useCases: [
          "Ingreso de datos automático",
          "Procesamiento de formularios",
          "Automatización de tareas administrativas",
        ],

        includes: [
          "Automatización de 1 proceso",
          "Configuración inicial",
          "Ejecución programada",
        ],

        notIncludes: [
          "Procesos complejos con múltiples decisiones",
          "Infraestructura avanzada",
        ],

        pricingType: "fixed",

        stack: ["Python", "n8n", "Automation scripts"],

        features: [
          "Automatización de tareas repetitivas",
          "Ejecución programada",
          "Reducción de errores humanos",
        ],

        deliverables: [
          "Script o bot funcional",
          "Configuración",
          "Guía de uso",
        ],

        integrations: ["Sistema local", "Herramientas básicas"],
        automationLevel: "medium",

        support: "10 días soporte post-entrega",
      },

      {
        id: "RPA-MED-001",
        name: "RPA Avanzado",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "3-6 semanas",
        price: "$6.000.000 - $12.000.000 COP",

        description:
          "Automatización de procesos complejos con múltiples pasos, validaciones y procesamiento de datos.",

        target:
          "Empresas que necesitan optimizar procesos internos críticos y reducir carga operativa.",

        useCases: [
          "Procesos financieros automatizados",
          "Validación de documentos",
          "Automatización de flujos empresariales",
        ],

        includes: [
          "Automatización de procesos multi-step",
          "Validaciones y reglas de negocio",
          "Integración con sistemas",
        ],

        notIncludes: [
          "IA avanzada o toma de decisiones compleja",
        ],

        pricingType: "project",

        stack: ["Python", "OCR", "APIs", "Automation tools"],

        features: [
          "Procesos multi-etapa",
          "Validaciones automáticas",
          "Integración con sistemas",
        ],

        deliverables: [
          "Sistema automatizado",
          "Documentación técnica",
          "Configuración personalizada",
        ],

        integrations: ["ERP", "CRM", "APIs"],
        automationLevel: "high",

        support: "20 días soporte + mejoras menores",
      },

      {
        id: "RPA-ENT-001",
        name: "RPA Enterprise",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "1-3 meses",
        price: "$12.000.000+",

        description:
          "Automatización empresarial avanzada con toma de decisiones, inteligencia artificial y monitoreo continuo.",

        target:
          "Empresas grandes que buscan automatización total de procesos críticos con alta escalabilidad.",

        useCases: [
          "Automatización de procesos críticos",
          "Decisiones automatizadas con IA",
          "Optimización operativa a gran escala",
        ],

        includes: [
          "Arquitectura completa de automatización",
          "Automatización de múltiples procesos",
          "Monitoreo y logs",
          "Integración con IA (opcional)",
        ],

        notIncludes: [
          "Costos de infraestructura cloud",
        ],

        pricingType: "project",

        stack: ["Python", "Machine Learning", "Dashboards", "Cloud"],

        features: [
          "Automatización inteligente",
          "Procesos críticos",
          "Monitoreo en tiempo real",
        ],

        deliverables: [
          "Sistema completo empresarial",
          "Dashboard de monitoreo",
          "Documentación técnica",
        ],

        integrations: ["Sistemas empresariales", "APIs", "IA"],
        automationLevel: "high",

        support: "30 días soporte + acompañamiento inicial",
      },
    ],
  },

  // =========================
  // 🧠 IA Y AGENTES
  // =========================
  {
    id: "AUT-AI",
    category: "Automatización con IA",
    subtitle: "Chatbots, asistentes inteligentes y agentes autónomos",
    icon: Bot,

    levels: [
      {
        id: "AI-CHAT-001",
        name: "Chatbot IA",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "2-4 semanas",
        price: "$2.500.000 - $5.000.000 COP",

        description:
          "Chatbot inteligente capaz de responder preguntas, asistir usuarios y automatizar soporte utilizando IA contextual.",

        // 🔥 NEGOCIO
        target:
          "Empresas que necesitan automatizar atención al cliente o soporte interno sin aumentar personal.",

        useCases: [
          "Atención al cliente 24/7",
          "Respuestas automáticas de FAQ",
          "Soporte interno para equipos",
        ],

        includes: [
          "Chatbot entrenado con información del negocio",
          "Integración en web o plataforma",
          "Configuración inicial",
        ],

        notIncludes: [
          "Entrenamiento avanzado con grandes volúmenes de datos",
          "Sistemas multi-agente",
        ],

        pricingType: "project",

        // ⚙️ TÉCNICO
        stack: ["OpenAI API", "LangChain", "Node.js / Python"],

        features: [
          "Respuestas contextuales",
          "Integración con base de conocimiento",
          "Conversación natural",
        ],

        deliverables: [
          "Chatbot funcional",
          "Integración en plataforma",
          "Documentación básica",
        ],

        integrations: ["Web", "WhatsApp (opcional)", "APIs"],
        automationLevel: "high",

        support: "15 días soporte + ajustes de respuestas",
      },

      {
        id: "AI-AGENT-ENT-001",
        name: "Agente IA Avanzado",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "1-2 meses",
        price: "$6.000.000 - $15.000.000 COP",

        description:
          "Sistema de agentes inteligentes capaces de ejecutar tareas, tomar decisiones y automatizar procesos complejos utilizando IA.",

        target:
          "Empresas que buscan automatización avanzada con inteligencia artificial aplicada a procesos reales.",

        useCases: [
          "Automatización de procesos empresariales con IA",
          "Asistentes inteligentes internos",
          "Agentes que ejecutan tareas (emails, consultas, decisiones)",
        ],

        includes: [
          "Arquitectura multi-agente",
          "Sistema con memoria (RAG)",
          "Automatización de tareas",
          "Integración con sistemas existentes",
        ],

        notIncludes: [
          "Costos de infraestructura o APIs externas",
        ],

        pricingType: "project",

        stack: ["LLMs", "RAG", "Vector Database", "LangChain", "APIs"],

        features: [
          "Memoria contextual",
          "Ejecución de acciones",
          "Integración con herramientas",
          "Automatización inteligente",
        ],

        deliverables: [
          "Sistema completo de agentes",
          "Arquitectura implementada",
          "Documentación técnica",
        ],

        integrations: ["CRM", "APIs", "Bases de datos", "Herramientas internas"],
        automationLevel: "high",

        support: "30 días soporte + optimización inicial",
      },
    ],
  },

  // =========================
  // 🏢 CUSTOM
  // =========================
  {
    id: "AUT-CUSTOM",
    category: "Automatización a Medida",
    subtitle: "Soluciones tecnológicas personalizadas para necesidades específicas",
    icon: Workflow,

    levels: [
      {
        id: "AUT-CUST-001",
        name: "Automatización Personalizada",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "Custom",
        price: "$10.000.000+",

        description:
          "Desarrollo de soluciones de automatización completamente personalizadas según las necesidades específicas del cliente.",

        // 🔥 NEGOCIO
        target:
          "Empresas con necesidades únicas que no pueden resolverse con soluciones estándar.",

        useCases: [
          "Automatización de procesos únicos",
          "Desarrollo de sistemas internos",
          "Integración de múltiples tecnologías",
          "Optimización de operaciones complejas",
        ],

        includes: [
          "Análisis de requerimientos",
          "Diseño de arquitectura personalizada",
          "Desarrollo completo",
          "Implementación y pruebas",
        ],

        notIncludes: [
          "Alcances fuera del análisis inicial",
          "Infraestructura (según proyecto)",
        ],

        pricingType: "custom",

        // ⚙️ TÉCNICO
        stack: ["Custom Stack", "APIs", "Cloud", "IA (opcional)"],

        features: [
          "Arquitectura a medida",
          "Alta escalabilidad",
          "Integración completa",
          "Optimización de procesos",
        ],

        deliverables: [
          "Sistema completo",
          "Documentación técnica",
          "Implementación en entorno real",
        ],

        integrations: ["Todas según necesidad"],
        automationLevel: "high",

        support: "30 días soporte + acompañamiento inicial",
      },
    ],
  },
];
