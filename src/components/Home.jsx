// Libraries imports
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Components imports
import Nav from "./Nav";
import SectionBadge from "./utils/SectionBadge";
import WhiteButton from "./utils/WhiteButton";
import BlackButton from "./utils/BlackButton";
import BrandSwiper from "./BrandSwiper";
import ExperienceBox from "./ExperienceBox";
import SwiperCard from "./SwiperCard";
import TeamCards from "./TeamCards";
import ProjectCards from "./ProjectCards";
import ClientReviewSection from "./ClientReviewSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import TransparentFooter from "./TransparentFooter";
import Loader from "./Loader";
import MobileSwiperCard from "./MobileSwiperCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const [swiperCardData, setSwiperCardData] = useState([
    {
      number: "01",
      title: "UI/UX",
      para: "We assist both new ventures and established companies in crafting engaging user experiences from start to finish, offering comprehensive services in UI/UX design",
      img: "/images/swiper1.png",
    },
    {
      number: "02",
      title: "App Development",
      para: "Utilizing cutting-edge technologies  develop robust and scalable hybrid and native mobile applications.",
      img: "/images/swiper1.png",
    },
    {
      number: "03",
      title: "Web Development",
      para: "Professional website development services utilizing the most recent technologies, innovations, and frameworks.",
      img: "/images/swiper1.png",
    },
    {
      number: "04",
      title: "E-commerce Solutions",
      para: "Secure, feature-rich e-commerce platforms are planned and designed to drive sales.",
      img: "/images/swiper1.png",
    },
    {
      number: "05",
      title: "Saas Development",
      para: "Professional website development services utilizing the most recent technologies, innovations, and frameworks.",
      img: "/images/swiper1.png",
    },
    {
      number: "06",
      title: "AI Development",
      para: "Secure, feature-rich e-commerce platforms are planned and designed to drive sales.",
      img: "/images/swiper1.png",
    },
  ]);

  const [projectCard, setProjectCard] = useState([
    {
      number: "01",
      title: "Brand Identity + Positioning",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, debitis? Doloremque cupiditate dolorum soluta provident explicabo tempore cumque totam porro, impedit aliquam?",
    },
    {
      number: "02",
      title: "Website Design + Development",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, debitis? Doloremque cupiditate dolorum soluta provident explicabo tempore cumque totam porro, impedit aliquam?",
    },
    {
      number: "03",
      title: "Digital Products + Services",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, debitis? Doloremque cupiditate dolorum soluta provident explicabo tempore cumque totam porro, impedit aliquam?",
    },
    {
      number: "04",
      title: "Advertising + Branded Content",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, debitis? Doloremque cupiditate dolorum soluta provident explicabo tempore cumque totam porro, impedit aliquam?",
    },
  ]);

  const tl = gsap.timeline({ paused: true });
  useGSAP(() => {
    tl.from(".nav", {
      y: "-120%",
    })
      .from(".home-badge", {
        opacity: 0,
        duration: 0.5,
      })
      .from(".home-heading h1", {
        transform: "translateY(100%)",
        stagger: 0.1,
      })
      .from(".home-hero p", {
        opacity: 0,
        duration: 0.5,
      })
      .from(".home-btn-div", {
        opacity: 0,
        duration: 0.5,
      });

    gsap.to(".half-circle", {
      borderTopLeftRadius: "0vw",
      borderTopRightRadius: "0vw",
      scrollTrigger: {
        scroller: "body",
        trigger: ".half-circle",
        start: "top 80%",
        end: "top -20%",
        scrub: 1,
        id: "home-scrollTrigger",
        // markers: true,
      },
    });

    gsap.from(".brands-swiper", {
      width: "40%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".brands-swiper",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
        id: "home-scrollTrigger",
        // markers: true,
      },
    });

    gsap.from(".project-title .project-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-title",
        start: "top 80%",
        end: "top 80%",
        // markers: true,
        id: "home-scrollTrigger",
      },
    });

    gsap.from(".project-head h2", {
      transform: "translateY(100%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-title",
        start: "top 70%",
        end: "top 70%",
        // markers: true,
        id: "home-scrollTrigger",
      },
    });

    gsap.from(".project-elems", {
      y: 250,
      stagger: 0.1,
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-container",
        start: "top 80%",
        // markers: true,
        id: "home-scrollTrigger",
      },
    });

    gsap.from(".project-imgs img", {
      y: 250,
      stagger: 0.1,
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".project-container",
        start: "top 80%",
        // markers: true,
        id: "home-scrollTrigger",
      },
    });

    gsap.from(".services-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".service-title",
        start: "top 80%",
        end: "top 80%",
        id: "home-scrollTrigger",
        // markers: true,
      },
    });

    gsap.from(".services-heading h2", {
      transform: "translateY(100%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".service-title",
        start: "top 70%",
        end: "top 70%",
        id: "home-scrollTrigger",
        // markers: true,
      },
    });

    gsap.from(".team-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".team-title",
        start: "top 80%",
        end: "top 80%",
        id: "home-scrollTrigger",
        // markers: true,
      },
    });

    gsap.from(".team-heading h2", {
      transform: "translateY(100%)",
      scrollTrigger: {
        scroller: "body",
        trigger: ".team-title",
        start: "top 70%",
        end: "top 70%",
        id: "home-scrollTrigger",
        // markers: true,
      },
    });

    gsap.from(".clientes-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".clientes-title",
        start: "top 80%",
        end: "top 80%",
        id: "home-scrollTrigger",
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
        id: "home-scrollTrigger",
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
        id: "home-scrollTrigger",
        // markers: true,
      },
    });

    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
        navigator.userAgent
      )
    ) {
      gsap.to(".services-cards", {
        left: "-50%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".home-services",
          start: "top 0%",
          end: "top -100%",
          pin: true,
          // markers: true,
          scrub: 1,
          id: "home-scrollTrigger",
        },
      });
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      tl.play(0);
      gsap.to(".loader", {
        top: "-100%",
      });
    }, 2000);
  }, []);

  return (
    <>
      <div className="main text-white bg-black regular relative z-[1] overflow-x-hidden">
        <Nav />
        <Loader />
        <section
          onMouseMove={(dets) => {
            gsap.to(".mouse-follower", {
              left: dets.clientX,
              top: dets.clientY,
              delay: 0.1,
            });
          }}
          className="bg-black sm:h-[70vh] home-start sm:pt-[16vw] pt-[12vw] w-full relative overflow-hidden"
        >
          <div className="mouse-follower sm:opacity-0 pointer-events-none fixed top-0 left-0 scale-0 h-[2vh] w-[2vh] bg-white rounded-full"></div>
          <div className="home-hero sm:gap-[5vw] sm:py-[12vw] h-full w-full flex flex-col items-center justify-center ">
            <div
              className={`home-badge sm:mb-[3vw] whitespace-nowrap flex items-center w-fit space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black rounded-full text-white`}
            >
              <span>From design to development 🚀</span>
            </div>
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
              className="home-heading text-white mix-blend-difference leading-[1.2] text-center mb-[2vw]"
            >
              <div className="home-heading1 overflow-hidden pb-[.5vw]">
                <h1>Transforming ideas into</h1>
              </div>
              <div className="home-heading2 overflow-hidden">
                <h1>Impactful websites</h1>
              </div>
            </div>
            <p className="opacity-70 light mix-blend-difference text-center sm:w-[95%]">
              Empowering your business through an expertly developed website.
            </p>
            <div className="mt-[3vw] home-btn-div">
              <WhiteButton
                c="home-btn"
                text="Book a call"
                icon={<i className="ri-arrow-right-s-line font-[600]"></i>}
              ></WhiteButton>
            </div>
          </div>
        </section>
        <section className="bg-black home-about relative w-full overflow-hidden flex flex-col gap-[8vw] items-center md:pt-[22vw] pt-[16vw] pb-[8vw] sm:pt-[28vw]">
          <div
            style={{ boxShadow: "0px 0px 100px red" }}
            className="half-circle pointer-events-none absolute w-full flex flex-col items-center h-full scale-x-[1.1] border-white/30 sm:border-[1px] border-[3px] rounded-t-[60vw] top-[10%] md:top-[10%] sm:top-[8%]"
          ></div>
          <div className="w-[95%] flex justify-center">
            <BrandSwiper></BrandSwiper>
          </div>
          <div className="home-about-content sm:pt-[8vw] sm:flex-col md:flex-col w-[95%] flex gap-[3vw] md:gap-[1vw]">
            <div
              onMouseEnter={() => {
                gsap.to(`.home-about-left`, {
                  backgroundImage:
                    "linear-gradient(to bottom right, #33100b, #000)",
                });
              }}
              onMouseLeave={() => {
                gsap.to(`.home-about-left`, {
                  backgroundImage:
                    "linear-gradient(to bottom right, #000 , #000)",
                });
              }}
              className="w-[70%] sm:w-full md:w-full home-about-left relative p-[2vw] sm:px-[3vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]"
            >
              <img
                className="object-cover about-start absolute top-0 left-0 rotate-180 pointer-events-none"
                src="/images/Star.png"
                alt=""
              />
              <div className="flex gap-[1vw] relative z-[1]">
                <img
                  className="object-cover h-[3vw] sm:h-[6vw]"
                  src="/images/white-logo.png"
                  alt=""
                />
                <div>
                  <h6 className=" mb-[1vw]">About us</h6>
                  <p className="opacity-70 light">
                    Rohido Media is a leading Web Development studio. We help
                    startups and E -Commerce businesses to build their online
                    business by providing best Web development service.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between border-[2px] border-white/10 p-[2vw] rounded-xl">
                {[
                  { title: "Exp.", number: "4yrs+" },
                  { title: "Industry", number: "12+" },
                  { title: "Projects", number: "150+" },
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
            <div className="w-[30%] sm:w-full sm:pb-[3vw] md:w-full overflow-hidden relative h-full border-white/10 border-[2px] rounded-xl">
              <img
                className="object-cover w-full sm:h-[35vh] md:h-[40vh]"
                src="/images/about-earth.png"
                alt=""
              />
              <div className="text-center px-[1vw] flex flex-col items-center relative z-[1]">
                <h2 className="text-[#939397] bold">100+</h2>
                <p className="opacity-70 thin w-[95%]">
                  Projects globally. We have helped brands from 0 to million
                  dollars within a year.
                </p>
                <div className="flex my-[1vw] gap-[1vw]">
                  <BlackButton text="National"></BlackButton>
                  <BlackButton text="International"></BlackButton>
                </div>
              </div>
              <img
                className="object-cover absolute bottom-0 right-0 pointer-events-none"
                src="/images/Star.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="bg-black sm:hidden md:hidden home-projects relative">
          <div className="project-title sm:py-[6vw] text-center flex flex-col items-center">
            <SectionBadge
              c="project-badge"
              text="Technology + Innovation = Digital Transformations"
            ></SectionBadge>
            <div className="project-head overflow-hidden">
              <h2>Some of Our Latest  Projects</h2>
            </div>
          </div>
          <div className="project-container w-full h-[80vh] my-[6vw] relative flex sm:flex-wrap sm:gap-[2vw] md:flex-wrap md:gap-[2vw] justify-center">
            <div className="project-imgs absolute top-0 left-0 w-full h-full flex md:flex-wrap overflow-hidden md:opacity-0 sm:opacity-0">
              <img
                className="w-1/4 object-cover project-img-0"
                src="/images/project1.png"
                alt=""
              />
              <img
                className="w-1/4 object-cover project-img-1"
                src="/images/project2.png"
                alt=""
              />
              <img
                className="w-1/4 object-cover project-img-2"
                src="/images/project3.png"
                alt=""
              />
              <img
                className="w-1/4 object-cover project-img-3"
                src="/images/project4.png"
                alt=""
              />
            </div>
            {projectCard.map((data, index) => (
              <ProjectCards
                data={data}
                key={index}
                index={index}
              ></ProjectCards>
            ))}
          </div>
          <div className="flex justify-center lg:pb-[0] pb-[8vw]">
            <WhiteButton
              text="Book a call"
              icon={<i className="ri-arrow-right-s-line font-[600]"></i>}
            ></WhiteButton>
          </div>
        </section>
        <section className="home-projects-mobile hidden sm:flex md:flex w-full h-[60vh] bg-black justify-center">
          <div className="w-[95%] text-black py-[6vw]">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {projectCard.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <MobileSwiperCard
                      c={`project-mobile-card-${index}`}
                      data={data}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <section className="bg-black sm:h-fit md:h-fit h-screen home-services w-full flex flex-col justify-center">
          <div className="service-title sm:py-[6vw] sm:pb-[0] text-center flex flex-col items-center">
            <SectionBadge
              c="services-badge"
              text="Problem Solving + Creativity = Innovation"
            ></SectionBadge>
            <div className="services-heading overflow-hidden">
              <h2>Services we proudly provide</h2>
            </div>
          </div>
          <div className="flex  pt-[6vw] relative sm:overflow-x-scroll">
            <div className="services-cards flex gap-[1vw] relative sm:pl-[2vw]">
              {swiperCardData.map((item, index) => (
                <SwiperCard index={index} key={index} data={item}></SwiperCard>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-black home-team pt-[10vw] pb-[10vw] relative">
          <div className="team-title sm:py-[6vw] sm:pb-[0] text-center flex flex-col items-center">
            <SectionBadge
              c="team-badge"
              text="Recognition & Awards"
            ></SectionBadge>
            <div className="overflow-hidden team-heading">
              <h2>Our team has been recognized as:</h2>
            </div>
          </div>
          <div className="team-cards w-full pt-[4vw] flex justify-center relative z-10">
            <div className="w-[95%]">
              <div className="line w-full h-[1px] bg-white/20"></div>
              <TeamCards
                title="Clutch"
                para="Top E-commerce Developers in 2021 and 2023 by Clutch"
              ></TeamCards>
              <div className="line w-full h-[1px] bg-white/20"></div>
              <div className="line w-full h-[1px] bg-white/20"></div>
              <TeamCards
                title="Goodfirms"
                para="Top Digital Marketing Agency by Goodfirms"
              ></TeamCards>
              <div className="line w-full h-[1px] bg-white/20"></div>
              <div className="line w-full h-[1px] bg-white/20"></div>
              <TeamCards
                title="Corporate Vision"
                para="Top Shopify Developer of 2022 by Corporate Vision"
              ></TeamCards>
              <div className="line w-full h-[1px] bg-white/20"></div>
            </div>
          </div>
          <div className="absolute h-[50vw] top-0 right-0">
            <img
              className="object-cover h-full"
              src="/images/Star2.png"
              alt=""
            />
          </div>
        </section>
        <ClientReviewSection />
        <ContactSection />
        <TransparentFooter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
