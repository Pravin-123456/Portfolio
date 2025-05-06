import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import ProjectCard from "../components/ProjectCard";
import { ProjectInfo } from "../assets/assets";
import PageCount from "../components/PageCount";

function Tilt({ children }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      scale: 1.01,
      speed: 500,
      max: 15,
    });
  }, []);

  return (
    <div
      ref={tiltRef}
      className="box h-[300px] w-[250px] bottom-3 relative rounded-xl group backdrop-blur-3xl shadow-2xl backface-hidden antialiased preserve-3d"
    >
      {children}
    </div>
  );
}

const Projects = () => {
  return (
    <div id="projects"
      className="relative min-h-screen bg-gradient-to-br from-[#051321] via-[#061d3c] to-[#0f0727]
 text-center py-10"
    >
      <h2 className="text-3xl text-white mb-15">PROJECTS</h2>
      <div className="grid md:mx-50 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center text-white">
        {/* Card 1 */}
        {ProjectInfo.map((project, index) => (
          <Tilt key={index}>
            <ProjectCard {...project} />
          </Tilt>
        ))}
      </div>
      <PageCount page={4} />
    </div>
  );
};

export default Projects;
