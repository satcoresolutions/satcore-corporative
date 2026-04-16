export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQCategory {
    title: string;
    items: FAQItem[];
}

export const faqData: FAQCategory[] = [
    {
        title: "1. Aspectos legales",
        items: [
            {
                question: "1.1.1 ¿Qué documentos necesito firmar para contratar un servicio?",
                answer: `
Dependiendo del servicio:

• Todos los servicios:
- Cotización aprobada (ANEXO A)
- Contrato Marco (ANEXO B)

• Servicios con información sensible:
- Acuerdo de Confidencialidad (ANEXO C)

• Servicios de ciberseguridad:
- Carta de autorización adicional (ANEXO G)
        `,
            },
            {
                question: "1.1.2 ¿El contrato puede ser modificado?",
                answer: `
Sí. Puede modificarse mediante un acta escrita firmada por ambas partes.

Los cambios menores de alcance pueden gestionarse por correo electrónico,
siempre que exista confirmación escrita de ambas partes.
        `,
            },
            {
                question: "1.1.3 ¿Puedo contratar como persona natural o necesito ser empresa?",
                answer: `
Ambas opciones son válidas.

Las personas naturales deben proporcionar copia de su documento de identidad
para efectos legales y de facturación.
        `,
            },
            {
                question: "1.1.4 ¿El contrato tiene tiempo de duración?",
                answer: `
El Contrato Marco tiene una vigencia de 12 meses renovables.

Cada orden de servicio o cotización tiene su propio cronograma
y condiciones específicas de ejecución.
        `,
            },

            {
                question: "1.2.1 ¿Quién es el dueño del código o diseño desarrollado?",
                answer: `
Una vez realizado el pago total del proyecto, el cliente adquiere los derechos
de uso y propiedad sobre los entregables específicos.

SatCore Solutions retiene derechos sobre frameworks, librerías
y componentes reutilizables propios.
        `,
            },
            {
                question: "1.2.2 ¿Puedo modificar el código o diseño entregado?",
                answer: `
Sí. Una vez transferidos los derechos, el cliente puede modificar
los entregables según sus necesidades.

Se recomienda documentar los cambios para futuras actualizaciones.
        `,
            },
            {
                question: "1.2.3 ¿SatCore Solutions puede mostrar mi proyecto en su portafolio?",
                answer: `
Sí, salvo que exista un acuerdo de confidencialidad específico
que lo prohíba.

Siempre es posible definir restricciones sobre información sensible.
        `,
            },
            {
                question: "1.2.4 ¿Qué pasa con las propuestas no seleccionadas?",
                answer: `
Las propuestas no seleccionadas permanecen como propiedad de SatCore Solutions
y pueden ser reutilizadas o adaptadas en otros proyectos.
        `,
            },

            {
                question: "1.3.1 ¿Mi información está segura?",
                answer: `
Sí. Toda la información del cliente es tratada con estricta confidencialidad
según el Acuerdo de Confidencialidad (ANEXO C).

Se aplican medidas de seguridad técnicas y administrativas.
        `,
            },
            {
                question: "1.3.2 ¿Qué pasa si ocurre una filtración de información?",
                answer: `
Está contemplado en el ANEXO C.

SatCore Solutions tiene obligaciones de notificación
y responsabilidad según lo establecido contractualmente.
        `,
            },
            {
                question: "1.3.3 ¿El equipo firma acuerdos de confidencialidad?",
                answer: `
Sí. Todo el equipo y consultores están sujetos a acuerdos internos
de confidencialidad.
        `,
            },

            {
                question: "1.4.1 ¿Cumplen con la normativa de protección de datos?",
                answer: `
Sí. Cumplimos con la Ley 1581 de 2012 y demás normativa vigente
en Colombia sobre protección de datos personales.
        `,
            },
            {
                question: "1.4.2 ¿Los servicios de ciberseguridad son legales?",
                answer: `
Sí, siempre que exista autorización expresa del propietario
de los sistemas.

Nunca realizamos pruebas de seguridad sin respaldo legal.
        `,
            },
            {
                question: "1.4.3 ¿Emiten factura electrónica?",
                answer: `
Sí. Emitimos factura electrónica de venta conforme
a la normativa vigente en Colombia.
        `,
            },
        ],
    },

    {
        title: "2. Aspectos operativos",
        items: [
            {
                question: "2.1.1 ¿Cuánto tiempo tarda en iniciar mi proyecto después de aprobar la cotización?",
                answer: `
Generalmente entre 3 a 5 días hábiles.

Este tiempo se utiliza para:
- Confirmar disponibilidad del equipo
- Asignar recursos
- Preparar el kick-off meeting
      `,
            },
            {
                question: "2.1.2 ¿Qué necesito proporcionar para empezar?",
                answer: `
Depende del servicio, pero típicamente se requiere:

- Brief completo o formulario de inicio
- Accesos necesarios (dominio, hosting, redes sociales, etc.)
- Contenido y materiales de referencia
- Pago del anticipo acordado
      `,
            },
            {
                question: "2.1.3 ¿Cómo se asigna el equipo al proyecto?",
                answer: `
Asignamos consultores según:

- Disponibilidad del equipo
- Experiencia específica en el área
- Nivel de especialización requerido

Para proyectos de mayor escala, se asigna un líder de proyecto.
      `,
            },

            {
                question: "2.2.1 ¿Cómo se comunicarán conmigo durante el proyecto?",
                answer: `
Utilizamos múltiples canales según la necesidad:

- Email: Comunicación formal y entrega de documentos
- WhatsApp Business: Consultas rápidas y seguimiento ágil
- Reuniones: Kick-off, revisiones de hitos y cierre
- Plataformas de gestión: Trello, Notion u otras (cuando aplique)
      `,
            },
            {
                question: "2.2.2 ¿Con quién hablo si tengo dudas?",
                answer: `
Cada proyecto tiene un consultor asignado como punto de contacto principal.

En servicios continuos (retainer o paquetes), se asigna un Director de Cuenta.
      `,
            },
            {
                question: "2.2.3 ¿Con qué frecuencia recibo actualizaciones?",
                answer: `
Depende del tipo de servicio:

- Proyectos puntuales:
  Actualizaciones por hito + reporte semanal breve

- Servicios continuos:
  Calendario de entregas + reportes mensuales

- Casos urgentes:
  Comunicación inmediata según la situación
      `,
            },

            {
                question: "2.3.1 ¿Qué pasa si necesito cambiar algo durante el proyecto?",
                answer: `
Se evalúa el impacto del cambio:

- Cambios menores:
  Incluidos dentro de las revisiones sin costo adicional

- Cambios mayores o fuera de alcance:
  Se cotizan como adicional
      `,
            },
            {
                question: "2.3.2 ¿Puedo ampliar el alcance del proyecto?",
                answer: `
Sí. Se puede ampliar mediante:

- Adendum al contrato
- Nueva cotización

Todo depende de la magnitud del cambio solicitado.
      `,
            },
            {
                question: "2.3.3 ¿Puedo reducir el alcance del proyecto?",
                answer: `
Sí, pero se realiza un ajuste proporcional:

- Se recalcula el valor según el trabajo restante
- Los pagos ya ejecutados no son reembolsables
      `,
            },

            {
                question: "2.4.1 ¿Qué pasa si se atrasa la entrega?",
                answer: `
Se analiza la causa del retraso:

Si es atribuible a SatCore Solutions:
- Notificación proactiva
- Nuevo cronograma
- Posibles compensaciones
- Priorización del proyecto

Cada caso se evalúa individualmente.
      `,
            },
            {
                question: "2.4.2 ¿Qué pasa si el retraso es por parte del cliente?",
                answer: `
Si el cliente no entrega feedback o información a tiempo:

- El cronograma se extiende proporcionalmente
- Si el retraso supera 15 días:
  - Se reevalúa la continuidad del proyecto
  - Puede aplicarse un recargo del 15%
      `,
            },
            {
                question: "2.4.3 ¿Los entregables incluyen capacitación?",
                answer: `
Sí, la mayoría de servicios incluyen:

- Capacitación básica (1 a 2 horas)

Capacitaciones más avanzadas o extensas:
- Se cotizan como servicio adicional
      `,
            },
        ],
    },

    {
        title: "3. Pagos y facturación",
        items: [
            {
                question: "3.1.1 ¿Qué métodos de pago aceptan?",
                answer: `
Aceptamos los siguientes métodos de pago:

- Transferencia bancaria (preferido)
- Consignación bancaria
- Pago en línea con tarjeta (PayU, Stripe)
- PSE (Pagos Seguros en Línea)
      `,
            },
            {
                question: "3.1.2 ¿El precio incluye IVA?",
                answer: `
Sí. Todos los precios incluyen IVA (19%),
salvo que se indique explícitamente lo contrario como "más IVA".
      `,
            },
            {
                question: "3.1.3 ¿Puedo pagar en cuotas?",
                answer: `
Sí, bajo ciertas condiciones:

- Proyectos mayores a $10.000.000 COP:
  Hasta 3 cuotas según el avance del proyecto

- Servicios tipo retainer:
  Se pagan 100% anticipado cada mes
      `,
            },

            {
                question: "3.2.1 ¿Cuándo emiten la factura?",
                answer: `
La facturación se realiza según la etapa del proyecto:

- Anticipos:
  Al aprobar la cotización y firmar el contrato

- Pagos intermedios:
  Al cumplirse los hitos definidos

- Pago final:
  A la entrega del proyecto

- Retainers:
  Durante los primeros 5 días de cada mes
      `,
            },
            {
                question: "3.2.2 ¿Qué pasa si me retraso en un pago?",
                answer: `
Se aplican las siguientes condiciones:

- 1 a 5 días:
  Recordatorio amistoso

- 6 a 15 días:
  Aplicación de intereses de mora según normativa legal

- Más de 15 días:
  Posible suspensión de servicios hasta regularización del pago
      `,
            },
            {
                question: "3.2.3 ¿Emiten certificado de retención?",
                answer: `
Emitimos factura electrónica completa.

Las retenciones en la fuente son responsabilidad del cliente,
según su régimen tributario.
      `,
            },

            {
                question: "3.3.1 ¿Existe garantía de satisfacción?",
                answer: `
Sí, dependiendo del tipo de servicio:

- Diseño:
  Hasta 3 rondas de revisiones incluidas

- Formación:
  Garantía de satisfacción durante el primer 25% del curso

- Desarrollo:
  30 días de garantía técnica post-entrega

- Otros servicios:
  Aplican condiciones específicas según anexos
      `,
            },
            {
                question: "3.3.2 ¿Puedo solicitar un reembolso?",
                answer: `
Depende del estado del proyecto:

- Antes de iniciar:
  Reembolso completo (menos costos administrativos)

- Durante el proyecto:
  Reembolso proporcional al trabajo no ejecutado

- Después de la entrega:
  No aplica reembolso, únicamente garantía de corrección
      `,
            },
        ],
    },

    {
        title: "4. Soporte post-entrega",
        items: [
            {
                question: "4.1.1 ¿Qué cubre la garantía?",
                answer: `
La garantía cubre:

- Corrección de errores y bugs atribuibles a SatCore Solutions

No cubre:

- Cambios de alcance
- Nuevas funcionalidades
- Daños ocasionados por uso indebido o intervención externa
      `,
            },
            {
                question: "4.1.2 ¿Tienen soporte después de entregar el proyecto?",
                answer: `
Sí, ofrecemos múltiples niveles de soporte:

- Garantía:
  Período incluido entre 15 y 45 días según el servicio

- Soporte ad hoc:
  Servicio técnico puntual cotizado por hora

- Planes de mantenimiento:
  Soporte continuo, mejoras y monitoreo (ver anexos de precios)
      `,
            },
            {
                question: "4.1.3 ¿Cómo reporto un problema técnico?",
                answer: `
Puedes reportarlo a través de:

- Email: satcoresolutions@gmail.com
- WhatsApp Business

Incluye siempre:

- Descripción del problema
- Capturas de pantalla (si aplica)
- URL o sistema donde ocurre
- Pasos para reproducir el error
      `,
            },

            {
                question: "4.2.1 ¿Incluyen actualizaciones futuras?",
                answer: `
Depende del tipo de actualización:

- Actualizaciones críticas de seguridad:
  Incluidas dentro del período de garantía

- Mejoras, nuevas funcionalidades o evolutivos:
  Se cotizan como proyectos adicionales o mantenimiento
      `,
            },
            {
                question: "4.2.2 ¿Qué pasa si una herramienta o servicio externo deja de funcionar?",
                answer: `
Si depende de un tercero:

- Se analiza la causa
- Se propone una alternativa o solución temporal (workaround)

Si requiere intervención técnica:

- Se cotiza el desarrollo o ajuste necesario
      `,
            },
        ],
    },

    {
        title: "5. Servicios específicos",
        items: [
            {
                question: "5.1.1 ¿El precio incluye dominio y hosting?",
                answer:
                    "No, salvo acuerdo expreso. El cliente adquiere su dominio y hosting para mantener el control total. SatCore Solutions brinda asesoría técnica para elegir la mejor opción.",
            },
            {
                question: "5.1.2 ¿Mi sitio web será responsive?",
                answer:
                    "Sí. Todos nuestros desarrollos están optimizados para funcionar correctamente en dispositivos móviles, tablets y escritorio.",
            },
            {
                question: "5.1.3 ¿Puedo administrar el contenido de mi web?",
                answer:
                    "Sí. Implementamos CMS o paneles de administración que permiten gestionar contenido sin conocimientos técnicos.",
            },
            {
                question: "5.2.1 ¿El pentesting puede afectar mis sistemas?",
                answer:
                    "No. Utilizamos metodologías controladas para minimizar riesgos. Aun así, existe un riesgo residual que se mitiga mediante planificación, backups y autorización previa.",
            },
            {
                question: "5.2.2 ¿Necesito detener mis operaciones durante pruebas de seguridad?",
                answer:
                    "No necesariamente. Las pruebas se programan en horarios estratégicos para reducir impacto en la operación.",
            },
            {
                question: "5.2.3 ¿El reporte es comprensible para no técnicos?",
                answer:
                    "Sí. Entregamos un informe técnico detallado y un resumen ejecutivo en lenguaje de negocio.",
            },
            {
                question: "5.3.1 ¿Los sistemas automatizados funcionan 24/7?",
                answer:
                    "Depende de la infraestructura. Si se ejecutan en servidores o cloud, sí. Si dependen de un equipo local, estarán limitados a su disponibilidad.",
            },
            {
                question: "5.3.2 ¿Puedo modificar automatizaciones después?",
                answer:
                    "Sí. Entregamos código documentado, aunque recomendamos que las modificaciones las realice personal técnico.",
            },
            {
                question: "5.3.3 ¿El web scraping es legal?",
                answer:
                    "Depende de los términos del sitio objetivo. Solo realizamos scraping ético y legal, respetando normativas y políticas.",
            },
            {
                question: "5.4.1 ¿Garantizan resultados en marketing?",
                answer:
                    "No garantizamos resultados específicos debido a variables externas, pero sí garantizamos ejecución estratégica y profesional.",
            },
            {
                question: "5.4.2 ¿El presupuesto publicitario está incluido?",
                answer:
                    "No. El presupuesto de pauta (Meta, Google, etc.) es independiente y gestionado directamente por el cliente.",
            },
            {
                question: "5.4.3 ¿Apruebo el contenido antes de publicar?",
                answer:
                    "Sí. Todo contenido es validado previamente por el cliente.",
            },
            {
                question: "5.5.1 ¿Las grabaciones de formación quedan disponibles?",
                answer:
                    "Sí, por un período estándar de 6 meses. El acceso extendido puede contratarse adicionalmente.",
            },
            {
                question: "5.5.2 ¿Puedo compartir cursos con mi equipo?",
                answer:
                    "Las licencias son individuales. Para equipos ofrecemos planes corporativos con descuentos.",
            },
            {
                question: "5.5.3 ¿Entregan certificaciones?",
                answer:
                    "Emitimos certificados de participación. También ofrecemos preparación para certificaciones oficiales reconocidas.",
            },
        ],
    },
    {
        title: "6. Contacto y escalamiento",
        items: [
            {
                question: "6.1.1 ¿Cuáles son los canales de contacto?",
                answer:
                    "Puedes contactarnos por email (satcoresolutions@gmail.com) para cotizaciones, soporte, facturación y consultas generales. Para urgencias utilizamos WhatsApp Business en horario laboral.",
            },
            {
                question: "6.1.2 ¿Cuál es el tiempo de respuesta?",
                answer:
                    "Cotizaciones: 24-48 horas. Soporte técnico: 24 horas hábiles. Facturación y consultas generales: hasta 48 horas. Urgencias: atención inmediata en horario laboral.",
            },
            {
                question: "6.2.1 ¿Cómo funciona el escalamiento de soporte?",
                answer:
                    "Si no estás satisfecho con la atención, puedes escalar el caso en este orden: consultor asignado → líder de proyecto → director de cuenta → dirección comercial.",
            },
            {
                question: "6.2.2 ¿Qué pasa si tengo un problema crítico?",
                answer:
                    "Los casos críticos se priorizan inmediatamente y se gestionan a través de canales directos como WhatsApp Business o contacto prioritario.",
            },
        ],
    },
    {
        title: "7. Términos y definiciones",
        items: [
            {
                question: "7.1.1 ¿Qué significa 'Alcance'?",
                answer:
                    "Conjunto de actividades, funcionalidades y entregables incluidos dentro de un proyecto.",
            },
            {
                question: "7.2.1 ¿Qué es un 'Hito'?",
                answer:
                    "Punto clave dentro del cronograma que marca un avance importante o una entrega parcial del proyecto.",
            },
            {
                question: "7.3.1 ¿Qué es un 'Kick-off'?",
                answer:
                    "Reunión inicial donde se alinean objetivos, alcance, tiempos y responsables del proyecto.",
            },
            {
                question: "7.4.1 ¿Qué es un 'Mockup'?",
                answer:
                    "Representación visual de alta fidelidad del diseño de una interfaz antes de su desarrollo.",
            },
            {
                question: "7.5.1 ¿Qué es un 'Wireframe'?",
                answer:
                    "Estructura básica de una interfaz que define la organización de elementos sin diseño visual final.",
            },
            {
                question: "7.6.1 ¿Qué es un 'Retainer'?",
                answer:
                    "Modelo de servicio continuo donde el cliente paga mensualmente por disponibilidad y ejecución de tareas.",
            },
            {
                question: "7.7.1 ¿Qué significa 'Scope'?",
                answer:
                    "Término en inglés para referirse al alcance del proyecto.",
            },
        ],
    }
    ,
];
