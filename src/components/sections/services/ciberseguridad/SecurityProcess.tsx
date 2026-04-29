"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { Search, Shield, Radar, Bug, FileText } from "lucide-react";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

/* 📦 DATA */
const steps = [
    {
        title: "Planificación",
        subtitle: "Definimos alcance, activos, reglas de compromiso y autorizaciones.",
        icon: Search,
    },
    {
        title: "Reconocimiento",
        subtitle: "Recolección de información, OSINT y mapeo de superficie de ataque.",
        icon: Radar,
    },
    {
        title: "Escaneo y Análisis",
        subtitle: "Identificación de vulnerabilidades en sistemas, redes y aplicaciones.",
        icon: Shield,
    },
    {
        title: "Explotación Controlada",
        subtitle: "Validación real de vulnerabilidades mediante pruebas seguras.",
        icon: Bug,
    },
    {
        title: "Reporte y Remediación",
        subtitle: "Entrega de hallazgos, riesgos y plan claro de corrección.",
        icon: FileText,
    },
];

/* 🎬 ANIMACIONES */
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function SecurityProcess() {
    return (
        <Section variant="white" paddingY="md">

            <div className="max-w-6xl mx-auto px-6">

                {/* 🔥 TITLE */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary-dark">
                        Metodología de auditoría
                    </h2>

                    <p className="text-(--color-muted-light) max-w-2xl mx-auto">
                        Un proceso estructurado basado en estándares para identificar y mitigar riesgos reales.
                    </p>
                </motion.div>

                {/* 🧩 STEPS ANIMADOS */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ y: -6, scale: 1.03 }}
                        >
                            <ServiceCard
                                title={`${i + 1}. ${step.title}`}
                                subtitle={step.subtitle}
                                icon={step.icon}
                                variant="info"
                                size="md"
                                iconVariant="circleBlue"
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </Section>
    );
}
