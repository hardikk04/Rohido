const TransformationBadge = ({ text, c = "", mail = false }) => {
  return mail ? (
    <div
      className={`${c} flex items-center w-fit space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-black rounded-full text-white`}
    >
      <a href={`mailto:${text}`}>{text}</a>
    </div>
  ) : (
    <div
      className={`${c} sm:mb-[3vw] whitespace-nowrap flex items-center w-fit space-x-2 px-4 sm:px-2 sm:py-1 py-2 bg-gradient-to-r from-red-500 to-black rounded-full text-white`}
    >
      <span>{text}</span>
    </div>
  );
};

export default TransformationBadge;
