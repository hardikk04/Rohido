import gsap from "gsap";
import Nav from "./Nav";
import SectionBadge from "./utils/SectionBadge";
import ServiceElem from "./ServiceElem";
import { useState } from "react";
import ClientReviews from "./ClientReviews";
import ScrollerX from "./ScrollerX";
import WhiteButton from "./utils/WhiteButton";
import BlackButton from "./utils/BlackButton";
import Footer from "./Footer";
import { useEffect } from "react";

const Service = () => {
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
    <div className="main text-white regular relative z-[1]">
      <section
        onMouseMove={(dets) => {
          gsap.to(".mouse-follower", {
            left: dets.clientX,
            top: dets.clientY,
            delay: 0.1,
          });
        }}
        className="bg-black service-start pt-[12vw] w-full relative overflow-hidden"
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
              <h1>Robust Solutions That You</h1>
            </div>
            <div className="service-heading2 overflow-hidden pb-[.5vw]">
              <h1>Always Wanted</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black relative w-full overflow-hidden flex flex-col gap-[8vw] items-center pt-[26vw] pb-[4vw]">
        <div
          style={{ boxShadow: "0px 0px 250px red" }}
          className="half-circle pointer-events-none absolute w-full flex flex-col items-center h-full scale-x-[1.5] border-white/30 border-[3px] rounded-t-[60vw] top-[15%]"
        ></div>

        <div className="w-full">
          <div className="services-title text-center flex flex-col items-center">
            <SectionBadge
              c="project-badge"
              text="Problem Solving + Creativity = Innovation"
            ></SectionBadge>
            <div className="project-head overflow-hidden">
              <h2>Services that we provide</h2>
            </div>
          </div>
          <div className="w-full py-[6vw] flex justify-center">
            <div className="w-[90%]">
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="0" title="UI/UX Design" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="1" title="App Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="2" title="Web Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
              <ServiceElem index="3" title="E-Commerce site Development" />
              <div className="w-full h-[1px] bg-white opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center bg-black pb-[6vw]">
        <div className="service-help w-[90%] flex justify-between">
          <div className="help-left w-[56%]">
            <SectionBadge c="thin" text="What we offer : "></SectionBadge>
            <div className="py-[2vw]">
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
              <div className="flex gap-[1vw] items-center">
                <div className="h-[2.5vh] w-[2.5vh] rounded-full border border-white/30"></div>
                <span>Build With User Experience In Mind</span>
              </div>
              <div className="flex gap-[1vw] items-center">
                <div className="h-[2.5vh] w-[2.5vh] rounded-full border border-white/30"></div>
                <span>A Collaborative solution for different business</span>
              </div>
              <div className="flex gap-[1vw] items-center">
                <div className="h-[2.5vh] w-[2.5vh] rounded-full border border-white/30"></div>
                <span>Make your website accessible</span>
              </div>
              <div className="flex gap-[1vw] items-center">
                <div className="h-[2.5vh] w-[2.5vh] rounded-full border border-white/30"></div>
                <span>Context Sourcing Guidance</span>
              </div>
            </div>
          </div>
          <div className="help-right w-[38%] h-full">
            <img
              className="h-full w-full object-cover"
              src="/images/services-network.png"
              alt=""
            />
          </div>
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
                  You Might have caught our idea on how we convert a plan into a
                  functinal business.
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
  );
};

export default Service;
