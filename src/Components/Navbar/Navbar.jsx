import React, { useState } from "react";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";

const MenuLinks = [
  {
    name: "Episodes",
    link: "https://www.youtube.com/watch?v=QszvA7ibMTU",
  },
  {
    name: "Store",
    link: "https://mirai.dora-world.com/en/",
  },
  {
    name: "Toys",
    link: "https://www.aliexpress.com/w/wholesale-doraemon-toys-in-japan.html",
  },
  {
    name: "3D videos",
    link: "https://www.youtube.com/watch?v=bHMDU9nrEQE",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div data-aos="fade-down" className="container py-4">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <div className="flex items-center gap-4">
            <GiAtomicSlashes className="text-6xl text-primary rotate" />
            <div className="flex flex-col text-2xl font-bold text-gray-600 leading-5">
              <span>Dora</span>
              <span>emon</span>
            </div>
          </div>

          {/* toggler button for mobile */}
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary text-3xl focus:outline-none"
            >
              { isMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>

          {/* links section */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:gap-4 p-4 md:p-0">
              {MenuLinks.map((data, index) => {
                return (
                  <li key={index} className="my-2 md:my-0">
                    <a className="navlink" href={data.link}>
                      {data.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Search section */}
          <div className="hidden md:flex items-center gap-6">
            <input
              type="text"
              placeholder="Search"
              className="hidden sm:block py-2 px-3 rounded-full bg-slate-200"
            />
            <div className="bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer">
              <FaSearch className="text-white text-sm" />
            </div>
            <div className="center navlink cursor-pointer">
              Eng
              <span>
                <MdArrowDropDown className="text-xl text-primary" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    