import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

// /* 🧩 COMPONENTES */
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* 🏗️ ROOT LAYOUT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* 🔹 NAVBAR */}
        <Navbar />

        {/* 🔹 CONTENIDO */}
        <main className="flex-1">
          {children}
        </main>

        {/* 🔹 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
