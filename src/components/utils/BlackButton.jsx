import React from "react";

const Button = ({text}) => {
  return (
    <button className="border px-6 py-2 rounded-full border-[#868383]">
      {text}
    </button>
  );
};

export default Button;
