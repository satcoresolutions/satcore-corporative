import HeroAbout from "@/components/sections/nosotros/HeroAbout";
import Historia from "@/components/sections/nosotros/Historia";
import MisionVision from "@/components/sections/nosotros/MisionVision";
import Valores from "@/components/sections/nosotros/Valores";
import Pilares from "@/components/sections/nosotros/Pilares";
import PropuestaValor from "@/components/sections/nosotros/PropuestaValor";
import ProblemasQueResolvemos from "@/components/sections/nosotros/ProblemasQueResolvemos";
import TerminosCondiciones from "@/components/sections/nosotros/TerminosCondiciones";

export default function NosotrosPage() {
    return (
        <main>
            <HeroAbout />
            <Historia />
            <MisionVision />
            <Valores />
            <Pilares />
            <PropuestaValor />
            <ProblemasQueResolvemos />
            <TerminosCondiciones />
        </main>
    );
}