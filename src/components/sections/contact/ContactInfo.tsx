import ContactCards from "./ContactCards";
import ContactSocials from "./ContactSocials";
import ContactLocation from "./ContactLocation";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Otras vías de contacto
      </h2>

      <ContactCards />
      <ContactSocials />
      <ContactLocation />
    </div>
  );
}