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
  const IconComponent = dynamic(() => import(`../../../assets/${icon}.tsx`), {
    ssr: false,
  });

  return (
    <div className="detailed-service-card-container">
      <IconComponent />
      <h3 className="uppercase">{subtitle}</h3>
      <div
        style={{
          width: "70px",
          background: "#D9A962",
          height: "5px",
          margin: "24px",
        }}
      />
      <p>{text}</p>
    </div>
  );
}

export default DetailedServiceCard;
