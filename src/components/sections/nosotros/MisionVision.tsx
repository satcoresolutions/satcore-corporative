"use client";

import { Target, Eye } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */

// título
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

// misión (izquierda)
const leftCard: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// visión (derecha)
const rightCard: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MisionVision() {
  return (
    <section className="section">
      <div className="container">

        {/* TITLE */}
        <motion.div
          className="text-center mb-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Misión & Visión
          </h2>

          <p className="text-muted text-sm mt-2 max-w-md mx-auto">
            Nuestra dirección estratégica y propósito como empresa.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* MISIÓN */}
          <motion.div
            variants={leftCard}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-full"
          >
            <ServiceCard
              title="Misión"
              subtitle="Brindar soluciones tecnológicas accesibles, seguras y personalizadas a través del desarrollo de software, automatizaciones, formación técnica y servicios de ciberseguridad, orientados a individuos, empresas y entornos educativos."
              icon={Target}
              iconVariant="circleBlue"
              variant="light"
              size="lg"
              className="h-full"
            />
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            variants={rightCard}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-full"
          >
            <ServiceCard
              title="Visión"
              subtitle="Ser reconocidos como una empresa líder en soluciones tecnológicas integrales en Latinoamérica, destacándose por nuestra capacidad técnica, innovación en ciberseguridad, formación educativa de calidad y servicios automatizados personalizados."
              icon={Eye}
              iconVariant="circleBlue"
              variant="light"
              size="lg"
              className="h-full"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
