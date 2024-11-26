import React, { useEffect, useState } from "react";

const Loader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 99) {
          clearInterval(interval);
        }
        return prevCounter + 1;
      });
    }, 10);
  },[])

  return (
    <div className="loader fixed z-[100] pointer-events-none top-0 left-0 w-full h-screen bg-black text-white flex justify-end items-end">
      <h2
        className="font-[700] text-[22vw] leading-none"
      >
        {counter}%
      </h2>
    </div>
  );
};

export default Loader;
