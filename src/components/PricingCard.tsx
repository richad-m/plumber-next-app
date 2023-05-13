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
  const tridentPropertiesArray = Array(tridentNumber).fill({
    size: 25,
    color: "white",
    style: { transform: "rotate(-135deg)" },
  }) as { size: number; color: "string"; style: React.CSSProperties }[];

  return (
    <>
      <div className="flex items-center flex-col">
        <div className="pricing-round">
          <div className="flex">
            {tridentPropertiesArray.map(({ size, color, style }, index) => (
              <GiTrident size={size} color={color} style={style} key={index} />
            ))}
          </div>
        </div>
        <div className="pricing-title font-bold text-center">{title}</div>
        <div className="pricing">{priceMessage}</div>
      </div>
    </>
  );
}

export default PricingCard;
