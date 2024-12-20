import React from "react";

const WhiteButton = ({ text, icon = "", c = "" }) => {
  return (
    <button
      className={`${c} white-btn mix-blend-difference relative overflow-hidden bg-white sm:px-4 sm:py-1 px-4 py-2 rounded-full text-black flex gap-1 medium`}
    >
      {text}
      {icon}
    </button>
  );
};

export default WhiteButton;
