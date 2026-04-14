import Section from "../../ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import {
    Code,
    Shield,
    Brain,
    Palette,
    GraduationCap,
} from "lucide-react";

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

export default function ServicesSection() {
    return (
        <Section id="servicios" variant="white" paddingY="md">
            {/* 🔹 CONTENEDOR */}
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

                {/* 🧩 GRID / LAYOUT */}
                <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                    {services.map((item, index) => (
                        <ServiceCard
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            href={item.href}
                            variant="dark"
                            size="md"
                            className="w-full sm:w-75 h-full"
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}