import Section from "@/components/ui/universalSection";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

export function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    if (!slug) {
        return (
            <div className="text-center py-20">
                <h1>Slug inválido</h1>
            </div>
        );
    }

    const post = getPostBySlug(slug);

    if (!post?.content) {
        return (
            <div className="text-center py-20">
                <h1>Post no encontrado o vacío</h1>
            </div>
        );
    }

    return (
        <Section variant="white" paddingY="lg">

            {/* 🔥 HERO */}
            <div className="max-w-4xl mx-auto">

                {/* CATEGORY + DATE */}
                <div className="flex items-center gap-3 text-sm mb-4">
                    {post.category && (
                        <span
                            className="
                px-3 py-1 rounded-full
                bg-(--color-accent-light)
                text-white font-medium
              "
                        >
                            {post.category}
                        </span>
                    )}

                    {post.date && (
                        <span className="text-(--color-muted)">
                            {post.date}
                        </span>
                    )}
                </div>

                {/* TITLE */}
                <h1
                    className="
            text-4xl md:text-5xl font-bold leading-tight mb-6
            text-primary-dark
          "
                >
                    {post.title}
                </h1>

                {/* DESCRIPTION */}
                {post.description && (
                    <p
                        className="
              text-lg md:text-xl
              text-(--color-muted)
              mb-8
            "
                    >
                        {post.description}
                    </p>
                )}

                {/* AUTHOR */}
                {post.author && (
                    <div className="text-sm text-(--color-muted) mt-4">
                        {post.author.name} • {post.author.role}
                    </div>
                )}
            </div>

            {/* 🔥 COVER IMAGE */}
            {post.cover && (
                <div className="max-w-5xl mx-auto mt-12">
                    <div className="relative w-full h-105 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={post.cover}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                    </div>
                </div>
            )}

            {/* 🔥 CONTENT */}
            <div className="max-w-3xl mx-auto mt-16">

                {/* separator */}
                <div className="border-t border-(--color-border) mb-12" />

                <div
                    className="
        prose prose-lg max-w-none

        prose-headings:font-bold
        prose-headings:text-[color:var(--color-primary-dark)]

        prose-p:text-[color:var(--color-text-light)]
        prose-p:leading-relaxed

        prose-strong:text-[color:var(--color-primary-dark)]

        prose-li:marker:text-[color:var(--color-accent-light)]

        prose-a:text-[color:var(--color-accent-light)]
        prose-a:no-underline
        hover:prose-a:underline

        prose-blockquote:border-l-[4px]
        prose-blockquote:border-[color:var(--color-accent-light)]
        prose-blockquote:pl-4
        prose-blockquote:text-[color:var(--color-muted)]

        prose-hr:my-12
        prose-hr:border-0
        prose-hr:h-px
        prose-hr:bg-gradient-to-r
        prose-hr:from-transparent
        prose-hr:via-[color:var(--color-border)]
        prose-hr:to-transparent
      "
                >
                    <MDXRemote source={post.content} />
                </div>

            </div>

        </Section>
    );
}
