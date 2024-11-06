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

const Home = () => {
  return (
    <div className="main bg-black text-white regular ">
      <section className="home-start pt-[12vw]  w-full">
        <Nav></Nav>
        <div className="home-hero h-full w-full flex flex-col items-center justify-center ">
          <SectionBadge text="From design to development 🚀"></SectionBadge>
          <div className="home-heading text-white leading-[1.2] text-center mb-[2vw]">
            <div>
              <h1>Transforming ideas into</h1>
            </div>
            <div>
              <h1>Impactful websites</h1>
            </div>
          </div>
          <p className="opacity-70 light">
            Empowering your business through an expertly developed website.
          </p>
          <div className="mt-[3vw]">
            <WhiteButton
              text="Book a call"
              icon={<i className="ri-arrow-right-s-line font-[600]"></i>}
            ></WhiteButton>
          </div>
        </div>
      </section>
      <section className="home-about relative w-full overflow-hidden flex flex-col gap-[8vw] items-center pt-[16vw] pb-[8vw]">
        <div
          style={{ boxShadow: "0px 0px 100px red" }}
          className="half-circle absolute w-full flex flex-col items-center h-full scale-x-[1.2] border-white/30 border-[3px] rounded-t-full top-[10%]"
        ></div>
        <BrandSwiper></BrandSwiper>
        <div className="home-about-content w-[90%] flex gap-[3vw]">
          <div className="w-[70%] relative p-[1vw] pb-0 text-white flex overflow-hidden rounded-xl flex-col justify-between gap-[8vw]">
            <img
              className="object-cover absolute top-0 left-0 rotate-180"
              src="/images/Star.png"
              alt=""
            />

            <div className="flex gap-[1vw]">
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
            <div className="text-center px-[1vw] flex flex-col items-center">
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
              className="object-cover absolute bottom-0 right-0"
              src="/images/Star.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="home-projects relative">
        <div className="text-center flex flex-col items-center">
          <SectionBadge text="Technology + Innovation = Digital Transformations"></SectionBadge>
          <h2>Some of Our Latest  Projects</h2>
        </div>
        <div className="project-card flex flex-col items-center pt-[8vw]">
          <div className="w-[90%] h-[90vh] border-white/30 border-[3px] rounded-xl overflow-hidden">
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
                title="Client XYZ"
                para="Design | Development"
                img="/images/project2.png"
              ></ProjectCards>
              <ProjectCards
                title="Client XYZ"
                para="Design | Development"
                img="/images/project3.png"
              ></ProjectCards>
              <ProjectCards
                title="Client XYZ"
                para="Design | Development"
                img="/images/project4.png"
              ></ProjectCards>
              <ProjectCards
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
      <section className="home-services">
        <div className="text-center flex flex-col items-center">
          <SectionBadge text="Problem Solving + Creativity = Innovation"></SectionBadge>
          <h2>Services we proudly provide</h2>
        </div>
        <div className="services-cards flex gap-[1vw] py-[6vw] overflow-x-hidden">
          <SwiperCard
            number="01"
            title="UI/UX"
            para="We assist both new ventures and established companies in crafting engaging user experiences from 
                  start to finish, offering comprehensive services in UI/UX design "
            img="/images/swiper1.png"
          ></SwiperCard>
          <SwiperCard
            number="02"
            title="App Development"
            para="Utilizing cutting-edge technologies  develop robust and scalable hybrid and native mobile applications."
            img="/images/swiper1.png"
          ></SwiperCard>
          <SwiperCard
            number="02"
            title="App Development"
            para="Utilizing cutting-edge technologies  develop robust and scalable hybrid and native mobile applications."
            img="/images/swiper1.png"
          ></SwiperCard>
          <SwiperCard
            number="02"
            title="App Development"
            para="Utilizing cutting-edge technologies  develop robust and scalable hybrid and native mobile applications."
            img="/images/swiper1.png"
          ></SwiperCard>
          <SwiperCard
            number="02"
            title="App Development"
            para="Utilizing cutting-edge technologies  develop robust and scalable hybrid and native mobile applications."
            img="/images/swiper1.png"
          ></SwiperCard>
        </div>
      </section>
      <section className="home-team pt-[3vw] pb-[10vw] relative">
        <div className="text-center flex flex-col items-center">
          <SectionBadge text="Recognition & Awards"></SectionBadge>
          <h2>Our team has been recognized as:</h2>
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
          <img className="object-cover h-full" src="/images/Star2.png" alt="" />
        </div>
      </section>
      <section className="home-clients w-full">
        <div className="text-center flex flex-col items-center">
          <SectionBadge text="Design+Development = Growth 💸"></SectionBadge>
          <h2>What clients say about us</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;