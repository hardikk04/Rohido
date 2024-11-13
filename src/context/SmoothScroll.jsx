import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = ({ children }) => {
  const { pathname } = useLocation();

  let scroll;

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: 2,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  });

  useEffect(() => {
    if (scroll) {
      console.log("destroyed");

      scroll.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
      scroll.update();
    }
  }, [pathname]);

  return <div>{children}</div>;
};

export default SmoothScroll;
