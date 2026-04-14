import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";

/* 🧠 TIPOS */
type ServiceType =
  | "software"
  | "educacion"
  | "ciberseguridad"
  | "ia"
  | "branding";

interface Service {
  title: string;
  subtitle: string;
  type: ServiceType;
  active: boolean;
  href?: string;
}

/* 📦 DATA */
const services: Service[] = [
  {
    title: "Desarrollo",
    subtitle: "Creación de soluciones web y aplicaciones",
    type: "software",
    active: true,
    href: "/servicios/software",
  },
  {
    title: "Educación",
    subtitle: "Capacitación y formación tecnológica",
    type: "educacion",
    active: true,
  },
  {
    title: "Ciberseguridad",
    subtitle: "Auditorías y protección de sistemas",
    type: "ciberseguridad",
    active: true,
  },
  {
    title: "Automatización",
    subtitle: "Agentes inteligentes y sistemas automatizados",
    type: "ia",
    active: true,
  },
  {
    title: "Marketing",
    subtitle: "Diseño de marcas y contenido digital",
    type: "branding",
    active: true,
  },
];

/* 🚀 COMPONENTE */
export default function ServicesHome() {
  return (
    <Section variant="white" paddingY="md">

      {/* 🔹 CONTENEDOR */}
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Nuestras Soluciones
        </h2>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {services
            .filter(service => service.active)
            .map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                type={service.type}
                variant="light"
                size="md"
                href={service.href}
              />
            ))}

        </div>

      </div>
    </Section>
  );
}
