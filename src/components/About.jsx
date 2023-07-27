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
          Hello there! I am a passionate and ambitious web developer, eager to
          embark on an exciting journey in the world of web development. As a
          fresher in this field, I am brimming with creativity and a strong
          desire to learn and grow. I have always been fascinated by technology
          and its power to bring ideas to life. During my academic journey and
          personal projects, I have developed a solid foundation in HTML, CSS,
          and JavaScript, and I am enthusiastic about exploring new frameworks
          and technologies to expand my skill set.
        </p>
        <br />
        <p className="text-xl">
          One of my key strengths is my adaptability and willingness to take on
          challenges. I am eager to work collaboratively with experienced
          developers and designers to gain valuable insights and contribute my
          ideas effectively. Thank you for taking the time to get to know me. I
          am thrilled to take my first steps into the professional realm and
          bring my creativity, enthusiasm, and dedication to any web development
          projects that come my way. Let's build the future together!
        </p>
      </div>
    </div>
  );
};

export default About;
