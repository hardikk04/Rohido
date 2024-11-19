import gsap from "gsap";

export const animationPageIn = () => {
  const bannerOne = document.querySelector(".banner-1");
  const bannerTwo = document.querySelector(".banner-2");
  const bannerThree = document.querySelector(".banner-3");
  const bannerFour = document.querySelector(".banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};

export const animationPageOut = (href, router) => {
  const bannerOne = document.querySelector(".banner-1");
  const bannerTwo = document.querySelector(".banner-2");
  const bannerThree = document.querySelector(".banner-3");
  const bannerFour = document.querySelector(".banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    console.log("in");

    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router(href);
      },
    });
  }
};
