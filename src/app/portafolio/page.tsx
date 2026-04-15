import HeroSection from "@/components/sections/portafolio/HeroSection";
import ProjectsGrid from "@/components/sections/portafolio/ProjectsGrid";
import HostingRecommendations from "@/components/sections/portafolio/HostingRecommendations";
import CTASection from "@/components/sections/portafolio/CTASection";

export default function PortafolioPage() {
  return (
    <main>
      <HeroSection />
      <ProjectsGrid />
      <HostingRecommendations />
      <CTASection />
    </main>
  );
}
