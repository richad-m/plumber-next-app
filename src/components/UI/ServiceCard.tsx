import React from "react";
import dynamic from "next/dynamic";

function ServiceCard({ icon, subtitle }: { icon: string; subtitle: string }) {
  const IconComponent = dynamic(() => import(`../../../assets/${icon}.tsx`), {
    ssr: false,
  });
  return (
    <div className="service-card-container">
      <IconComponent />
      <h3>{subtitle}</h3>
    </div>
  );
}

export default ServiceCard;
