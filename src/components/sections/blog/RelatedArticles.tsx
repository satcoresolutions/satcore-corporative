import { blogPosts } from "@/data/blog";
import BlogCard from "./BlogCard";

interface Props {
  currentId?: number;
}

export default function RelatedArticles({ currentId }: Props) {
  const related = blogPosts
    .filter((post) => post.id !== currentId)
    .slice(0, 3);

  return (
    <div className="mt-20">

      <h2 className="text-2xl font-bold text-(--color-text-light) mb-6">
        Artículos relacionados
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {related.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

    </div>
  );
}
