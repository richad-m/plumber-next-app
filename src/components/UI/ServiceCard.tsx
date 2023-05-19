import React, { lazy } from "react";
import Image from "next/image";
import PipeIcon from "../../../assets/PipeIcon";

function ServiceCard({ icon, subtitle }: { icon: string; subtitle: string }) {
  const IconComponent = lazy(() => import(`../../../assets/${icon}.tsx`));
  return (
    <div className="service-card-container">
      <IconComponent />
      <h3 className="text-center text-lg uppercase">{subtitle}</h3>
    </div>
  );
}

export default ServiceCard;
