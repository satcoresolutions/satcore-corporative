"use client";

import { Sparkles } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */

// texto (izquierda)
const textVariants: Variants = {
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

// card (derecha)
const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Historia() {
  return (
    <Section variant="white" paddingY="md">
      <div className="container grid md:grid-cols-2 gap-10 items-center">

        {/* 🧠 TEXTO */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Historia
          </h2>

          <p className="text-muted text-sm leading-relaxed mb-4">
            <strong>SatCore Solutions</strong> nace como una iniciativa enfocada
            en cerrar la brecha entre la tecnología avanzada y las necesidades
            reales de personas, emprendedores y empresas.
          </p>

          <p className="text-muted text-sm leading-relaxed mb-4">
            Desde sus inicios, la empresa se ha orientado al desarrollo de
            soluciones digitales funcionales, combinando{" "}
            <strong>software, automatización e inteligencia aplicada</strong>
            para optimizar procesos, mejorar la productividad y fortalecer la
            seguridad de la información.
          </p>

          <p className="text-muted text-sm leading-relaxed">
            Hoy, SatCore Solutions evoluciona como un ecosistema tecnológico
            integral, con enfoque en la escalabilidad, la innovación constante
            y la creación de soluciones reales que generan impacto en el mundo
            digital.
          </p>
        </motion.div>

        {/* 🚀 CARD DESTACADA */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="h-full"
        >
          <ServiceCard
            title="Enfoque Tecnológico"
            subtitle="Desarrollamos soluciones digitales escalables, seguras y orientadas a resultados reales, combinando software, automatización y ciberseguridad."
            icon={Sparkles}
            iconVariant="circleBlue"
            variant="light"
            size="lg"
            className="h-full"
          />
        </motion.div>

      </div>
    </Section>
  );
}
