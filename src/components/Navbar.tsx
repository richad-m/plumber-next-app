import Link from "next/link";
import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav((nav) => !nav);
  return (
    <nav>
      <div className="fixed w-full z-10  navbar">
        <div className="flex m-auto justify-between items-center p-4">
          <Link href="/" id="nav-button">
            <h1 className="font-bold text-4xl navbar-title">Titre à définir</h1>
          </Link>
          <ul className="hidden sm:flex">
            <li className="p-4 navbar-item">
              <Link href="#skill-section">Expertise</Link>
            </li>
            <li className="p-4 navbar-item">
              <Link href="#key-number">Chiffres clés</Link>
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
