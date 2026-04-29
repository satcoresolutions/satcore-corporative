// data/services/security.ts
import { ServiceCategory } from "@/types/service";
import { Shield, Wifi, Code, Search, Server, Eye, Cloud } from "lucide-react";

export const securityServices: ServiceCategory[] = [
  // =========================
  // 🔐 PENTESTING WEB
  // =========================
  {
    id: "SEC-PENTEST-WEB",
    category: "Pentesting Web",
    subtitle: "Evaluación profesional de seguridad en aplicaciones web",
    icon: Shield,

    levels: [
      {
        id: "PENT-WEB-BAS-001",
        name: "Pentesting Web Básico",
        level: "🟢 Básico",
        complexity: "⭐⭐ (2/5)",
        time: "3-5 días",
        price: "$3.000.000 - $5.000.000 COP",

        description:
          "Evaluación inicial de seguridad para identificar vulnerabilidades comunes en aplicaciones web pequeñas o landing pages.",

        target:
          "Startups, páginas corporativas o aplicaciones simples que necesitan validar su seguridad básica antes de escalar.",

        useCases: [
          "Validación antes de lanzamiento",
          "Revisión de landing pages",
          "Auditoría básica de seguridad",
        ],

        includes: [
          "Evaluación basada en OWASP Top 10",
          "Pruebas manuales de inputs y formularios",
          "Análisis de configuraciones básicas",
        ],

        notIncludes: [
          "Pruebas avanzadas de lógica de negocio",
          "Pentesting autenticado complejo",
        ],

        pricingType: "fixed",

        stack: ["OWASP Top 10", "Manual Testing", "Burp Suite"],

        features: [
          "Identificación de vulnerabilidades comunes",
          "Análisis de formularios y endpoints",
          "Revisión de headers y configuraciones",
        ],

        deliverables: [
          "Reporte técnico detallado",
          "Reporte ejecutivo para negocio",
          "Listado de vulnerabilidades con prioridad",
        ],

        integrations: ["Aplicación web objetivo"],
        automationLevel: "low",

        support: "7 días de acompañamiento post-entrega",
      },

      {
        id: "PENT-WEB-STD-001",
        name: "Pentesting Web Estándar",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "5-10 días",
        price: "$5.000.000 - $8.000.000 COP",

        description:
          "Evaluación completa de aplicaciones web con autenticación, APIs y lógica de negocio básica.",

        target:
          "Empresas con aplicaciones web activas que manejan usuarios, datos o procesos críticos.",

        useCases: [
          "Auditoría de plataformas SaaS",
          "Evaluación de APIs",
          "Validación de seguridad en login y sesiones",
        ],

        includes: [
          "Pentesting autenticado",
          "Evaluación de APIs REST",
          "Análisis de sesiones y autenticación",
        ],

        notIncludes: [
          "Simulación de ataques persistentes (Red Team)",
          "Auditoría de infraestructura completa",
        ],

        pricingType: "fixed",

        stack: ["OWASP", "API Testing", "Burp Suite", "Postman"],

        features: [
          "Testing de autenticación",
          "Evaluación de APIs",
          "Análisis de control de accesos",
        ],

        deliverables: [
          "Reporte técnico completo",
          "Pruebas de concepto (PoC)",
          "Plan de remediación",
        ],

        integrations: ["Web app", "APIs"],
        automationLevel: "medium",

        support: "15 días soporte + revisión de correcciones",
      },

      {
        id: "PENT-WEB-ADV-001",
        name: "Pentesting Web Avanzado",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "10-20 días",
        price: "$8.000.000 - $15.000.000 COP",

        description:
          "Evaluación profunda de seguridad enfocada en lógica de negocio, escalamiento de privilegios y vulnerabilidades complejas.",

        target:
          "Empresas con sistemas críticos, fintech, e-commerce o plataformas con alta exposición.",

        useCases: [
          "Evaluación de sistemas críticos",
          "Auditoría de plataformas complejas",
          "Validación de seguridad antes de inversión o escalamiento",
        ],

        includes: [
          "Análisis de lógica de negocio",
          "Testing de roles y permisos",
          "Evaluación avanzada de APIs",
        ],

        notIncludes: [
          "Red Team completo (servicio separado)",
          "Pentesting de infraestructura interna completa",
        ],

        pricingType: "fixed",

        stack: ["OWASP", "Privilege Escalation", "Advanced Pentesting"],

        features: [
          "Análisis de lógica de negocio",
          "Escalamiento de privilegios",
          "Simulación de ataques avanzados",
        ],

        deliverables: [
          "Reporte técnico avanzado",
          "Asesoría estratégica de seguridad",
          "Plan de mitigación priorizado",
        ],

        integrations: ["Web app", "APIs", "Auth systems"],
        automationLevel: "high",

        support: "30 días soporte + sesión estratégica",
      },
    ],
  },

  // =========================
  // 📡 WIFI
  // =========================
  {
    id: "SEC-WIFI",
    category: "Seguridad WiFi",
    subtitle: "Evaluación de seguridad en redes inalámbricas",
    icon: Wifi,

    levels: [
      {
        id: "PENT-WIFI-BAS-001",
        name: "Pentesting WiFi Básico",
        level: "🟢 Básico",
        complexity: "⭐⭐ (2/5)",
        time: "2-3 días",
        price: "$2.000.000 - $3.500.000 COP",

        description:
          "Evaluación básica de seguridad en redes WiFi para identificar configuraciones débiles y accesos no autorizados.",

        target:
          "Pequeñas empresas, oficinas o negocios que necesitan validar la seguridad de su red inalámbrica.",

        useCases: [
          "Validación de red empresarial",
          "Auditoría de WiFi en oficinas",
          "Revisión de seguridad doméstica avanzada",
        ],

        includes: [
          "Evaluación de protocolos WPA2/WPA3",
          "Detección de redes vulnerables",
          "Análisis de configuración básica",
        ],

        notIncludes: [
          "Simulación de ataques persistentes",
          "Auditoría completa de red interna",
        ],

        pricingType: "fixed",

        stack: ["Aircrack-ng", "WiFi Security Tools"],

        features: [
          "Análisis de cifrado",
          "Detección de vulnerabilidades básicas",
          "Identificación de redes inseguras",
        ],

        deliverables: [
          "Reporte técnico",
          "Recomendaciones de seguridad",
        ],

        integrations: ["Infraestructura WiFi"],
        automationLevel: "low",

        support: "7 días soporte post-entrega",
      },

      {
        id: "PENT-WIFI-ADV-001",
        name: "Pentesting WiFi Avanzado",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "4-7 días",
        price: "$4.000.000 - $7.000.000 COP",

        description:
          "Evaluación avanzada de redes inalámbricas incluyendo ataques simulados, rogue access points y análisis profundo de seguridad.",

        target:
          "Empresas con infraestructura crítica, oficinas grandes o entornos con alta sensibilidad de datos.",

        useCases: [
          "Auditoría de redes corporativas",
          "Evaluación de seguridad en sedes físicas",
          "Validación de acceso no autorizado",
        ],

        includes: [
          "Simulación de ataques WiFi",
          "Detección de rogue access points",
          "Evaluación de seguridad avanzada",
        ],

        notIncludes: [
          "Red Team físico completo",
          "Auditoría de endpoints internos",
        ],

        pricingType: "fixed",

        stack: ["Aircrack-ng", "Kali Linux", "WiFi Pentesting Tools"],

        features: [
          "Simulación de ataques reales",
          "Análisis de tráfico",
          "Evaluación de accesos no autorizados",
        ],

        deliverables: [
          "Reporte completo",
          "Pruebas de vulnerabilidad",
          "Plan de mitigación",
        ],

        integrations: ["Infraestructura WiFi", "Red interna"],
        automationLevel: "medium",

        support: "15 días soporte + asesoría",
      },
    ],
  },

  // =========================
  // 🕵️ OSINT
  // =========================
  {
    id: "SEC-OSINT",
    category: "OSINT e Inteligencia",
    subtitle: "Análisis de exposición digital y huella en internet",
    icon: Search,

    levels: [
      {
        id: "OSINT-BAS-001",
        name: "OSINT Básico",
        level: "🟢 Básico",
        complexity: "⭐ (1/5)",
        time: "2-5 días",
        price: "$1.500.000 - $3.000.000 COP",

        description:
          "Análisis de información pública para identificar la exposición digital de una empresa o persona.",

        target:
          "Empresas, marcas personales o profesionales que desean conocer qué información es visible públicamente en internet.",

        useCases: [
          "Evaluación de reputación digital",
          "Análisis de presencia en redes sociales",
          "Identificación de datos públicos expuestos",
        ],

        includes: [
          "Recolección de información pública (Google, redes, registros)",
          "Análisis de perfiles digitales",
          "Identificación de riesgos básicos",
        ],

        notIncludes: [
          "Análisis de dark web",
          "Investigación profunda de filtraciones",
        ],

        pricingType: "fixed",

        stack: ["OSINT Framework", "Google Dorks", "Maltego (opcional)"],

        features: [
          "Mapeo de presencia digital",
          "Identificación de datos sensibles expuestos",
          "Análisis de redes sociales",
        ],

        deliverables: [
          "Reporte de exposición digital",
          "Hallazgos clave",
          "Recomendaciones de mitigación",
        ],

        integrations: ["Fuentes públicas", "RRSS"],
        automationLevel: "low",

        support: "7 días de asesoría post-entrega",
      },

      {
        id: "OSINT-DEEP-001",
        name: "OSINT Profundo",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "7-14 días",
        price: "$3.000.000 - $6.000.000 COP",

        description:
          "Investigación avanzada de exposición digital incluyendo filtraciones, brechas de datos y análisis en deep/dark web.",

        target:
          "Empresas, ejecutivos o marcas con riesgo alto de exposición, filtraciones o ataques dirigidos.",

        useCases: [
          "Detección de credenciales filtradas",
          "Análisis de brechas de seguridad",
          "Investigación de reputación en deep/dark web",
        ],

        includes: [
          "Análisis en deep y dark web",
          "Búsqueda de credenciales filtradas",
          "Identificación de bases de datos expuestas",
        ],

        notIncludes: [
          "Investigación forense completa",
          "Respuesta a incidentes (IR)",
        ],

        pricingType: "fixed",

        stack: ["Dark Web Tools", "Breach Databases", "Maltego", "OSINT Advanced"],

        features: [
          "Detección de leaks",
          "Análisis de brechas",
          "Evaluación de riesgo reputacional",
        ],

        deliverables: [
          "Reporte completo de inteligencia",
          "Evidencias de filtraciones",
          "Plan de mitigación",
        ],

        integrations: ["Fuentes públicas", "Deep/Dark web"],
        automationLevel: "medium",

        support: "15 días soporte + asesoría estratégica",
      },
    ],
  },

  // =========================
  // 🧠 CÓDIGO
  // =========================
  {
    id: "SEC-CODE",
    category: "Auditoría de Código",
    subtitle: "Revisión de seguridad y calidad en código fuente",
    icon: Code,

    levels: [
      {
        id: "CODE-BAS-001",
        name: "Revisión de Código Básica",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "5-10 días",
        price: "Desde $2.000.000 COP",

        description:
          "Revisión de seguridad en código fuente para identificar vulnerabilidades comunes y malas prácticas.",

        target:
          "Startups o equipos de desarrollo que necesitan validar la seguridad básica de su código antes de producción.",

        useCases: [
          "Validación antes de deployment",
          "Revisión de módulos específicos",
          "Auditoría inicial de seguridad",
        ],

        includes: [
          "Análisis estático de código",
          "Identificación de vulnerabilidades comunes (SQLi, XSS, etc.)",
          "Revisión de buenas prácticas",
        ],

        notIncludes: [
          "Análisis de arquitectura completa",
          "Pentesting dinámico del sistema",
        ],

        pricingType: "custom",

        stack: ["Static Analysis", "SAST Tools", "OWASP"],

        features: [
          "Detección de vulnerabilidades comunes",
          "Análisis de seguridad en código",
          "Revisión de buenas prácticas",
        ],

        deliverables: [
          "Reporte técnico de vulnerabilidades",
          "Recomendaciones de mejora",
        ],

        integrations: ["Repositorio de código"],
        automationLevel: "low",

        support: "7 días soporte post-entrega",
      },

      {
        id: "CODE-ADV-001",
        name: "Auditoría de Código Avanzada",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "Custom",
        price: "Cotización personalizada",

        description:
          "Auditoría profunda de seguridad y arquitectura en aplicaciones críticas, incluyendo análisis de diseño y lógica de negocio.",

        target:
          "Empresas con aplicaciones críticas, fintech, SaaS o sistemas con alta exposición.",

        useCases: [
          "Auditoría completa de aplicaciones",
          "Evaluación antes de inversión o escalamiento",
          "Validación de seguridad en sistemas críticos",
        ],

        includes: [
          "Análisis estático y manual profundo",
          "Evaluación de arquitectura",
          "Revisión de lógica de negocio",
        ],

        notIncludes: [
          "Pentesting completo (servicio separado)",
          "Monitoreo continuo",
        ],

        pricingType: "custom",

        stack: ["OWASP ASVS", "SAST", "Manual Code Review", "Secure Architecture"],

        features: [
          "Análisis de arquitectura",
          "Evaluación de seguridad avanzada",
          "Detección de vulnerabilidades complejas",
        ],

        deliverables: [
          "Reporte técnico completo",
          "Evaluación de riesgos",
          "Plan de mejora estructural",
        ],

        integrations: ["Repositorio", "CI/CD (opcional)"],
        automationLevel: "high",

        support: "30 días soporte + sesión estratégica",
      },
    ],
  },

  // =========================
  // ☁️ CLOUD
  // =========================
  {
    id: "SEC-CLOUD",
    category: "Seguridad Cloud",
    subtitle: "Auditoría y hardening en AWS, Azure y GCP",
    icon: Cloud,

    levels: [
      {
        id: "PENT-CLOUD-001",
        name: "Auditoría de Seguridad Cloud",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐ (3/5)",
        time: "5-10 días",
        price: "$4.000.000 - $8.000.000 COP",

        description:
          "Evaluación de configuraciones de seguridad en entornos cloud para identificar riesgos, accesos indebidos y malas prácticas.",

        target:
          "Empresas que operan en AWS, Azure o GCP y necesitan validar la seguridad de su infraestructura en la nube.",

        useCases: [
          "Auditoría de cuentas AWS/Azure/GCP",
          "Validación de permisos IAM",
          "Revisión de almacenamiento expuesto (S3, blobs, buckets)",
          "Evaluación previa a auditorías o compliance",
        ],

        includes: [
          "Evaluación basada en CIS Benchmarks",
          "Revisión de IAM (roles, permisos, accesos)",
          "Análisis de configuraciones de storage",
          "Identificación de recursos expuestos públicamente",
        ],

        notIncludes: [
          "Pentesting activo (ataques simulados)",
          "Implementación de soluciones (opcional adicional)",
        ],

        pricingType: "fixed",

        stack: ["CIS Benchmarks", "AWS Security Hub", "Azure Security Center", "GCP Security Tools"],

        features: [
          "Detección de configuraciones inseguras",
          "Análisis de accesos y privilegios",
          "Evaluación de exposición pública",
        ],

        deliverables: [
          "Reporte técnico detallado",
          "Resumen ejecutivo (C-Level)",
          "Plan de hardening",
        ],

        integrations: ["AWS", "Azure", "GCP"],
        automationLevel: "medium",

        support: "15 días soporte + guía de implementación",
      },
    ],
  },

  // =========================
  // 🧨 INFRAESTRUCTURA
  // =========================
  {
    id: "SEC-INFRA",
    category: "Pentesting de Infraestructura",
    subtitle: "Evaluación de redes internas y sistemas empresariales",
    icon: Server,

    levels: [
      {
        id: "PENT-INF-SM-001",
        name: "Infraestructura Pequeña",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐ (3/5)",
        time: "5-7 días",
        price: "$4.000.000 - $7.000.000 COP",

        description:
          "Evaluación de seguridad en redes internas pequeñas para identificar vulnerabilidades y accesos indebidos.",

        target:
          "Pequeñas empresas o startups con infraestructura local o híbrida.",

        useCases: [
          "Auditoría de red interna",
          "Validación de seguridad en oficinas",
          "Evaluación de servidores locales",
        ],

        includes: [
          "Escaneo de red",
          "Enumeración de servicios",
          "Identificación de vulnerabilidades",
        ],

        notIncludes: [
          "Simulación avanzada de ataques persistentes",
          "Red Team completo",
        ],

        pricingType: "fixed",

        stack: ["Nmap", "Network Scanning Tools", "Vulnerability Scanners"],

        features: [
          "Mapeo de red",
          "Identificación de servicios expuestos",
          "Análisis de vulnerabilidades",
        ],

        deliverables: [
          "Reporte técnico",
          "Recomendaciones de mitigación",
        ],

        integrations: ["Infraestructura local"],
        automationLevel: "low",

        support: "7 días soporte post-entrega",
      },

      {
        id: "PENT-INF-MED-001",
        name: "Infraestructura Mediana",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "7-14 días",
        price: "$7.000.000 - $15.000.000 COP",

        description:
          "Evaluación completa de redes empresariales incluyendo Active Directory, accesos internos y movimiento lateral.",

        target:
          "Empresas con infraestructura corporativa y múltiples sistemas conectados.",

        useCases: [
          "Auditoría de Active Directory",
          "Evaluación de seguridad interna",
          "Simulación de ataques internos",
        ],

        includes: [
          "Análisis de Active Directory",
          "Evaluación de credenciales y privilegios",
          "Simulación de movimiento lateral",
        ],

        notIncludes: [
          "Red Team persistente completo",
          "Auditoría de aplicaciones web",
        ],

        pricingType: "fixed",

        stack: ["Active Directory Security", "Mimikatz", "BloodHound"],

        features: [
          "Análisis de privilegios",
          "Escalamiento de accesos",
          "Simulación de ataques internos",
        ],

        deliverables: [
          "Reporte técnico avanzado",
          "Mapa de riesgo",
          "Plan de mitigación",
        ],

        integrations: ["Red interna", "AD"],
        automationLevel: "medium",

        support: "15 días soporte + asesoría",
      },

      {
        id: "PENT-INF-ENT-001",
        name: "Infraestructura Enterprise",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "Custom",
        price: "$15.000.000+",

        description:
          "Evaluación avanzada tipo Red Team simulando ataques reales contra infraestructura empresarial compleja.",

        target:
          "Corporaciones, fintech, entidades con alta criticidad y exposición.",

        useCases: [
          "Simulación de ciberataques reales",
          "Evaluación de resiliencia organizacional",
          "Auditorías de alto nivel (compliance, inversión)",
        ],

        includes: [
          "Simulación de ataques avanzados (Red Team)",
          "Acceso inicial + persistencia",
          "Movimiento lateral y escalamiento",
        ],

        notIncludes: [
          "Respuesta a incidentes (IR)",
          "Monitoreo continuo (SOC)",
        ],

        pricingType: "custom",

        stack: ["Red Team Tools", "Cobalt Strike", "Advanced Offensive Security"],

        features: [
          "Simulación de amenazas reales",
          "Evaluación de defensa interna",
          "Análisis de resiliencia",
        ],

        deliverables: [
          "Reporte técnico completo",
          "Informe ejecutivo C-Level",
          "Recomendaciones estratégicas",
        ],

        integrations: ["Infraestructura completa"],
        automationLevel: "high",

        support: "30 días soporte + sesiones estratégicas",
      },
    ],
  },
  // =========================
  // 👁️ THREAT HUNTING
  // =========================
  {
    id: "SEC-THREAT",
    category: "Threat Hunting",
    subtitle: "Detección proactiva y análisis avanzado de amenazas",
    icon: Eye,

    levels: [
      {
        id: "TH-BAS-001",
        name: "Threat Hunting Básico",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "5-10 días",
        price: "$4.000.000 - $8.000.000 COP",

        description:
          "Servicio de búsqueda proactiva de amenazas mediante análisis de logs e indicadores de compromiso (IoCs), orientado a detectar actividades sospechosas no identificadas por herramientas tradicionales.",

        // 🔥 NEGOCIO
        target:
          "Empresas que ya cuentan con infraestructura de monitoreo (SIEM) pero requieren visibilidad proactiva frente a amenazas ocultas.",

        useCases: [
          "Detección de accesos sospechosos",
          "Identificación de comportamientos anómalos",
          "Validación de alertas del SIEM",
        ],

        includes: [
          "Análisis de logs y eventos",
          "Búsqueda de IoCs conocidos",
          "Correlación básica de eventos",
        ],

        notIncludes: [
          "Análisis forense completo",
          "Respuesta a incidentes (IR)",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["SIEM (Splunk, ELK)", "Log Analysis Tools"],

        features: [
          "Análisis de logs",
          "Identificación de patrones sospechosos",
          "Correlación de eventos",
        ],

        deliverables: [
          "Reporte técnico",
          "Lista de IoCs detectados",
          "Recomendaciones de seguridad",
        ],

        integrations: ["SIEM", "Logs empresariales"],
        automationLevel: "medium",

        support: "7 días soporte post-entrega",
      },

      {
        id: "TH-ADV-001",
        name: "Threat Hunting Completo",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "10-20 días",
        price: "$8.000.000 - $15.000.000 COP",

        description:
          "Servicio avanzado de threat hunting con enfoque en amenazas persistentes (APT), análisis forense y correlación profunda de eventos para identificar ataques sofisticados.",

        // 🔥 NEGOCIO
        target:
          "Empresas con alta exposición a riesgos (fintech, gobierno, SaaS, e-commerce) que requieren detección avanzada de amenazas.",

        useCases: [
          "Detección de amenazas persistentes (APT)",
          "Análisis post-incidente",
          "Investigación de brechas de seguridad",
        ],

        includes: [
          "Análisis forense avanzado",
          "Búsqueda de amenazas desconocidas",
          "Correlación avanzada de eventos",
          "Análisis de comportamiento",
        ],

        notIncludes: [
          "Implementación de SOC (servicio adicional)",
          "Hardening de infraestructura",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["SIEM", "Forensics Tools", "Threat Intelligence"],

        features: [
          "Análisis forense",
          "Identificación de APTs",
          "Correlación avanzada",
          "Detección de anomalías",
        ],

        deliverables: [
          "Reporte forense completo",
          "Timeline del ataque",
          "Recomendaciones estratégicas",
        ],

        integrations: ["SIEM", "EDR", "Threat Intelligence Platforms"],
        automationLevel: "low",

        support: "15 días soporte + sesión de cierre",
      },
    ],
  },

  // =========================
  // 🛡️ MSSP
  // =========================
  {
    id: "SEC-MSSP",
    category: "Seguridad Continua (MSSP)",
    subtitle: "Monitoreo, detección y respuesta continua ante amenazas",
    icon: Shield,

    levels: [
      {
        id: "MSSP-LITE-001",
        name: "MSSP Lite",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "Mensual",
        price: "Desde $5.000.000 COP/mes",

        description:
          "Servicio gestionado de seguridad con monitoreo continuo, análisis de vulnerabilidades y reportes periódicos para mantener la postura de seguridad de la organización.",

        // 🔥 NEGOCIO
        target:
          "Empresas pequeñas y medianas que requieren seguridad continua sin tener un equipo interno especializado.",

        useCases: [
          "Monitoreo continuo de seguridad",
          "Detección temprana de vulnerabilidades",
          "Cumplimiento básico de seguridad",
        ],

        includes: [
          "Escaneo periódico de vulnerabilidades",
          "Monitoreo básico de eventos",
          "Reporte mensual de seguridad",
        ],

        notIncludes: [
          "SOC 24/7 completo",
          "Respuesta a incidentes avanzada",
        ],

        pricingType: "subscription",

        // ⚙️ TÉCNICO
        stack: ["Monitoring Tools", "Vulnerability Scanners"],

        features: [
          "Escaneo automatizado",
          "Monitoreo básico",
          "Alertas iniciales",
        ],

        deliverables: [
          "Reportes mensuales",
          "Dashboard básico",
        ],

        integrations: ["Infraestructura cliente"],
        automationLevel: "high",

        support: "Soporte continuo durante el contrato",
      },

      {
        id: "MSSP-ADV-001",
        name: "MSSP Avanzado",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "Mensual",
        price: "$10.000.000 - $25.000.000 COP/mes",

        description:
          "Servicio completo de seguridad gestionada con monitoreo continuo, detección avanzada, threat hunting y soporte especializado.",

        // 🔥 NEGOCIO
        target:
          "Empresas medianas y grandes que requieren protección constante, visibilidad total y capacidad de respuesta ante incidentes.",

        useCases: [
          "Monitoreo 24/7",
          "Detección avanzada de amenazas",
          "Reducción del riesgo de ataques",
        ],

        includes: [
          "Monitoreo continuo (SIEM)",
          "Threat hunting mensual",
          "Análisis de vulnerabilidades",
          "Alertas en tiempo real",
        ],

        notIncludes: [
          "SOC dedicado (enterprise)",
          "Red team continuo",
        ],

        pricingType: "subscription",

        // ⚙️ TÉCNICO
        stack: ["SIEM", "EDR", "Threat Intelligence"],

        features: [
          "Monitoreo avanzado",
          "Correlación de eventos",
          "Alertas en tiempo real",
          "Análisis de amenazas",
        ],

        deliverables: [
          "Reportes mensuales avanzados",
          "KPIs de seguridad",
          "Recomendaciones estratégicas",
        ],

        integrations: ["SIEM", "Cloud", "Infraestructura interna"],
        automationLevel: "high",

        support: "Soporte continuo + reuniones mensuales",
      },

      {
        id: "MSSP-ENT-001",
        name: "MSSP Enterprise",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "Custom",
        price: "Desde $30.000.000 COP/mes",

        description:
          "Servicio enterprise con monitoreo 24/7, SOC dedicado, respuesta a incidentes y estrategia completa de ciberseguridad.",

        // 🔥 NEGOCIO
        target:
          "Grandes empresas, fintech, sector financiero, gobierno o compañías con alta criticidad operativa.",

        useCases: [
          "Protección completa de infraestructura crítica",
          "Respuesta inmediata ante incidentes",
          "Cumplimiento normativo (ISO, SOC2, etc.)",
        ],

        includes: [
          "SOC 24/7 dedicado",
          "Respuesta a incidentes (IR)",
          "Threat hunting continuo",
          "Gestión de vulnerabilidades",
          "Consultoría estratégica",
        ],

        notIncludes: [
          "Infraestructura física (se cotiza aparte)",
        ],

        pricingType: "subscription",

        // ⚙️ TÉCNICO
        stack: ["SIEM", "SOAR", "EDR", "Threat Intelligence"],

        features: [
          "Respuesta en tiempo real",
          "Automatización (SOAR)",
          "Detección avanzada",
          "Protección integral",
        ],

        deliverables: [
          "Dashboards en tiempo real",
          "Reportes ejecutivos",
          "Plan estratégico de seguridad",
        ],

        integrations: ["Full infrastructure", "Cloud", "Endpoints"],
        automationLevel: "high",

        support: "Soporte 24/7 + equipo dedicado",
      },
    ],
  },
];
