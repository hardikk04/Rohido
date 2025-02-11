import ContactSection from "./ContactSection"
import Footer from "./Footer"
import Nav from "./Nav"
import TransparentFooter from "./TransparentFooter"


const Consultancy = () => {
  return (
    <div className="main bg-black relative text-white z-[1]">
    <Nav />
    <section
        onMouseMove={(dets) => {
          gsap.to(".mouse-follower", {
            left: dets.clientX,
            top: dets.clientY,
            delay: 0.1,
          });
        }}
        className="bg-black about-start sm:h-[35vh] sm:pt-[16vw] h-[100vh] w-full relative overflow-hidden"
      >
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

        <div className="about-hero relative h-full w-full flex flex-col items-center justify-center ">
          <div
            onMouseEnter={() => {
              gsap.to(".mouse-follower", {
                scale: 5,
              });
            }}
            onMouseLeave={() => {
              gsap.to(".mouse-follower", {
                scale: 0,
              });
            }}
            className="about-heading relative z-[1] text-white mix-blend-difference leading-[1.2] text-center mb-[2vw]"
          >
            <div className="about-heading1 overflow-hidden">
              <h1>Consultancy</h1>
            </div>
          </div>
        </div>
      </section>
    <ContactSection />
    <TransparentFooter />
    <Footer />
  </div>
  )
}

export default Consultancy