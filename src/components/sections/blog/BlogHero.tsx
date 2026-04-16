import Hero from "@/components/shared/Hero";

export default function BlogHero() {
  return (
    <Hero
      title="Recursos y"
      highlight="Conocimiento"
      description="Artículos técnicos, guías y perspectivas para impulsar tu negocio con tecnología."
      
      ctaPrimaryText="Explorar artículos"
      ctaPrimaryLink="#articulos"
      ctaPrimaryType="scroll_articles"     // 🔥 intención clara

      ctaSecondaryText="Volver al inicio"
      ctaSecondaryLink="/"
      ctaSecondaryType="navigation_home"   // 🔥 navegación

      section="blog"                       // 🔥 contexto

      background="/img/hero/bg_1.png"
      variant="center"
      height="full"
    />
  );
}
