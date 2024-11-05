import React from "react";

const ExperienceBox = ({ title, number }) => {
  return (
    <div className="bg-[#131313] w-[30%] p-[1vw] text-center rounded-xl medium">
      <h3 className="text-[#7f7f7f]">{title}</h3>
      <h3 className="text-red-500 mt-[.5vw]">{number}</h3>
    </div>
  );
};

export default ExperienceBox;
