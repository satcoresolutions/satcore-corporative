import Hero from "@/components/shared/Hero";

export default function PrivacyHero() {
    return (
        <Hero
            title="POLÍTICA DE PRIVACIDAD"
            highlight="PROTEGEMOS TU INFORMACIÓN"

            description="Conoce cómo recopilamos, utilizamos y protegemos tus datos personales dentro de SatCore Solutions."

            ctaPrimaryText="Contactar"
            ctaPrimaryLink="https://wa.me/573022016072"

            ctaSecondaryText="Ver FAQ"
            ctaSecondaryLink="/faq"

            background="/img/hero/bg_1.png"
            variant="left"
            height="full"
        />
    );
}
