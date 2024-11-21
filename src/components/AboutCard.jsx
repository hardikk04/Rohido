import gsap from "gsap";

const AboutCard = ({ index, data }) => {
  const { title, para } = data;

  return (
    <div
      onMouseEnter={() => {
        gsap.to(`.service-card-${index}`, {
          backgroundImage: "linear-gradient(42deg, #000, #fe4a2e24)",
        });
      }}
      onMouseLeave={() => {
        gsap.to(`.service-card-${index}`, {
          backgroundImage: "linear-gradient(143deg, #0c0c0d 23%, #222224)",
        });
      }}
      className={`service-card-${index} service-cards md:mt-[1vw] sm:mt-[1vw] text-center about-cards relative z-[1] bg-black md:gap-[5vw] sm:w-full md:w-[49%] w-[24%] text-white rounded-lg shadow-md p-[1vw] py-[2vw] border-[2px] border-white/30`}
    >
      <h3 className="regular mb-[2vw]">{title}</h3>
      <p className="opacity-70 light">{para}</p>
    </div>
  );
};

export default AboutCard;
