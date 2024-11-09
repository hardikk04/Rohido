import gsap from "gsap";
import React from "react";

const ClientReviews = ({ active }) => {
  return (
    <div
      className={`client-img ${
        active ? "" : "grayscale border-white/30"
      } w-full h-[33.3%] border flex justify-center items-center`}
    >
      <img className="object-cover" src="/images/figma.png" alt="" />
    </div>
  );
};

export default ClientReviews;
