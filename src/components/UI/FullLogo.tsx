import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.svg";

function FullLogo() {
  return (
    <div className="flex gap-4 anim-lineup">
      <Image src={logo} alt="Picture of the author" width={125} color="red" />
      <div className="flex-col align-text-bottom justify-between">
        <h2 className="text-decoration text-8xl font-bold underline ">
          AC PRO
        </h2>
        <h2 className="text-4xl font-extra-light italic">Plomberie Paris</h2>
      </div>
    </div>
  );
}

export default FullLogo;
