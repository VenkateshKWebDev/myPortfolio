import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          quod praesentium! Hic ullam numquam, nemo veritatis animi perferendis
          quaerat, velit qui dicta aliquam sed illo amet eius tempora laudantium
          cupiditate optio omnis neque, ad eveniet asperiores non! Velit atque
          nam eos et illo necessitatibus fugit impedit. Tempore qui laudantium
          iusto.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit
          explicabo illo ut blanditiis minima dolorem ab, harum numquam at
          soluta quibusdam sint neque adipisci culpa nemo ex temporibus quas
          eius odio nihil! Itaque ab assumenda quibusdam, commodi, eos facilis
          pariatur odit consectetur doloremque, ipsum incidunt id at modi odio.
        </p>
      </div>
    </div>
  );
};

export default About;
