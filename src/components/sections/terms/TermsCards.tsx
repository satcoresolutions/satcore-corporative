"use client";

import Section from "@/components/ui/universalSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { termsData } from "@/data/terms";

export default function TermsCards() {
  return (
    <Section variant="white" paddingY="lg">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {termsData.map((item, i) => (
          <ServiceCard
            key={i}
            title={item.title}
            subtitle={item.description}
            variant="light"
            size="md"
            iconVariant="circleGreen"
          />
        ))}

      </div>
    </Section>
  );
}
