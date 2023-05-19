import React from "react";
import Image from "next/image";
import faucet from "../../assets/faucet.svg";
import toilet from "../../assets/toilet.svg";
import pipe from "../../assets/pipe.svg";
import waterHeater from "../../assets/water-heater.svg";
import water from "../../assets/water.svg";

function ServiceSection() {
  return (
    <section id="services" className="border-none">
      <div className="flex w-full justify-between">
        <div className="flex-col flex align-center items-center service-container">
          <Image
            src={waterHeater}
            alt="AC Pro logo"
            width={150}
            style={{ strokeWidth: "10px" }}
          />
          <h3 className="text-center text-lg">CHAUFFE-EAU</h3>
        </div>
        <div className="flex-col flex align-center items-center service-container">
          <Image src={toilet} alt="AC Pro logo" width={150} />
          <h3 className="text-center text-lg">REPARATION DE TOILETTES</h3>
        </div>
        <div className="flex-col flex align-center items-center service-container">
          <Image src={faucet} alt="AC Pro logo" width={150} />
          <h3 className="text-center text-lg">REPARATION DE ROBINET</h3>
        </div>
        <div className="flex-col flex align-center items-center service-container w-fit">
          <Image src={water} alt="AC Pro logo" width={150} />
          <h3 className="text-center text-lg">FUITES D&apos;EAU</h3>
        </div>
        <div className="flex-col flex align-center items-center service-container">
          <Image src={pipe} alt="AC Pro logo" width={150} />
          <h3 className="text-center text-lg">CANALISATIONS BOUCHEES</h3>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
