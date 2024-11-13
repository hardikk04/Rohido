import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScroll from "./context/SmoothScroll.jsx";
import Nav from "./components/Nav.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SmoothScroll>
      <Nav />
      <App />
    </SmoothScroll>
  </BrowserRouter>
);
