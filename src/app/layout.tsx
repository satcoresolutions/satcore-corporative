import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import "../styles/globals.css";

/* 🔤 FONTS */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 🔍 SEO GLOBAL */
export const metadata: Metadata = {
  title: {
    default: "SatCore Solutions | Impulsa tu negocio con tecnología",
    template: "%s | SatCore Solutions",
  },
  description:
    "Desarrollo web de alto impacto para empresas. Automatiza procesos, optimiza tu operación y escala tu negocio con soluciones tecnológicas a medida.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "automatización empresarial",
    "desarrollo en Colombia",
    "IA para negocios",
    "ciberseguridad",
  ],
  authors: [{ name: "SatCore Solutions" }],
  creator: "SatCore Solutions",
  publisher: "SatCore Solutions",

  metadataBase: new URL("https://www.satcore.solutions"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SatCore Solutions",
    description: "El núcleo tecnológico que impulsa tu negocio.",
    url: "https://www.satcore.solutions",
    siteName: "SatCore Solutions",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SatCore Solutions desarrollo web profesional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SatCore Solutions",
    description: "El núcleo tecnológico que impulsa tu negocio.",
    images: ["/og-image.jpg"],
  },
};

/* 🔐 ENV */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/* 🏗️ LAYOUT */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") || "";

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ⚡ PRECONNECT (mejora performance) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* 🔥 GOOGLE TAG MANAGER */}
        {GTM_ID && (
          <Script id="gtm-script" strategy="afterInteractive" nonce={nonce}>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}

        {/* 🧠 SCHEMA ORG (SEO PRO) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SatCore Solutions",
              url: "https://www.satcore.solutions",
              logo: "https://www.satcore.solutions/logos/01_Logo_Principal.png",
              sameAs: [
                "https://instagram.com/satcore_solutions",
                "https://www.facebook.com/SatCore.Solutions/",
                "https://www.youtube.com/@SatCore_Solutions",
                "https://www.tiktok.com/@satcore_solutions",
              ],
            }),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {/* 🔥 NOSCRIPT (GTM obligatorio) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* 🧩 COMPONENTES */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* 🧩 IMPORTS AL FINAL (opcional orden) */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
