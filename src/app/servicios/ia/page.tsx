import AIHero from "@/components/sections/services/ia/AiHero";
import AITechStack from "@/components/sections/services/ia/AITechStack";
import AIServiceCatalog from "@/components/sections/services/ia/AIServiceCatalog";
import IAProcess from "@/components/sections/services/ia/AIProcess";
import AISecurity from "@/components/sections/services/ia/AISecurity";
import AIGuarantee from "@/components/sections/services/ia/AIGuarantee";
import AIPricing from "@/components/sections/services/ia/AIPricing";
import AIRequirements from "@/components/sections/services/ia/AIRequirements";
import AILegal from "@/components/sections/services/ia/AILegal";
import AICta from "@/components/sections/services/ia/AICta";

export default function IA() {
    return (
        <main className="bg-background text-foreground">
            {/* 🚀 1. HERO (IMPACTO) */}
            <AIHero />

            {/* ⚙️ 3. TECNOLOGÍAS (AUTORIDAD) */}
            <AITechStack />

            {/* 💡 2. QUÉ HACEMOS (VALOR INICIAL) */}
            <AIServiceCatalog />

            {/* 🧭 4. PROCESO (CÓMO TRABAJAMOS) */}
            <IAProcess />

            {/* 🔐 6. CONFIANZA TÉCNICA */}
            <AISecurity />

            {/* 💰 7. PRECIOS REFERENCIALES */}
            <AIPricing />

            {/* 🛡️ 8. GARANTÍAS */}
            <AIGuarantee />

            {/* 📋 9. REQUISITOS DEL CLIENTE */}
            <AIRequirements />

            {/* ⚖️ 10. LEGAL / PROPIEDAD INTELECTUAL */}
            <AILegal />

            {/* 🔥 11. CTA FINAL (CONVERSIÓN) */}
            <AICta />
        </main>
    );
}