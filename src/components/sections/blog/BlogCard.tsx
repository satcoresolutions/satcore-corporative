"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { motion } from "framer-motion";

export default function BlogCard({ post }: { post: BlogPost }) {
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
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* CATEGORY */}
          <span className="text-xs text-accent font-medium">
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
