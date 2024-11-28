// Libraries imports
import gsap from "gsap";
import { useForm } from "react-hook-form";

// Components imports
import ScrollerX from "./ScrollerX";
import WhiteButton from "./utils/WhiteButton";
import SectionBadge from "./utils/SectionBadge";
import BlackButton from "./utils/BlackButton";

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <section className="bg-black contact-section pb-[6vw] sm:pt-[6vw]">
      <ScrollerX></ScrollerX>
      <div className="w-full flex justify-center sm:pt-[6vw]">
        <div className="w-[95%] flex justify-between sm:flex-col md:flex-col">
          <div className="contact-left w-[40%] sm:w-full md:w-full flex flex-col justify-center pb-[12vw] sm:pb-[6vw] sm:items-center md:pb-[6vw] md:items-center">
            <div className="w-[70%] sm:pb-[0vw] md:w-fit md:flex md:flex-col md:justify-center md:items-center sm:w-fit sm:flex sm:flex-col sm:justify-center sm:items-center">
              <div className="contact-headings overflow-hidden">
                <h2 className="medium leading-[1.2]">Book A Call</h2>
              </div>
              <p className="thin opacity-70 my-[1vw] sm:text-center">
                You Might have caught our idea on how we convert a plan into a
                functinal business.
              </p>
            </div>
          </div>
          <div className="contact-right relative w-[55%] sm:w-full md:w-full rounded-xl border-[2px] b border-white/30 px-[4vw] py-[4vw] overflow-hidden">
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
            <form
              onSubmit={handleSubmit((data) => {
                const { name, email, budget, message } = data;

                if (!(name || email || budget || message)) {
                  console.log("please enter a details");
                  return;
                }
                console.log("entered");

                reset();
              })}
              className="relative z-10"
              action=""
            >
              <div className="flex lg:flex-col sm:flex-col gap-[2vw] my-[2.5vw]">
                <input
                  {...register("name")}
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
                  className="contact-name sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                  type="text"
                  placeholder="YOUR NAME*"
                />

                <input
                  {...register("email")}
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
                  className="contact-email sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
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
              <div className="flex lg:flex-col sm:flex-col gap-[2vw] my-[2.5vw]">
                <input
                  {...register("budget")}
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
                  className="contact-budget sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                  type="number"
                  placeholder="YOUR NAME BUDGET*"
                />
                <input
                  {...register("message")}
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
                  className="contact-msg sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
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
