"use client";

import {
  Lightbulb,
  Wrench,
  Cog,
  Target,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    title: "Tecnología accesible",
    icon: Lightbulb,
  },
  {
    title: "Soluciones a medida",
    icon: Wrench,
  },
  {
    title: "Automatización real",
    icon: Cog,
  },
  {
    title: "Enfoque en resultados",
    icon: Target,
  },
];

/* 🎬 ANIMACIONES */

// contenedor (stagger)
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// items (slide + fade + leve escala)
const item: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhySatCore() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* 🔥 TITLE */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ¿Por qué SatCore?
      </motion.h2>

      {/* 🧩 LIST */}
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((itemData, index) => {
          const Icon = itemData.icon;

          return (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ x: 6 }} // 🔥 micro interacción pro
              className="group flex items-center gap-4 transition"
            >

              {/* 🔹 ICON */}
              <div
                className="
                  flex items-center justify-center
                  w-11 h-11 rounded-xl
                  bg-white/5 border border-white/10
                  group-hover:bg-accent/10
                  group-hover:border-accent/30
                  transition
                "
              >
                <Icon
                  className="
                    w-5 h-5
                    text-gray-300
                    group-hover:text-accent
                    transition
                  "
                />
              </div>

              {/* 🔹 TEXT */}
              <p
                className="
                  text-base md:text-lg font-medium
                  text-gray-300
                  group-hover:text-white
                  transition
                "
              >
                {itemData.title}
              </p>

            </motion.div>
          );
        })}
      </motion.div>

    </div>
  );
}
