import dynamic from "next/dynamic";
import React from "react";
import Separator from "./Separator";

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
      <Separator />
      <p className="detailed-service-description">{text}</p>
    </div>
  );
}

export default DetailedServiceCard;
