// Libraries imports
import { useState, useEffect } from "react";
import gsap from "gsap";

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

  const clientReviewLoop = () => {
    let activeIndex = 0;

    const interval = setInterval(() => {
      gsap.from(".client-center", {
        opacity: 0,
        duration: 1,
        y: 30,
      });

      setClientReviews((prevReviews) => {
        activeIndex = (activeIndex + 1) % clientReviews.length;
        return prevReviews.map((review, index) => ({
          ...review,
          isActive: index === activeIndex,
        }));
      });
    }, 3000);
    return interval;
  };

  useEffect(() => {
    const interval = clientReviewLoop();
    return () => {
      clearInterval(interval);
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
        <div className="client-container w-full px-[5vw] border-t h-[60vh] border-b border-white/30 flex justify-between">
          <div className="client-left w-[16%] h-full">
            <ClientReviews active={clientReviews[0].isActive} />
            <ClientReviews active={clientReviews[1].isActive} />
            <ClientReviews active={clientReviews[2].isActive} />
          </div>
          <div className="client-center w-[59%] h-full">
            {clientReviews.map(
              (item, index) =>
                item.isActive && (
                  <div
                    key={index}
                    className="w-full h-full text-center py-[2vw] px-[6vw] flex flex-col items-center justify-center"
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
          <div className="client-right w-[16%] h-full">
            <ClientReviews active={clientReviews[3].isActive} />
            <ClientReviews active={clientReviews[4].isActive} />
            <ClientReviews active={clientReviews[5].isActive} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewSection;
