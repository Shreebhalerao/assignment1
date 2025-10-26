import React from "react";
import Img from "../assets/img.jpg"

const Card = () => {
  return (
    <div className="min-w-[165px] bg-[#00000000] opacity-65 rounded-4xl overflow-hidden shadow-md">
      <img
        src={Img}
        alt="Gallery"
        className="w-full h-40 object-cover filter grayscale"
      />
    </div>
  );
};

export default Card;