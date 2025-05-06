import { assets } from "../assets/assets";
import PageCount from "../components/PageCount";

const Hex = ({ image, skill }) => (
  <div className="w-25 h-25 md:w-55 md:h-55 relative -rotate-[30deg]">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <clipPath id="hexClip">
          <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
        </clipPath>
      </defs>
      <polygon
        points="50,0 93,25 93,75 50,100 7,75 7,25"
        fill="rgba(255,255,255,0.1)"
        stroke="rgba(255,255,255,0.5)"
        strokeOpacity="0.1"
      />
    </svg>

    {image && (
      <div className="absolute inset-0 flex flex-col items-center justify-center rotate-[30deg]">
        <img
          src={image}
          alt={skill}
          className="md:w-20 md:h-20 w-10 h-10 m-1"
        />
        <p className="text-sm md:text-xl text-white text-center">{skill}</p>
      </div>
    )}
  </div>
);

<div className="w-[90px] h-[115px] md:w-55 md:h-55 relative -rotate-[30deg]">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <clipPath id="hexClip">
        <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
      </clipPath>
    </defs>
    <polygon
      points="50,0 93,25 93,75 50,100 7,75 7,25"
      fill="rgba(255,255,255,0.1)"
      stroke="rgba(255,255,255,0.5)"
      strokeOpacity="0.1"
    />
  </svg>
</div>;

const HexGrid = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#200d28] via-[#051321] to-[#0f1b3d] overflow-hidden pt-20"  id="skills">
      <h1 className="text-3xl relative -top-6 md:top-20 text-white">SKILLS</h1>

      {/* Mobile Screen */}
      <div className="relative md:hidden">
        <div className="flex flex-col justify-center items-center">
          {/* First row */}
          <div className="flex justify-center relative top-38">
            <Hex image={assets.React} skill="React" />
          </div>

          {/* Second row (shifted right) */}
          <div className="flex justify-center md:gap-35 top-1 relative gap-17">
            <Hex image={assets.Node} skill="Node" />
            <Hex image={assets.Express} skill="Express" />
          </div>

          {/* Third row */}
          <div className="flex justify-center relative top-13 gap-17">
            <Hex image={assets.JS} skill="Javascript" />
          </div>

          {/* Third row */}
          <div className="flex justify-center relative bottom-25 gap-17">
            <Hex image={assets.Tailwind} skill="Tailwind" />
            <Hex image={assets.Mongodb} skill="MongoDB" />
          </div>

          {/* Fourth row */}
          <div className="flex justify-center bottom-25 relative gap-17">
            <Hex image={assets.Bootstrap} skill="Bootstrap" />
            <Hex image={assets.Git} skill="Git" />
          </div>

          {/* 1st absolute hexagon */}
          <div className="absolute top-36 -left-19">
            <div className="w-[90px] h-[115px] md:w-35 md:h-35 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 2nd absolute hexagon */}
          <div className="absolute top-60 -left-19">
            <div className="w-[90px] h-[115px] md:w-35 md:h-35 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 3rd absolute hexagon */}
          <div className="absolute top-12 left-22">
            <div className="w-[90px] h-[115px] md:w-30 md:h-30 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 4th absolute hexagon */}
          <div className="absolute top-85 left-22">
            <div className="w-[90px] h-[115px] md:w-30 md:h-30 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 5th absolute hexagon */}
          <div className="absolute top-45 left-220">
            <div className="w-[90px] h-[115px] md:w-15 md:h-15 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 6th absolute hexagon */}
          <div className="absolute top-36 left-64">
            <div className="w-[90px] h-[115px] md:w-35 md:h-35 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

     {/* 7th absolute hexagon */}
     <div className="absolute top-60 left-64">
            <div className="w-[90px] h-[115px] md:w-35 md:h-35 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Descktop Screen */}
      <div className="relative hidden md:block">
        <div className="flex flex-col justify-center items-center">
          {/* First row */}
          <div className="flex justify-center relative top-17 md:top-27 md:gap-35">
            <Hex image={assets.React} skill="React" />
          </div>

          {/* Second row (shifted right) */}
          <div className="flex justify-center md:gap-35 relative gap-17">
            <Hex image={assets.Node} skill="Node" />
            <Hex image={assets.Express} skill="Express" />
          </div>

          {/* Third row */}
          <div className="flex justify-center relative bottom-16 gap-15 md:gap-35 md:bottom-27">
            <Hex image={assets.Tailwind} skill="Tailwind" />
            <Hex image={assets.JS} skill="Javascript" />
            <Hex image={assets.Mongodb} skill="MongoDB" />
          </div>

          {/* Fourth row */}
          <div className="flex justify-center relative md:gap-35 md:bottom-55">
            <Hex image={assets.Bootstrap} skill="Bootstrap" />
            <Hex image={assets.Git} skill="Git" />
          </div>

          {/* first absolute hexagon */}
          <div className="absolute top-49 left-13">
            <div className="w-[90px] h-[115px] md:w-35 md:h-35 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* second absolute hexagon */}
          <div className="absolute top-49 left-187">
            <div className="w-[90px] h-[115px] md:w-35 md:h-35 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* third absolute hexagon */}
          <div className="absolute top-138 left-17">
            <div className="w-[90px] h-[115px] md:w-30 md:h-30 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* Fourth absolute hexagon */}
          <div className="absolute top-138 left-187">
            <div className="w-[90px] h-[115px] md:w-30 md:h-30 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* Fifth absolute hexagon */}
          <div className="absolute top-45 left-220">
            <div className="w-[90px] h-[115px] md:w-15 md:h-15 relative -rotate-[30deg]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <clipPath id="hexClip">
                    <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" />
                  </clipPath>
                </defs>
                <polygon
                  points="50,0 93,25 93,75 50,100 7,75 7,25"
                  fill="rgba(255,255,255,0.1)"
                  stroke="rgba(255,255,255,0.5)"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <PageCount page={3} />
    </div>
  );
};

export default HexGrid;
