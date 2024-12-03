import gsap from "gsap";

const SwiperCard = ({ data, index }) => {
  const { number, title, para, img } = data;

  return (
    <div
      onMouseEnter={() => {
        gsap.to(`.swiper-card-${index}`, {
          backgroundImage: "linear-gradient(42deg, #000, #33100b)",
        });

        gsap.to(`.swiper-card-${index} .swiper-number`, {
          color: "#fe4a2e",
        });
      }}
      onMouseLeave={() => {
        gsap.to(`.swiper-card-${index}`, {
          backgroundImage: "linear-gradient(42deg, #0c0c0d 23%, #222224)",
        });

        gsap.to(`.swiper-card-${index} .swiper-number`, {
          color: "white",
        });
      }}
      className={`swiper-card-${index} swiper-cards relative z-[1] bg-black w-[24%] sm:py-[4vw] sm:px-[4vw] sm:w-[35%] shrink-0 text-white rounded-md shadow-md p-[1vw] border-[.1px] border-white/30`}
    >
      <p className="swiper-number">{number}</p>
      <h3 className="bold mt-[1.5vw] mb-[2vw]">{title}</h3>
      <p className="opacity-70 light">{para}</p>
      <img className="h-[5vw] object-cover mt-[3vw]" src={img} alt="" />
    </div>
  );
};

export default SwiperCard;
