import { Play } from "lucide-react";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-screen absolute text-white z-10"
      style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)" }}>
      <div className="absolute bottom-[28%] md:bottom-[30%] left-0 px-8 md:px-14 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-2xl tracking-tight">
          {title}
        </h1>

        <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-200 leading-relaxed line-clamp-3 md:line-clamp-4 drop-shadow">
          {overview}
        </p>

        <div className="flex gap-3 mt-5">
          <button className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-bold rounded hover:bg-white/80 transition-all duration-200 shadow-lg">
            <Play size={20} fill="black" />
            Play
          </button>

          <button className="flex items-center gap-2 bg-gray-600/70 text-white px-5 md:px-7 py-2 md:py-3 text-sm md:text-lg font-semibold rounded hover:bg-gray-500/80 transition-all duration-200 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
