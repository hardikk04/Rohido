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
      <footer className="flex justify-between w-full pt-[8vw]">
        <div className="footer-left flex gap-4">
          <i className="text-[1.5vw] text-[#696767] ri-instagram-fill"></i>
          <i className="text-[1.5vw] text-[#696767] ri-twitter-x-fill"></i>
          <i className="text-[1.5vw] text-[#696767] ri-linkedin-box-fill"></i>
        </div>
        <div className="footer-center flex gap-[3vw]">
          <Link>
            <div
              onMouseEnter={() => {
                gsap.to(".footer-home span", {
                  transform: "translateY(-100%)",
                  ease: "power1.inOut",
                });
              }}
              onMouseLeave={() => {
                gsap.to(".footer-home span", {
                  transform: "translateY(0%)",
                  ease: "power1.inOut",
                });
              }}
              className="footer-home flex flex-col opacity-70 h-[1vw] overflow-hidden"
            >
              <span>Home</span>
              <span>Home</span>
            </div>
          </Link>
          <Link to="/about">
            <div
              onMouseEnter={() => {
                gsap.to(".footer-about span", {
                  transform: "translateY(-100%)",
                  ease: "power1.inOut",
                });
              }}
              onMouseLeave={() => {
                gsap.to(".footer-about span", {
                  transform: "translateY(0%)",
                  ease: "power1.inOut",
                });
              }}
              className="footer-about flex flex-col opacity-70 h-[1vw] overflow-hidden"
            >
              <span>About us</span>
              <span>About us</span>
            </div>
          </Link>
          <Link>
            <div
              onMouseEnter={() => {
                gsap.to(".footer-service span", {
                  transform: "translateY(-100%)",
                  ease: "power1.inOut",
                });
              }}
              onMouseLeave={() => {
                gsap.to(".footer-service span", {
                  transform: "translateY(0%)",
                  ease: "power1.inOut",
                });
              }}
              className="footer-service flex flex-col opacity-70 h-[1vw] overflow-hidden"
            >
              <span>Services</span>
              <span>Services</span>
            </div>
          </Link>
          <Link>
            <div
              onMouseEnter={() => {
                gsap.to(".footer-contact span", {
                  transform: "translateY(-100%)",
                  ease: "power1.inOut",
                });
              }}
              onMouseLeave={() => {
                gsap.to(".footer-contact span", {
                  transform: "translateY(0%)",
                  ease: "power1.inOut",
                });
              }}
              className="footer-contact flex flex-col opacity-70 h-[1vw] overflow-hidden"
            >
              <span>Contact us</span>
              <span>Contact us</span>
            </div>
          </Link>
        </div>
        <div className="footer-right text-right">
          <p className="thin opacity-70">Terms of Service</p>
          <p className="thin opacity-70">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
