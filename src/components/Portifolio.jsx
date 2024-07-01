import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import Example from "../assets/616e84980a85967c49320f81_Frame-155.png";
import TodoImage from "../assets/todoList.png";
const Portifolio = () => {
  const portifolio = [
    { id: 1, src: TodoImage,resource:"https://github.com/VenkateshKWebDev/CRUD-APP-MERN-1/",name:"CRUD-APP"},
    { id: 2, src: Example },
    { id: 3, src: Example }
  ];
  return (
    <div
      name="Portfolio"
      className="text-white py-8 w-full h-full bg-gradient-to-b from-black via-black to-gray-800 md:h-full "
    >
      <div className="max-w-screen-lg w-full h-full px-4 flex flex-col justify-center mx-auto">
        <div className="pb-8">
          <p className=" font-bold text-4xl inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check My Projects!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portifolio.map(({ id, src,resource,name }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                key={id}
                src={src}
                alt="myproject"
                className=" h-2/3 w-full rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center ml-11 justify-center">
                <div>
                  <h2>{name}</h2>
                </div>
                <div className="flex items-center m-2">
                  <div>
                  <h2 className="text-green-500 font-semibold">Code</h2>
                  </div>
                  <div className="ml-2">
                <a href={resource} target="__blank" className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 text-blue-700 ">
                 <FaExternalLinkAlt />
                </a>

                  </div>
                
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
