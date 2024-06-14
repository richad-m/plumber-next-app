import React from "react";
import LogoSlider from "./LogoSlider";
import Section from "./UI/Section";

function PartnershipSection() {
  return (
    <Section
      id="partenaires"
      title="Nos partenaires de marque"
      titleClassName="mt-0"
    >
      <LogoSlider />
    </Section>
  );
}

export default PartnershipSection;
