import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

/* 🔥 SAFE FILES ONLY */
function getMdxFiles() {
    if (!fs.existsSync(postsDirectory)) return [];
    return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

/* 📦 GET ALL POSTS */
export function getAllPosts(): BlogPost[] {
    const fileNames = getMdxFiles();

    return fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        const slug = fileName.replace(/\.mdx$/, "");

        return {
            title: data.title ?? "",
            description: data.description ?? "",
            slug,
            image: data.image,
            category: data.category,
            date: data.date,
            readingTime: data.readingTime ?? 0,
            content: content ?? "",
        };
    });
}

/* 🔍 GET ONE POST (OPTIMIZED + SAFE) */
export function getPostBySlug(slug?: string): BlogPost | undefined {
  if (!slug) return undefined;

  const safeSlug = slug.trim();
  const fileNames = getMdxFiles();

  const fileName = fileNames.find((file) =>
    file.replace(/\.mdx$/, "").trim() === safeSlug
  );

  if (!fileName) return undefined;

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    title: data.title ?? "",
    description: data.description ?? "",
    slug: fileName.replace(/\.mdx$/, ""),
    cover: data.cover,
    image: data.image,
    category: data.category,
    tags: data.tags ?? [],
    date: data.date,
    author: data.author,
    featured: data.featured ?? false,
    relatedServices: data.relatedServices ?? [],
    seo: data.seo,
    content: content ?? "",
  };
}