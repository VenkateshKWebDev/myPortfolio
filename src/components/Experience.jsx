import React from "react";
import html from "../assets/Experience/html-5.png";
import css from "../assets/Experience/css-3.png";
import js from "../assets/Experience/js.png";
import react from "../assets/Experience/atom.png";
import tailwind from "../assets/Experience/tailwind.png";
import github from "../assets/Experience/github.png";
const Experience = () => {
  const Experience = [
    {
      id: 1,
      title: "HTML",
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "JS",
      src: js,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "React",
      src: react,
      style: "shadow-blue-500",
    },
    {
      id: 5,
      title: "TailWind",
      src: tailwind,
      style: "shadow-sky-500",
    },
    {
      id: 6,
      title: "Github",
      src: github,
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="Experience"
      className="text-white w-full h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-bold text-4xl inline border-b-4 border-gray-500 p-2">
            Experiences
          </p>
          <p className="py-6">These Are The Technologies I Work With</p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 py-8 sm:px-0">
          {Experience.map(({ id, style, src, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-20 mx-auto" alt="html" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
