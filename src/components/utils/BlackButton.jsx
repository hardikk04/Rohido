import React from "react";

const Button = ({text}) => {
  return (
    <button className="black-btn border sm:border-[.5px] sm:px-6 sm:py-1 text-white px-6 py-2 rounded-full border-[#868383] hover:border-red-500 transition">
      {text}
    </button>
  );
};

export default Button;
