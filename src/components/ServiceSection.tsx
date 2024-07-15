import React from "react";
import Section from "./UI/Section";
import ServiceCard from "./UI/ServiceCard";

function ServiceSection() {
  return (
    <Section id="services" title="prestation de services" titleClassName="mt-0">
      <h3 className="mb-10 text-lg font-medium">Plomberie</h3>
      <div className="service-cards-container">
        <ServiceCard icon={"WaterHeaterIcon"} subtitle="chauffe-eau" />
        <ServiceCard icon={"ToiletIcon"} subtitle="réparations de toilettes" />
        <ServiceCard icon={"FaucetIcon"} subtitle="réparations de robinets" />
        <ServiceCard icon={"WaterLeakIcon"} subtitle="fuites d'eau" />
        <ServiceCard icon={"WaterIcon"} subtitle="recherche de fuite" />
        <ServiceCard icon={"PipeIcon"} subtitle="canalisations bouchées" />
      </div>
      <h3 className="m-10 text-lg font-medium">Serrurerie</h3>
      <div className="service-cards-container">
        <ServiceCard
          icon={"SlammedDoor"}
          subtitle="ouverture de porte claquée"
        />
        <ServiceCard
          icon={"LockedDoor"}
          subtitle="ouverture de porte verrouillée"
        />
        <ServiceCard icon={"ShieldDoor"} subtitle="installation serrure" />
        <ServiceCard
          icon={"WindowGlazing"}
          subtitle="remplacement vitrage fenêtre"
        />
      </div>
    </Section>
  );
}

export default ServiceSection;
