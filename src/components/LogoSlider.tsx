import React, { useRef } from "react";
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

const LogoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - 125,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + 125,
        behavior: "smooth",
      });
    }
  };

  const logos = [
    { id: 1, src: atlanticLogo, alt: "Logo 1" },
    { id: 2, src: thermorLogo, alt: "Logo 2" },
    { id: 3, src: aristonLogo, alt: "Logo 2" },
    { id: 2, src: groheLogo, alt: "Logo 2" },
    { id: 2, src: geberitLogo, alt: "Logo 2" },
    { id: 2, src: altechLogo, alt: "Logo 2" },
    { id: 2, src: alternaLogo, alt: "Logo 2" },
    { id: 2, src: compapLogo, alt: "Logo 2" },
    { id: 2, src: hansgroheLogo, alt: "Logo 2" },
    { id: 2, src: nicollLogo, alt: "Logo 2" },
    { id: 2, src: porcherLogo, alt: "Logo 2" },
    { id: 2, src: wattsLogo, alt: "Logo 2" },
  ];

  return (
    <div className="relative">
      <div className="flex overflow-x-auto gap-9" ref={sliderRef}>
        {logos.map((logo, index) => (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={100}
            key={index}
            className="slider-item"
          />
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default LogoSlider;
