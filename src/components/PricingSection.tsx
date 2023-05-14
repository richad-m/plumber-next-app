import React from "react";
import PricingCard from "./PricingCard";
import Separator from "./UI/Separator";

function PricingSection() {
  return (
    <>
      <section id="pricing">
        <h2 className="skill-title text-4xl teal uppercase font-bold">
          Tarifs
        </h2>
        <div className="content-container flex flex-col sm:flex-row items-center justify-center py-4">
          <PricingCard
            tridentNumber={1}
            title="Intervention rapide 1H"
            priceMessage="110 €"
          />
          <PricingCard
            tridentNumber={2}
            title="Intervention prolongée 2H"
            priceMessage="180 €"
          />
          <PricingCard
            tridentNumber={3}
            title="Fourniture et pose d’un ballon d'eau chaude"
            priceMessage="à partir de 500 €"
          />
          <PricingCard
            tridentNumber={3}
            title="Débouchage de canalisations"
            priceMessage="à partir de 120 €"
          />
          <PricingCard
            tridentNumber={3}
            title="Recherche de fuite"
            priceMessage="à partir de 200 €"
          />
        </div>
      </section>
      <Separator />
    </>
  );
}

export default PricingSection;
