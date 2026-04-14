import Section from "@/components/ui/universalSection";

export default function SoftwareLegal() {
  const items = [
    {
      element: "Código fuente",
      owner: "Cliente (post pago total)",
      license: "Uso ilimitado",
    },
    {
      element: "Diseño UI",
      owner: "Cliente",
      license: "Uso ilimitado",
    },
    {
      element: "Librerías externas",
      owner: "Terceros",
      license: "Open Source / MIT",
    },
    {
      element: "Metodología interna",
      owner: "SatCore Solutions",
      license: "No transferible",
    },
  ];

  return (
    <Section variant="dark" paddingY="md">

      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Propiedad intelectual y licencias
      </h2>

      {/* HEADER ROW */}
      <div className="hidden md:grid grid-cols-3 gap-4 text-sm text-white/60 mb-4 px-4">
        <span>Elemento</span>
        <span>Propiedad</span>
        <span>Licencia</span>
      </div>

      {/* CARDS */}
      <div className="space-y-4">

        {items.map((item, i) => (
          <div
            key={i}
            className="
              grid md:grid-cols-3 gap-4
              p-5 rounded-xl
              border border-white/10
              bg-white/5
              hover:bg-white/10
              transition
            "
          >

            <div className="font-medium text-white">
              {item.element}
            </div>

            <div className="text-sm text-white/70">
              {item.owner}
            </div>

            <div className="text-sm text-accent">
              {item.license}
            </div>

          </div>
        ))}

      </div>

    </Section>
  );
}