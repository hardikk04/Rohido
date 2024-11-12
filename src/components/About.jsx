import gsap from "gsap";
import Nav from "./Nav";
import BrandSwiper from "./BrandSwiper";
import ExperienceBox from "./ExperienceBox";
import AboutCard from "./AboutCard";
import { useState } from "react";

const About = () => {
  const [aboutCard, setAboutCard] = useState([
    {
      title: "Consultation:",
      para: "We begin by understanding your business objectives, target people, and special requirements through in-depth consultations.",
    },
    {
      title: "Design and Development:",
      para: "Our exceptional team of developers and designers works collaboratively to bring your vision to life, building dazzling websites that are both visually engaging and profoundly functional.",
    },
    {
      title: "Feedback and Modifications:",
      para: "We value your input and effectively look for feedback throughout the design plan and development process, making corrections as required to guarantee your complete satisfaction.",
    },
    {
      title: "Launch and Optimization:",
      para: "Once your business site is ready, we'll offer assistance as you launch it to the world and proceed to screen and optimize its performance for maximum results.",
    },
  ]);

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
        className="bg-black pt-[12vw] service-start w-full relative overflow-hidden"
      >
        <div className="mouse-follower z-[1] pointer-events-none fixed top-0 left-0 scale-0 h-[2vh] w-[2vh] bg-white rounded-full"></div>
        <Nav></Nav>
        <div className="service-hero h-full w-full flex flex-col items-center justify-center ">
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
            className="service-heading relative z-[1] text-white mix-blend-difference leading-[1.2] text-center mb-[2vw]"
          >
            <div className="service-heading1 overflow-hidden">
              <h1>Let Rohido Media help</h1>
            </div>
            <div className="service-heading2 overflow-hidden pb-[.5vw]">
              <h1>Your Business To Grow</h1>
            </div>
            <div className="w-full flex justify-center py-[3vw] pt-[8vw]">
              <BrandSwiper></BrandSwiper>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black relative w-full overflow-hidden flex flex-col gap-[8vw] items-center py-[8vw]">
        <div className="about-content w-[90%] flex gap-[3vw]">
          <div className="w-full relative p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]">
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
                <div className="flex flex-col gap-[2vw] mb-[10vw]">
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
          </div>
        </div>
      </section>
      <section className="bg-black relative w-full overflow-hidden flex flex-col gap-[8vw] items-center py-[2vw]">
        <div className="about-content w-[90%] flex gap-[3vw]">
          <div className="w-full relative p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]">
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
                <div className="flex flex-col gap-[2vw] mb-[10vw]">
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
        </div>
      </section>
      <section className="bg-black relative w-full overflow-hidden flex flex-col gap-[8vw] items-center">
        <div className="about-content w-[90%] flex gap-[3vw]">
          <div className="w-full relative p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]">
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
                <div className="flex flex-col gap-[2vw] mb-[10vw]">
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
      <section className="w-full relative bg-black">
        <div className="flex justify-center py-[2vw] border-t border-b border-white/30">
          <h2>How We Do That?</h2>
        </div>
        <div className="w-full flex justify-center py-[12vw]">
          <div className="w-[90%] flex justify-between">
            {aboutCard.map((data, index) => (
              <AboutCard data={data} key={index} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
