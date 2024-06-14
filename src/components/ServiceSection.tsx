import React from "react";
import Section from "./UI/Section";
import ServiceCard from "./UI/ServiceCard";

function ServiceSection() {
  return (
    <Section id="services" title="prestation de services" titleClassName="mt-0">
      <div className="service-cards-container">
        <ServiceCard icon={"WaterHeaterIcon"} subtitle="chauffe-eau" />
        <ServiceCard icon={"ToiletIcon"} subtitle="réparations de toilettes" />
        <ServiceCard icon={"FaucetIcon"} subtitle="réparations de robinets" />
        <ServiceCard icon={"WaterIcon"} subtitle="fuites d'eau" />
        <ServiceCard icon={"PipeIcon"} subtitle="canalisations bouchées" />
      </div>
    </Section>
  );
}

export default ServiceSection;
