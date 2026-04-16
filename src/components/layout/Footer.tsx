import Link from "next/link";
import Image from "next/image";
import BrandLogo from "@/components/ui/BrandLogo";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/10 
      bg-linear-to-br 
      from-background 
      via-primary-dark 
      to-background 
      text-foreground overflow-hidden"
    >
      {/* 🔝 LINEA SUPERIOR */}
      <div
        className="absolute top-0 left-0 w-full h-px 
        bg-linear-to-r from-transparent via-accent to-transparent opacity-40"
      />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 
          w-125 h-75 
          bg-accent/10 
          blur-[120px] rounded-full"
        />
      </div>

      {/* 🔲 CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* 🟢 BRAND */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <BrandLogo variant="normal" usage="footer" />

          <p className="text-sm text-muted leading-relaxed text-center">
            SatCore Solutions transforma tu futuro digital. Expertos en desarrollo
            de software, ciberseguridad e integración de IA.
          </p>
        </div>

        {/* 🔗 LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-accent mb-4">
            Enlaces
          </h3>

          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-accent transition">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-accent transition">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-accent transition">Servicios</Link></li>
            <li><Link href="/portafolio" className="hover:text-accent transition">Portafolio</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition">Blog</Link></li>
            <li><Link href="/contacto" className="hover:text-accent transition">Contacto</Link></li>
          </ul>
        </div>

        {/* ⚖️ LEGAL */}
        <div>
          <h3 className="text-lg font-semibold text-accent mb-4">
            Legal
          </h3>

          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/terminos" className="hover:text-accent transition">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-accent transition">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-accent transition">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </div>

        {/* 📞 CONTACTO */}
        <div>
          <h3 className="text-lg font-semibold text-accent mb-4">
            Contacto
          </h3>

          <ul className="space-y-4 text-sm text-muted">

            <li className="flex items-center gap-3">
              <Image src="/icons/mail.png" alt="Correo" width={18} height={18} />
              <a href="mailto:satcoresolutions@gmail.com" className="hover:text-accent transition">
                satcoresolutions@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Image src="/icons/whatsapp.png" alt="WhatsApp" width={18} height={18} />
              <a
                href="https://wa.me/573022016072"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                +57 302 201 6072
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Image src="/icons/site.png" alt="Ubicación" width={18} height={18} />
              <span>Bogotá, Colombia</span>
            </li>

          </ul>
        </div>

        {/* 🌐 REDES */}
        <div>
          <h3 className="text-lg font-semibold text-accent mb-4">
            Síguenos
          </h3>

          <div className="flex items-center gap-4">
            <SocialIcon size="lg" type="instagram" href="https://instagram.com/satcore_solutions" />
            <SocialIcon size="lg" type="tiktok" href="https://www.tiktok.com/@satcore_solutions" />
            <SocialIcon size="lg" type="youtube" href="https://www.youtube.com/@SatCore_Solutions" />
            <SocialIcon size="lg" type="facebook" href="https://www.facebook.com/SatCore.Solutions/" />
          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted relative z-10">
        © {new Date().getFullYear()} SatCore Solutions. Todos los derechos reservados.
      </div>

      {/* 🔽 LINEA FINAL */}
      <div className="h-px bg-linear-to-r from-transparent via-accent to-transparent opacity-30" />
    </footer>
  );
}
