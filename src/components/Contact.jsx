import gsap from "gsap";

import Nav from "./Nav";
import Footer from "./Footer";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <div className="main relative text-white regular z-[1]">
      <section
        onMouseMove={(dets) => {
          gsap.to(".mouse-follower", {
            left: dets.clientX,
            top: dets.clientY,
            delay: 0.1,
          });
        }}
        className="bg-black h-[100vh] service-start w-full relative overflow-hidden"
      >
        <Nav></Nav>
        <img
          className="absolute about-img h-[50vw] top-0 left-0 pointer-events-none rotate-180"
          src="/images/Star2.png"
          alt=""
        />
        <img
          className="absolute about-img h-[50vw] top-[10%] right-0 pointer-events-none rotate-0"
          src="/images/Star2.png"
          alt=""
        />
        <div className="mouse-follower z-[1] pointer-events-none fixed top-0 left-0 scale-0 h-[2vh] w-[2vh] bg-white rounded-full"></div>

        <div className="contact-hero relative h-full w-full flex flex-col items-center justify-center ">
          <div
            onMouseEnter={() => {
              gsap.to(".mouse-follower", {
                scale: 10,
              });
            }}
            onMouseLeave={() => {
              gsap.to(".mouse-follower", {
                scale: 0,
              });
            }}
            className="contact-heading relative z-[1] text-white mix-blend-difference leading-[1.2] text-center mb-[2vw]"
          >
            <div className="contact-heading1 overflow-hidden">
              <h1>Connect With Rohido Media</h1>
            </div>
            <div className="contact-heading2 overflow-hidden pb-[.5vw]">
              <h1>To Grow Your Business</h1>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <section className="tranparent-footer h-[100vh] w-full pointer-events-none bg-transparent"></section>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
