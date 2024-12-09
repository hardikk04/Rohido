import gsap from "gsap";
import { memo } from "react";

const ClientReviews = memo(({ active, index, fnEnter, fnLeave, refLoop }) => {
  return (
    <div
      onMouseEnter={() => {
        fnEnter(index);
      }}
      onMouseLeave={() => {
        refLoop.current = fnLeave();
        gsap.set(".client-center", {
          opacity: 1,
        });
      }}
      className={`client-img ${
        active ? "" : "grayscale border-white/30"
      } w-full h-[33.3%] sm:h-[8vh] md:h-[10vh] border flex justify-center items-center md:w-[33.3%]`}
    >
      <img
        className="object-cover sm:scale-[.4] md:scale-[.5] lg:scale-[.6]"
        src="/images/figma.png"
        alt=""
      />
    </div>
  );
});

export default ClientReviews;
