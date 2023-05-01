import React from "react";
import Separator from "./UI/Separator";
import ServiceIcon from "./UI/ServiceIcon";

function SkillSection() {
  return (
    <>
      <section className="skill-section" id="service">
        <h2 className="skill-title text-4xl teal ">Services</h2>
        <div className="flex skill-container w-full flex-col sm:flex-row">
          <ServiceIcon />
          <ServiceIcon />
          <ServiceIcon />
          <ServiceIcon />
        </div>
      </section>
      <Separator />
    </>
  );
}

export default SkillSection;
