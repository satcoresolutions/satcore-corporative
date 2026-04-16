"use client";

import Section from "../../ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion, Variants } from "framer-motion";

/* 🧠 TYPES */
type ServiceType =
  | "software"
  | "educacion"
  | "ciberseguridad"
  | "ia"
  | "branding";

/* 📦 DATA */
const steps: {
  title: string;
  subtitle: string;
  type: ServiceType;
  active: boolean;
}[] = [
  {
    title: "Diagnóstico",
    subtitle: "Analizamos tu negocio, procesos y necesidades tecnológicas.",
    type: "software",
    active: true,
  },
  {
    title: "Arquitectura",
    subtitle: "Diseñamos la solución ideal con escalabilidad y seguridad.",
    type: "ciberseguridad",
    active: true,
  },
  {
    title: "Desarrollo",
    subtitle: "Construimos el sistema con tecnologías modernas y eficientes.",
    type: "ia",
    active: true,
  },
  {
    title: "Implementación",
    subtitle: "Desplegamos la solución e integramos tu operación.",
    type: "software",
    active: true,
  },
  {
    title: "Soporte & Evolución",
    subtitle: "Mejoras continuas, mantenimiento y optimización.",
    type: "branding",
    active: true,
  },
];

/* 🎬 ANIMACIONES */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* 🚀 COMPONENT */
export default function ProcessSection() {
  return (
    <Section variant="white" paddingY="md">

      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-dark">
            Nuestro Proceso
          </h2>

          <p className="text-(--color-muted-light) max-w-2xl mx-auto">
            Un flujo estructurado que garantiza resultados claros y escalables.
          </p>
        </div>

        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps
            .filter((step) => step.active)
            .map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ServiceCard
                  title={step.title}
                  subtitle={step.subtitle}
                  variant="info"
                  size="md"
                />
              </motion.div>
            ))}
        </motion.div>

      </div>
    </Section>
  );
}
