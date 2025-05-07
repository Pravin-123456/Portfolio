import React, { Fragment } from "react";
import { service } from "../assets/assets";

const Services = () => {
  return (
    <div className=' bg-gradient-to-br from-[#061d3c] via-[#0f0727] to-[#0f0727] text-center p-4 text-white'>
      <h1 className="text-3xl">My Services</h1>
      <div
        className="w-full text-white flex  justify-center py-20"
        id="services"
      >
        <div className="flex flex-wrap gap-10 justify-center w-[85%]">
          {service.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/5 rounded-xl p-6 pt-12 w-[375px] min-h-[150px] text-left backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Number Badge */}
              <div className="absolute -top-5 left-5 bg-white/10 border border-white/30 rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title and Description */}
              <h2 className="text-md font-bold pb-2 tracking-wide">
                {item.name}
              </h2>
              <p className="text-sm text-white/90">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
