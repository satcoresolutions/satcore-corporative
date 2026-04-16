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
    "Desarrollo web de alto impacto. Automatiza, optimiza y escala tu negocio con tecnología.",
  metadataBase: new URL("https://satcore.solutions"),
  openGraph: {
    title: "SatCore Solutions",
    description: "El núcleo tecnológico que impulsa tu negocio.",
    url: "https://satcore.solutions",
    siteName: "SatCore Solutions",
    locale: "es_CO",
    type: "website",
  },
};

/* 🧩 COMPONENTES */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      </head>

      <body className="min-h-full flex flex-col">

        {/* 🔥 NOSCRIPT (OBLIGATORIO) */}
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

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
