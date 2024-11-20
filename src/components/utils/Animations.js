import gsap from "gsap";

// paths
// edit here: https://yqnn.github.io/svg-path-editor/
const paths = {
  step1: {
    unfilled: "M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z",
    inBetween: "M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z",
    /*
        M 0 0 h 34 c 73 7 73 94 0 100 H 0 V 0 Z
        M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z
        M 0 0 h 34 c 112 44 -32 49 0 100 H 0 V 0 Z
        */
    filled: "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z",
  },
  step2: {
    filled: "M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z",
    //inBetween: 'M 100 0 H 50 c 20 33 20 67 0 100 h 50 V 0 Z',
    inBetween: "M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z",
    unfilled: "M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z",
  },
};

let isAnimating = false;

export const animationPageIn = () => {
  // const bannerOne = document.querySelector(".banner-1");
  // const bannerTwo = document.querySelector(".banner-2");
  // const bannerThree = document.querySelector(".banner-3");
  // const bannerFour = document.querySelector(".banner-4");

  // if (bannerOne && bannerTwo && bannerThree && bannerFour) {
  //   const tl = gsap.timeline();

  //   tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
  //     yPercent: 0,
  //   }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
  //     yPercent: 100,
  //     stagger: 0.2,
  //   });
  // }
  const overlayPath = document.querySelector(".overlay__path");

  if (overlayPath) {
    if (isAnimating) return;
    isAnimating = true;

    const pageSwitchTimelineOut = gsap
      .timeline({
        paused: true,
        onComplete: () => (isAnimating = false),
      })
      .set(overlayPath, {
        attr: { d: paths.step1.unfilled },
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: "power3.in",
          attr: { d: paths.step1.inBetween },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.2,
        ease: "power1",
        attr: { d: paths.step1.filled },
      })

      .set(overlayPath, {
        attr: { d: paths.step2.filled },
      })

      .to(overlayPath, {
        duration: 0.15,
        ease: "sine.in",
        attr: { d: paths.step2.inBetween },
      })
      .to(overlayPath, {
        duration: 1,
        ease: "power4",
        attr: { d: paths.step2.unfilled },
      });

    pageSwitchTimelineOut.play(0);
  }
};

export const animationPageOut = (href, router) => {
  // const bannerOne = document.querySelector(".banner-1");
  // const bannerTwo = document.querySelector(".banner-2");
  // const bannerThree = document.querySelector(".banner-3");
  // const bannerFour = document.querySelector(".banner-4");

  // if (bannerOne && bannerTwo && bannerThree && bannerFour) {
  //   const tl = gsap.timeline();

  //   tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
  //     yPercent: -100,
  //   }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
  //     yPercent: 0,
  //     stagger: 0.2,
  //     onComplete: () => {
  //       router(href);
  //     },
  //   });
  // }
  const overlayPath = document.querySelector(".overlay__path");

  if (overlayPath) {
    if (isAnimating) return;
    isAnimating = true;

    const pageSwitchTimelineOut = gsap
      .timeline({
        paused: true,
        onComplete: () => (isAnimating = false),
      })
      .set(overlayPath, {
        attr: { d: paths.step1.unfilled },
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: "power3.in",
          attr: { d: paths.step1.inBetween },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.2,
        ease: "power1",
        attr: { d: paths.step1.filled },
        onComplete: () => router(href),
      })

      .set(overlayPath, {
        attr: { d: paths.step2.filled },
      })

      .to(overlayPath, {
        duration: 0.15,
        ease: "sine.in",
        attr: { d: paths.step2.inBetween },
      })
      .to(overlayPath, {
        duration: 1,
        ease: "power4",
        attr: { d: paths.step2.unfilled },
      });

    pageSwitchTimelineOut.play(0);
  }
};
