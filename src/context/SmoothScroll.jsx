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
  }, []);

  useEffect(() => {
    if (scroll) {
      scroll.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
      scroll.update();
    }
  }, [pathname]);

  return (
    <div>
      {/* <div className="banner-1 min-h-screen bg-neutral-800 z-[200] fixed top-0 left-0 w-1/4"></div>
      <div className="banner-2 min-h-screen bg-neutral-800 z-[200] fixed top-0 left-1/4 w-1/4"></div>
      <div className="banner-3 min-h-screen bg-neutral-800 z-[200] fixed top-0 left-2/4 w-1/4"></div>
      <div className="banner-4 min-h-screen bg-neutral-800 z-[200] fixed top-0 left-3/4 w-1/4"></div> */}

      <svg
        className="overlay fixed top-0 left-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="overlay__path"
          vectorEffect="non-scaling-stroke"
          d="M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z"
        />
      </svg>

      {children}
    </div>
  );
};

export default SmoothScroll;
