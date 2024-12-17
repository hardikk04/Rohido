import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Tilt from "react-parallax-tilt";

import Nav from "./Nav";
import SectionBadge from "./utils/SectionBadge";
import TransparentFooter from "./TransparentFooter";
import TeamCards from "./TeamCards";
import ProcessCard from "./ProcessCard";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Ecommerce = () => {
  useGSAP(() => {
    gsap.from(".tilt-img", {
      width: "100%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".video-cont",
        start: "top 60%",
        end: "top 0%",
        // markers: true,
        scrub: 1,
      },
    });

    gsap.from(".project1", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".project1",
        start: "top 80%",
        end: "top 30%",
        // markers: true,
      },
    });

    gsap.from(".project2", {
      opacity: 0,
      rotate: -15,
      transform: "translateX(-50%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".project2",
        start: "top 80%",
        end: "top 30%",
        // markers: true,
        // scrub: 1,
      },
    });

    gsap.from(".project3", {
      opacity: 0,
      rotate: 15,
      transform: "translateX(50%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".project2",
        start: "top 80%",
        end: "top 30%",
        // markers: true,
        // scrub: 1,
      },
    });

    gsap.from(".project4", {
      opacity: 0,
      rotate: -15,
      transform: "translateX(-50%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".project4",
        start: "top 80%",
        end: "top 30%",
        // markers: true,
        // scrub: 1,
      },
    });

    gsap.from(".project5", {
      opacity: 0,
      rotate: 15,
      transform: "translateX(50%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".project4",
        start: "top 80%",
        end: "top 30%",
        // markers: true,
        // scrub: 1,
      },
    });
  });
  return (
    <div className="main text-white bg-black regular relative z-[1] overflow-x-hidden">
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
              <h1>Where Expertise Meets</h1>
            </div>
            <div className="service-heading2 overflow-hidden pb-[.5vw]">
              <h1>Your Digital Vision</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black">
        <div className="project-title sm:py-[6vw] sm:pb-[0] text-center flex flex-col items-center">
          <SectionBadge
            c="project-badge"
            text="Technology + Innovation = Digital Transformations"
          ></SectionBadge>
          <div className="project-head overflow-hidden">
            <h2>Why do you need a website?</h2>
          </div>
        </div>
        <div className="video-cont w-full pt-[3vw] h-screen flex justify-center items-center">
          <Tilt
            className="tilt-img h-full w-[75%]"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <video
              muted
              autoPlay
              loop
              playsInline
              className="h-full w-full object-cover"
              src="https://ig-medias-prod.ams3.digitaloceanspaces.com/Showreel_Short_3_f3699e2f02.mp4"
            ></video>
          </Tilt>
        </div>
      </section>
      <section className="bg-black relative py-[6vw]">
        <div className="platform-title sm:py-[6vw] sm:pb-[0] text-center flex flex-col items-center">
          <SectionBadge
            c="platform-badge"
            text="Technology + Innovation = Digital Transformations"
          ></SectionBadge>
          <div className="sticky top-0 platform-head overflow-hidden">
            <h2>Platforms We Work On</h2>
          </div>
        </div>
        <div className="w-full pt-[5vw] bg-black pl-[4vw] sm:h-[50vh] h-[50vh]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl  relative z-[1]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1726413980098-d5148ea519a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-full bg-black pl-[4vw] pr-[4vw] flex justify-end sm:h-[50vh]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl  relative z-[2]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1655711789589-b6367b970712?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-full bg-black pt-[6vw] pl-[4vw] flex justify-start sm:h-[50vh]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl relative z-[2]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1730078526638-43802b6b5286?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="w-full bg-black pr-[4vw] flex justify-end sm:h-[50vh]">
          <div className="h-[35vh] w-[20vw] sm:h-[30vw] sm:w-[45vw] overflow-hidden rounded-xl  relative z-[2]">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1655711789589-b6367b970712?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-black relative">
        <div className="rohido-title sm:py-[6vw] sm:pb-[0] text-center flex flex-col items-center">
          <SectionBadge
            c="rohido-badge"
            text="The top Web Solutions Company in Mumbai"
          ></SectionBadge>
          <div className="overflow-hidden team-heading">
            <h2>Our Process of Developing a Website</h2>
          </div>
        </div>
        <div className="project-card flex flex-col items-center pt-[8vw]">
          <div className="project1 w-[95%] h-[90vh] border-white/30 border-[1px] rounded-xl overflow-hidden">
            <div className="project-card-img relative w-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1734249670749-cf73ffd488d9?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="absolute top-0 left-0 h-full w-full z-10 bg-black/20"></div>
            </div>
          </div>
          <div className="w-full py-[4vw] flex justify-center">
            <div className="w-[95%] gap-[3vw] flex flex-wrap justify-between">
              <ProcessCard
                c="project2"
                title="Client XYZ"
                para="Design | Development"
                img="https://images.unsplash.com/photo-1729637986670-c678a527b4be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></ProcessCard>
              <ProcessCard
                c="project3"
                title="Client XYZ"
                para="Design | Development"
                img="https://images.unsplash.com/photo-1734021619978-e544c3607c28?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></ProcessCard>
              <ProcessCard
                c="project4"
                title="Client XYZ"
                para="Design | Development"
                img="https://images.unsplash.com/photo-1725733618948-990a56f2b3e2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></ProcessCard>
              <ProcessCard
                c="project5"
                title="Client XYZ"
                para="Design | Development"
                img="https://images.unsplash.com/photo-1732046827794-ac0d6c915a4a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></ProcessCard>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black home-team pb-[10vw] relative">
        <div className="rohido-title sm:py-[6vw] sm:pb-[0] text-center flex flex-col items-center">
          <SectionBadge
            c="rohido-badge"
            text="The top Web Solutions Company in Mumbai"
          ></SectionBadge>
          <div className="overflow-hidden team-heading">
            <h2>Why choose Rohido</h2>
          </div>
        </div>
        <div className="team-cards w-full pt-[4vw] flex justify-center relative z-10">
          <div className="w-[95%]">
            <div className="line w-full h-[1px] bg-white/20"></div>
            <TeamCards
              title="Expertise and Experience"
              para="Delve into the portfolio and track record of the web development company."
            ></TeamCards>
            <div className="line w-full h-[1px] bg-white/20"></div>
            <TeamCards
              title="Local Advantage"
              para="Opting for a local company like Rohido Media comes with distinctive advantages."
            ></TeamCards>
            <div className="line w-full h-[1px] bg-white/20"></div>
            <TeamCards
              title="Client Testimonials"
              para="The voices of our satisfied clients resonate loudly, providing insights"
            ></TeamCards>
            <div className="line w-full h-[1px] bg-white/20"></div>
            <TeamCards
              title="Technical Proficiency"
              para="Keep pace with the latest technologies and frameworks."
            ></TeamCards>
          </div>
        </div>
        <div className="absolute h-[50vw] top-0 right-0">
          <img className="object-cover h-full" src="/images/Star2.png" alt="" />
        </div>
      </section>
      <ContactSection />
      <TransparentFooter />
      <Footer />
    </div>
  );
};

export default Ecommerce;
