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
            <p>{title}</p>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              {para}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
