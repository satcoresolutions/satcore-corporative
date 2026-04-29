import MarketingHero from "@/components/sections/services/branding/MarketingHero";
import MarketingTechStack from "@/components/sections/services/branding/MarketingTechStack";
import MarketingServiceCatalog from "@/components/sections/services/branding/MarketingServiceCatalog";
import MarketingProcess from "@/components/sections/services/branding/MarketingProcess";
import MarketingSecurity from "@/components/sections/services/branding/MarketingSecurity";
import MarketingPricing from "@/components/sections/services/branding/MarketingPricing";
import MarketingGuarantee from "@/components/sections/services/branding/MarketingGuarantee";
import MarketingRequirements from "@/components/sections/services/branding/MarketingRequirements";
import MarketingLegal from "@/components/sections/services/branding/MarketingLegal";
import MarketingCTA from "@/components/sections/services/branding/MarketingCTA";

export default function Branding() {
    return (
        <main className="bg-background text-foreground">
            {/* 🚀 1. HERO (IMPACTO) */}
            <MarketingHero />
            {/* ⚙️ 3. TECNOLOGÍAS (AUTORIDAD) */}
            <MarketingTechStack />
            {/* 💡 2. QUÉ HACEMOS (VALOR INICIAL) */}
            <MarketingServiceCatalog />
            {/* 🧭 4. PROCESO (CÓMO TRABAJAMOS) */}
            <MarketingProcess />
            {/* 🔐 6. CONFIANZA TÉCNICA */}
            <MarketingSecurity />
            {/* 💰 7. PRECIOS REFERENCIALES */}
            <MarketingPricing />
            {/* 🛡️ 8. GARANTÍAS */}
            <MarketingGuarantee />
            {/* 📋 9. REQUISITOS DEL CLIENTE */}
            <MarketingRequirements />
            {/* ⚖️ 10. LEGAL / PROPIEDAD INTELECTUAL */}
            <MarketingLegal />
            {/* 🔥 11. CTA FINAL (CONVERSIÓN) */}
            <MarketingCTA />
        </main>
    );
}