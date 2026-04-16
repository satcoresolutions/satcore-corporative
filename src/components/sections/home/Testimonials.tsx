"use client";

import { Quote } from "lucide-react";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

const testimonials = [
  {
    text: "Excelente servicio, optimizaron todos nuestros procesos.",
  },
  {
    text: "Automatizamos ventas y mejoramos resultados en semanas.",
  },
];

/* 🎬 ANIMACIONES */

// contenedor
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// items (entrada elegante tipo testimonial)
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Testimonials() {
  return (
    <Section variant="white" paddingY="md">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Clientes que confían en nosotros
        </motion.h2>

        {/* LIST */}
        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="
                flex items-start gap-4
                p-6 rounded-xl
                border border-gray-200
                bg-white
                hover:shadow-lg
                transition
              "
            >
              {/* ICON */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="
                  w-10 h-10 rounded-full
                  bg-gray-100
                  flex items-center justify-center
                "
              >
                <Quote className="w-5 h-5 text-gray-600" />
              </motion.div>

              {/* TEXT */}
              <motion.p
                className="text-gray-600 italic leading-relaxed"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                &ldquo;{itemData.text}&rdquo;
              </motion.p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
