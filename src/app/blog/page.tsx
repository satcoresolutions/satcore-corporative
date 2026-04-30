import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import Section from "@/components/ui/universalSection";
import { getAllPosts } from "@/lib/blog";
import { BlogPost } from "@/types/blog";

export default function BlogPage() {
  const posts: BlogPost[] = getAllPosts();

  return (
    <main>

      {/* 🟢 HERO */}
      <BlogHero />

      {/* 🧱 LISTA DE ARTÍCULOS */}
      <Section variant="white" paddingY="md">
        <BlogGrid posts={posts} />
      </Section>

    </main>
  );
}
