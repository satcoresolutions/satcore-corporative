import Section from "@/components/ui/universalSection";

const data = [
  {
    tipo: "Landing / Sitio básico",
    hosting: "Hostinger / Vercel",
    inversion: "$400.000 - $800.000",
  },
  {
    tipo: "Sitio corporativo",
    hosting: "SiteGround / Cloudways",
    inversion: "$800.000 - $1.500.000",
  },
  {
    tipo: "E-commerce",
    hosting: "AWS / Cloudways",
    inversion: "$1.200.000 - $3.000.000",
  },
  {
    tipo: "Web App / Alto tráfico",
    hosting: "AWS / Azure",
    inversion: "Cotización personalizada",
  },
];

export default function HostingRecommendations() {
  return (
    <Section variant="dark" paddingY="lg">

      {/* HEADER */}
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground">
          Recomendaciones de Hosting
        </h2>

        <p className="mt-3 text-muted">
          Seleccionamos la infraestructura adecuada según el tipo de proyecto y su escalabilidad.
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left rounded-xl overflow-hidden border border-(--color-border)">

          {/* HEAD */}
          <thead className="bg-(--color-surface-dark) text-foreground">
            <tr>
              <th className="p-4 font-semibold">Tipo de Proyecto</th>
              <th className="p-4 font-semibold">Hosting</th>
              <th className="p-4 font-semibold">Inversión</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="
                  border-t border-(--color-border)
                  hover:bg-(--color-surface-dark)
                  transition
                "
              >
                <td className="p-4 text-foreground">
                  {item.tipo}
                </td>

                <td className="p-4 text-muted">
                  {item.hosting}
                </td>

                <td className="p-4 text-accent font-semibold">
                  {item.inversion}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </Section>
  );
}
