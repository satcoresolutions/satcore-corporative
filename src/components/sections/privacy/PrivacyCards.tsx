"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { privacyData } from "@/data/privacy";

export default function PrivacyCards() {
  return (
    <Section variant="white" paddingY="lg">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {privacyData.map((item, i) => (
          <ServiceCard
            key={i}
            title={item.title}
            subtitle={item.description}
            variant="info"
            size="md"
            iconVariant="circleBlue"
          />
        ))}

      </div>
    </Section>
  );
}
