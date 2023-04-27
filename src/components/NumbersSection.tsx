import React from "react";
import Numbers from "./UI/Numbers";
import Separator from "./UI/Separator";

function NumbersSection() {
  return (
    <>
      <section id="numbers">
        <h2 className="skill-title text-4xl teal uppercase ">Chiffres clés</h2>
      </section>
      <div className="block skill-container sm:flex ">
        <Numbers />
        <Numbers />
        <Numbers />
      </div>
      <Separator />
    </>
  );
}

export default NumbersSection;
