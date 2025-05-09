import React from "react";
import HeroImage from "../assets/HeroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="p-8 h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-2xl sm:text-7xl font-bold text-white ">
            I'm a Driven Dev Venkatesh
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Hi, I'm Venkatesh, a passionate and dedicated tech enthusiast with a strong foundation in computer science.
            I recently graduated with a degree in Computer Science and am actively seeking opportunities to grow as a full-stack or backend developer.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="text-white w-fit group flex items-center px-6 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer "
            >
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight
                  className="group-hover:rotate-90 duration-300 cursor-pointer ml-1"
                  size={25}
                />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="w-2/3 my-4  rounded-2xl  mx-auto md:w-full "
          ></img>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
