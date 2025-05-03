import { assets } from "../assets/assets";

// Define each hexagon's position, size, and color
const hexData = [
  // Row 1
  {
    Position_md: "md:top-[24%] md:left-[45%]",
    Position_sm: "top-[38%] left-[100%]",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-pink-500",
    skill: "Bootstrap",
    Url: assets.Bootstrap,
    width: 90,
  },

  // Row 2
  {
    Position_md: "md:top-[40%] md:left-[27%]",
    Position_sm: "top-[50%] left-[17%]",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-pink-500",
    skill: "Node.js",
    Url: assets.Node,
    width: 90,
  },
  {
    Position_md: "md:top-[40%] md:left-[63%]",
    Position_sm: "top-[40%] left-[63%]",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-pink-500",
    skill: "JavaScript",
    Url: assets.JS,
    width: 70,
  },

  // Row 3
  {
    Position_md: "md:top-[55%] md:left-[9%]",
    Position_sm: "top-[50%] left-[3%]",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-blue-500",
    skill: "Tailwind",
    Url: assets.Tailwind,
    width: 90,
  },
  {
    Position_md: "md:top-[56%] md:left-[45%]",
    Position_sm: "top-1/2 left-1/2 mx-auto -translate-x-1/2 -translate-y-1/2",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-blue-500",
    skill: "React",
    Url: assets.React,
    width: 90,
  },
  {
    Position_md: "md:top-[55%] md:left-[81%]",
    Position_sm: "top-[38%] left-[3%]",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-blue-500",
    skill: "Express",
    Url: assets.Express,
    width: 90,
  },

  // Row 4
  {
    Position_md: "md:top-[71%] md:left-[27%]",
    Position_sm: "top-[56%] left-[10%]",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-pink-500",
    skill: "MongoDB",
    Url: assets.Mongodb,
    width: 90,
  },
  {
    Position_md: "md:top-[71%] md:left-[63%]",
    Position_sm: "top-[32%] left-[10%]",
    size: "md:w-65 md:h-65",
    size_md: "w-25 h-25",
    color: "text-pink-500",
    skill: "Git",
    Url: assets.Git,
    width: 100,
  },

  // Small edge hexes (placeholders)
  {
    Position_md: "md:top-[10%] md:left-[10%]",
    Position_sm: "top-[10%] left-[10%]",
    size: "md:w-32 md:h-32",
    size_md: "w-12 h-12",
    color: "text-blue-500",
    skill: null,
    Url: null,
    width: null,
  },
  {
    Position_md: "md:top-[70%] md:left-[15%]",
    Position_sm: "top-[70%] left-[15%]",
    size: "md:w-12 md:h-12",
    size_md: "w-7 h-7",
    color: "text-blue-500",
    skill: null,
    Url: null,
    width: null,
  },
  {
    Position_md: "md:top-[0%] md:left-[90%]",
    Position_sm: "top-[0%] left-[90%]",
    size: "md:w-12 md:h-12",
    size_md: "w-7 h-7",
    color: "text-blue-500",
    skill: null,
    Url: null,
    width: null,
  },
  {
    Position_md: "md:top-[10%] md:left-[80%]",
    Position_sm: "top-[10%] left-[80%]",
    size: "md:w-24 md:h-24",
    size_md: "w-12 h-12",
    color: "text-blue-500",
    skill: null,
    Url: null,
    width: null,
  },
];

// A reusable Hexagon SVG component
const Hex = ({
  size,
  size_md,
  skill,
  Url,
  width,
  Position_md,
  Position_sm,
}) => (
  <div
    className={`absolute ${size_md} ${size} ${Position_md} ${Position_sm} rotate-[30deg] z-10 drop-shadow-2xl`}
    style={{
      transform: "translate(-50%, -50%)",
    }}
  >
    <svg
      viewBox="0 0 100 100"
      fill="rgba(255,255,255,0.1)"
      stroke="rgba(255,255,255,0.5)"
      stroke-opacity="0.1"
      className="w-full h-full"
    >
      <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" />
    </svg>
    {skill && (
      <div className="absolute -rotate-[30deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={Url} className="z-20 p-1" style={{ width: width }} />
        <p className="text-white text-xs sm:text-sm font-semibold text-center">
          {skill}
        </p>
      </div>
    )}
  </div>
);

// The main grid container component
const HoneycombGrid = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#200d28] via-[#051321] to-[#0f1b3d] overflow-hidden">
      {hexData.map((hex, index) => (
        <Hex key={index} {...hex} />
      ))}
    </div>
  );
};

export default HoneycombGrid;
