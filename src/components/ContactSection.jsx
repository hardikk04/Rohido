// Libraries imports
import gsap from "gsap";

// Components imports
import ScrollerX from "./ScrollerX";
import WhiteButton from "./utils/WhiteButton";
import SectionBadge from "./utils/SectionBadge";
import BlackButton from "./utils/BlackButton";

const ContactSection = () => {
  return (
    <section className="bg-black contact-section pb-[6vw]">
      <ScrollerX></ScrollerX>
      <div className="w-full flex justify-center">
        <div className="w-[95%] flex justify-between">
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
                  onMouseEnter={() => {
                    gsap.to(`.contact-name`, {
                      backgroundImage:
                        "linear-gradient(42deg, #000, #fe4a2e24)",
                    });
                  }}
                  onMouseLeave={() => {
                    gsap.to(`.contact-name`, {
                      backgroundImage:
                        "linear-gradient(143deg, #0c0c0d 23%, #222224)",
                    });
                  }}
                  className="contact-name placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                  type="text"
                  placeholder="YOUR NAME*"
                />

                <input
                  onMouseEnter={() => {
                    gsap.to(`.contact-email`, {
                      backgroundImage:
                        "linear-gradient(42deg, #000, #fe4a2e24)",
                    });
                  }}
                  onMouseLeave={() => {
                    gsap.to(`.contact-email`, {
                      backgroundImage:
                        "linear-gradient(143deg, #0c0c0d 23%, #222224)",
                    });
                  }}
                  className="contact-email placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
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
                  onMouseEnter={() => {
                    gsap.to(`.contact-budget`, {
                      backgroundImage:
                        "linear-gradient(42deg, #000, #fe4a2e24)",
                    });
                  }}
                  onMouseLeave={() => {
                    gsap.to(`.contact-budget`, {
                      backgroundImage:
                        "linear-gradient(143deg, #0c0c0d 23%, #222224)",
                    });
                  }}
                  className="contact-budget placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                  type="number"
                  placeholder="YOUR NAME BUDGET*"
                />
                <input
                  onMouseEnter={() => {
                    gsap.to(`.contact-msg`, {
                      backgroundImage:
                        "linear-gradient(42deg, #000, #fe4a2e24)",
                    });
                  }}
                  onMouseLeave={() => {
                    gsap.to(`.contact-msg`, {
                      backgroundImage:
                        "linear-gradient(143deg, #0c0c0d 23%, #222224)",
                    });
                  }}
                  className="contact-msg placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
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
  );
};

export default ContactSection;