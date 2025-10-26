import React, { useRef } from "react";
import Card from "./Card";
import { Plus } from "lucide-react";
import { FaArrowRight, FaArrowLeft, FaQuestion } from "react-icons/fa6";
import Button from "./btn";

const Gallery = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    const scrollAmount = 300;
    if (dir === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#363c43] rounded-2xl p-6 shadow-lg w-full md:max-w-6xl mx-auto flex flex-col md:flex-row md:gap-6">
      {/* Left side */}
      <div className="flex flex-col items-center md:items-start">
        <div className="w-6 h-6 bg-[#76717165] rounded-2xl flex items-center border-2 border-gray-400 justify-center">
          <FaQuestion />
        </div>

        <div className="hidden md:flex items-center mt-20">
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-row gap-0.5">
              <div className="w-3 h-3 bg-[#a6a4a465] rounded-[1px]"></div>
              <div className="w-3 h-3 bg-[#a6a4a465] rounded-[1px]"></div>
            </div>
            <div className="flex flex-row gap-0.5">
              <div className="w-3 h-3 bg-[#a6a4a465] rounded-[1px]"></div>
              <div className="w-3 h-3 bg-[#a6a4a465] rounded-[1px]"></div>
            </div>
            <div className="flex flex-row gap-0.5">
              <div className="w-3 h-3 bg-[#a6a4a465] rounded-[1px]"></div>
              <div className="w-3 h-3 bg-[#a6a4a465] rounded-[1px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap md:flex-nowrap">
          <h2 className="bg-[#1f2227] text-white px-8 py-4 rounded-2xl font-medium -mt-2">
            Gallery
          </h2>

          <div className="flex items-center gap-4 -mt-2">
            <div className="mr-6">
              <Button />
            </div>

            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-[#242527] transition-all duration-300 
               backdrop-blur-[104.56px] 
               shadow-[0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)_inset,0px_0px_48.91px_0px_rgba(255,255,255,0.05)_inset,9px_9px_7.1px_0px_rgba(0,0,0,0.4),-0.5px_-0.5px_6.9px_0px_rgba(255,255,255,0.25)]"
            >
              <FaArrowLeft size={18} className="text-gray-300" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-[#242527] transition-all duration-300 
               backdrop-blur-[104.56px] 
               shadow-[0px_3.26px_3.26px_0px_rgba(255,255,255,0.15)_inset,0px_0px_48.91px_0px_rgba(255,255,255,0.05)_inset,9px_9px_7.1px_0px_rgba(0,0,0,0.4),-0.5px_-0.5px_6.9px_0px_rgba(255,255,255,0.25)]"
            >
              <FaArrowRight size={18} className="text-gray-300" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {[...Array(6)].map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
