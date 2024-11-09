import BlackButton from "./utils/BlackButton";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="fixed z-50 left-[50%] top-[2%] -translate-x-[50%] w-[95%] bg-white/5 rounded-[1.5vw] flex justify-between items-center px-[1.5vw] py-[1vw] border border-[#ffffff20] border-solid">
      <div className="nav-left">
        <img src="/images/main-logo.png" alt="" />
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
      <div className="menu pointer-events-none opacity-0 absolute right-0 top-[105%] border-[2px] border-white/30 p-[1.5vw] flex flex-col gap-[1.5vw] rounded-xl">
        <Link>
          <div
            onMouseEnter={() => {
              gsap.to(".home-h3 h3", {
                transform: "translateY(-100%)",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".home-h3 h3", {
                transform: "translateY(0%)",
              });
            }}
            className="home-h3 h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Home</h3>
            <h3 className="opacity-70">Home</h3>
          </div>
        </Link>
        <Link>
          <div
            onMouseEnter={() => {
              gsap.to(".about-h3 h3", {
                transform: "translateY(-100%)",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".about-h3 h3", {
                transform: "translateY(0%)",
              });
            }}
            className="about-h3 h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">About Us</h3>
            <h3 className="opacity-70">About Us</h3>
          </div>
        </Link>
        <Link>
          <div
            onMouseEnter={() => {
              gsap.to(".services-h3 h3", {
                transform: "translateY(-100%)",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".services-h3 h3", {
                transform: "translateY(0%)",
              });
            }}
            className="services-h3 h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Services</h3>
            <h3 className="opacity-70">Services</h3>
          </div>
        </Link>
        <Link>
          <div
            onMouseEnter={() => {
              gsap.to(".blogs-h3 h3", {
                transform: "translateY(-100%)",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".blogs-h3 h3", {
                transform: "translateY(0%)",
              });
            }}
            className="blogs-h3 h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Blogs</h3>
            <h3 className="opacity-70">Blogs</h3>
          </div>
        </Link>
        <Link>
          <div
            onMouseEnter={() => {
              gsap.to(".contact-h3 h3", {
                transform: "translateY(-100%)",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".contact-h3 h3", {
                transform: "translateY(0%)",
              });
            }}
            className="contact-h3 h-[2.5vw] overflow-hidden"
          >
            <h3 className="opacity-70">Contact Us</h3>
            <h3 className="opacity-70">Contact Us</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
