"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

export default function EducationRequirements() {
    const items = [
        {
            title: "Compromiso de participación",
            subtitle: "Asistencia activa y cumplimiento de actividades durante el curso",
        },
        {
            title: "Equipo de trabajo",
            subtitle: "Contar con laptop y acceso a herramientas necesarias",
        },
        {
            title: "Nivel mínimo requerido",
            subtitle: "Cumplir con los conocimientos previos definidos para el curso",
        },
        {
            title: "Acceso a plataformas",
            subtitle: "Disponibilidad para usar herramientas, repositorios o entornos virtuales",
        },
        {
            title: "Pagos al día",
            subtitle: "Cumplimiento según condiciones del programa de formación",
        },
        {
            title: "Seguimiento activo",
            subtitle: "Participación en ejercicios, evaluaciones y sesiones prácticas",
        },
    ];

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
            x: -30,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <Section variant="dark" paddingY="md">
            <div className="max-w-6xl mx-auto px-6">

                {/* TITLE */}
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Requisitos del participante
                </motion.h2>

                {/* GRID */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {items.map((itemData, i) => (
                        <motion.div key={i} variants={item}>
                            <ServiceCard
                                title={itemData.title}
                                subtitle={itemData.subtitle}
                                icon={CheckCircle2}
                                iconVariant="default"
                                variant="minimal"
                                size="sm"
                                className="text-left"
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </Section>
    );
}
