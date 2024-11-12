import React, { useEffect } from "react";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: 2,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    // useEffect's cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return <div>{children}</div>;
};

export default SmoothScroll;
