import React, { useCallback, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BANNER_SLIDES_URL } from "../constants/imageUrl";
import Button from "./UI/Button";
import { PHONE_NUMBER } from "../constants/phoneNumber";

function Carrousel({
  openAppointmentModal,
}: {
  openAppointmentModal: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstImage = currentIndex === 0;

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(95, 95, 95, 0.6), rgba(103, 99, 99, 0.6)), url(${BANNER_SLIDES_URL[currentIndex].url})`,
        }}
        className="carrousel-container"
      >
        <div className="sm:p-5 text-white z-[2] sm:ml-[5rem] sm:mt-[5rem] flex flex-col items-center anim-lineup">
          <p className="py-5 text-4xl sm:text-6xl font-bold w-full text-center banner-message">
            Les Artisans Dépanneurs
          </p>
          <p className="font-bold text-4xl sm:text-6xl w-full text-center banner-message">
            Plomberie - Chauffage
          </p>
          {isFirstImage && (
            <p className="py-5 w-full sm:text-2xl text-center banner-message">
              La garantie d&apos;un travail professionnel au juste prix
            </p>
          )}
          {!isFirstImage && (
            <p className="py-5 text-2xl w-3/4 text-center banner-message">
              Interventions d&apos;urgence fiables et transparentes
            </p>
          )}
          <div className="button-container">
            <Button
              text="Une urgence ?"
              styleType="primary"
              as="a"
              href="/contact"
            />
            <Button
              text="Prendre rendez-vous"
              styleType="primary"
              onClick={openAppointmentModal}
            />
          </div>
          <p className="py-5 text-4xl sm:text-6xl font-bold w-3/4 text-center banner-message">
            {PHONE_NUMBER}
          </p>
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
