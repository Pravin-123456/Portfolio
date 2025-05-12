import React, { useEffect, useRef, memo } from "react";
import VanillaTilt from "vanilla-tilt";
import ProjectCard from "../components/ProjectCard";
import { ProjectInfo } from "../assets/assets";
import PageCount from "../components/PageCount";

const tiltOptions = {
  scale: 1.01,
  speed: 500,
  max: 15,
};

const Tilt = memo(({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, tiltOptions);
    }
  }, []);

  return (
    <div
      ref={tiltRef}
      className="box h-[300px] w-[250px] relative bottom-3 rounded-xl group backdrop-blur-3xl shadow-2xl backface-hidden antialiased preserve-3d"
    >
      {children}
    </div>
  );
});

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-10 text-center bg-gradient-to-br from-[#051321] via-[#061d3c] to-[#0f0727]"
    >
      <h2 className="mb-10 text-3xl text-white">PROJECTS</h2>

      <div className="grid md:mx-50 justify-items-center gap-16 md:grid-cols-2 lg:grid-cols-3 px-6 text-white">
        {ProjectInfo.map((project, index) => (
          <Tilt key={index}>
            <ProjectCard {...project} />
          </Tilt>
        ))}
      </div>

      <PageCount page={4} />
    </section>
  );
};

export default Projects;
