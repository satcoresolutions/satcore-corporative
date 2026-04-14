import ServiceCard from "@/components/ui/ServiceCard";
import { Globe, ShoppingCart, Layout, AppWindow, Users, Zap, Server } from "lucide-react";
import Section from "@/components/ui/universalSection";

const catalog = [
  {
    title: "Landing Pages",
    subtitle: "Captación de leads y campañas",
    icon: Globe,
  },
  {
    title: "Web Corporativa",
    subtitle: "Presencia digital profesional",
    icon: Layout,
  },
  {
    title: "E-commerce",
    subtitle: "Tiendas online con pagos",
    icon: ShoppingCart,
  },
  {
    title: "Web Apps",
    subtitle: "SaaS y plataformas digitales",
    icon: AppWindow,
  },
  {
    title: "Portales Web",
    subtitle: "Sistemas con usuarios y roles",
    icon: Users,
  },
  {
    title: "PWA",
    subtitle: "Apps sin instalación",
    icon: Zap,
  },
  {
    title: "Backend / APIs",
    subtitle: "Microservicios y sistemas escalables",
    icon: Server,
  },
];

export default function SoftwareServiceCatalog() {
  return (
    <Section variant="white" paddingY="lg">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tipos de proyectos que desarrollamos
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Soluciones digitales adaptadas a cada necesidad de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalog.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              variant="dark"
              size="md"
              className="text-center"
            />
          ))}
        </div>

      </div>
    </Section>
  );
}