import SoftwareCTA from "@/components/sections/services/software/SoftwareCTA";
import SoftwareHero from "@/components/sections/services/software/SoftwareHero";
import SoftwareServiceCatalog from "@/components/sections/services/software/SoftwareServiceCatalog";
import SoftwareTechStack from "@/components/sections/services/software/SoftwareTechStack";
import SoftwareProcess from "@/components/sections/services/software/SoftwareProcess";
import SoftwareScope from "@/components/sections/services/software/SoftwareScope";

// 🔐 nuevos módulos (los que creamos antes)
import SoftwareLegal from "@/components/sections/services/software/SoftwareLegal";
import SoftwareGuarantee from "@/components/sections/services/software/SoftwareGuarantee";
import SoftwareRequirements from "@/components/sections/services/software/SoftwareRequirements";
import SoftwarePricing from "@/components/sections/services/software/SoftwarePricing";
import SoftwareSecurity from "@/components/sections/services/software/SoftwareSecurity";

export default function SoftwarePage() {
    return (
        <main className="bg-background text-foreground">

            {/* 🚀 1. HERO (IMPACTO) */}
            <SoftwareHero />

            {/* ⚙️ 3. TECNOLOGÍAS (AUTORIDAD) */}
            <SoftwareTechStack />

            {/* 💡 2. QUÉ HACEMOS (VALOR INICIAL) */}
            <SoftwareServiceCatalog />

            {/* 🧭 4. PROCESO (CÓMO TRABAJAMOS) */}
            <SoftwareProcess />


            {/* 🔐 6. CONFIANZA TÉCNICA */}
            <SoftwareSecurity />

            {/* 💰 7. PRECIOS REFERENCIALES */}
            <SoftwarePricing />

            {/* 🛡️ 8. GARANTÍAS */}
            <SoftwareGuarantee />

            {/* 📋 9. REQUISITOS DEL CLIENTE */}
            <SoftwareRequirements />

            {/* ⚖️ 10. LEGAL / PROPIEDAD INTELECTUAL */}
            <SoftwareLegal />

            {/* 🔥 11. CTA FINAL (CONVERSIÓN) */}
            <SoftwareCTA />

        </main>
    );
}