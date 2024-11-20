// Libraries imports
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

// Components imports
import SectionBadge from "./utils/SectionBadge";
import ClientReviews from "./ClientReviews";

const ClientReviewSection = () => {
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

  const activeIndexRef = useRef(0);

  const clientReviewLoop = () => {
    const interval = setInterval(() => {
      gsap.from(".client-center", {
        opacity: 0,
        duration: 0.5,
        y: 30,
      });

      setClientReviews((prevReviews) => {
        activeIndexRef.current =
          (activeIndexRef.current + 1) % clientReviews.length;
        return prevReviews.map((review, index) => ({
          ...review,
          isActive: index === activeIndexRef.current,
        }));
      });
    }, 3000);
    return interval;
  };

  const intervalRef = useRef(null);

  const mouseEnterHandler = (e) => {
    activeIndexRef.current = e;
    setClientReviews((prev) => {
      return prev.map((review, i) => {
        if (e === i) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          gsap.from(".client-center", {
            opacity: 0,
            duration: 0.5,
            y: 30,
          });
          return { ...review, isActive: true };
        }
        return { ...review, isActive: false };
      });
    });
  };

  useEffect(() => {
    intervalRef.current = clientReviewLoop();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="bg-black w-full">
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
        <div className="client-container sm:justify-between sm:h-fit sm:flex-col md:justify-between md:h-fit md:flex-col w-full px-[5vw] border-t  h-[60vh] border-b border-white/30 flex justify-between">
          <div className="client-left w-[16%]  sm:w-full sm:flex md:w-full md:flex">
            <ClientReviews
              index="0"
              fnEnter={() => mouseEnterHandler(0)}
              fnLeave={() => clientReviewLoop()}
              refLoop={intervalRef}
              active={clientReviews[0].isActive}
            />
            <ClientReviews
              index="1"
              fnEnter={() => mouseEnterHandler(1)}
              fnLeave={() => clientReviewLoop()}
              refLoop={intervalRef}
              active={clientReviews[1].isActive}
            />
            <ClientReviews
              index="2"
              fnEnter={() => mouseEnterHandler(2)}
              fnLeave={() => clientReviewLoop()}
              refLoop={intervalRef}
              active={clientReviews[2].isActive}
            />
          </div>
          <div className="client-center w-[59%] sm:w-full md:w-full h-full">
            {clientReviews.map(
              (item, index) =>
                item.isActive && (
                  <div
                    key={index}
                    className="w-full h-full text-center py-[2vw] sm:py-[5vw] md:py-[5vw] px-[6vw] flex flex-col items-center justify-center"
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
          <div className="client-right w-[16%] sm:w-full sm:flex md:w-full md:flex">
            <ClientReviews
              index="3"
              fnEnter={() => mouseEnterHandler(3)}
              fnLeave={() => clientReviewLoop()}
              refLoop={intervalRef}
              active={clientReviews[3].isActive}
            />
            <ClientReviews
              index="4"
              fnEnter={() => mouseEnterHandler(4)}
              fnLeave={() => clientReviewLoop()}
              refLoop={intervalRef}
              active={clientReviews[4].isActive}
            />
            <ClientReviews
              index="5"
              fnEnter={() => mouseEnterHandler(5)}
              fnLeave={() => clientReviewLoop()}
              refLoop={intervalRef}
              active={clientReviews[5].isActive}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewSection;
