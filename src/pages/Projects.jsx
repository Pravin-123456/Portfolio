import { useEffect, useRef, memo, lazy, Suspense } from "react";
import VanillaTilt from "vanilla-tilt";
import { ProjectInfo } from "../assets/assets";

const PageCount = lazy(() => import("../components/PageCount"));
const ProjectCard = lazy(() => import("../components/ProjectCard"));

const tiltOptions = {
  scale: 1.01,
  speed: 500,
  max: 15,
};

// Reusable fallback component
const Fallback = () => <p className="text-white">Loading...</p>;

const Tilt = memo(({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const currentRef = tiltRef.current;
    if (currentRef) {
      VanillaTilt.init(currentRef, tiltOptions);
    }
    return () => {
      currentRef?.vanillaTilt?.destroy();
    };
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
        {ProjectInfo.map(({ img, video, title, type, des, url }, index) => (
          <Tilt key={index}>
            <Suspense fallback={<Fallback />}>
              <ProjectCard
                img={img}
                video={video}
                title={title}
                type={type}
                des={des}
                url={url}
              />
            </Suspense>
          </Tilt>
        ))}
      </div>

      <Suspense fallback={<Fallback />}>
        <PageCount page={4} />
      </Suspense>
    </section>
  );
};

export default Projects;
