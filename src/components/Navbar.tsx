import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
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
            <li className="p-4 navbar-item">
              <Link href="#skill-section">Services</Link>
            </li>
            <li className="p-4 navbar-item">
              <Link href="#numbers">Chiffres clés</Link>
            </li>
            <li className="p-4 navbar-item">
              <Link href="#reviews">Avis</Link>
            </li>
            <li className="p-4 navbar-item">
              <Link href="#reviews">Blog</Link>
            </li>
          </ul>
          {/* Mobile button */}
          <button className="sm:hidden block" onClick={toggleMobileNavMenu}>
            <FiAlignJustify size={50} />
          </button>
          {/* Mobile menu */}

          <div
            className={`${
              displayMobileNavMenu ? "block" : "hidden"
            } absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 `}
          >
            <button
              className="sm:hidden block m-auto"
              onClick={toggleMobileNavMenu}
            >
              <FaWindowClose size={50} />
            </button>
            <ul
              className={`${
                displayMobileNavMenu ? "block" : "hidden"
              } sm:flex h-full`}
            >
              <li
                className="p-4 text-4xl hover:text-gray-500 text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#numbers">Chiffres clés</Link>
              </li>
              <li
                className="p-4 text-4xl hover:text-gray-500 text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#reviews">Blog</Link>
              </li>
              <li
                className="p-4 text-4xl hover:text-gray-500 text-white"
                onClick={toggleMobileNavMenu}
              >
                <Link href="#reviews">Avis</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
