import React, { useRef } from "react";
import Image from "next/image";
import { SLIDER_LOGOS } from "../constants/sliderLogos";

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

  return (
    <div className="relative">
      <div className="flex overflow-x-auto gap-9" ref={sliderRef}>
        {SLIDER_LOGOS.map(({ src, alt, id }) => (
          <Image
            src={src}
            alt={alt}
            width={200}
            height={200}
            key={id}
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
