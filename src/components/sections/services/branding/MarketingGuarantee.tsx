"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { ShieldCheck, Wrench } from "lucide-react";
import Section from "@/components/ui/universalSection";
import { motion, Variants } from "framer-motion";

/* 🎬 ANIMACIONES */
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const leftItem: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const rightItem: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function MarketingGuarantee() {
    return (
        <Section variant="blue" paddingY="md">

            {/* 🔥 TITLE */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Garantías y acompañamiento
                </h2>

                <p className="text-white/60 max-w-2xl mx-auto">
                    Aseguramos calidad, coherencia de marca y soporte continuo después de la entrega.
                </p>
            </div>

            {/* 🧩 GRID ANIMADO */}
            <motion.div
                className="grid md:grid-cols-2 gap-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
            >

                {/* 🛡️ WARRANTY */}
                <motion.div variants={leftItem}>
                    <ServiceCard
                        title="Garantía (30 días)"
                        subtitle="Incluye ajustes de diseño, correcciones menores y optimización inicial del contenido. No cubre nuevas campañas ni cambios de alcance."
                        icon={ShieldCheck}
                        variant="minimal"
                        size="lg"
                        iconVariant="circleGreen"
                    />
                </motion.div>

                {/* 🔧 MAINTENANCE */}
                <motion.div variants={rightItem}>
                    <ServiceCard
                        title="Plan de acompañamiento"
                        subtitle="Gestión de contenido, optimización de campañas, análisis de métricas y mejora continua según estrategia."
                        icon={Wrench}
                        variant="minimal"
                        size="lg"
                        iconVariant="circleBlue"
                    />
                </motion.div>

            </motion.div>

        </Section>
    );
}
