import React from "react";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 mr-36" src="/assets/Programming-rafiki.png"alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-gray-400 mt-2">
                  Frontend developer skilled in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React. I enjoy transforming design concepts into functional applications and constantly explore new tools to enhance performance and user experience.
                </p>
              </span>

            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Developer
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-gray-400 mt-2">
                  Skilled in MySQL with a solid understanding of relational databases. Currently exploring MongoDB to build expertise in NoSQL database systems and broaden backend capabilities.
                </p>
              </span>

            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm text-gray-400 mt-2">
                  Experienced in building scalable server-side applications using Node.js, Express, and databases like MongoDB and MySQL. Passionate about APIs, authentication, and performance optimization.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
