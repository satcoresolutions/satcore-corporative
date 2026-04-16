"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion, Variants } from "framer-motion";

/* 🧠 TIPOS */
type ServiceType =
  | "software"
  | "educacion"
  | "ciberseguridad"
  | "ia"
  | "branding";

interface Pilar {
  title: string;
  subtitle: string;
  type: ServiceType;
  active: boolean;
}

/* 📦 DATA */
const pilares: Pilar[] = [
  {
    title: "Estudio",
    subtitle: "Formación tecnológica basada en proyectos reales.",
    type: "educacion",
    active: true,
  },
  {
    title: "Desarrollo",
    subtitle: "Creación de sitios web y aplicaciones.",
    type: "software",
    active: true,
  },
  {
    title: "Automatización",
    subtitle: "Sistemas inteligentes y agentes automatizados.",
    type: "ia",
    active: true,
  },
  {
    title: "Seguridad",
    subtitle: "Auditorías, pentesting y protección digital.",
    type: "ciberseguridad",
    active: true,
  },
  {
    title: "Marketing",
    subtitle: "Branding estratégico y contenido digital.",
    type: "branding",
    active: true,
  },
];

/* 🎬 ANIMACIONES */

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Pilares() {
  return (
    <Section variant="white" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Nuestros Pilares
          </h2>

          <p className="text-muted text-sm mt-2 max-w-md mx-auto">
            Construimos soluciones tecnológicas completas a través de un
            ecosistema de servicios especializados.
          </p>
        </motion.div>

        {/* 🧩 GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pilares
            .filter((pilar: Pilar) => pilar.active) // ✅ TIPADO AQUÍ
            .map((pilar: Pilar, index: number) => ( // ✅ Y AQUÍ
              <motion.div
                key={index}
                variants={cardVariants}
                className="h-full"
                whileHover={{ y: -4 }} // micro interacción
              >
                <ServiceCard
                  title={pilar.title}
                  subtitle={pilar.subtitle}
                  type={pilar.type}
                  variant="light"
                  size="md"
                  className="h-full"
                />
              </motion.div>
            ))}
        </motion.div>

      </div>
    </Section>
  );
}
