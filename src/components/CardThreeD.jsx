import React, { forwardRef } from "react";

const Card3D = forwardRef(({ id, frontSrc, frontAlt, backText, data }, ref) => {
  return (
    <div
      className="card absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[360px] perspective-[1000px]"
      id={id}
      ref={ref}
    >
      <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full">
        <div className="flip-card-inner relative w-full h-full">
          <div className="flip-card-front">
            <img className="w-full h-full object-cover" src={frontSrc} alt="" />
            <div className="overlay absolute top-0 left-0 h-full w-full bg-black/40"></div>
          </div>
          <div className="flip-card-back px-[1vw] py-[1.5vw] flex flex-col justify-between">
            <div className="w-full flex justify-between items-end lg:items-center">
              <h3 className="lg:text-xl">STRATEGY</h3>
              <img className="w-[2vw]" src="/images/favIcon.png" alt="" />
            </div>
            <div className="flex flex-col justify-evenly h-full py-[1vw]">
              <p className="thin lg:text-[1.6vw]">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="thin lg:text-[1.6vw]">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="thin lg:text-[1.6vw]">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="thin lg:text-[1.6vw]">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="thin lg:text-[1.6vw]">Lorem, ipsum.</p>
            </div>
            <div className="w-full flex justify-between items-start rotate-180 lg:items-center">
              <h3 className="lg:text-xl">STRATEGY</h3>
              <img className="w-[2vw]" src="/images/favIcon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card3D;
