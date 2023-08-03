import React from "react";
import Image from "next/image";
import newLogo from "../../../assets/new-logo.svg";

function FullLogo() {
  return (
    <>
      <div>
        <div className="flex gap-1 items-center justify-center flex-row cursor-pointer">
          <Image
            src={newLogo}
            alt="Les Artisans Dépanneurs logo"
            width={50}
            color="red"
          />
          <div className="flex-col align-text-bottom justify-between text-center sm:text-left">
            <p className="company-name text-left">
              Les <br />
              Artisans
              <br />
              Dépanneurs
            </p>
          </div>
        </div>
        <p className="handwritten px-3">Dépannage d&apos;urgence</p>
      </div>
    </>
  );
}

export default FullLogo;
