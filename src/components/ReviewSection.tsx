import React from "react";
import Card from "./UI/Card";
import Separator from "./UI/Separator";

function ReviewSection() {
  return (
    <>
      <section id="reviews">
        <h2 className="skill-title text-4xl">Nos avis</h2>
        <div className="block skill-container sm:flex ">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Separator />
    </>
  );
}

export default ReviewSection;
