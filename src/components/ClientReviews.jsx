import gsap from "gsap";

const ClientReviews = ({ active, index, fnEnter, fnLeave, refLoop }) => {
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
      } w-full h-[33.3%] border flex justify-center items-center`}
    >
      <img className="object-cover" src="/images/figma.png" alt="" />
    </div>
  );
};

export default ClientReviews;
