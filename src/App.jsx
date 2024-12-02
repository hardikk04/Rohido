// Library imports
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "remixicon/fonts/remixicon.css";
import { Routes, Route, useLocation } from "react-router-dom";

// Components imports
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Card from "./components/Card";

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
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/work" element={<Work />}></Route>
      <Route path="/card" element={<Card />}></Route>
    </Routes>
  );
};

export default App;
