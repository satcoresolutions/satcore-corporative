import { Zap, Shield, Rocket, Layers } from "lucide-react";
import Section from "../../ui/universalSection";
import ServiceCard from "../../ui/ServiceCard";

export default function BenefitsSection() {
    const benefits = [
        {
            icon: Zap,
            title: "Automatización",
            description: "Reduce procesos manuales y aumenta eficiencia.",
        },
        {
            icon: Shield,
            title: "Seguridad",
            description: "Protección avanzada para tus sistemas y datos.",
        },
        {
            icon: Rocket,
            title: "Escalabilidad",
            description: "Soluciones listas para crecer contigo.",
        },
        {
            icon: Layers,
            title: "Integración",
            description: "Conectamos todos tus sistemas en un solo flujo.",
        },
    ];

    return (
        <Section variant="dark" paddingY="md">
            <div className="container">

                {/* TITLE */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Beneficios Clave
                    </h2>

                    <p className="text-muted max-w-2xl mx-auto">
                        Más que servicios, creamos impacto real en tu negocio.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((item, index) => (
                        <ServiceCard
                            key={index}
                            title={item.title}
                            subtitle={item.description}
                            icon={item.icon}
                            variant="light"
                            size="md"
                            className="text-center"
                            iconVariant="flatBlue"
                        />
                    ))}
                </div>

            </div>
        </Section>
    );
}