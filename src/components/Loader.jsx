import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        gsap.to(".loader h2", {
          top: `${prevCounter}%`,
        });
        gsap.to(".loader-layer", {
          top: `${prevCounter - 100}%`,
        });
        if (prevCounter === 99) {
          clearInterval(interval);
        }
        return prevCounter + 1;
      });
    }, 30);
  }, []);

  return (
    <div className="loader fixed z-[100] pointer-events-none top-0 left-0 w-full h-screen bg-black text-white">
      <h2 className="font-[700] z-10 text-[10vw] leading-none absolute left-0 top-0 -translate-y-full">
        {counter}%
      </h2>
      <div className="loader-layer absolute top-[-100%] left-0 h-screen w-full bg-[#fe4a2e2c]"></div>
    </div>
  );
};

export default Loader;
