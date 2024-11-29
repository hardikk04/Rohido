import { useEffect, useState } from "react";
import gsap from "gsap";

const ServiceElem = ({ title, index }) => {
  const [isToggled, setisToggled] = useState(true);
  return (
    <div className="w-full px-[3vw] pt-[1vw] sm:py-[2vw]">
      <div className={`service-elem-${index} h-[6vw] overflow-hidden`}>
        <div className="flex justify-between items-center">
          <h3>{title}</h3>
          <i
            onClick={() => {
              if (isToggled) {
                for (let i = 0; i < 4; i++) {
                  if (index !== i) {
                    gsap.to(`.service-elem-${i}`, {
                      height: "6vw",
                    });
                  }
                }
                gsap.to(`.serive-plus-${index}`, {
                  rotate: "360deg",
                  ease: "power1.inOut",
                });

                gsap.to(`.service-elem-${index}`, {
                  height: "14vw",
                });

                setisToggled((prev) => !prev);
              } else {
                gsap.to(`.serive-plus-${index}`, {
                  rotate: "45deg",
                  ease: "power1.inOut",
                });

                gsap.to(`.service-elem-${index}`, {
                  height: "6vw",
                });
                setisToggled((prev) => !prev);
              }
            }}
            className={`serive-plus-${index} serive-pluses cursor-pointer ri-close-large-fill text-[2vw] rotate-[45deg] sm:text-xl`}
          ></i>
        </div>
        <div className="mt-[2vw]">
          <p className="thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ea,
            consectetur repellat cumque animi quisquam veniam! Corporis
            quibusdam incidunt cumque delectus officiis assumenda tempore ut
            corrupti et vitae at, doloribus dolore architecto sunt vero tenetur
            non eius aliquam recusandae eveniet id itaque exercitationem sed!
            Sed debitis magni repellendus est veniam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceElem;