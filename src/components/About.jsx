// Libraries imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Components imports
import BrandSwiper from "./BrandSwiper";
import ExperienceBox from "./ExperienceBox";
import ClientReviewSection from "./ClientReviewSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const About = () => {
  useGSAP(() => {
    gsap.to(".service-elem", {
      width: "47%",
      backgroundImage: "linear-gradient(42deg, #000, #fe4a2e24)",
      stagger: 0.1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".service-elem",
        start: "top 100%",
        end: "top 30%",
        // markers: true,
        scrub: 1,
      },
    });

    gsap.from(".about-heading h1", {
      transform: "translateY(100%)",
      stagger: 0.1,
    });

    gsap.from(".brands-swiper", {
      width: "20%",
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.from(".clientes-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".clientes-title",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
      },
    });

    gsap.from(".clientes-heading h2", {
      transform: "translateY(100%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".clientes-title",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
      },
    });

    gsap.from(".contact-headings h2", {
      transform: "translateY(100%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".contact-headings",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
      },
    });
  });

  return (
    <div className="main text-white regular relative z-[1]">
      <section
        onMouseMove={(dets) => {
          gsap.to(".mouse-follower", {
            left: dets.clientX,
            top: dets.clientY,
            delay: 0.1,
          });
        }}
        className="bg-black pt-[12vw] about-start w-full relative overflow-hidden"
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
                scale: 10,
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
              <h1>Let Rohido Media help</h1>
            </div>
            <div className="about-heading2 overflow-hidden pb-[.5vw]">
              <h1>Your Business To Grow</h1>
            </div>
            <div className="w-full flex justify-center py-[3vw] pt-[8vw]">
              <div className="w-[70%] flex justify-center">
                <BrandSwiper></BrandSwiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black relative w-full overflow-hidden flex flex-col items-center py-[8vw]">
        <div
          onMouseEnter={() => {
            gsap.to(`.about-content`, {
              backgroundImage:
                "linear-gradient(to bottom right, #fe4a2e24, #000)",
            });
          }}
          onMouseLeave={() => {
            gsap.to(`.about-content`, {
              backgroundImage: "linear-gradient(0deg, #000 , #000)",
            });
          }}
          className="about-content w-[95%] flex gap-[3vw]"
        >
          <div className="w-full relative p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between">
            <img
              className="object-cover absolute top-0 left-0 rotate-180 pointer-events-none"
              src="/images/Star.png"
              alt=""
            />

            <div className="flex gap-[1vw] relative z-[1]">
              <img
                className="object-cover h-[3vw]"
                src="/images/white-logo.png"
                alt=""
              />
              <div>
                <div className="mb-[2vw]">
                  <h6>THE INCEPTION</h6>
                  <span>(2020 - nowadays)</span>
                </div>
                <div className="flex flex-col gap-[2vw] mb-[6vw]">
                  <p className="opacity-80 light">
                    At Rohido Media, established in 2020, we're enthusiastic
                    about creating cutting-edge, advanced, dynamic websites with
                    the help of our tech-savvy employees. We leverage the most
                    recent innovations, technologies, and design patterns to
                    help businesses succeed in the digital world.
                  </p>
                  <p className="opacity-80 light">
                    Our team of eight youthful, innovative designers and
                    engineers at Rohido Media, inspired by the flower of
                    Rajasthan, gets to know the ever-evolving digital landscape
                    and endeavors to provide websites that not only look
                    charming but also drive engagement and lead conversions.
                    Therefore, we pride ourselves on delivering exceptional
                    experiences and results that surpass our clients'
                    expectations.
                  </p>
                  <p className="opacity-80 light">
                    With a customer-centric approach, we guarantee your vision
                    not only comes to life but outperforms your desires, giving
                    unparalleled support each step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between gap-[2vw] border-[2px] border-white/20 p-[2vw] rounded-xl">
              {[
                { title: "Exp.", number: "4yrs+" },
                { title: "Industry", number: "12+" },
                { title: "Projects", number: "150+" },
                { title: "Review", number: "53+" },
              ].map((item, index) => {
                return (
                  <ExperienceBox
                    key={index}
                    title={item.title}
                    number={item.number}
                  ></ExperienceBox>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black relative w-full overflow-hidden flex flex-col gap-[8vw] items-center py-[2vw] pb-[14vw]">
        <div className="about-content w-[95%] flex gap-[3vw]">
          <div className="w-full service-elem relative shrink-0 p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]">
            <div className="flex gap-[1vw] relative z-[1]">
              <img
                className="object-cover h-[3vw]"
                src="/images/white-logo.png"
                alt=""
              />
              <div>
                <div className="mb-[2vw]">
                  <h6>Our Vision</h6>
                </div>
                <div className="flex flex-col gap-[2vw] w-[36vw]">
                  <p className="opacity-80 light">
                    Inspired by a flower from Rajasthan, India, Rohido Media,
                    our studio embodies quality and diligence. We are steadfast
                    in our commitment to your success, providing unwavering
                    support through any challenges.
                  </p>
                  <p className="opacity-80 light">
                    At Rohido Media, we do not just design and build websites;
                    we fulfill dreams. Let us be your partner in bringing your
                    vision to life online, with master direction and unmatched
                    service. Your success is our passion, and we're here to help
                    you flourish in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full service-elem relative shrink-0 p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]">
            <div className="flex gap-[1vw] relative z-[1]">
              <img
                className="object-cover h-[3vw]"
                src="/images/white-logo.png"
                alt=""
              />
              <div>
                <div className="mb-[2vw]">
                  <h6>Our Mission</h6>
                </div>
                <div className="flex flex-col gap-[2vw] w-[36vw]">
                  <p className="opacity-80 light">
                    Driven by an entrepreneurial spirit, our mission is to impel
                    your success with expertly made-websites that engage
                    customers and boost conversions. Specializing exclusively in
                    website design planning and development, we make
                    custom-fitted solutions to meet your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientReviewSection></ClientReviewSection>
      <ContactSection></ContactSection>
      <section className="tranparent-footer h-[100vh] w-full pointer-events-none bg-transparent"></section>
      <Footer></Footer>
    </div>
  );
};

export default About;
