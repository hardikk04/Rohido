import React from "react";

const MobileSwiperCard = ({ c = "", data }) => {
  const { number, title, para } = data;

  return (
    <div className={`${c} h-full p-[2vw] relative z-[1] text-white`}>
      <div className="relative z-[1]">
        <span>{number}</span>
        <h3 className="mt-[1vw]">{title}</h3>
        <p className="thin mt-[2vw]">{para}</p>
      </div>
      <div className="project-overlay absolute top-0 left-0 h-full w-full bg-black/60 pointer-events-none"></div>
    </div>
  );
};

export default MobileSwiperCard;
