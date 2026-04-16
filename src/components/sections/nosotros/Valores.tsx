"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import Section from "@/components/ui/universalSection";
import {
  Rocket,
  Handshake,
  Globe,
  ShieldCheck,
  BookOpen,
  Briefcase,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/* 🧠 DATA */
const valores = [
  {
    title: "Innovación continua",
    subtitle: "Buscamos constantemente nuevas formas de mejorar y evolucionar.",
    icon: Rocket,
  },
  {
    title: "Ética profesional",
    subtitle: "Actuamos con responsabilidad, transparencia y compromiso.",
    icon: Handshake,
  },
  {
    title: "Accesibilidad tecnológica",
    subtitle: "Creamos soluciones para todos, sin barreras técnicas.",
    icon: Globe,
  },
  {
    title: "Seguridad de la información",
    subtitle: "Protegemos los datos como un activo crítico.",
    icon: ShieldCheck,
  },
  {
    title: "Formación constante",
    subtitle: "Aprendemos, enseñamos y evolucionamos continuamente.",
    icon: BookOpen,
  },
  {
    title: "Compromiso con el cliente",
    subtitle: "Nos enfocamos en resultados reales y medibles.",
    icon: Briefcase,
  },
];

/* 🎬 ANIMACIONES */

// contenedor (stagger elegante)
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// items (entrada suave + leve elevación)
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
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

export default function Valores() {
  return (
    <Section variant="white" paddingY="md">
      <div className="container">

        {/* TITLE */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Nuestra Filosofía
          </h2>
          <p className="text-muted text-sm mt-2 max-w-md mx-auto">
            Principios que guían cada solución que desarrollamos.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {valores.map((valor, i) => (
            <motion.div key={i} variants={item}>
              <ServiceCard
                title={valor.title}
                subtitle={valor.subtitle}
                icon={valor.icon}
                iconVariant="default"
                variant="dark"
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
