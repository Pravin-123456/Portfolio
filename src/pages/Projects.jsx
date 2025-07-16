import { useEffect, useRef, memo, lazy, Suspense, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { ProjectInfo } from "../assets/assets";

// Lazy-loaded components
const PageCount = lazy(() => import("../components/PageCount"));
const ProjectCard = lazy(() => import("../components/ProjectCard"));

// Reusable loading fallback
const Fallback = () => <p className="text-white">Loading...</p>;

// Tilt options
const tiltOptions = {
  scale: 1.01,
  speed: 300,
  max: 10,
  gyroscope: true,
  gyroscopeSamples: 5,
};

// Tilt wrapper with optimizations
const Tilt = memo(({ children }) => {
  const tiltRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const ref = tiltRef.current;
    const timer = setTimeout(() => {
      if (ref) VanillaTilt.init(ref, tiltOptions);
    }, 100);

    return () => {
      clearTimeout(timer);
      ref?.vanillaTilt?.destroy();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={`box h-[300px] w-[250px] relative bottom-3 rounded-xl group 
        ${isMobile ? "shadow-md" : "backdrop-blur-3xl shadow-2xl backface-hidden preserve-3d"} 
        will-change-transform`}
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
