import React from "react";

const SwiperCard = ({number,title,para,img}) => {
  return (
    <div className="bg-black w-[24%] shrink-0 text-white rounded-lg shadow-md p-[1vw] border-[2px] border-white/30">
      <p>{number}</p>
      <h3 className="bold mt-[1.5vw] mb-[2vw]">{title}</h3>
      <p className="opacity-70 light">
        {para}
      </p>
      <img className="h-[5vw] object-cover mt-[3vw]" src={img} alt="" />
    </div>
  );
};

export default SwiperCard;
