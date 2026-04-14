import SocialIcon from "@/components/ui/SocialIcon";

export default function ContactSocials() {
  return (
    <div>
      <h3 className="font-semibold mb-3">Síguenos</h3>

      <div className="flex gap-4">
        <SocialIcon size="lg" type="instagram" href="https://instagram.com/satcore_solutions" />
        <SocialIcon size="lg" type="tiktok" href="https://www.tiktok.com/@satcore_solutions" />
        <SocialIcon size="lg" type="youtube" href="https://www.youtube.com/@SatCore_Solutions" />
        <SocialIcon size="lg" type="facebook" href="https://www.facebook.com/SatCore.Solutions/" />
      </div>
    </div>
  );
}