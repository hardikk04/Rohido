import { Link } from "react-router-dom";
import gsap from "gsap";

import TransitionLink from "./TransitionLink";
import SectionBadge from "../components/utils/SectionBadge";

const Footer = () => {
  return (
    <section className="fixed top-0 left-0 h-[100vh] w-full bg-black z-[-1] px-[3.5vw] flex flex-col justify-end pb-[1vw] sm:pb-[4vw] md:pb-[4vw]">
      <div className="w-full flex justify-center flex-col items-center gap-[3vw]">
        <img className="object-cover w-[80%]" src="/images/footer.png" alt="" />
        <SectionBadge mail={true} text="info@rohido.com"></SectionBadge>
      </div>
      <footer className="flex sm:gap-[1vw] sm:flex-col md:flex-col justify-between items-center w-full pt-[8vw]">
        <div className="footer-left flex gap-4">
          <Link target="_blank" to="https://www.instagram.com/rohidomedia">
            <i className="sm:text-[6vw] md:text-[6vw] lg:text-[4vw] text-[1.5vw] text-[#696767] ri-instagram-fill"></i>
          </Link>
          <Link target="_blank" to="https://x.com/rohidom">
            <i className="sm:text-[6vw] md:text-[6vw] lg:text-[4vw] text-[1.5vw] text-[#696767] ri-twitter-x-fill"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/company/rohido-media/"
            target="_blank"
          >
            <i className="sm:text-[6vw] md:text-[6vw] lg:text-[4vw] text-[1.5vw] text-[#696767] ri-linkedin-box-fill"></i>
          </Link>
        </div>
        <div className="footer-right text-right flex gap-[2vw] sm:gap-[6vw] md:gap-[6vw] sm:pb-[2vw] md:pb-[2vw]">
          <TransitionLink>
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
              className="terms-service sm:h-[5vw] md:h-[3.5vw] lg:h-[3.5vw] h-[1.5vw] overflow-hidden"
            >
              <p className="opacity-70 thin">Terms of Service</p>
              <p className="opacity-70 thin">Terms of Service</p>
            </div>
          </TransitionLink>
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
              className="privacy-policy sm:h-[5vw] md:h-[3.5vw] lg:h-[3.5vw] h-[1.5vw] overflow-hidden"
            >
              <p className="opacity-70 thin">Privacy Policy</p>
              <p className="opacity-70 thin">Privacy Policy</p>
            </div>
          </Link>
        </div>
      </footer>
      <div className="text-center w-full border-t sm:pb-[2vw] pt-[1vw] mt-[1vw] border-white/30">
        <p>Rohido @ 2025. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
