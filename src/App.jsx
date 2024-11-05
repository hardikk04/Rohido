// Library imports
import React, { useEffect } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom"; 

// Components imports
import Home from "./components/Home";

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
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
