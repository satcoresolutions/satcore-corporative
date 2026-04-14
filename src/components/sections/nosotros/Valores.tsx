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

/* 🚀 COMPONENT */
export default function Valores() {
    return (
        <Section variant="white" paddingY="md">
            <div className="container">

                {/* TITLE */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Nuestra Filosofía
                    </h2>
                    <p className="text-muted text-sm mt-2 max-w-md mx-auto">
                        Principios que guían cada solución que desarrollamos.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {valores.map((valor, i) => (
                        <ServiceCard
                            key={i}
                            title={valor.title}
                            subtitle={valor.subtitle}
                            icon={valor.icon}           
                            iconVariant="default"        
                            variant="dark"           
                            size="md"
                            className="h-full"
                        />
                    ))}
                </div>

            </div>
        </Section>
    );
}