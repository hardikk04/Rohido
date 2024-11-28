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
          <img
            className="h-[1vw] sm:h-[5vw] md:h-[5vw] object-cover"
            src="/images/main-logo.png"
            alt=""
          />
        </TransitionLink>
      </div>
      <div
        onClick={() => {
          if (flag) {
            gsap.to(".dots", {
              rotate: "90deg",
            });

            if (
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
                navigator.userAgent
              )
            ) {
              gsap.to("section", {
                opacity: 0,
              });
            }

            gsap.to(".menu", {
              opacity: 1,
              pointerEvents: "auto",
            });

            gsap.from(".menu", {
              rotation: gsap.utils.wrap([-25, 25]),
              y: 250,
              stagger: 0.1,
            });
            setFlag(false);
          } else {
            gsap.to(".dots", {
              rotate: "0deg",
            });

            if (
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
                navigator.userAgent
              )
            ) {
              gsap.to("section", {
                opacity: 1,
              });
            }

            gsap.to(".menu", {
              opacity: 0,
              pointerEvents: "none",
            });
            setFlag(true);
          }
        }}
        className="nav-right relative z-10"
      >
        <div className="black-btn  flex justify-center items-center border sm:border-[.5px] sm:px-2 sm:py-1 text-white px-6 py-2 rounded-full border-[#868383] hover:border-red-500 transition">
          <button className="sm:hidden">Menu</button>
          <i className="dots hidden sm:inline-block sm:text-2xl ri-more-2-fill"></i>
        </div>
      </div>
      <div className="menu backdrop-blur sm:bg-black md:bg-black text-white pointer-events-none sm:border-[1px] opacity-0 sm:w-full md:w-full w-[16vw] absolute right-0 top-[105%] border-[2px] border-white/30 p-[1.5vw] flex flex-col gap-[1.5vw] rounded-xl sm:top-[120%] sm:left-0 sm:px-[3vw]">
        <div className="menu-navigation">
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
              className="home-h3  sm:h-[8vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
            >
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">Home</h3>
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">Home</h3>
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
              className="about-h3 sm:h-[8vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
            >
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                About Us
              </h3>
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                About Us
              </h3>
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
              className="services-h3 sm:h-[8vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
            >
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                Services
              </h3>
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                Services
              </h3>
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
              className="work-h3 sm:h-[8vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
            >
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">Work</h3>
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">Work</h3>
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
              className="contact-h3 sm:h-[8vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
            >
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                Contact Us
              </h3>
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                Contact Us
              </h3>
            </div>
          </TransitionLink>
        </div>
        <div className="menu backdrop-blur bg-black absolute left-0 top-[103%] sm:top-[105%] sm:border-[1px] sm:w-full md:w-full w-[16vw] rounded-xl pointer-events-none border-[2px] border-white/30 p-[1.5vw] py-[.5vw] flex flex-col sm:px-[3vw]">
          <TransitionLink href="/">
            <div
              onMouseEnter={() => {
                gsap.to(".consultancy-h3 h3", {
                  transform: "translateY(-100%)",
                  ease: "power1.inOut",
                });
              }}
              onMouseLeave={() => {
                gsap.to(".consultancy-h3 h3", {
                  transform: "translateY(0%)",
                  ease: "power1.inOut",
                });
              }}
              className="consultancy-h3 sm:h-[8vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
            >
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                Consultancy
              </h3>
              <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                Consultancy
              </h3>
            </div>
          </TransitionLink>

          <div className="menu backdrop-blur bg-black absolute left-0 top-[110%] sm:top-[125%]  sm:border-[1px] sm:w-full md:w-full w-[16vw] rounded-xl pointer-events-none border-[2px] border-white/30 p-[1.5vw] py-[.5vw] flex flex-col sm:px-[3vw]">
            <TransitionLink href="/">
              <div
                onMouseEnter={() => {
                  gsap.to(".journal-h3 h3", {
                    transform: "translateY(-100%)",
                    ease: "power1.inOut",
                  });
                }}
                onMouseLeave={() => {
                  gsap.to(".journal-h3 h3", {
                    transform: "translateY(0%)",
                    ease: "power1.inOut",
                  });
                }}
                className="journal-h3 sm:h-[8vw] md:h-[3vw] lg:h-[3.5vw] h-[2.5vw] overflow-hidden"
              >
                <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                  Journal
                </h3>
                <h3 className="opacity-70 sm:opacity-100 sm:text-2xl">
                  Journal
                </h3>
              </div>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
