import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-10 bg-[#1a1d21]">
      <div className="w-full max-w-6xl flex flex-col gap-8 md:flex-row justify-between">
        {/* Right half widgets */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 ml-[650px]">
          <div className="w-[calc(100%+60px)]">
            <Tabs />
          </div>
          <div className="w-[500px] h-[3px] mx-auto bg-[#333639]"></div>
          <div className="w-[calc(100%+60px)]">
            <Gallery />
          </div>
          <div className="w-[500px] h-[3px] mx-auto bg-[#333639]"></div>
        </div>
      </div>
    </div>
  );
};

export default App;