"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { Search, Workflow, Bot, Rocket, RefreshCw } from "lucide-react";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

/* 📦 DATA */
const steps = [
    {
        title: "Diagnóstico",
        subtitle: "Analizamos tus procesos actuales e identificamos tareas repetitivas y oportunidades de automatización.",
        icon: Search,
    },
    {
        title: "Diseño de solución",
        subtitle: "Definimos flujos, herramientas, integraciones y arquitectura de automatización.",
        icon: Workflow,
    },
    {
        title: "Implementación",
        subtitle: "Desarrollamos scripts, bots, integraciones y agentes de IA adaptados a tu negocio.",
        icon: Bot,
    },
    {
        title: "Pruebas y despliegue",
        subtitle: "Validamos el funcionamiento con casos reales y llevamos la solución a producción.",
        icon: Rocket,
    },
    {
        title: "Optimización continua",
        subtitle: "Ajustes, mejoras y adaptación a cambios en procesos, APIs o necesidades del negocio.",
        icon: RefreshCw,
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

export default function AIProcess() {
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
                        Cómo automatizamos tu negocio
                    </h2>

                    <p className="text-(--color-muted-light) max-w-2xl mx-auto">
                        Un proceso enfocado en eficiencia, integración y resultados reales desde el primer día.
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
