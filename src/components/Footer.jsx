import SectionBadge from "../components/utils/SectionBadge";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Footer = () => {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-full bg-black z-[-1] px-[5vw] py-[6vw] pt-[14vw]">
      <div className="w-full flex justify-center flex-col items-center gap-[3vw]">
        <img className="object-cover w-full" src="/images/footer.png" alt="" />
        <SectionBadge mail={true} text="info@rohido.com"></SectionBadge>
      </div>
      <footer className="flex justify-between items-center w-full pt-[8vw]">
        <div className="footer-left flex gap-4">
          <i className="text-[1.5vw] text-[#696767] ri-instagram-fill"></i>
          <i className="text-[1.5vw] text-[#696767] ri-twitter-x-fill"></i>
          <i className="text-[1.5vw] text-[#696767] ri-linkedin-box-fill"></i>
        </div>

        <div className="footer-right text-right flex gap-[2vw]">
          <Link to="/">
            <div
              onMouseEnter={() => {
                gsap.to(".terms-service p", {
                  transform: "translateY(-100%)",
                  ease: "power1.inOut",
                });
              }}
              onMouseLeave={() => {
                gsap.to(".terms-service p", {
                  transform: "translateY(0%)",
                  ease: "power1.inOut",
                });
              }}
              className="terms-service h-[1.5vw] overflow-hidden"
            >
              <p className="opacity-70 thin">Terms of Service</p>
              <p className="opacity-70 thin">Terms of Service</p>
            </div>
          </Link>
          <Link to="/">
            <div
              onMouseEnter={() => {
                gsap.to(".privacy-policy p", {
                  transform: "translateY(-100%)",
                  ease: "power1.inOut",
                });
              }}
              onMouseLeave={() => {
                gsap.to(".privacy-policy p", {
                  transform: "translateY(0%)",
                  ease: "power1.inOut",
                });
              }}
              className="privacy-policy h-[1.5vw] overflow-hidden"
            >
              <p className="opacity-70 thin">Privacy Policy</p>
              <p className="opacity-70 thin">Privacy Policy</p>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
