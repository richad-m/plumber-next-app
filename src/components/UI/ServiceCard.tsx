import React from "react";
import Image from "next/image";

function ServiceCard({ icon, subtitle }: { icon: any; subtitle: string }) {
  return (
    <div className="service-card-container">
      <Image src={icon} alt="AC Pro logo" width={150} />
      <h3 className="text-center text-lg uppercase">{subtitle}</h3>
    </div>
  );
}

export default ServiceCard;
