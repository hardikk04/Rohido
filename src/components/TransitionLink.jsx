import { useNavigate, useLocation } from "react-router-dom";
import { animationPageOut } from "./utils/Animations";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TransitionLink = ({ href, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== href) {
      animationPageOut(href, navigate);
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
};

export default TransitionLink;
