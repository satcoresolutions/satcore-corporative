"use client";

import { Check, X } from "lucide-react";
import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion, Variants } from "framer-motion";

const includes = [
  "Diseño responsive (mobile, tablet, desktop)",
  "Hasta 10 páginas o secciones",
  "Formulario de contacto funcional",
  "Integración básica SEO",
  "Panel administrativo (CMS)",
  "Capacitación de uso",
  "Documentación básica",
];

const notIncludes = [
  "Dominio y hosting",
  "Marketing digital",
  "Contenido o copywriting avanzado",
  "Integraciones de pago complejas",
  "Apps móviles nativas",
];

/* 🎬 ANIMACIONES */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftCard: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightCard: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const listContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function SoftwareScope() {
  return (
    <Section variant="blue" paddingY="lg">

      {/* TITLE */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Alcance del proyecto
        </h2>

        <p className="text-(--color-muted-light) max-w-2xl mx-auto">
          Definimos claramente qué está incluido y qué no, para evitar ambigüedades.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* ✅ INCLUYE */}
        <motion.div variants={leftCard} className="h-full">
          <ServiceCard
            title="Incluye"
            icon={Check}
            iconVariant="circleGreen"
            variant="minimal"
            size="sm"
            className="text-left h-full"
          >
            <motion.ul className="mt-4 space-y-3" variants={listContainer}>
              {includes.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <Check className="w-4 h-4 text-(--color-success) mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </ServiceCard>
        </motion.div>

        {/* ❌ NO INCLUYE */}
        <motion.div variants={rightCard} className="h-full">
          <ServiceCard
            title="No incluye"
            icon={X}
            iconVariant="circleBlue"
            variant="minimal"
            size="sm"
            className="text-left h-full"
          >
            <motion.ul className="mt-4 space-y-3" variants={listContainer}>
              {notIncludes.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <X className="w-4 h-4 text-(--color-error) mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </ServiceCard>
        </motion.div>

      </motion.div>

    </Section>
  );
}
