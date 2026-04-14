"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/nosotros", label: "Nosotros" },
        { href: "/servicios", label: "Servicios" },
        { href: "/blog", label: "Blog" },
        { href: "/portafolio", label: "Portafolio" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4">
            <div className="w-full max-w-6xl relative">

                {/* NAV */}
                <nav className="
                    flex items-center justify-between
                    px-(--space-lg) py-(--space-sm)
                    rounded-xl
                    border border-(--color-border)/10
                    backdrop-blur-xl
                    bg-[rgba(10,37,64,0.85)]
                    shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                ">
                    
                    <BrandLogo variant="normal" usage="navbar" />

                    {/* DESKTOP ONLY (≥1024px) */}
                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-accent transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA DESKTOP */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contacto"
                            className="
                                px-5 py-2.5
                                rounded-md
                                bg-accent
                                text-black
                                font-semibold
                                text-sm
                                hover:scale-[1.03]
                                hover:shadow-[0_0_20px_rgba(27,255,60,0.4)]
                                transition
                            "
                        >
                            Agendar Consultoría
                        </Link>
                    </div>

                    {/* HAMBURGER (≤1023px = mobile + tablet) */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </nav>

                {/* MOBILE + TABLET MENU */}
                {open && (
                    <div className="
                        absolute top-full left-0 mt-3
                        w-full lg:hidden
                        bg-[rgba(10,37,64,0.95)]
                        backdrop-blur-xl
                        rounded-xl
                        border border-white/10
                        p-6
                        flex flex-col gap-4
                        text-white/80
                        shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                    ">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="hover:text-accent transition"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="/contacto"
                            onClick={() => setOpen(false)}
                            className="
                                mt-2
                                px-5 py-2.5
                                rounded-md
                                bg-accent
                                text-black
                                font-semibold
                                text-sm
                                text-center
                            "
                        >
                            Agendar Consultoría
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}