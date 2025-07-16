import React from "react";

const ProjectCard = ({ img, video, title, type, des, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className=" h-[300px] w-[250px] bottom-3 relative rounded-xl group backdrop-blur-3xl shadow-2xl">
        {/* Top Section: Image/Video container */}
        <div
          className="z-50 relative w-[250px] h-[200px]  group-hover:w-[270px] transition-all duration-300 ease-in-out backdrop-blur-3xl bg-white/20 overflow-hidden"
          style={{
            clipPath: `path("M 10,0 L 90,0 A 10,10,0,0,1 100,10 L 100,40 A 10,10,0,0,0 110,50 L 240,50 A 10,10,0,0,1 250,60 L 250,190 A 10,10,0,0,1 240,200 L 160,200 A 10,10,0,0,1 150,190 L 150,160 A 10,10,0,0,0 140,150 L 10,150 A 10,10,0,0,1 0,140 L 0,10 A 10,10,0,0,1 10,0 Z")`,
          }}
        >
          <img
            src={img}
            alt="Project preview"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center z-10 group-hover:hidden"
          />
          <video
            src={video}
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Top-right Label */}
        <div
          className="z-50 w-[150px] h-[50px] backdrop-blur-3xl bg-white/20 absolute top-0 right-0 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
          style={{
            clipPath: `path("M 2,10 A 10,10,0,0,1 10,0 L 140,0 A 10,10,0,0,1 150,10 L 150,40 A 10,10,0,0,1 140,48 L 12,48 A 10,10,0,0,1 2,40 L 2,10 Z")`,
          }}
        >
          <h1 className="text-white text-sm font-semibold text-center leading-[50px]">
            {title}
          </h1>
        </div>

        {/* Bottom Info Section */}
        <div
          className="z-50 absolute top-38 w-[250px] h-[200px] backdrop-blur-3xl bg-white/20 group-hover:translate-x-[-10px] group-hover:translate-y-[10px] transition-all duration-300 ease-in-out"
          style={{
            clipPath: `path("M 10,2 L 140,2 A 10,10,0,0,1 148,10 L 148,40 A 10,10,0,0,0 158,52 L 240,52 A 10,10,0,0,1 250,60 L 250,150 A 10,10,0,0,1 240,160 L 10,160 A 10,10,0,0,1 0,150 L 0,10 A 10,10,0,0,1 10,2 Z")`,
          }}
        >
          <h1 className="text-white text-start py-5 px-5 text-sm font-medium">
            {type}
          </h1>
          <p className="text-sm mx-5 text-start text-wrap">{des}</p>
        </div>
      </div>
    </a>
  );
};

export default React.memo(ProjectCard);
