import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import Section from "@/components/ui/universalSection";

export default function BlogPage() {
  return (
    <main>

      {/* 🟢 HERO */}
      <BlogHero />

      {/* 🧱 LISTA DE ARTÍCULOS */}
      <Section variant="white" paddingY="md">
        <BlogGrid />
      </Section>

    </main>
  );
}
