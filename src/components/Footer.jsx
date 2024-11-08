import SectionBadge from "../components/utils/SectionBadge";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-full bg-black z-[-1] px-[5vw] py-[6vw] pt-[14vw]">
      <div className="w-full flex justify-center flex-col items-center gap-[3vw]">
        <img className="object-cover w-full" src="/images/footer.png" alt="" />
        <SectionBadge text="info@gmail.com"></SectionBadge>
      </div>
      <footer className="flex justify-between w-full pt-[8vw]">
        <div className="footer-left flex gap-4">
          <i className="text-[1.5vw] text-[#696767] ri-instagram-fill"></i>
          <i className="text-[1.5vw] text-[#696767] ri-twitter-x-fill"></i>
          <i className="text-[1.5vw] text-[#696767] ri-linkedin-box-fill"></i>
        </div>
        <div className="footer-center flex gap-[3vw]">
          <Link>
            <div className="flex flex-col opacity-70">
              <span>Home</span>
            </div>
          </Link>
          <Link to="/about">
            <div className="flex flex-col opacity-70">
              <span>About us</span>
            </div>
          </Link>
          <Link>
            <div className="flex flex-col opacity-70">
              <span>Services</span>
            </div>
          </Link>
          <Link>
            <div className="flex flex-col opacity-70">
              <span>Blogs</span>
            </div>
          </Link>
          <Link>
            <div className="flex flex-col opacity-70">
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
