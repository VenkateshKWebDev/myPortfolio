import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const Links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Portfolio" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white fixed px-4">
      <h1 className="font-medium text-5xl font-signature ml-2">Venky</h1>
      <ul className=" hidden md:flex">
        {Links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className=" font-medium text-gray-500 px-4 capitalize cursor-pointer hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-600 "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500">
          {Links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="hover:text-white duration-500 px-4 py-6 capitalize cursor-pointer text-4xl"
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
