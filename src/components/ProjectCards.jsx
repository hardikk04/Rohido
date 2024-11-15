import EmergingImage from "./EmergingImage";

const ProjectCards = ({ title, para, img, c }) => {
  return (
    <div
      className={`${c} w-[48%] h-[65vh] border-white/30 border-[3px] rounded-xl overflow-hidden`}
    >
      <div className="project-card-data h-[10%] flex justify-between py-4 px-6">
        <h6 className="opacity-70">{title}</h6>
        <h6 className="opacity-70">{para}</h6>
      </div>
      <div className="project-card-img h-[90%] relative w-full rounded-xl overflow-hidden">
        <EmergingImage
          type={1}
          url={img}
          className="w-full h-full bg-center bg-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full z-10 bg-black/20"></div>
      </div>
    </div>
  );
};

export default ProjectCards;
