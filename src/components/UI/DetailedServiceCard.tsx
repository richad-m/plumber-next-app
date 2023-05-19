import dynamic from "next/dynamic";
import React from "react";

function DetailedServiceCard({
  icon,
  subtitle,
  text,
}: {
  icon: string;
  subtitle: string;
  text: string;
}) {
  const IconComponent = dynamic(() => import(`../../../assets/${icon}.tsx`));

  return (
    <div className="detailed-service-card-container">
      <IconComponent width="100px" />
      <h3 className="uppercase">{subtitle}</h3>
      <div
        style={{
          width: "70px",
          background: "blue",
          height: "5px",
          margin: "24px",
        }}
      />
      <p>{text}</p>
    </div>
  );
}

export default DetailedServiceCard;
