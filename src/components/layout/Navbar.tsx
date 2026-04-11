"use client";

import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4">

            {/* 🧊 CONTENEDOR GLASS */}
            <nav
                className="
  w-full max-w-6xl
  flex items-center justify-between
  px-(--space-lg) py-(--space-sm)
  rounded-xl
  border border-(--color-border)/10
  backdrop-blur-xl
  bg-[rgba(10,37,64,0.85)]
  shadow-[0_10px_40px_rgba(0,0,0,0.4)]
  "
            >
                {/* 🟢 LOGO */}
                <div className="flex items-center gap-2">
                    <BrandLogo variant="normal" usage="navbar" />
                </div>

                {/* 🔗 NAV LINKS */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
                    <Link href="/" className="hover:text-accent transition">
                        Inicio
                    </Link>

                    <Link href="/nosotros" className="hover:text-accent transition">
                        Nosotros
                    </Link>

                    <Link href="/servicios" className="hover:text-accent transition">
                        Servicios
                    </Link>

                    <Link href="/blog" className="hover:text-accent transition">
                        Blog
                    </Link>

                    <Link href="/portafolio" className="hover:text-accent transition">
                        Portafolio
                    </Link>
                </div>

                {/* 🚀 CTA */}
                <div className="hidden md:block">
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
            </nav>
        </header>
    );
}
