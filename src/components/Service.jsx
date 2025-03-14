// Libraries imports
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";

// Components imports
import Nav from "./Nav";
import SectionBadge from "./utils/SectionBadge";
import ServiceElem from "./ServiceElem";
import AboutCard from "./AboutCard";
import ClientReviewSection from "./ClientReviewSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import TransparentFooter from "./TransparentFooter";
import Card from "./Card";

const Service = () => {
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

  useGSAP(() => {
    gsap.from(".service-heading h1", {
      transform: "translateY(100%)",
      stagger: 0.1,
    });

    gsap.from(".services-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".services-title",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
      },
    });

    gsap.from(".services-head h2", {
      transform: "translateY(100%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".services-title",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
      },
    });

    gsap.from(".help-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".help-left",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
      },
    });

    gsap.from(".help-heading h2", {
      transform: "translateY(100%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".help-left",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
      },
    });

    // gsap.from(".service-cards", {
    //   transform: "translateY(50%)",
    //   opacity: 0,
    //   stagger: 0.1,
    //   scrollTrigger: {
    //     scroller: "body",
    //     trigger: ".service-cards-elem",
    //     start: "top 70%",
    //     end: "top 70%",
    //     // markers: true,
    //   },
    // });

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
    <div className="main bg-black text-white regular relative z-[1]">
      <Nav></Nav>
      <section
        onMouseMove={(dets) => {
          gsap.to(".mouse-follower", {
            left: dets.clientX,
            top: dets.clientY,
            delay: 0.1,
          });
        }}
        className="bg-black h-[100vh] sm:h-[50vh]  service-start w-full relative overflow-hidden"
      >
        <img
          className="absolute service-img h-[50vw] top-0 left-0 pointer-events-none rotate-180"
          src="/images/Star2.png"
          alt=""
        />
        <img
          className="absolute service-img h-[50vw] top-[10%] right-0 pointer-events-none rotate-0"
          src="/images/Star2.png"
          alt=""
        />
        <div className="mouse-follower z-[1] pointer-events-none fixed top-0 left-0 scale-0 h-[2vh] w-[2vh] bg-white rounded-full"></div>

        <div className="service-hero sm:pt-[12vw] relative h-full w-full flex flex-col items-center justify-center ">
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
            className="service-heading relative z-[1] text-white mix-blend-difference leading-[1.2] text-center mb-[2vw]"
          >
            <div className="service-heading1 overflow-hidden">
              <h1>Connect With Rohido Media</h1>
            </div>
            <div className="service-heading2 overflow-hidden pb-[.5vw]">
              <h1>To Grow Your Business</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black relative w-full overflow-hidden flex flex-col gap-[8vw] items-center pb-[4vw]">
        <div className="w-full">
          <div className="services-title sm:pb-[0vw] text-center flex flex-col items-center">
            <SectionBadge
              c="services-badge"
              text="Problem Solving + Creativity = Innovation"
            ></SectionBadge>
            <div className="services-head overflow-hidden">
              <h2>Services that we provide</h2>
            </div>
          </div>
          <div className="w-full py-[6vw] flex justify-center">
            <div className="w-[95%]">
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="0" title="UI/UX Design" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="1" title="App Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="2" title="Web Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="3" title="E-Commerce site Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="4" title="Saas Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="5" title="AI Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center bg-black pb-[6vw]">
        <div className="service-help w-[95%] flex justify-between md:flex-col sm:flex-col">
          <div className="help-left sm:py-[12vw] w-[56%] md:w-full sm:w-full">
            <SectionBadge c="help-badge" text="What we offer : "></SectionBadge>
            <div className="my-[1vw] help-heading overflow-hidden">
              <h2>How we help you</h2>
            </div>
            <p className="thin">
              Entrepreneurs like you need a rock-solid solution and Rohido Media
              provides that.. We create digital experiences as appealing as a
              customer desires. Our tech-savvy pros solve modern problems with
              visually stunning websites while prioritizing business
              functionality, user experience, and revenue generation
            </p>
            <div className="flex flex-wrap pt-[4vw] gap-[1vw]">
              <div className="flex gap-[.5vw] sm:gap-[1vw] md:gap-[1vw] items-center">
                <i className="ri-checkbox-circle-line text-[#fe4a2e] sm:text-[6vw] md:text-[6vw] lg:text-[4vw] text-[1.5vw]"></i>
                <span>Build With User Experience In Mind</span>
              </div>
              <div className="flex gap-[.5vw] sm:gap-[1vw] md:gap-[1vw] items-center">
                <i className="ri-checkbox-circle-line text-[#fe4a2e] sm:text-[6vw] md:text-[6vw] lg:text-[4vw] text-[1.5vw]"></i>
                <span>A Collaborative solution for different business</span>
              </div>
              <div className="flex gap-[.5vw] sm:gap-[1vw] md:gap-[1vw] items-center">
                <i className="ri-checkbox-circle-line text-[#fe4a2e] sm:text-[6vw] md:text-[6vw] lg:text-[4vw] text-[1.5vw]"></i>
                <span>Make your website accessible</span>
              </div>
              <div className="flex gap-[.5vw] sm:gap-[1vw] md:gap-[1vw] items-center sm:w-full">
                <i className="ri-checkbox-circle-line text-[#fe4a2e] sm:text-[6vw] md:text-[6vw] lg:text-[4vw] text-[1.5vw]"></i>
                <span>Context Sourcing Guidance</span>
              </div>
            </div>
          </div>
          <div className="help-right w-[38%] h-full md:w-full sm:w-full">
            <img
              className="h-full w-full object-cover "
              src="/images/services-network.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <div className="flex justify-center sm:py-[6vw] py-[2vw] border-t border-b border-white/30 bg-black">
        <h2>How We Do That?</h2>
      </div>
      <section className="w-full hidden sm:block md:block relative bg-black">
        <div className="w-full flex justify-center py-[12vw]">
          <div className="w-[95%] service-cards-elem flex justify-between md:flex-wrap sm:flex-wrap">
            {aboutCard.map((data, index) => (
              <AboutCard data={data} key={index} index={index} />
            ))}
          </div>
        </div>
      </section> */}
      {/* <section className="w-full sm:hidden md:hidden relative overflow-x-hidden bg-black">
        <Card></Card>
      </section> */}
      <ClientReviewSection />
      <ContactSection />
      <TransparentFooter />
      <Footer />
    </div>
  );
};

export default Service;
