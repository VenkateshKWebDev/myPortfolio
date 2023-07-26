import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col justify-center mx-auto max-w-screen-lg h-full">
        <div className="pb-8">
          <p className="font-bold text-4xl inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit The Below Form To Approach Me</p>
          <div className="flex justify-center items-center px-4">
            <form
              action="https://getform.io/f/e4530a8d-3891-4049-bd86-dd046c316d82"
              method="POST"
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                className="text-white bg-transparent border-2 p-2 focus:outline-none rounded-md"
              ></input>
              <input
                type="text"
                name="Email"
                placeholder="Enter Your Email"
                className="my-4 text-white bg-transparent border-2 p-2 focus:outline-none rounded-md"
              ></input>
              <textarea
                name="Message"
                placeholder="Enter Your Message"
                rows={10}
                className="text-white bg-transparent border-2 p-2 focus:outline-none rounded-md"
              ></textarea>
              <button className="py-3 px-6 text-white bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md flex items-center my-8 mx-auto hover:scale-110 duration-300">
                Lets Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
