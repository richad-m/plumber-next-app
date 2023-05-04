import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { FiChevronDown } from "react-icons/fi";

function Navbar({ isHomePage }: { isHomePage?: boolean }) {
  const [isNavbarSolid, setIsNavbarSolid] = useState(!!isHomePage);
  const [shouldDisplayMobileMenu, setShouldDisplayMobileMenu] = useState(false);
  const [shouldDisplayHoverMenu, setShouldDisplayHoverMenu] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

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

  useEffect(() => {
    const handler = (event: any) => {
      if (
        shouldDisplayHoverMenu &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setShouldDisplayHoverMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [setShouldDisplayHoverMenu, shouldDisplayHoverMenu]);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setShouldDisplayHoverMenu(false);
  };
  const toggleMobileNavMenu = (): void =>
    setShouldDisplayMobileMenu((previousState) => !previousState);

  return (
    <nav className="sticky top-0 z-50 ">
      <div
        className={`w-full sm:px-10 ${
          isNavbarSolid || !isHomePage ? "solid-navbar" : "navbar"
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
              <Link href="/">Accueil</Link>
            </li>
            <li className="navbar-item my-auto" ref={ref}>
              <button
                className="flex items-center gap-2"
                onClick={() =>
                  setShouldDisplayHoverMenu((previousValue) => !previousValue)
                }
              >
                Plomberie
                <FiChevronDown></FiChevronDown>
              </button>
              {shouldDisplayHoverMenu && (
                <div>
                  <ul className="absolute navbar-hover-menu">
                    <li className="navbar-hover-menu-item">
                      <Link
                        href="#contact"
                        className="flex items-center gap-2"
                        onClick={closeHoverMenu}
                      >
                        Dépannage
                      </Link>
                    </li>
                    <li className="navbar-hover-menu-item">
                      <Link
                        href="#contact"
                        className="flex items-center gap-2"
                        onClick={closeHoverMenu}
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="navbar-item my-auto">
              <Link href="#service">Conseils</Link>
            </li>
            <li className="navbar-item my-auto">
              <Link href="#service">FAQ</Link>
            </li>
            <li className="p-4">
              <Link href="/contact" className="primary-link">
                Demande de devis
              </Link>
            </li>
          </ul>
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
