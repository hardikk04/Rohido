// Components imports
import Nav from "./Nav";
import SectionBadge from "./utils/SectionBadge";
import WhiteButton from "./utils/WhiteButton";
import BlackButton from "./utils/BlackButton";
import BrandSwiper from "./BrandSwiper";
import ExperienceBox from "./ExperienceBox";
import ProjectCards from "./ProjectCards";
import SwiperCard from "./SwiperCard";
import TeamCards from "./TeamCards";
import ScrollerX from "./ScrollerX";
import Footer from "./Footer";
import { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ClientReviews from "./ClientReviews";
gsap.registerPlugin(ScrollTrigger);

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

  const [clientReviews, setClientReviews] = useState([
    {
      img: "images/client.png",
      para: "We have been exceptionally happy with our website! It looks proficient and is exceptionally easy to explore. Our involvement with the customer experience has been extraordinary after the great work of Rohido Media. They handle things exceptionally productively and are accessible for any questions we have. They also keep us updated on month-to-month reports, so we know how our website is doing. Thank you for serving.",
      name: "Vijay Raji",
      position: "CEO, Company X",
      isActive: true,
    },
    {
      img: "images/project1.png",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum consectetur non totam dolore facere voluptas!",
      name: "Anuj",
      position: "XYZ",
      isActive: false,
    },
    {
      img: "images/project2.png",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum consectetur non totam dolore facere voluptas!",
      name: "Khushi",
      position: "CEO, Company X",
      isActive: false,
    },
    {
      img: "images/client.png",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum consectetur non totam dolore facere voluptas!",
      name: "Rajat",
      position: "CEO, Company X",
      isActive: false,
    },
    {
      img: "images/client.png",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum consectetur non totam dolore facere voluptas!",
      name: "Ayush",
      position: "CEO, Company X",
      isActive: false,
    },
    {
      img: "images/client.png",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum consectetur non totam dolore facere voluptas!",
      name: "Chirag",
      position: "CEO, Company X",
      isActive: false,
    },
  ]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".home-badge", {
      opacity: 0,
    })
      .from(".home-heading h1", {
        transform: "translateY(100%)",
        stagger: 0.1,
      })
      .from(".home-hero p", {
        opacity: 0,
      })
      .from(".home-btn", {
        opacity: 0,
      });

    gsap.to(".half-circle", {
      borderTopLeftRadius: "25vw",
      borderTopRightRadius: "25vw",
      scrollTrigger: {
        scroller: "body",
        trigger: ".half-circle",
        start: "top 80%",
        end: "top -20%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".brands-swiper", {
      width: "35%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".brands-swiper",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
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

    gsap.from(".services-badge", {
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".service-title",
        start: "top 80%",
        end: "top 80%",
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
      },
    });
  });

  const clientReviewLoop = () => {
    let activeIndex = 0;

    const interval = setInterval(() => {
      gsap.from(".client-center", {
        opacity: 0,
        duration: 1,
        y: 30,
      });

      setClientReviews((prevReviews) => {
        activeIndex = (activeIndex + 1) % clientReviews.length;
        return prevReviews.map((review, index) => ({
          ...review,
          isActive: index === activeIndex,
        }));
      });
    }, 3000);
    return interval;
  };

  useEffect(() => {
    const interval = clientReviewLoop();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="main text-white regular relative z-[1]">
        <section className="bg-black home-start pt-[12vw]  w-full">
          <Nav></Nav>
          <div className="home-hero h-full w-full flex flex-col items-center justify-center ">
            <SectionBadge
              c="home-badge"
              text="From design to development 🚀"
            ></SectionBadge>
            <div className="home-heading text-white leading-[1.2] text-center mb-[2vw]">
              <div className="home-heading1 overflow-hidden pb-[.5vw]">
                <h1>Transforming ideas into</h1>
              </div>
              <div className="home-heading2 overflow-hidden">
                <h1>Impactful websites</h1>
              </div>
            </div>
            <p className="opacity-70 light">
              Empowering your business through an expertly developed website.
            </p>
            <div className="mt-[3vw]">
              <WhiteButton
                c="home-btn"
                text="Book a call"
                icon={<i className="ri-arrow-right-s-line font-[600]"></i>}
              ></WhiteButton>
            </div>
          </div>
        </section>
        <section className="bg-black home-about relative w-full overflow-hidden flex flex-col gap-[8vw] items-center pt-[16vw] pb-[8vw]">
          <div
            style={{ boxShadow: "0px 0px 100px red" }}
            className="half-circle pointer-events-none absolute w-full flex flex-col items-center h-full scale-x-[1.2] border-white/30 border-[3px] rounded-t-[60vw] top-[10%]"
          ></div>
          <BrandSwiper></BrandSwiper>
          <div className="home-about-content w-[90%] flex gap-[3vw]">
            <div className="w-[70%] relative p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]">
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
            <div className="w-[30%] overflow-hidden relative h-full border-white/10 border-[2px] rounded-xl">
              <img
                className="object-cover w-full "
                src="/images/about-earth.png"
                alt=""
              />
              <div className="text-center px-[1vw] flex flex-col items-center relative z-[1]">
                <h2 className="text-[#939397] bold">100+</h2>
                <p className="opacity-70 thin w-[90%]">
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
        <section className="bg-black home-projects relative">
          <div className="project-title text-center flex flex-col items-center">
            <SectionBadge
              c="project-badge"
              text="Technology + Innovation = Digital Transformations"
            ></SectionBadge>
            <div className="project-head overflow-hidden">
              <h2>Some of Our Latest  Projects</h2>
            </div>
          </div>
          <div className="project-card flex flex-col items-center pt-[8vw] overflow-hidden">
            <div className="project1 w-[90%] h-[90vh] border-white/30 border-[3px] rounded-xl overflow-hidden">
              <div className="project-card-data flex justify-between py-4 px-6">
                <h6 className="opacity-70">Tradeuno</h6>
                <h6 className="opacity-70">Design | Development</h6>
              </div>
              <div className="project-card-img relative w-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/images/project1.png"
                  alt=""
                />
                <div className="absolute top-0 left-0 h-full w-full z-10 bg-black/20"></div>
              </div>
            </div>
            <div className="w-full py-[4vw] flex justify-center">
              <div className="w-[90%] gap-[3vw] flex flex-wrap justify-between">
                <ProjectCards
                  c="project2"
                  title="Client XYZ"
                  para="Design | Development"
                  img="/images/project2.png"
                ></ProjectCards>
                <ProjectCards
                  c="project3"
                  title="Client XYZ"
                  para="Design | Development"
                  img="/images/project3.png"
                ></ProjectCards>
                <ProjectCards
                  c="project4"
                  title="Client XYZ"
                  para="Design | Development"
                  img="/images/project4.png"
                ></ProjectCards>
                <ProjectCards
                  c="project5"
                  title="Client XYZ"
                  para="Design | Development"
                  img="/images/project5.png"
                ></ProjectCards>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-[8vw]">
            <WhiteButton text="I want see more"></WhiteButton>
          </div>
        </section>
        <section className="bg-black home-services h-[100vh] w-full flex flex-col justify-center">
          <div className="service-title text-center flex flex-col items-center">
            <SectionBadge
              c="services-badge"
              text="Problem Solving + Creativity = Innovation"
            ></SectionBadge>
            <div className="services-heading overflow-hidden">
              <h2>Services we proudly provide</h2>
            </div>
          </div>
          <div className="flex pt-[6vw] overflow-x-hidden relative">
            <div className="services-cards flex gap-[1vw] relative">
              {swiperCardData.map((item, index) => (
                <SwiperCard index={index} key={index} data={item}></SwiperCard>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-black home-team pt-[3vw] pb-[10vw] relative">
          <div className="team-title text-center flex flex-col items-center">
            <SectionBadge
              c="team-badge"
              text="Recognition & Awards"
            ></SectionBadge>
            <div className="overflow-hidden team-heading">
              <h2>Our team has been recognized as:</h2>
            </div>
          </div>
          <div className="team-cards w-full pt-[4vw] flex justify-center relative z-10">
            <div className="w-[90%]">
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
        <section className="bg-black home-clients w-full">
          <div className="clientes-title text-center flex flex-col items-center">
            <SectionBadge
              c="clientes-badge"
              text="Design+Development = Growth 💸"
            ></SectionBadge>
            <div className="clientes-heading overflow-hidden">
              <h2>What clients say about us</h2>
            </div>
          </div>
          <div className="w-full flex justify-center py-[6vw]">
            <div className="client-container w-full px-[5vw] border-t h-[60vh] border-b border-white/30 flex justify-between">
              <div className="client-left w-[16%] h-full">
                <ClientReviews active={clientReviews[0].isActive} />
                <ClientReviews active={clientReviews[1].isActive} />
                <ClientReviews active={clientReviews[2].isActive} />
              </div>
              <div className="client-center w-[59%] h-full">
                {clientReviews.map(
                  (item, index) =>
                    item.isActive && (
                      <div
                        key={index}
                        className="w-full h-full text-center py-[2vw] px-[6vw] flex flex-col items-center justify-center"
                      >
                        <p className="thin">{item.para}</p>
                        <div className="w-[3vw] h-[3vw] rounded-full overflow-hidden mt-[3vw]">
                          <img
                            className="h-full w-full object-cover"
                            src={item.img}
                            alt=""
                          />
                        </div>
                        <span className="mt-2">{item.name}</span>
                        <p className="thin opacity-70 mt-1">{item.position}</p>
                      </div>
                    )
                )}
              </div>
              <div className="client-right w-[16%] h-full">
                <ClientReviews active={clientReviews[3].isActive} />
                <ClientReviews active={clientReviews[4].isActive} />
                <ClientReviews active={clientReviews[5].isActive} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black home-contact pb-[6vw]">
          <ScrollerX></ScrollerX>
          <div className="w-full flex justify-center">
            <div className="w-[90%] flex justify-between">
              <div className="contact-left w-[40%] flex flex-col justify-center pb-[12vw]">
                <div className="w-[70%]">
                  <div className="contact-headings overflow-hidden">
                    <h2 className="medium leading-[1.2]">Book A Call</h2>
                  </div>
                  <div className="contact-headings overflow-hidden">
                    <h2 className="medium leading-[1.4]">Right Away</h2>
                  </div>
                  <p className="thin opacity-70 my-[2vw]">
                    You Might have caught our idea on how we convert a plan into
                    a functinal business.
                  </p>
                  <WhiteButton
                    c="contact-btn"
                    text="Free Consultation"
                  ></WhiteButton>
                </div>
              </div>
              <div className="contact-right relative w-[55%] rounded-xl border-[2px] b border-white/30 px-[4vw] py-[4vw] overflow-hidden">
                <img
                  className="absolute scale-150 object-cover"
                  src="/images/Star2.png"
                  alt=""
                />
                <div className="flex relative z-0 justify-center">
                  <SectionBadge text="Idea + Enquiry = Execution"></SectionBadge>
                </div>
                <div>
                  <h3 className="mt-[2vw]">Contact Info</h3>
                </div>
                <form className="relative z-10" action="">
                  <div className="flex gap-[2vw] my-[2.5vw]">
                    <input
                      className="placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                      type="text"
                      placeholder="YOUR NAME*"
                    />
                    <input
                      className="placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                      type="email"
                      placeholder="YOUR EMAIL ID*"
                    />
                  </div>
                  <div>
                    <div className="pb-[1vw]">
                      <h3>Project You Are Interested In</h3>
                    </div>
                    <div className="flex mt-[1vw] flex-wrap gap-[1vw]">
                      <BlackButton text="Web Design"></BlackButton>
                      <BlackButton text="Web Development"></BlackButton>
                      <BlackButton text="UI/UX"></BlackButton>
                      <BlackButton text="App Development"></BlackButton>
                      <BlackButton text="Landing Page"></BlackButton>
                      <BlackButton text="E-Commerce Development"></BlackButton>
                      <BlackButton text="CMS Development"></BlackButton>
                    </div>
                  </div>
                  <div className="flex gap-[2vw] my-[2.5vw]">
                    <input
                      className="placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                      type="number"
                      placeholder="YOUR NAME BUDGET*"
                    />
                    <input
                      className="placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                      type="text"
                      placeholder="MESSAGE*"
                    />
                  </div>

                  <WhiteButton text="Let's Work"></WhiteButton>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="tranparent-footer h-[100vh] w-full pointer-events-none bg-transparent"></section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
