import { ServiceCategory } from "@/types/service";
import { Users, GraduationCap } from "lucide-react";

export const educationServices: ServiceCategory[] = [
  // =========================
  // 🎓 1. TALLERES Y WEBINARS
  // =========================
  {
    id: "EDU-WORKSHOPS",
    category: "Talleres y Webinars",
    subtitle: "Formación rápida, práctica y enfocada en resultados",
    icon: Users,

    levels: [
      {
        id: "EDU-WORK-EXP-001",
        name: "Taller Express",
        level: "🟢 Básico",
        complexity: "⭐ (1/5)",
        time: "2-4 horas",
        price: "$300.000 - $600.000 COP por persona",

        description:
          "Sesión práctica intensiva diseñada para introducir rápidamente una herramienta, tecnología o concepto clave con aplicación inmediata.",

        // 🔥 NEGOCIO
        target:
          "Estudiantes, profesionales o equipos que necesitan aprender rápidamente una habilidad específica sin procesos largos.",

        useCases: [
          "Introducción a herramientas digitales",
          "Capacitación rápida de equipos",
          "Validación de interés en nuevas tecnologías",
        ],

        includes: [
          "Sesión en vivo o presencial",
          "Material práctico descargable",
          "Ejercicios guiados",
        ],

        notIncludes: [
          "Acompañamiento prolongado",
          "Proyectos complejos",
        ],

        pricingType: "per_person",

        // ⚙️ TÉCNICO / ACADÉMICO
        stack: [
          "Herramientas digitales",
          "Software básico",
          "Conceptos tecnológicos",
        ],

        features: [
          "Aprendizaje rápido",
          "Enfoque práctico",
          "Interacción en tiempo real",
        ],

        deliverables: [
          "Material del taller",
          "Certificado de participación",
          "Recursos adicionales",
        ],

        integrations: ["Zoom / Meet", "Plataforma educativa"],
        automationLevel: "low",

        support: "Soporte durante la sesión",
      },

      {
        id: "EDU-WEB-001",
        name: "Webinar Especializado",
        level: "🟢 Básico",
        complexity: "⭐ (1/5)",
        time: "1.5 - 2 horas",
        price: "$100.000 - $250.000 COP o gratuito",

        description:
          "Sesión virtual enfocada en compartir conocimientos, tendencias o casos reales con expertos en un formato accesible y escalable.",

        // 🔥 NEGOCIO
        target:
          "Audiencias amplias interesadas en aprendizaje continuo, tendencias tecnológicas o introducción a nuevas áreas.",

        useCases: [
          "Educación de mercado",
          "Generación de leads",
          "Posicionamiento de marca",
        ],

        includes: [
          "Acceso al evento en vivo",
          "Sesión de preguntas y respuestas",
          "Material digital",
        ],

        notIncludes: [
          "Formación práctica profunda",
          "Seguimiento personalizado",
        ],

        pricingType: "per_person",

        // ⚙️ TÉCNICO / ACADÉMICO
        stack: [
          "Presentaciones digitales",
          "Casos de estudio",
          "Herramientas online",
        ],

        features: [
          "Formato escalable",
          "Acceso a expertos",
          "Contenido actualizado",
        ],

        deliverables: [
          "Grabación del webinar",
          "Presentación descargable",
          "Recursos adicionales",
        ],

        integrations: ["Zoom", "YouTube Live", "Plataformas LMS"],
        automationLevel: "low",

        support: "Soporte durante el evento",
      },
    ],
  },

  // =========================
  // 📘 2. CURSOS
  // =========================
  {
    id: "EDU-COURSES",
    category: "Cursos",
    subtitle: "Formación estructurada orientada a resultados reales",
    icon: GraduationCap,

    levels: [
      {
        id: "EDU-COURSE-BAS-001",
        name: "Curso Básico",
        level: "🟢 Básico",
        complexity: "⭐⭐ (2/5)",
        time: "8-16 horas",
        price: "$600.000 - $1.200.000 COP",

        description:
          "Formación inicial enfocada en adquirir fundamentos prácticos en herramientas digitales y tecnológicas.",

        // 🔥 NEGOCIO
        target:
          "Principiantes, estudiantes o profesionales que desean iniciar en tecnología o mejorar sus habilidades digitales.",

        useCases: [
          "Aprender herramientas digitales desde cero",
          "Mejorar habilidades laborales básicas",
          "Primer contacto con programación o marketing",
        ],

        includes: [
          "Clases estructuradas paso a paso",
          "Ejercicios prácticos guiados",
          "Acceso a materiales digitales",
        ],

        notIncludes: [
          "Mentoría personalizada",
          "Proyectos complejos",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Excel", "WordPress", "Python", "Marketing Digital"],

        features: [
          "Contenido práctico",
          "Ejercicios aplicados",
          "Aprendizaje guiado",
        ],

        deliverables: [
          "Material del curso",
          "Certificado de finalización",
        ],

        integrations: ["Plataforma educativa"],
        automationLevel: "low",

        support: "Soporte durante duración del curso",
      },

      {
        id: "EDU-COURSE-INT-001",
        name: "Curso Intermedio",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "20-40 horas",
        price: "$1.500.000 - $3.000.000 COP",

        description:
          "Programa de especialización enfocado en el desarrollo de habilidades aplicadas en entornos reales.",

        // 🔥 NEGOCIO
        target:
          "Profesionales que buscan especializarse y aplicar conocimientos en proyectos reales.",

        useCases: [
          "Desarrollo de proyectos funcionales",
          "Automatización de tareas",
          "Implementación de soluciones digitales",
        ],

        includes: [
          "Clases estructuradas avanzadas",
          "Proyecto práctico guiado",
          "Mentoría grupal",
        ],

        notIncludes: [
          "Consultoría empresarial personalizada",
          "Implementaciones reales en empresas",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["React", "n8n", "Marketing Automation", "Ciberseguridad"],

        features: [
          "Proyecto real guiado",
          "Aplicación práctica",
          "Resolución de problemas reales",
        ],

        deliverables: [
          "Proyecto final funcional",
          "Certificado de especialización",
        ],

        integrations: ["Herramientas digitales reales"],
        automationLevel: "medium",

        support: "Soporte durante curso + 7 días posteriores",
      },

      {
        id: "EDU-COURSE-ADV-001",
        name: "Curso Avanzado",
        level: "🟠 Avanzado",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "40-60 horas",
        price: "$3.500.000 - $7.000.000 COP",

        description:
          "Formación avanzada orientada a la resolución de problemas complejos y desarrollo de soluciones profesionales.",

        // 🔥 NEGOCIO
        target:
          "Profesionales con experiencia que buscan escalar a nivel experto en tecnología o negocio digital.",

        useCases: [
          "Arquitectura de sistemas",
          "Implementación de soluciones empresariales",
          "Desarrollo de productos digitales",
        ],

        includes: [
          "Clases avanzadas",
          "Mentoría personalizada",
          "Casos reales de negocio",
        ],

        notIncludes: [
          "Desarrollo completo de proyectos empresariales",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Arquitectura Software", "DevOps", "IA", "Ciberseguridad"],

        features: [
          "Casos reales",
          "Análisis técnico profundo",
          "Mentoría estratégica",
        ],

        deliverables: [
          "Proyecto avanzado",
          "Certificado avanzado",
        ],

        integrations: ["Infraestructura real", "Herramientas empresariales"],
        automationLevel: "high",

        support: "Soporte durante curso + 15 días posteriores",
      },
    ],
  },

  // =========================
  // 🚀 3. BOOTCAMPS
  // =========================
  {
    id: "EDU-BOOTCAMPS",
    category: "Bootcamps",
    subtitle: "Programas intensivos orientados a empleabilidad y ejecución real",
    icon: GraduationCap,

    levels: [
      {
        id: "EDU-BOOT-001",
        name: "Bootcamp Profesional",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐ (3/5)",
        time: "1-3 meses",
        price: "$3.000.000 - $8.000.000 COP",

        description:
          "Programa intensivo diseñado para llevar al participante de nivel intermedio a perfil profesional listo para el mercado.",

        // 🔥 NEGOCIO
        target:
          "Personas que buscan cambiar de carrera, mejorar su perfil profesional o ingresar al mundo tecnológico.",

        useCases: [
          "Transición a carrera tecnológica",
          "Construcción de portafolio profesional",
          "Preparación para empleo o freelancing",
        ],

        includes: [
          "Clases intensivas",
          "Proyecto real completo",
          "Mentoría continua",
          "Acceso a comunidad",
        ],

        notIncludes: [
          "Garantía de empleo",
          "Colocación laboral directa",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["Full Stack", "Data", "Automatización", "Ciberseguridad"],

        features: [
          "Aprendizaje intensivo",
          "Simulación de entorno real",
          "Trabajo por proyectos",
        ],

        deliverables: [
          "Portfolio profesional",
          "Proyecto real",
          "Certificado",
        ],

        integrations: ["Herramientas reales del mercado"],
        automationLevel: "medium",

        support: "Soporte durante bootcamp + 30 días mentoría",
      },
    ],
  },

  // =========================
  // 🏅 4. CERTIFICACIONES
  // =========================
  {
    id: "EDU-CERTIFICATIONS",
    category: "Certificaciones",
    subtitle: "Validación profesional de habilidades y preparación para estándares del mercado",
    icon: GraduationCap,

    levels: [
      {
        id: "EDU-CERT-001",
        name: "Certificación Profesional",
        level: "🟡 Intermedio",
        complexity: "⭐⭐⭐⭐ (4/5)",
        time: "3-6 meses",
        price: "$4.000.000 - $10.000.000 COP",

        description:
          "Programa estructurado con evaluaciones y simulaciones diseñado para validar competencias técnicas y profesionales.",

        // 🔥 NEGOCIO
        target:
          "Profesionales que buscan validar sus habilidades y mejorar su perfil laboral en el mercado.",

        useCases: [
          "Validación de conocimientos técnicos",
          "Mejora del perfil profesional",
          "Preparación para roles especializados",
        ],

        includes: [
          "Plan de estudio estructurado",
          "Evaluaciones periódicas",
          "Simulacros de certificación",
          "Acceso a materiales exclusivos",
        ],

        notIncludes: [
          "Certificación internacional oficial incluida en el precio",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["PMI", "Seguridad", "Marketing Digital", "Tecnologías especializadas"],

        features: [
          "Evaluaciones continuas",
          "Simulación de examen real",
          "Seguimiento de progreso",
        ],

        deliverables: [
          "Certificado de finalización",
          "Reporte de desempeño",
        ],

        integrations: ["Plataforma educativa", "Simuladores de examen"],
        automationLevel: "medium",

        support: "Soporte durante el programa",
      },

      {
        id: "EDU-CERT-ADV-001",
        name: "Certificación Avanzada",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "6-12 meses",
        price: "$12.000.000+ COP",

        description:
          "Programa intensivo de preparación para certificaciones internacionales de alto nivel en tecnología y negocio.",

        // 🔥 NEGOCIO
        target:
          "Profesionales senior que buscan certificaciones internacionales para escalar a posiciones estratégicas.",

        useCases: [
          "Preparación para certificaciones internacionales",
          "Acceso a roles senior o especializados",
          "Validación de expertise profesional",
        ],

        includes: [
          "Ruta de aprendizaje personalizada",
          "Mentoría intensiva",
          "Simulacros avanzados",
          "Estrategia de presentación de examen",
        ],

        notIncludes: [
          "Costo oficial del examen internacional",
        ],

        pricingType: "fixed",

        // ⚙️ TÉCNICO
        stack: ["CISSP", "AWS", "PMP", "Arquitectura Empresarial"],

        features: [
          "Mentoría personalizada",
          "Simulación de escenarios reales",
          "Preparación estratégica",
        ],

        deliverables: [
          "Preparación completa",
          "Plan de certificación",
        ],

        integrations: ["Plataformas oficiales", "Simuladores avanzados"],
        automationLevel: "high",

        support: "Soporte durante el programa + 30 días posteriores",
      },
    ],
  },

  // =========================
  // 🏢 5. CORPORATIVO
  // =========================
  {
    id: "EDU-CORP",
    category: "Educación Corporativa",
    subtitle: "Programas empresariales diseñados para transformación y desarrollo organizacional",
    icon: GraduationCap,

    levels: [
      {
        id: "EDU-CORP-001",
        name: "Capacitación Corporativa",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "Variable",
        price: "$15.000.000+ COP",

        description:
          "Programa de formación diseñado a medida para empresas, enfocado en mejorar capacidades tecnológicas y operativas del equipo.",

        // 🔥 NEGOCIO
        target:
          "Empresas que buscan capacitar equipos en herramientas digitales, automatización o transformación tecnológica.",

        useCases: [
          "Capacitación en herramientas digitales",
          "Formación en automatización empresarial",
          "Entrenamiento en ciberseguridad",
        ],

        includes: [
          "Diagnóstico de competencias",
          "Programa personalizado",
          "Ejecución de formación",
          "Evaluación de resultados",
        ],

        notIncludes: [
          "Implementación técnica de soluciones (servicio adicional)",
        ],

        pricingType: "custom",

        // ⚙️ TÉCNICO
        stack: ["Transformación Digital", "Ciberseguridad", "Automatización", "IA"],

        features: [
          "Contenido adaptado a empresa",
          "Medición de impacto",
          "Formación aplicada",
        ],

        deliverables: [
          "Informe de resultados",
          "Certificados por participante",
        ],

        integrations: ["Herramientas empresariales del cliente"],
        automationLevel: "medium",

        support: "Acompañamiento durante programa",
      },

      {
        id: "EDU-CONSULT-001",
        name: "Consultoría Educativa",
        level: "🔴 Experto",
        complexity: "⭐⭐⭐⭐⭐ (5/5)",
        time: "2-6 meses",
        price: "$10.000.000+ COP",

        description:
          "Diseño estratégico de programas educativos, academias internas o plataformas de formación digital.",

        // 🔥 NEGOCIO
        target:
          "Empresas, instituciones o startups que desean crear programas educativos propios o academias digitales.",

        useCases: [
          "Creación de academias corporativas",
          "Diseño de programas e-learning",
          "Estructuración de contenido formativo",
        ],

        includes: [
          "Diagnóstico estratégico",
          "Diseño curricular",
          "Arquitectura educativa",
          "Plan de implementación",
        ],

        notIncludes: [
          "Producción completa de contenido (servicio adicional)",
        ],

        pricingType: "custom",

        // ⚙️ TÉCNICO
        stack: ["Diseño Curricular", "E-learning", "LMS", "UX Educativo"],

        features: [
          "Diseño estructurado",
          "Enfoque estratégico",
          "Escalabilidad educativa",
        ],

        deliverables: [
          "Plan curricular completo",
          "Estructura de contenidos",
          "Guía de implementación",
        ],

        integrations: ["LMS", "Plataformas educativas"],
        automationLevel: "low",

        support: "Soporte durante implementación",
      },
    ],
  },
];
