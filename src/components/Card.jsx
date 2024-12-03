import { useEffect, useRef, useState } from "react";
import Card3D from "./CardThreeD";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const [aboutCard, setAboutCard] = useState([
    {
      title: "Consultation:",
      para: "We begin by understanding your business objectives, target people, and special requirements through in-depth consultations.",
    },
    {
      title: "Design and Development:",
      para: "Our exceptional team of developers and designers works collaboratively to bring your vision to life, building dazzling websites that are both visually engaging and profoundly functional.",
    },
    {
      title: "Feedback and Modifications:",
      para: "We value your input and effectively look for feedback throughout the design plan and development process, making corrections as required to guarantee your complete satisfaction.",
    },
    {
      title: "Launch and Optimization:",
      para: "Once your business site is ready, we'll offer assistance as you launch it to the world and proceed to screen and optimize its performance for maximum results.",
    },
  ]);

  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const totalScrollHeight = window.innerHeight * 3;
      const position = [10, 34, 58, 82];
      const rotations = [-15, -7.5, 7.5, 15];

      ScrollTrigger.create({
        trigger: container.current.querySelector(".cards"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacer: true,
      });

      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${position[index]}%`,
          rotation: `0`,
          ease: "power1.out",
          scrollTrigger: {
            trigger: container.current.querySelector(".cards"),
            start: "top top",
            end: () => `+=${totalScrollHeight}`,
            scrub: 1,
            id: `spread-${index}`,
          },
        });
      });

      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flip-card-front");
        const backEl = card.querySelector(".flip-card-back");

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: container.current.querySelector(".cards"),
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotations[index] * (1 - animationProgress);

              gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });

              console.log(cardRotation);
              

              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    },

    { scope: container }
  );

  return (
    <div className="h-full" ref={container}>
      <section className="cards relative h-screen w-full">
        {aboutCard.map((_, index) => (
          <Card3D
            data={_}
            key={index}
            id={`card-${index + 1}`}
            frontSrc="/images/project1.png"
            frontAlt="Card Image"
            backText="Your card details appear here"
            ref={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </section>
    </div>
  );
};

export default Card;
