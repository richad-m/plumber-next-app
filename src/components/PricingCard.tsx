import React from "react";
import { GiTrident } from "react-icons/gi";

function PricingCard({
  tridentNumber,
  title = "Titre",
  priceMessage = "25 €",
}: {
  tridentNumber: number;
  title?: string;
  priceMessage: string;
}) {
  const tridentArray = Array(tridentNumber).fill(
    <GiTrident
      size={25}
      color="white"
      style={{ transform: "rotate(-135deg)" }}
    />
  );
  return (
    <>
      <div className="flex items-center flex-col">
        <div className="pricing-round">
          <div className="flex">{tridentArray}</div>
        </div>
        <div className="pricing-title font-bold text-center">{title}</div>
        <div className="pricing">{priceMessage}</div>
      </div>
    </>
  );
}

export default PricingCard;
