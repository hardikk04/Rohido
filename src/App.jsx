// Library imports
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "remixicon/fonts/remixicon.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Components imports
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/service" element={<Service />}></Route>
    </Routes>
  );
};

export default App;
