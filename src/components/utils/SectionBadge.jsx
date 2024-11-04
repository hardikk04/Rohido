import React from "react";

const TransformationBadge = ({ text }) => {
  return (
    <div className="flex items-center w-fit space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black rounded-full text-white">
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default TransformationBadge;
