"use client";

import { Check, X } from "lucide-react";
import Section from "@/components/ui/universalSection";
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

// contenedor general
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// columnas (izq / der)
const columnLeft: Variants = {
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

const columnRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// lista items
const listContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SoftwareScope() {
  return (
    <Section variant="white" paddingY="md">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Alcance del proyecto
          </h2>

          <p className="text-(--color-muted-light) max-w-2xl mx-auto">
            Definimos claramente qué está incluido y qué no, para evitar ambigüedades.
          </p>
        </motion.div>

        {/* 🧩 GRID */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* ✅ INCLUYE */}
          <motion.div
            variants={columnLeft}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-6 text-green-600 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Incluye
            </h3>

            <motion.ul
              className="space-y-4"
              variants={listContainer}
            >
              {includes.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <Check className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ❌ NO INCLUYE */}
          <motion.div
            variants={columnRight}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-6 text-red-500 flex items-center gap-2">
              <X className="w-5 h-5" />
              No incluye
            </h3>

            <motion.ul
              className="space-y-4"
              variants={listContainer}
            >
              {notIncludes.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <X className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </motion.div>

      </div>
    </Section>
  );
}
