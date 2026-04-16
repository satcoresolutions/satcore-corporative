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

interface Service {
  title: string;
  subtitle: string;
  type: ServiceType;
  active: boolean;
  href?: string;
}

/* 📦 DATA */
const services: Service[] = [
  {
    title: "Desarrollo",
    subtitle: "Creación de soluciones web y aplicaciones",
    type: "software",
    active: true,
    href: "/servicios/software",
  },
  {
    title: "Educación",
    subtitle: "Capacitación y formación tecnológica",
    type: "educacion",
    active: true,
  },
  {
    title: "Ciberseguridad",
    subtitle: "Auditorías y protección de sistemas",
    type: "ciberseguridad",
    active: true,
  },
  {
    title: "Automatización",
    subtitle: "Agentes inteligentes y sistemas automatizados",
    type: "ia",
    active: true,
  },
  {
    title: "Marketing",
    subtitle: "Diseño de marcas y contenido digital",
    type: "branding",
    active: true,
  },
];

/* 🎬 ANIMACIONES */

// contenedor
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// items (entrada alternada izquierda/derecha)
const item: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 30,
    x: i % 2 === 0 ? -30 : 30,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesHome() {
  return (
    <Section variant="white" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nuestras Soluciones
        </motion.h2>

        {/* 🧩 GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services
            .filter(service => service.active)
            .map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                custom={index}
                className="h-full"
                whileHover={{ y: -6 }} // 🔥 micro interacción pro
              >
                <ServiceCard
                  title={service.title}
                  subtitle={service.subtitle}
                  type={service.type}
                  variant="light"
                  size="md"
                  href={service.href}
                  className="h-full"
                />
              </motion.div>
            ))}
        </motion.div>

      </div>
    </Section>
  );
}
