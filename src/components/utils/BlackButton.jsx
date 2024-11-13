import React from "react";

const Button = ({text}) => {
  return (
    <button className="black-btn border text-white px-6 py-2 rounded-full border-[#868383] hover:border-red-500 transition">
      {text}
    </button>
  );
};

export default Button;
