// Libraries imports
import gsap from "gsap";

// Components imports
import Nav from "./Nav";
import SectionBadge from "./utils/SectionBadge";
import { useGSAP } from "@gsap/react";
import Footer from "./Footer";
import TransparentFooter from "./TransparentFooter";

const Work = () => {
  useGSAP(() => {
    gsap.from(".about-heading1 h1, .about-heading2 h1", {
      transform: "translateY(100%)",
      stagger: 0.1,
    });

    gsap.to(".project-card-0", {
      scale: 0.8,
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-card-0",
        start: "top 0%",
        end: "top -100%",
        // markers: true,
        scrub: 1,
      },
    });

    gsap.to(".project-card-1", {
      scale: 0.8,
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-card-1",
        start: "top 0%",
        end: "top -100%",
        // markers: true,
        scrub: 1,
      },
    });

    gsap.to(".project-final-img", {
      height: "100%",
      width: "100%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-final",
        start: "top 100%",
        end: "top 0%",
        // markers: true,
        // pin: true,
        scrub: 1,
      },
    });

    gsap.from(".project-mail", {
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-mail",
        start: "top 60%",
        end: "top 50%",
        // markers: true,
        scrub: 1,
      },
    });
  });

  return (
    <div className="main relative text-white z-[1]">
      <section
        onMouseMove={(dets) => {
          gsap.to(".mouse-follower", {
            left: dets.clientX,
            top: dets.clientY,
            delay: 0.1,
          });
        }}
        className="bg-black about-start sm:h-[35vh] sm:pt-[16vw] h-[100vh] w-full relative overflow-hidden"
      >
        <Nav></Nav>
        <img
          className="absolute about-img h-[50vw] top-0 left-0 pointer-events-none rotate-180"
          src="/images/Star2.png"
          alt=""
        />
        <img
          className="absolute about-img h-[50vw] top-[10%] right-0 pointer-events-none rotate-0"
          src="/images/Star2.png"
          alt=""
        />
        <div className="mouse-follower z-[1] pointer-events-none fixed top-0 left-0 scale-0 h-[2vh] w-[2vh] bg-white rounded-full"></div>

        <div className="about-hero relative h-full w-full flex flex-col items-center justify-center ">
          <div
            onMouseEnter={() => {
              gsap.to(".mouse-follower", {
                scale: 10,
              });
            }}
            onMouseLeave={() => {
              gsap.to(".mouse-follower", {
                scale: 0,
              });
            }}
            className="about-heading relative z-[1] text-white mix-blend-difference leading-[1.2] text-center mb-[2vw]"
          >
            <div className="about-heading1 overflow-hidden">
              <h1>Let Rohido Media help</h1>
            </div>
            <div className="about-heading2 overflow-hidden pb-[.5vw]">
              <h1>Your Business To Grow</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black">
        <div className="project-title sm:py-[6vw] text-center flex flex-col items-center">
          <SectionBadge
            c="project-badge"
            text="Technology + Innovation = Digital Transformations"
          ></SectionBadge>
          <div className="project-head overflow-hidden">
            <h2>Some of Our Latest  Projects</h2>
          </div>
        </div>
        <div className="project-cards w-full pt-[4vw] min-h-screen flex items-center flex-col relative">
          <div className="project-card project-card-0 sticky top-0 h-[100vh] w-full flex justify-center items-center">
            <h2 className="relative z-[1]">Blue Abstractions</h2>
            <div className="project-overlay absolute top-0 left-0 h-full w-full bg-black/10"></div>
          </div>
          <div className="project-card project-card-1 sticky top-0 h-[100vh] w-full flex justify-center items-center">
            <h2 className="relative z-[1]">red Abstractions</h2>
            <div className="project-overlay absolute top-0 left-0 h-full w-full bg-black/10"></div>
          </div>
          <div className="project-card project-card-2 sticky top-0 h-[100vh] w-full flex justify-center items-center">
            <h2 className="relative z-[1]">green Abstractions</h2>
            <div className="project-overlay absolute top-0 left-0 h-full w-full bg-black/10"></div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black flex justify-center">
        <h2 className="text-[30vw] font-[700] leading-normal">ALL-4</h2>
      </section>
      <section className="bg-black min-h-screen w-full relative">
        <div className="sticky top-1/2 -translate-y-1/2 text-center left-1/2 -translate-x-1/2 w-fit ">
          <h2 className="font-[600]">Let's start a</h2>
          <div>
            <h2 className="font-[600]">Project</h2>
          </div>
        </div>
        <div className="w-full pl-[4vw] sm:h-[50vh] relative z-[1]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1726413980098-d5148ea519a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-full pt-[6vw] pr-[4vw] flex justify-end sm:h-[50vh] relative z-[1]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1729262901083-d9f562d0c36f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-full pl-[4vw] sm:h-[50vh] relative z-[1]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1655711789589-b6367b970712?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-full pt-[6vw] pr-[4vw] flex justify-end sm:h-[50vh] relative z-[1]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1730078526638-43802b6b5286?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="project-final w-full h-screen flex justify-center items-center relative z-[1]">
          <div className="project-final-img h-[35%] w-[25%] overflow-hidden rounded-xl relative">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1730117637264-7c80b17edfa5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="project-mail absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-[3vw] py-[1vw] rounded-full">
              <a
                className="text-6xl sm:text-3xl leading-[.7]"
                href="mailto:info@rohido.com"
              >
                info@rohido.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <TransparentFooter />
      <Footer />
    </div>
  );
};

export default Work;
