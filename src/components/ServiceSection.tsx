import React from "react";
import Image from "next/image";
import faucet from "../../assets/faucet.svg";
import toilet from "../../assets/toilet.svg";
import pipe from "../../assets/pipe.svg";
import waterHeater from "../../assets/water-heater.svg";
import water from "../../assets/water.svg";
import ServiceCard from "./UI/ServiceCard";

function ServiceSection() {
  return (
    <section id="services" className="border-none">
      <div className="flex flex-col w-full justify-between sm:flex-row">
        <ServiceCard icon={waterHeater} subtitle="chauffe-eau" />
        <ServiceCard icon={toilet} subtitle="réparation de toilettes" />
        <ServiceCard icon={faucet} subtitle="réparation de robinets" />
        <ServiceCard icon={water} subtitle="fuites d'eau" />
        <ServiceCard icon={pipe} subtitle="canalisation bouchées" />
      </div>
    </section>
  );
}

export default ServiceSection;
