"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/types/blog";

type BlogCardProps = Pick<
  BlogPost,
  "title" | "description" | "slug" | "image" | "category" | "date" | "readingTime"
>;

export default function BlogCard({ post }: { post: BlogCardProps }) {
  return (
    <Link href={`/blog/${post.slug}`}>

      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="
    group rounded-xl overflow-hidden
    border border-(--color-border)
    bg-white
    hover:shadow-xl
    transition
  "
      >

        {/* IMAGE */}
        <div className="relative h-44 overflow-hidden">
          <Image
            src={post.image || "/blog/default.jpg"}
            alt={post.title}
            fill
            className="
        object-cover
        transition-transform duration-500
        group-hover:scale-105
      "
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* META */}
          <div className="flex items-center gap-2 text-xs text-(--color-muted-light)">

            {post.category && (
              <span className="text-accent font-medium">
                {post.category}
              </span>
            )}

            {post.date && (
              <span>• {post.date}</span>
            )}

            {post.readingTime && (
              <span>• {post.readingTime} min</span>
            )}

          </div>

          {/* TITLE */}
          <h3 className="mt-2 font-semibold text-(--color-text-light)">
            {post.title}
          </h3>

          {/* DESC */}
          <p className="text-sm text-(--color-muted-light) mt-2 line-clamp-3">
            {post.description}
          </p>

          {/* CTA */}
          <motion.span
            className="inline-block mt-4 text-sm font-medium text-accent"
            whileHover={{ x: 4 }}
          >
            Leer más →
          </motion.span>

        </div>

      </motion.div>

    </Link>
  );
}
