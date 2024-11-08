import React from "react";

const TeamCards = ({ title, para }) => {
  return (
    <div className="team-card overflow-hidden px-[1vw] relative flex justify-between items-center py-[2vw]">
      <h3 className="opacity-90">{title}</h3>
      <div>
        <p className="thin opacity-7 0">{para}</p>
      </div>
    </div>
  );
};

export default TeamCards;
