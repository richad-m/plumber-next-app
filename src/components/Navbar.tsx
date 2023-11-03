import Link from "next/link";
import React, { useEffect, useState } from "react";
import FullLogo from "./UI/FullLogo";

function Navbar({ isHomePage }: { isHomePage?: boolean }) {
  const [isNavbarSolid, setIsNavbarSolid] = useState(!!isHomePage);
  const [shouldDisplayMobileMenu, setShouldDisplayMobileMenu] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setIsNavbarSolid(true);
    } else {
      setIsNavbarSolid(false);
    }
  };

  useEffect(() => {
    if (isHomePage) {
      changeBackground();
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground);
    }
  });

  const toggleMobileNavMenu = (): void =>
    setShouldDisplayMobileMenu((previousState) => !previousState);

  return (
    <nav className="sticky top-0 z-50 ">
      <div
        className={`w-full sm:px-10 ${
          isNavbarSolid || !isHomePage ? "solid-navbar" : "navbar"
        } ${isHomePage && "absolute"}`}
      >
        <div className="flex m-auto justify-between items-center p-2">
          <Link href="/" id="nav-button" className="flex">
            <FullLogo />
          </Link>
          <div>
            <ul className="hidden sm:flex gap-9">
              <li className="navbar-item my-auto">
                <Link href="/">Accueil</Link>
              </li>
              <li className="navbar-item my-auto">
                <Link href="#services">Plomberie</Link>
              </li>
              <li className="p-4">
                <Link href="/contact" className="primary-link">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile button */}
          <button
            className={`sm:hidden block hamburger ${
              shouldDisplayMobileMenu && "open"
            }`}
            onClick={toggleMobileNavMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/* Mobile menu */}
          <div
            className={`${
              shouldDisplayMobileMenu ? "flex open" : "hidden"
            } menu-overlay  justify-center`}
          >
            <ul className={`sm:flex-row flex-col h-full nav`}>
              <li
                className="p-4 text-4xl text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="/">Accueil</Link>
              </li>
              <li
                className="p-4 text-4xl text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#service">Plomberie</Link>
              </li>
              <li
                className="p-4 text-4xl text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#pricing">Tarifs</Link>
              </li>
              <li
                className="p-4 text-4xl text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="/contact">Demande de devis</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
