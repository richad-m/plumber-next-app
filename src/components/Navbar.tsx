import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);
  const [displayMobileNavMenu, setDisplayMobileNavMenu] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setIsNavbarSolid(true);
    } else {
      setIsNavbarSolid(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const toggleMobileNavMenu = (): void =>
    setDisplayMobileNavMenu((previousState) => !previousState);

  return (
    <nav className="sticky top-0 z-50 ">
      <div
        className={`w-full sm:px-10 ${
          isNavbarSolid ? "solid-navbar" : "navbar"
        }`}
      >
        <div className="flex m-auto justify-between items-center p-4">
          <Link href="/" id="nav-button" className="flex">
            <Image
              src={logo}
              alt="Picture of the author"
              width={50}
              className="sm:w-50 w-10"
            />

            <h1 className="font-bold sm:text-4xl navbar-title logo-title ">
              AC PRO
            </h1>
          </Link>
          <ul className="hidden sm:flex gap-9">
            <li className="navbar-item my-auto">
              <Link href="#service">Accueil</Link>
            </li>
            <li className="navbar-item my-auto">
              <Link href="#service">Plomberie</Link>
            </li>
            <li className="navbar-item my-auto">
              <Link href="#service">Conseils</Link>
            </li>
            <li className="navbar-item my-auto">
              <Link href="#service">FAQ</Link>
            </li>
            <li className="p-4">
              <Link href="#contact" className="primary-link">
                Demande de devis
              </Link>
            </li>
          </ul>
          {/* Mobile button */}
          <button
            className={`sm:hidden block hamburger ${
              displayMobileNavMenu && "open"
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
              displayMobileNavMenu ? "flex open" : "hidden"
            } menu-overlay  justify-center`}
          >
            <ul className={`sm:flex-row flex-col h-full nav`}>
              <li
                className="p-4 text-4xl text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#service">Accueil</Link>
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
                <Link href="#service">Conseils</Link>
              </li>
              <li
                className="p-4 text-4xl text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#service">FAQ</Link>
              </li>
              <li
                className="p-4 text-4xl text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#service">Demande de devis</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
