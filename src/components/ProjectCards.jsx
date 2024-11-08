import React from "react";

const ProjectCards = ({ title, para, img, c }) => {
  return (
    <div
      className={`${c} w-[48%] h-[65vh] border-white/30 border-[3px] rounded-xl overflow-hidden`}
    >
      <div className="project-card-data flex justify-between py-4 px-6">
        <h6 className="opacity-70">{title}</h6>
        <h6 className="opacity-70">{para}</h6>
      </div>
      <div className="project-card-img relative h-full w-full rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt="" />
        <div className="absolute top-0 left-0 h-full w-full z-10 bg-black/20"></div>
      </div>
    </div>
  );
};

export default ProjectCards;
