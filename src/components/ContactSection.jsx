// Libraries imports
import gsap from "gsap";
import { useForm } from "react-hook-form";

// Components imports
import ScrollerX from "./ScrollerX";
import WhiteButton from "./utils/WhiteButton";
import SectionBadge from "./utils/SectionBadge";

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
          <div className="contact-right relative w-[55%] sm:w-full md:w-full rounded-xl border-[1px] b border-white/30 px-[4vw] py-[4vw] overflow-hidden">
            <img
              className="absolute scale-150 object-cover"
              src="/images/Star2.png"
              alt=""
            />
            <div className="flex relative z-0 justify-center">
              <SectionBadge text="Idea + Enquiry = Execution"></SectionBadge>
            </div>
            <div>
              <h2 className="mt-[2vw]">Contact Info</h2>
            </div>
            <form
              onSubmit={handleSubmit((data) => {
                const { name, phone, email, message } = data;

                if (!(name || email || phone || message)) {
                  console.log("please enter a details");
                  return;
                }

                Email.send({
                  Host: "smtp.elasticemail.com",
                  Username: "hardikkdummy@gmail.com",
                  Password: "2F5B1002520A83D64D72E447DE1EDBA19B13",
                  To: "hardikkdummy@gmail.com",
                  From: "hardikkdummy@gmail.com",
                  Subject: "This is the subject",
                  Body: "And this is the body",
                }).then((message) => alert(message));
                console.log(data);

                reset();
              })}
              className="relative z-10"
            >
              <div className="flex flex-col lg:flex-col sm:flex-col gap-[1vw] sm:gap-[3vw] sm:mb-[6vw] my-[2.5vw]">
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
                  required={true}
                  className="contact-name sm:leading-[3] sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
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
                  required={true}
                  className="contact-email sm:leading-[3] sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                  type="email"
                  placeholder="YOUR EMAIL ID*"
                />
                <input
                  {...register("phone")}
                  onMouseEnter={() => {
                    gsap.to(`.contact-number`, {
                      backgroundImage:
                        "linear-gradient(42deg, #000, #fe4a2e24)",
                    });
                  }}
                  onMouseLeave={() => {
                    gsap.to(`.contact-number`, {
                      backgroundImage:
                        "linear-gradient(143deg, #0c0c0d 23%, #222224)",
                    });
                  }}
                  required={true}
                  className="contact-number sm:leading-[3] sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
                  type="number"
                  placeholder="YOUR NUMBER*"
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
                  className="contact-msg sm:leading-[3] sm:placeholder:text-[2.5vw] placeholder-text-black/30 text-white bg-white/10 px-[1.5vw] py-[.6vw] rounded-md outline-none"
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
