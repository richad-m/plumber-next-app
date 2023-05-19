import React from "react";
import ServiceCard from "./UI/ServiceCard";

function ServiceSection() {
  return (
    <section id="services" className="border-none">
      <div className="service-cards-container">
        <ServiceCard icon={"ToiletIcon"} subtitle="chauffe-eau" />
        <ServiceCard icon={"WaterHeaterIcon"} subtitle="chauffe-eau" />
        <ServiceCard icon={"FaucetIcon"} subtitle="chauffe-eau" />
        <ServiceCard icon={"WaterIcon"} subtitle="chauffe-eau" />
        <ServiceCard icon={"PipeIcon"} subtitle="chauffe-eau" />
      </div>
    </section>
  );
}

export default ServiceSection;
