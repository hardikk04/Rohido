import { useNavigate, useLocation } from "react-router-dom";
import { animationPageOut } from "./utils/Animations";

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
