"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ServiceLevel } from "@/types/service";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    services: ServiceLevel[];
}

export default function Modal({
    open,
    onClose,
    title,
    services,
}: ModalProps) {

    const [activeId, setActiveId] = useState<string | null>(null);

    const active =
        services.find((s) => s.id === activeId) || services[0];

    // 🔐 ESC + SCROLL LOCK
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (open) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-999 flex items-center justify-center px-4">

            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* MODAL */}
            <div className="
                relative z-10 w-full max-w-5xl

    max-h-[90vh] md:max-h-[85vh]
    overflow-y-auto

    rounded-xl
    bg-(--color-bg-light)
    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
    border border-(--color-border)
            ">

                {/* HEADER */}
                <div className="
                    flex items-center justify-between
                    p-(--space-lg)
                    border-b border-(--color-border)
                ">
                    <h2 className="text-xl font-semibold text-(--color-text-light)">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                            p-2 rounded-sm
                            hover:bg-(--color-surface-light)
                            transition
                        "
                    >
                        <X size={20} className="text-(--color-text-light)" />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-3 min-h-105">

                    {/* LEFT PANEL */}
                    <div className="
                        border-r border-(--color-border)
                        bg-(--color-surface-light)
                        p-(--space-md)
                        space-y-2
                    ">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                className={`
                                    w-full text-left
                                    p-(--space-sm)
                                    rounded-md
                                    transition
                                    ${active?.id === service.id
                                        ? "bg-primary-dark text-foreground"
                                        : "hover:bg-(--color-bg-light) text-(--color-text-light)"
                                    }
                                `}
                            >
                                <p className="font-medium">{service.name}</p>
                                <p className="text-xs opacity-70">
                                    {service.complexity}
                                </p>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="
                        md:col-span-2
                        p-(--space-lg)
                        space-y-5
                        text-(--color-text-light)
                    ">

                        {active && (
                            <>
                                {/* TITLE */}
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        {active.name}
                                    </h3>
                                    <p className="text-(--color-muted-light) mt-1">
                                        {active.description}
                                    </p>
                                </div>

                                {/* META */}
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <p><strong>Nivel:</strong> {active.level}</p>
                                    <p><strong>Tiempo:</strong> {active.time}</p>
                                    <p><strong>Precio:</strong> {active.price}</p>
                                    <p><strong>Complejidad:</strong> {active.complexity}</p>
                                </div>

                                {/* STACK */}
                                <div>
                                    <strong>Stack</strong>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {active.stack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="
                                                    px-2 py-1
                                                    rounded-sm
                                                    text-xs
                                                    bg-(--color-surface-light)
                                                "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* FEATURES */}
                                <div>
                                    <strong>Incluye</strong>
                                    <ul className="list-disc pl-5 mt-2 text-sm">
                                        {active.features.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <button
                                    className="
                                        mt-4 w-full
                                        py-3
                                        rounded-md
                                        bg-accent
                                        text-black
                                        font-semibold
                                        hover:scale-[1.02]
                                        hover:shadow-[0_0_20px_rgba(27,255,60,0.4)]
                                        transition
                                    "
                                >
                                    Seleccionar plan ({active.id})
                                </button>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}