import EducationHero from "@/components/sections/services/educacion/EducationHero";
import EducationTechStack from "@/components/sections/services/educacion/EducationTechStack";
import EducationServiceCatalog from "@/components/sections/services/educacion/EducationServiceCatalog";
import EducationProcess from "@/components/sections/services/educacion/EducationProcess";
import EducationSecurity from "@/components/sections/services/educacion/EducationSecurity";
import EducationPricing from "@/components/sections/services/educacion/EducationPricing";
import EducationGuarantee from "@/components/sections/services/educacion/EducationGuarantee";
import EducationRequirements from "@/components/sections/services/educacion/EducationRequirements";
import EducationLegal from "@/components/sections/services/educacion/EducationLegal";
import EducationCTA from "@/components/sections/services/educacion/EducationCTA";

export default function Educacion() {
    return (
        <main className="bg-background text-foreground">
            {/* 🚀 1. HERO (IMPACTO) */}
            <EducationHero />
            {/* ⚙️ 3. TECNOLOGÍAS (AUTORIDAD) */}
            <EducationTechStack />
            {/* 💡 2. QUÉ HACEMOS (VALOR INICIAL) */}
            <EducationServiceCatalog />
            {/* 🧭 4. PROCESO (CÓMO TRABAJAMOS) */}
            <EducationProcess />
            {/* 🔐 6. CONFIANZA TÉCNICA */}
            <EducationSecurity />
            {/* 💰 7. PRECIOS REFERENCIALES */}
            <EducationPricing />
            {/* 🛡️ 8. GARANTÍAS */}
            <EducationGuarantee />
            {/* 📋 9. REQUISITOS DEL CLIENTE */}
            <EducationRequirements />
            {/* ⚖️ 10. LEGAL / PROPIEDAD INTELECTUAL */}
            <EducationLegal />
            {/* 🔥 11. CTA FINAL (CONVERSIÓN) */}
            <EducationCTA />

        </main>
    );
}