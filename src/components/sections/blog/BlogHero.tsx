import Hero from "@/components/shared/Hero";

export default function BlogHero() {
  return (
    <Hero
      title="Recursos y"
      highlight="Conocimiento"
      description="Artículos técnicos, guías y perspectivas para impulsar tu negocio con tecnología."
      
      ctaPrimaryText="Explorar artículos"
      ctaPrimaryLink="#articulos"

      ctaSecondaryText="Volver al inicio"
      ctaSecondaryLink="/"

      background="/img/hero/bg_1.png" // usa un fondo tipo tech/circuito
      
      variant="center"
      height="full"
    />
  );
}
