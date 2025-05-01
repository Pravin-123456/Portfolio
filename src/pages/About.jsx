import { assets } from "../assets/assets";
import PageCount from "../components/PageCount";

const About = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-[#09030d] via-[#1d0f26] to-[#051321] overflow-hidden">
      <div className="relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80%] backdrop-blur-xs bg-white/2 border border-white/5 rounded-2xl shadow-lg flex">
        <div className="w-1/2 text-white mx-20">
          <h1 className="text-5xl text-center p-10">About me</h1>
          <h3 className="text-md text-xl">
            <span className="text-3xl">
              Hi, I’m{" "}
              <span className="text-yellow-400 text-4xl">Pravin Kumar</span>
            </span>{" "}
            a dedicated Full Stack Developer with a strong grasp of building
            scalable, modern web applications from the ground up.
            <br />
            <br />
            <hr className="opacity-20 w-[90%]"/>
            <br />
            <p>
              I specialize in JavaScript technologies like React and Node.js,
              combining clean UI design with powerful backend architecture. I’m
              passionate about crafting intuitive, high-performance user
              experiences with clean, maintainable code.
            </p>
            <br />
            <hr className="opacity-20 w-[90%] "/>
            <br />
            <button className="border p-2 rounded-xl bg-amber-500 text-xl">Get Resume</button>
          </h3>
        <div className="relative">
          <img
            src={assets.Profile2}
            alt="about"
            className="absolute fade-bottom w-[500px]! -top-50 left-1/2 translate-x-70 -translate-y-70"
          />
        </div>
        </div>
      </div>
      <PageCount page={2}/>  
    </div>
  );
};

export default About;
