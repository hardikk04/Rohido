import gsap from "gsap";

const AboutCard = ({ index, data }) => {
  const { title, para } = data;
  const handleTouchStart = (event) => {
    event.currentTarget.classList.toggle("hover");
  };
  return (
    <div className="col service-cards" onTouchStart={handleTouchStart}>
      <div className="container">
        <div
          className="front"
          style={{
            backgroundImage: 'url("https://unsplash.it/511/511/")',
          }}
        >
          <div className="inner">
          </div>
        </div>
        <div className="back">
          <div className="inner">
          <div className="w-full flex justify-between items-end">
              <h3>STRATEGY</h3>
              <img className="w-[2vw] sm:w-[5vw] md:w-[4vw]" src="/images/favIcon.png" alt="" />
            </div>
            <div className="flex flex-col justify-evenly h-full">
              <p className="sm:text-[3.8vw] md:text-[3vw] thin ">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="sm:text-[3.8vw] md:text-[3vw] thin ">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="sm:text-[3.8vw] md:text-[3vw] thin ">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="sm:text-[3.8vw] md:text-[3vw] thin ">Lorem, ipsum.</p>
              <div className="w-full h-[1px] border-t border-white/30"></div>
              <p className="sm:text-[3.8vw] md:text-[3vw] thin ">Lorem, ipsum.</p>
              
            </div>
            <div className="w-full sm:hidden md:hidden flex justify-between items-start rotate-180">
              <h3>STRATEGY</h3>
              <img className="w-[2vw] sm:w-[5vw] md:w-[4vw]" src="/images/favIcon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
