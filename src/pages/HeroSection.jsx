// import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import PageCount from "../components/PageCount";



const HeroSection = () => {
  // useEffect(() => {
  //   const bg = new Image();
  //   bg.src = assets.Background;
  // }, []);

  return (
    <div
      id="home"
      className="relative h-screen w-full overflow-hidden  bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.Background})`,
        backgroundPosition: "65% center",
      }}
    >
      <div className="relative m-8 z-10 flex flex-col justify-center h-full text-white px-4 md:px-16">
        <div className="text-center md:text-start max-w-3xl justify-center">
          <h1 className="text-4xl">I am</h1>
          <h1 className="text-6xl md:text-[100px] -ms-2">Fullstack</h1>
          <h1 className="text-6xl md:text-[100px] -ms-2">Developer</h1>
          <p className="text-2xl my-3">
            Being full stack means never saying{" "}
            <span className="text-shadow-md text-yellow-400">
              ❛ not my layer ❜
            </span>
          </p>
          <a href={assets.Resume} download={"PravinKumar_resume.pdf"}>
            <button className="border-2 hover:bg-yellow-400 border-amber-50 rounded-lg p-3 backdrop-blur-3xl my-3 cursor-pointer">
              Get Resume
            </button>
          </a>
        </div>
        <PageCount page={1} />
      </div>
    </div>
  );
};

export default HeroSection;
