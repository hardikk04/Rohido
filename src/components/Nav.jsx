import BlackButton from "./utils/BlackButton";
import gsap from "gsap";
import { useState } from "react";
import TransitionLink from "./TransitionLink";

const Nav = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="fixed z-50 nav left-[50%] top-[2%] -translate-x-[50%] w-[95%] bg-white/5 rounded-[1.5vw] flex justify-between items-center px-[1.5vw] py-[1vw] border border-[#ffffff20] border-solid">
      <div className="absolute top-0 left-0 h-full w-full backdrop-blur rounded-[1.5vw]"></div>
      <div className="nav-left relative z-[1]">
        <TransitionLink href="/">
          <img src="/images/main-logo.png" alt="" />
        </TransitionLink>
      </div>
      <div
        onClick={() => {
          if (flag) {
            gsap.to(".menu", {
              opacity: 1,
              pointerEvents: "auto",
            });
            setFlag(false);
          } else {
            gsap.to(".menu", {
              opacity: 0,
              pointerEvents: "none",
            });
            setFlag(true);
          }
        }}
        className="nav-right relative"
      >
        <BlackButton text="Menu"></BlackButton>
      </div>
      <div className="menu backdrop-blur text-white pointer-events-none opacity-0 absolute right-0 top-[105%] border-[2px] border-white/30 p-[1.5vw] flex flex-col gap-[1.5vw] rounded-xl">
        <TransitionLink href="/">
          <div
            onMouseEnter={() => {
              gsap.to(".home-h3 h3", {
                transform: "translateY(-100%)",
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".home-h3 h3", {
                transform: "translateY(0%)",
                ease: "power1.inOut",
              });
            }}
            className="home-h3 sm:h-[3.5vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Home</h3>
            <h3 className="opacity-70">Home</h3>
          </div>
        </TransitionLink>
        <TransitionLink href="/about">
          <div
            onMouseEnter={() => {
              gsap.to(".about-h3 h3", {
                transform: "translateY(-100%)",
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".about-h3 h3", {
                transform: "translateY(0%)",
                ease: "power1.inOut",
              });
            }}
            className="about-h3 sm:h-[3.5vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">About Us</h3>
            <h3 className="opacity-70">About Us</h3>
          </div>
        </TransitionLink>
        <TransitionLink href="/service">
          <div
            onMouseEnter={() => {
              gsap.to(".services-h3 h3", {
                transform: "translateY(-100%)",
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".services-h3 h3", {
                transform: "translateY(0%)",
                ease: "power1.inOut",
              });
            }}
            className="services-h3 sm:h-[3.5vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Services</h3>
            <h3 className="opacity-70">Services</h3>
          </div>
        </TransitionLink>
        <TransitionLink href="/work">
          <div
            onMouseEnter={() => {
              gsap.to(".work-h3 h3", {
                transform: "translateY(-100%)",
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".work-h3 h3", {
                transform: "translateY(0%)",
                ease: "power1.inOut",
              });
            }}
            className="work-h3 sm:h-[3.5vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Work</h3>
            <h3 className="opacity-70">Work</h3>
          </div>
        </TransitionLink>
        <TransitionLink href="/contact">
          <div
            onMouseEnter={() => {
              gsap.to(".contact-h3 h3", {
                transform: "translateY(-100%)",
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".contact-h3 h3", {
                transform: "translateY(0%)",
                ease: "power1.inOut",
              });
            }}
            className="contact-h3 sm:h-[3.5vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Contact Us</h3>
            <h3 className="opacity-70">Contact Us</h3>
          </div>
        </TransitionLink>
      </div>
    </div>
  );
};

export default Nav;
