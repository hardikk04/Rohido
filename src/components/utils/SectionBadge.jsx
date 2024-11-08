import React from "react";

const TransformationBadge = ({ text, c = "" }) => {
  return (
    <div
      className={`${c} flex items-center w-fit space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black rounded-full text-white`}
    >
      <span>{text}</span>
    </div>
  );
};

export default TransformationBadge;
