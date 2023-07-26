import React from "react";
import HeroImage from "../assets/pngaaa.com-2755989.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-3xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            I am a fresher just Graduated in 2023, And I am quite Interest In
            Web Development and I am learning Front-end languages from past 3
            Months.
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
            className="w-2/3  rounded-2xl mx-auto md:w-full "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
