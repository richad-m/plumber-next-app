import React from "react";
import Image from "next/image";
import atlanticLogo from "../../assets/atlantic-logo.png";
import thermorLogo from "../../assets/thermor-logo.svg";
import aristonLogo from "../../assets/ariston-logo.png";
import groheLogo from "../../assets/grohe-logo.svg";
import geberitLogo from "../../assets/geberit-logo.png";
import altechLogo from "../../assets/altech-logo.png";
import alternaLogo from "../../assets/alterna-logo.png";
import compapLogo from "../../assets/comap-logo.png";
import hansgroheLogo from "../../assets/hansgrohe-logo.png";
import nicollLogo from "../../assets/nicoll-logo.svg";
import porcherLogo from "../../assets/porcher-logo.png";
import wattsLogo from "../../assets/watts-logo.png";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function BrandCarrousel() {
  return (
    <div className="carroussel-container">
      <BsChevronRight
        className="carroussel-navigation-right"
        color="white"
        fontWeight={900}
      />
      <BsChevronLeft className="carroussel-navigation-left" />
      <div className="carroussel-item-container">
        <Image
          src={atlanticLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={thermorLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={aristonLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={groheLogo}
          alt="AC Pro logo"
          width={100}
          height={100}
          className="carrousel-item"
        />
        <Image
          src={geberitLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={altechLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={alternaLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={compapLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={hansgroheLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={nicollLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={porcherLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
        <Image
          src={wattsLogo}
          alt="AC Pro logo"
          width={150}
          className="carrousel-item"
        />
      </div>
    </div>
  );
}

export default BrandCarrousel;

// code to inifite carroussel
// return (
//   <div className="slider">
//     <div className="slide-track">
//       <div className="slide">
//         <Image
//           src={atlanticLogo}
//           alt="AC Pro logo"
//           width={100}
//           height={100}
//         />
//       </div>
//       <div className="slide">
//         <Image src={thermorLogo} alt="AC Pro logo" width={100} height={100} />
//       </div>
//       <div className="slide">
//         <Image src={aristonLogo} alt="AC Pro logo" width={100} height={100} />
//       </div>
//       <div className="slide">
//         <Image src={groheLogo} alt="AC Pro logo" width={100} height={100} />
//       </div>
//       <div className="slide">
//         <Image src={geberitLogo} alt="AC Pro logo" width={100} height={100} />
//       </div>
//       <div className="slide">
//         <Image src={altechLogo} alt="AC Pro logo" width={100} height={100} />
//       </div>
//     </div>
//   </div>
// );
