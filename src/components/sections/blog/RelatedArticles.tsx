"use client";

import { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";
import { motion, Variants } from "framer-motion";

interface Props {
  posts: BlogPost[];
  currentSlug?: string;
}

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RelatedArticles({ posts, currentSlug }: Props) {
  const related = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="mt-20">
      <motion.h2
        className="text-2xl font-bold text-(--color-text-light) mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Artículos relacionados
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {related.map((post) => (
          <motion.div key={post.slug} variants={item}>
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
