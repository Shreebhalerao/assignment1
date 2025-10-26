import React from 'react';
import { Plus } from "lucide-react";

const Btn = () => {
 
  const baseClasses = "text-gray-300 font-medium flex text-[12px] items-center gap-1 transition duration-300";
  const shapeClasses = "px-4 py-3 rounded-full";  
  const backgroundClasses = "bg-[#ffffff1a ]";
  
  // Custom Neumorphism Shadow (Extruded look)
  const extrudedShadow = "shadow-[7px_7px_14px_#21252a,-7px_-7px_14px_#35383f]";
  
 
  const insetShadow = "hover:shadow-[inset_4px_4px_8px_#21252a,inset_-4px_-4px_8px_#35383f]";

  return (
    <button
      className={`${baseClasses} ${shapeClasses} ${backgroundClasses} ${extrudedShadow} `}
    >
      <Plus size={12} />
      <span>ADD IMAGE</span>
    </button>
  );
};

export default Btn;


 