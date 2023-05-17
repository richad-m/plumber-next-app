import React, { useCallback, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BANNER_SLIDES_URL } from "../constants/imageUrl";
import Button from "./UI/Button";

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstImage = currentIndex === 0;

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === BANNER_SLIDES_URL.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  // useEffect(() => {
  //   setTimeout(() => nextSlide(), 10000);
  // }, [currentIndex, nextSlide]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BANNER_SLIDES_URL[currentIndex].url})`,
        }}
        className="carrousel-container"
      >
        <div className="sm:p-5 text-white z-[2] sm:ml-[5rem] sm:mt-[5rem] flex flex-col items-center anim-lineup">
          {isFirstImage && (
            <p className="py-5 text-4xl sm:text-6xl font-bold w-3/4 text-center banner-message">
              La garantie d&apos;un travail <mark>professionnel </mark> au{" "}
              <mark> juste prix</mark>
            </p>
          )}
          {!isFirstImage && (
            <p className="py-5 text-4xl sm:text-6xl font-bold w-4/5 text-center banner-message">
              Interventions d&apos;urgence <mark>fiables</mark> et{" "}
              <mark>transparentes </mark>
            </p>
          )}
          <div className="button-container">
            <Button
              text="Une urgence ?"
              styleType="primary"
              as="a"
              href="tel:0100000000"
            />
            <Button
              text="Nous contacter"
              styleType="primary"
              as="a"
              href="/contact"
            />
          </div>
        </div>
        <div className="flex justify-center bg-transparent carrousel-navigation">
          {BANNER_SLIDES_URL.map((_slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrousel;
