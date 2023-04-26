import React from "react";
import Card from "./UI/Card";
import Separator from "./UI/Separator";

function SkillSection() {
  return (
    <>
      <section className="skill-section" id="skill-section">
        <h2 className="skill-title text-4xl">Expertise</h2>
        <div className="block sm:flex skill-container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Separator />
    </>
  );
}

export default SkillSection;
