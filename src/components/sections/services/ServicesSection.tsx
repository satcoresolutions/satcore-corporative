"use client";

import Section from "../../ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  Code,
  Shield,
  Brain,
  Palette,
  GraduationCap,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/* 📦 DATA */
const services = [
  {
    title: "Desarrollo de Software",
    subtitle: "Aplicaciones web y sistemas a medida",
    icon: Code,
    href: "/servicios/software",
    active: true,
  },
  {
    title: "Ciberseguridad",
    subtitle: "Protección avanzada para tu negocio",
    icon: Shield,
    href: "/servicios/ciberseguridad",
    active: true,
  },
  {
    title: "Inteligencia Artificial",
    subtitle: "Automatiza procesos con IA",
    icon: Brain,
    href: "/servicios/ia",
    active: true,
  },
  {
    title: "Branding & Diseño",
    subtitle: "Diseño estratégico de marca",
    icon: Palette,
    href: "/servicios/branding",
    active: true,
  },
  {
    title: "Educación Tecnológica",
    subtitle: "Formación en habilidades digitales",
    icon: GraduationCap,
    href: "/servicios/educacion",
    active: true,
  },
];

/* 🎬 ANIMACIONES */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesSection() {
  return (
    <Section id="servicios" variant="white" paddingY="md">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔥 TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-dark">
            Nuestros Servicios
          </h2>

          <p className="text-(--color-muted-light) max-w-2xl mx-auto leading-relaxed">
            Soluciones tecnológicas diseñadas para escalar tu negocio,
            automatizar procesos y diferenciarte en el mercado.
          </p>
        </div>

        {/* 🧩 GRID (MISMO DISEÑO) */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-75"
            >
              <ServiceCard
                title={itemData.title}
                subtitle={itemData.subtitle}
                icon={itemData.icon}
                href={itemData.href}
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
