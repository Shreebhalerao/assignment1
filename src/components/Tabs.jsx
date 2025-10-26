import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa6";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabClasses = (tab) =>
    `px-10 py-2 rounded-xl text-[10px] md:text-base transition-all duration-200 ${
      activeTab === tab
        ? "bg-[#2b2e33] text-white shadow-xl shadow-black/70"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <div className="bg-[#2f3439] rounded-2xl p-6 flex flex-col md:flex-row gap-4 shadow-lg w-full md:w-auto max-w-5xl mx-auto">
      {/* Left section */}
      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-6 md:gap-0">
        <div className="w-6 h-6 bg-[#76717165] rounded-2xl flex items-center border-2 border-gray-400 justify-center">
          <FaQuestion />
        </div>

        {/* Dots (only visible on tablet and above) */}
        <div className="hidden md:flex items-center mt-20">
          <div className="flex flex-col gap-0.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-row gap-0.5">
                <div className="w-3 h-3 bg-[#474646c3] rounded-[1px]"></div>
                <div className="w-3 h-3 bg-[#474646c3] rounded-[1px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 bg-[#171717] rounded-2xl p-1">
          <button
            className={tabClasses("about")}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
          <button
            className={tabClasses("exp")}
            onClick={() => setActiveTab("exp")}
          >
            Experiences
          </button>
          <button
            className={tabClasses("rec")}
            onClick={() => setActiveTab("rec")}
          >
            Recommended
          </button>
        </div>

        {/* Scrollable content */}
        <div className="font-normal text-[#969696] max-h-40 overflow-y-auto scrollbar-hide text-xs md:text-sm leading-relaxed">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working
          at this awesome company for 3 years now.
          <br />
          <br />
          I was born and raised in Albany, NY & have been living in Santa Carla for
          the past 10 years with my wife Tiffany and my 4-year-old twin daughters —
          Emma and Ella. Both of them are just starting school, so my calendar is
          usually blocked between 9-10 AM. This is a...
          <br />
          <br />
          Additional text to make it scrollable: Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default Tabs;
