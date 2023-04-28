import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.svg";

function FullLogo() {
  return (
    <div className="flex gap-4 anim-lineup flex-col items-center justify-center sm:flex-row">
      <Image src={logo} alt="Picture of the author" width={125} color="red" />
      <div className="flex-col align-text-bottom justify-between text-center sm:text-left">
        <h2 className="text-decoration sm:text-8xl  text-5xl font-bold underline ">
          AC PRO
        </h2>
        <h2 className="text-4xl font-extra-light italic">Plomberie Paris</h2>
      </div>
    </div>
  );
}

export default FullLogo;
