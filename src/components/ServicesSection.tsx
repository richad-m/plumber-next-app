import React from "react";
import ServiceIcon from "./UI/ServiceIcon";

function ServicesSection() {
  return (
    <section className="skill-section" id="service">
      <h2 className="skill-title text-4xl teal font-bold uppercase underline underline-offset-8 decoration-wavy">
        Nos services
      </h2>
      <div className="flex skill-container w-full flex-col sm:flex-row service-icon-container">
        <ServiceIcon />
        <ServiceIcon />
        <ServiceIcon />
        <ServiceIcon />
      </div>
    </section>
  );
}

export default ServicesSection;
