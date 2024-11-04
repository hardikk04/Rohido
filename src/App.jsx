// Library imports
import React, { useEffect } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "remixicon/fonts/remixicon.css";

// Components imports
import Nav from "./components/Nav";
import SectionBadge from "./components/utils/SectionBadge";
import PagePara from "./components/utils/PagePara";
import WhiteButton from "./components/utils/WhiteButton";

const App = () => {
  const lenisJS = () => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 700);
    });

    gsap.ticker.lagSmoothing(0);
  };

  useEffect(() => {
    lenisJS();
  });

  return (
    <div className="main bg-black text-white regular h-screen">
      <section className="home-start h-[100vh] w-full">
        <Nav></Nav>
        <div className="home-hero h-full w-full flex flex-col items-center justify-center ">
          <SectionBadge text="From design to development 🚀"></SectionBadge>
          <div className="home-heading text-white text-[5.5vw] leading-[1.2] text-center mb-[2vw]">
            <div>
              <h1>Transforming ideas into</h1>
            </div>
            <div>
              <h1>Impactful websites</h1>
            </div>
          </div>
          <PagePara para="Empowering your business through an expertly developed website."></PagePara>
          <div className="mt-[3vw]">
            <WhiteButton
              text="Book a call"
              icon={<i className="ri-arrow-right-s-line font-[600]"></i>}
            ></WhiteButton>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default App;
