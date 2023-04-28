import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [isNavbarSolid, setIsNavbarSolid] = useState(false);

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

  return (
    <nav className="sticky top-0 z-50 ">
      <div
        className={`w-full px-10 ${isNavbarSolid ? "solid-navbar" : "navbar"}`}
      >
        <div className="flex m-auto justify-between items-center p-4">
          <Link href="/" id="nav-button" className="flex">
            <Image src={logo} alt="Picture of the author" width={50} />

            <h1 className="font-bold text-4xl navbar-title">AC PRO</h1>
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
          <button className="sm:hidden block z-10">
            <FaBeer size={20} />
          </button>
          {/* Mobile menu */}
          <div className="hidden absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-black text-center ease-in duration-300">
            <ul className="hidden sm:flex">
              <li className="p-4 navbar-item text-4xl hover:text-gray-500">
                Lien 1
              </li>
              <li className="p-4 navbar-item text-4xl hover:text-gray-500">
                Lien 2
              </li>
              <li className="p-4 navbar-item text-4xl hover:text-gray-500">
                Lien 3
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
