import SecurityHero from "@/components/sections/services/ciberseguridad/SecurityHero";
import SecurityServiceCatalog from "@/components/sections/services/ciberseguridad/SecurityServiceCatalog";
import SecurityTechStack from "@/components/sections/services/ciberseguridad/SecurityTechStack";
import SecurityProcess from "@/components/sections/services/ciberseguridad/SecurityProcess";
import SecuritySecurity from "@/components/sections/services/ciberseguridad/SecuritySecurity";
import SecurityPricing from "@/components/sections/services/ciberseguridad/SecurityPricing";
import SecurityGuarantee from "@/components/sections/services/ciberseguridad/SecurityGuarantee";
import SecurityRequirements from "@/components/sections/services/ciberseguridad/SecurityRequirements";
import SecurityLegal from "@/components/sections/services/ciberseguridad/SecurityLegal";
import SecurityCTA from "@/components/sections/services/ciberseguridad/SecurityCTA";

export default function Ciberseguridad() {
    return (
        <main className="bg-background text-foreground">
            {/* 🚀 1. HERO (IMPACTO) */}
            <SecurityHero />
            {/* ⚙️ 3. TECNOLOGÍAS (AUTORIDAD) */}
            <SecurityTechStack />
            {/* 💡 2. QUÉ HACEMOS (VALOR INICIAL) */}
            <SecurityServiceCatalog />
            {/* 🧭 4. PROCESO (CÓMO TRABAJAMOS) */}
            <SecurityProcess />
            {/* 🔐 6. CONFIANZA TÉCNICA */}
            <SecuritySecurity />
            {/* 💰 7. PRECIOS REFERENCIALES */}
            <SecurityPricing />
            {/* 🛡️ 8. GARANTÍAS */}
            <SecurityGuarantee />
            {/* 📋 9. REQUISITOS DEL CLIENTE */}
            <SecurityRequirements />
            {/* ⚖️ 10. LEGAL / PROPIEDAD INTELECTUAL */}
            <SecurityLegal />
            {/* 🔥 11. CTA FINAL (CONVERSIÓN) */}
            <SecurityCTA />
        </main>
    );
}