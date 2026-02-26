import React from "react";
import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide mt-4">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 -mx-4">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:shadow-lg hover:border-orange-500 transition-all duration-300">
              {/* Icon */}
              <div className="flex h-12 w-12 mb-4 justify-center items-center rounded-full bg-gradient-to-r from-orange-500 to-red-800 shadow-md">
                {/* Icon inside with solid color */}
                <span className="text-white text-xl">{feature.icon}</span>
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.text}
              </h3>

              {/* Feature Description */}
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
