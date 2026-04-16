"use client";

import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SoftwareLegal() {
  const items = [
    {
      element: "Código fuente",
      owner: "Cliente (post pago total)",
      license: "Uso ilimitado",
    },
    {
      element: "Diseño UI",
      owner: "Cliente",
      license: "Uso ilimitado",
    },
    {
      element: "Librerías externas",
      owner: "Terceros",
      license: "Open Source / MIT",
    },
    {
      element: "Metodología interna",
      owner: "SatCore Solutions",
      license: "No transferible",
    },
  ];

  return (
    <Section variant="dark" paddingY="md">

      {/* TITLE */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Propiedad intelectual y licencias
      </motion.h2>

      {/* HEADER ROW */}
      <div className="hidden md:grid grid-cols-3 gap-4 text-sm text-white/60 mb-4 px-4">
        <span>Elemento</span>
        <span>Propiedad</span>
        <span>Licencia</span>
      </div>

      {/* CARDS ANIMADAS */}
      <motion.div
        className="space-y-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {items.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.01, y: -2 }}
            className="
              grid md:grid-cols-3 gap-4
              p-5 rounded-xl
              border border-white/10
              bg-white/5
              hover:bg-white/10
              transition
            "
          >
            <div className="font-medium text-white">
              {itemData.element}
            </div>

            <div className="text-sm text-white/70">
              {itemData.owner}
            </div>

            <div className="text-sm text-accent">
              {itemData.license}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
}
