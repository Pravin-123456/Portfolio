import { assets } from "../assets/assets";
import PageCount from "../components/PageCount";

const About = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-[#09030d] via-[#1d0f26] to-[#051321] overflow-hidden" id="about">
      <div className="relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[85%] h-[85%] md:w-[80%] md:h-[80%] backdrop-blur-xs bg-white/2 border border-white/5 rounded-2xl shadow-lg flex p-5">
        <div className="md:w-1/2 text-center text-white md:mx-20 flex flex-col-reverse md:block">
          <div className="">
            <h1 className="text-2xl md:text-5xl md:p-10">About me</h1>
            <h3 className="text-md">
              <span className="md:text-3xl">
                Hi, I’m{" "}
                <span className="text-yellow-400 md:text-4xl">
                  Pravin Kumar
                </span>
              </span>{" "}
              a dedicated Full Stack Developer with a strong grasp of building
              scalable, modern web applications from the ground up.
              <br />
              <br className="hidden md:block" />
              <hr className="opacity-20 w-[90%] m-auto md:m-0" />
              <br className="hidden md:block" />
              <p>
                I specialize in JavaScript technologies like React and Node.js,
                combining clean UI design with powerful backend architecture.
                I’m passionate about crafting intuitive, high-performance user
                experiences with clean, maintainable code.
              </p>
              <br className="hidden md:block" />
              <hr className="opacity-20 w-[90%] m-auto md:m-0 hidden md:hidden" />
              <br className="hidden md:block" />
              <a href={assets.Resume} download={'PravinKumar_resume.pdf'}>
                <button className="border p-2 rounded-xl bg-amber-500 hover:bg-[#1d0f26] text-xl m-2 cursor-pointer">
                  Get Resume
                </button>
              </a>
            </h3>
          </div>
          <div className="relative">
            <img
              src={assets.Profile2}
              alt="about"
              className="absolute w-[300px] left-1/2 -top-60 md:-top-0 -translate-x-1/2 md:w-[500px]  md:-left-1/2 md:translate-x-[170%] md:-translate-y-[90%] fade-bottom"
            />
          </div>
        </div>
      </div>
      <PageCount page={2} />
    </div>
  );
};

export default About;
