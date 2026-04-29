"use client";
import { useRouter } from "next/navigation";
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
    const router = useRouter();
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
        relative z-10 w-full max-w-6xl
        h-[90vh]
        rounded-xl
        bg-(--color-bg-light)
        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        border border-(--color-border)
        overflow-hidden
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
                        className="p-2 rounded-sm hover:bg-(--color-surface-light)"
                    >
                        <X size={20} className="text-(--color-text-light)" />
                    </button>
                </div>

                {/* BODY */}
                <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(90vh-80px)]">

                    {/* 🔥 ASIDE FIJO */}
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

                    {/* 🔥 CONTENT SCROLL */}
                    <div className="
            md:col-span-2
            p-(--space-lg)
            space-y-6
            text-(--color-text-light)
            overflow-y-auto
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

                                {/* TARGET */}
                                {active.target && (
                                    <div>
                                        <strong>¿Para quién es?</strong>
                                        <p className="text-sm mt-1 opacity-80">
                                            {active.target}
                                        </p>
                                    </div>
                                )}

                                {/* USE CASES */}
                                {active.useCases && (
                                    <div>
                                        <strong>Casos de uso</strong>
                                        <ul className="list-disc pl-5 mt-2 text-sm">
                                            {active.useCases.map((u, i) => (
                                                <li key={i}>{u}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* INCLUDES */}
                                {active.includes && (
                                    <div>
                                        <strong>Qué incluye</strong>
                                        <ul className="list-disc pl-5 mt-2 text-sm">
                                            {active.includes.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* NOT INCLUDES */}
                                {active.notIncludes && (
                                    <div>
                                        <strong>No incluye</strong>
                                        <ul className="list-disc pl-5 mt-2 text-sm opacity-70">
                                            {active.notIncludes.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* STACK */}
                                <div>
                                    <strong>Tecnologías</strong>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {active.stack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 rounded-sm text-xs bg-(--color-surface-light)"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* FEATURES */}
                                <div>
                                    <strong>Características</strong>
                                    <ul className="list-disc pl-5 mt-2 text-sm">
                                        {active.features.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* DELIVERABLES */}
                                <div>
                                    <strong>Entregables</strong>
                                    <ul className="list-disc pl-5 mt-2 text-sm">
                                        {active.deliverables.map((d, i) => (
                                            <li key={i}>{d}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* INTEGRATIONS */}
                                {active.integrations && (
                                    <div>
                                        <strong>Integraciones</strong>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {active.integrations.map((int, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs rounded bg-(--color-surface-light)"
                                                >
                                                    {int}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* SUPPORT */}
                                {active.support && (
                                    <div className="text-sm">
                                        <strong>Soporte:</strong> {active.support}
                                    </div>
                                )}

                                {/* CTA */}
                                <button
                                    onClick={() => router.push("/contacto")}
                                    className="
    mt-6 w-full
    py-3
    rounded-md
    bg-accent
    text-black
    font-semibold
    hover:scale-[1.02]
    transition
  "
                                >
                                    Cotizar este servicio
                                </button>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
