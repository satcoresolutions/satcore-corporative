"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { blogPosts } from "@/data/blog";
import BlogCard from "./BlogCard";

const ITEMS_PER_PAGE = 9;

export default function BlogGrid() {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);

    /* 🧠 NORMALIZAR PAGE */
    const safePage = Math.min(page, totalPages || 1);

    /* 📦 POSTS PAGINADOS */
    const paginatedPosts = useMemo(() => {
        const start = (safePage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return blogPosts.slice(start, end);
    }, [safePage]);

    /* ⬆️ CAMBIO DE PÁGINA */
    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;

        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    /* 🚫 EMPTY STATE */
    if (blogPosts.length === 0) {
        return (
            <div className="max-w-6xl mx-auto px-6 text-center py-24">

                <h2 className="text-3xl font-bold text-(--color-text-light)">
                    Contenido en camino
                </h2>

                <p className="mt-4 text-(--color-muted-light) max-w-xl mx-auto">
                    Estamos preparando artículos sobre desarrollo, inteligencia artificial
                    y crecimiento digital para ayudarte a escalar tu negocio.
                </p>

                <p className="mt-2 text-(--color-muted-light)">
                    Muy pronto encontrarás contenido de alto valor aquí.
                </p>

                {/* CTA */}
                <Link
                    href="/#contacto"
                    className="
    inline-block mt-6 px-6 py-3 rounded-xl
    bg-accent text-black font-medium text-sm
    hover:opacity-90 transition
  "
                >
                    Hablar con un experto
                </Link>

            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6">

            {/* 🧠 TITLE */}
            <h2 className="text-3xl font-bold text-(--color-text-light) mb-10">
                Últimos artículos
            </h2>

            {/* 🧱 GRID */}
            <div className="grid md:grid-cols-3 gap-6">
                {paginatedPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>

            {/* 📄 PAGINACIÓN */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-2 flex-wrap">

                    {/* ⬅️ PREV */}
                    <button
                        onClick={() => handlePageChange(safePage - 1)}
                        disabled={safePage === 1}
                        className={`
              px-4 py-2 rounded-lg text-sm
              border border-(--color-border)
              ${safePage === 1
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-(--color-surface-light)"
                            }
            `}
                    >
                        ←
                    </button>

                    {/* 🔢 NÚMEROS */}
                    {Array.from({ length: totalPages }).map((_, i) => {
                        const pageNumber = i + 1;

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`
                  px-4 py-2 rounded-lg text-sm transition
                  border border-(--color-border)
                  ${safePage === pageNumber
                                        ? "bg-accent text-black font-semibold"
                                        : "bg-(--color-surface-light) text-(--color-muted-light) hover:opacity-80"
                                    }
                `}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {/* ➡️ NEXT */}
                    <button
                        onClick={() => handlePageChange(safePage + 1)}
                        disabled={safePage === totalPages}
                        className={`
              px-4 py-2 rounded-lg text-sm
              border border-(--color-border)
              ${safePage === totalPages
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-(--color-surface-light)"
                            }
            `}
                    >
                        →
                    </button>

                </div>
            )}

        </div>
    );
}
