import React from "react";
import ServiceCard from "./UI/ServiceCard";

function ServiceSection() {
  return (
    <section id="services" className="border-none">
      <div className="service-cards-container">
        <ServiceCard icon={"WaterHeaterIcon"} subtitle="chauffe-eau" />
        <ServiceCard icon={"ToiletIcon"} subtitle="réparations de toilettes" />
        <ServiceCard icon={"FaucetIcon"} subtitle="réparations de robinets" />
        <ServiceCard icon={"WaterIcon"} subtitle="fuites d'eau" />
        <ServiceCard icon={"PipeIcon"} subtitle="canalisations bouchées" />
      </div>
    </section>
  );
}

export default ServiceSection;
