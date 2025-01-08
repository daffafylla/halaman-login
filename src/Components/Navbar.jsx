// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";

// Daftar menu navigasi
const MenuLinks = [
  { name: "Episodes", link: "https://www.youtube.com/watch?v=QszvA7ibMTU" },
  { name: "Store", link: "https://mirai.dora-world.com/en/" },
  { name: "Toys", link: "https://www.aliexpress.com/w/wholesale-doraemon-toys-in-japan.html" },
  { name: "3D videos", link: "https://www.youtube.com/watch?v=bHMDU9nrEQE" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi toggle untuk membuka/menutup menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <GiAtomicSlashes className="text-4xl text-primary rotate" />
          <div className="text-xl font-bold text-gray-700">
            <span>Dora</span>
            <span>emon</span>
          </div>
        </div>

        {/* Toggler untuk Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary text-3xl focus:outline-none">
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Menu Navigasi */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row items-center md:gap-6 p-4 md:p-0">
            {MenuLinks.map((data, index) => (
              <li key={index} className="my-2 md:my-0">
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navlink text-gray-700 hover:text-primary transition-colors"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bagian Pencarian dan Bahasa */}
        <div className="hidden md:flex items-center gap-6">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-3 rounded-full bg-slate-200 border border-gray-300 focus:outline-none"
          />
          <button className="bg-primary text-white p-2 rounded-full">
            <FaSearch />
          </button>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-gray-700">Eng</span>
            <MdArrowDropDown className="text-xl text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
