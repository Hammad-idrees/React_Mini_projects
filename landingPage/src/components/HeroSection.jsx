import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your ideas to life with our powerful
        and intuitive build tools. Whether you're a seasoned developer or just
        starting out, our tools are designed to streamline your workflow.
      </p>
      <div className="flex justify-center my-10 gap-4">
        {/* Primary CTA */}
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-800 text-white py-3 px-6 rounded-md hover:from-amber-600 hover:to-yellow-600 transition font-medium"
        >
          Start for free
        </a>

        {/* Secondary CTA */}
        <a
          href="#"
          className="border border-orange-500 text-orange-400 py-3 px-6 rounded-md 
               hover:bg-orange-500 hover:text-white transition font-medium"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col lg:flex-row mt-16 justify-center gap-10 px-4">
  
  {/* Video Card 1 */}
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-800 rounded-2xl blur opacity-30 group-hover:opacity-60 transition"></div>
    <video
      autoPlay
      loop
      muted
      className="relative w-full max-w-[520px] h-[300px] 
                 object-cover rounded-2xl 
                 border border-neutral-700 
                 shadow-2xl 
                 group-hover:scale-[1.02] transition duration-300"
    >
      <source src={video1} type="video/mp4" />
    </video>
  </div>

  {/* Video Card 2 */}
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-800 rounded-2xl blur opacity-30 group-hover:opacity-60 transition"></div>
    <video
      autoPlay
      loop
      muted
      className="relative w-full max-w-[520px] h-[300px] 
                 object-cover rounded-2xl 
                 border border-neutral-700 
                 shadow-2xl 
                 group-hover:scale-[1.02] transition duration-300"
    >
      <source src={video2} type="video/mp4" />
    </video>
  </div>

</div>
    </div>
  );
};

export default HeroSection;
