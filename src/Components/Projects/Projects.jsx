import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Youtue Clone"
          main=" Developed a YouTube-like video streaming UI using React, integrated with YouTube Data API v3.
            • Implemented state management using Redux Toolkit for smooth navigation and UI consistency.
            • Key features: live chatbox, nested comment section, video search, and sidebar toggle.
            • Built with React Router for routing and Tailwind CSS for responsive styling."
            link="https://cloneyoutube-4.onrender.com/"
            image="public\assets\youu.webp"
        />
        <ProjectCard
          title="Netflix Clone"
          main="Built a smart movie browsing UI using React, integrated TMDB API and Firebase.
             • Authentication via Firebase Auth, state managed with Redux Toolkit.
             • Features include multi-language toggle, GPT-based UI logic, and movie search.
             • Tailwind CSS used for responsive modern design. Deployed on Render."
              link="https://netflixgpt-abbc.onrender.com/"
              image="public\assets\nettt.webp"
        />
      </div>
    </div>
  );
};

export default Projects;
