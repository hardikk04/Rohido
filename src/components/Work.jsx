// Libraries imports
import gsap from "gsap";

// Components imports
import Nav from "./Nav";
import SectionBadge from "./utils/SectionBadge";
import { useGSAP } from "@gsap/react";
import EmergingImage from "./EmergingImage";
import Scene from "../Scene";
import WebglCard from "./WebglCard";
import WhiteButton from "./utils/WhiteButton";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Work = () => {
  useGSAP(() => {});

  return (
    <div className="main relative text-white z-[1]">
      <Scene></Scene>
      <section
        onMouseMove={(dets) => {
          gsap.to(".mouse-follower", {
            left: dets.clientX,
            top: dets.clientY,
            delay: 0.1,
          });
        }}
        className="bg-black about-start h-[100vh] w-full relative overflow-hidden"
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
          </div>
        </div>
      </section>
      <section className="w-full bg-black">
        <div className="project-title text-center flex flex-col items-center">
          <SectionBadge
            c="project-badge"
            text="Technology + Innovation = Digital Transformations"
          ></SectionBadge>
          <div className="project-head overflow-hidden">
            <h2>Some of Our Latest  Projects</h2>
          </div>
        </div>
        <div className="project-card flex flex-col cursor-grab items-center pt-[4vw] overflow-hidden">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="mySwiper h-[90vh] w-[95%]"
          >
            <SwiperSlide>
              <div className="w-full h-full flex pb-[2vw]">
                <div className="swiper-left relative w-[50%] h-full">
                  <div className="absolute top-0 left-0 bg-black/10 h-full w-full"></div>
                  <EmergingImage
                    type={1}
                    url="/images/project1.png"
                    className="w-full h-full bg-center bg-cover"
                  />
                </div>
                <div className="swiper-right w-[50%] h-full bg-white p-[3vw] text-black flex flex-col justify-center">
                  <span className="font-[400] opacity-70 cursor-text">01</span>
                  <span className="font-[400] opacity-70 cursor-text">
                    23.11.2024
                  </span>
                  <h3 className="my-[.5vw] cursor-text">
                    Dare to Stand Out: Navigation Differentation in the Age of
                    "Blanding"
                  </h3>
                  <span className="font-[400] opacity-70 cursor-text">
                    Explore how to make your brand truly distinctive in a sea of
                    similar designs with our insightful
                  </span>
                  <h6 className="font-[400] mt-[1vw] cursor-pointer">
                    Read more <i className="ri-arrow-right-line"></i>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex pb-[2vw]">
                <div className="swiper-left w-[50%] h-full">
                  <EmergingImage
                    type={1}
                    url="/images/project2.png"
                    className="w-full h-full bg-center bg-cover"
                  />
                </div>
                <div className="swiper-right w-[50%] h-full bg-white p-[3vw] text-black flex flex-col justify-center">
                  <span className="thin">02</span>
                  <span className="thin">23.11.2024</span>
                  <h3 className="my-[.5vw]">
                    Dare to Stand Out: Navigation Differentation in the Age of
                    "Blanding"
                  </h3>
                  <span className="thin">
                    Explore how to make your brand truly distinctive in a sea of
                    similar designs with our insightful
                  </span>
                  <h6 className="mt-[.5vw]">
                    Read more <i className="ri-arrow-right-line"></i>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex pb-[2vw]">
                <div className="swiper-left w-[50%] h-full">
                  <EmergingImage
                    type={1}
                    url="/images/project3.png"
                    className="w-full h-full bg-center bg-cover"
                  />
                </div>
                <div className="swiper-right w-[50%] h-full bg-white p-[3vw] text-black flex flex-col justify-center">
                  <span className="thin">03</span>
                  <span className="thin">23.11.2024</span>
                  <h3 className="my-[.5vw]">
                    Dare to Stand Out: Navigation Differentation in the Age of
                    "Blanding"
                  </h3>
                  <span className="thin">
                    Explore how to make your brand truly distinctive in a sea of
                    similar designs with our insightful
                  </span>
                  <h6 className="mt-[.5vw]">
                    Read more <i className="ri-arrow-right-line"></i>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex pb-[2vw]">
                <div className="swiper-left w-[50%] h-full">
                  <EmergingImage
                    type={1}
                    url="/images/project4.png"
                    className="w-full h-full bg-center bg-cover"
                  />
                </div>
                <div className="swiper-right w-[50%] h-full bg-white p-[3vw] text-black flex flex-col justify-center">
                  <span className="thin">04</span>
                  <span className="thin">23.11.2024</span>
                  <h3 className="my-[.5vw]">
                    Dare to Stand Out: Navigation Differentation in the Age of
                    "Blanding"
                  </h3>
                  <span className="thin">
                    Explore how to make your brand truly distinctive in a sea of
                    similar designs with our insightful
                  </span>
                  <h6 className="mt-[.5vw]">
                    Read more <i className="ri-arrow-right-line"></i>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex pb-[2vw]">
                <div className="swiper-left w-[50%] h-full">
                  <EmergingImage
                    type={1}
                    url="/images/project5.png"
                    className="w-full h-full bg-center bg-cover"
                  />
                </div>
                <div className="swiper-right w-[50%] h-full bg-white p-[3vw] text-black flex flex-col justify-center">
                  <span className="thin">05</span>
                  <span className="thin">23.11.2024</span>
                  <h3 className="my-[.5vw]">
                    Dare to Stand Out: Navigation Differentation in the Age of
                    "Blanding"
                  </h3>
                  <span className="thin">
                    Explore how to make your brand truly distinctive in a sea of
                    similar designs with our insightful
                  </span>
                  <h6 className="mt-[.5vw]">
                    Read more <i className="ri-arrow-right-line"></i>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pb-[2vw]">
          <WhiteButton
            text="Book a call"
            icon={<i className="ri-arrow-right-s-line font-[600]"></i>}
          ></WhiteButton>
        </div>
      </section>
      <section className="tranparent-footer h-[100vh] w-full pointer-events-none bg-transparent"></section>
      <Footer></Footer>
    </div>
  );
};

export default Work;
