const BrandSwiper = () => {
  return (
    <div className="brands-swiper overflow-hidden flex border-[2px] border-white/40 w-[90%] px-[2vw]  rounded-[1.5vw]">
      <div className="flex gap-[1vw] brands-ani shrink-0">

      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples.png" alt="" />
      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples-1.png" alt="" />
      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples-0.png" alt="" />
      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples-2.png" alt="" />
      </div>
      <div className="flex gap-[1vw] brands-ani shrink-0">

      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples.png" alt="" />
      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples-1.png" alt="" />
      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples-0.png" alt="" />
      <img className="object-contain scale-[.6] shrink-0" src="/images/Examples-2.png" alt="" />
      </div>
    </div>
  );
};

export default BrandSwiper;
