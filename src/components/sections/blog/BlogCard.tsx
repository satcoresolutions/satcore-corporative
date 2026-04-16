import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>

      <div className="
        group rounded-xl overflow-hidden
        border border-(--color-border)
        bg-white
        hover:shadow-xl hover:-translate-y-2
        transition duration-300
      ">

        {/* IMAGE */}
        <div className="relative h-44">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* CATEGORY */}
          <span className="
            text-xs text-accent font-medium
          ">
            {post.category}
          </span>

          {/* TITLE */}
          <h3 className="mt-2 font-semibold text-(--color-text-light)">
            {post.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-(--color-muted-light) mt-2 line-clamp-3">
            {post.description}
          </p>

          {/* CTA */}
          <span className="
            inline-block mt-4 text-sm font-medium text-accent
            group-hover:underline
          ">
            Leer más →
          </span>

        </div>

      </div>

    </Link>
  );
}
