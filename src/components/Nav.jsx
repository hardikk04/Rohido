import BlackButton from "./utils/BlackButton";

const Nav = () => {
  return (
    <div className="fixed z-50 left-[50%] top-[2%] -translate-x-[50%] w-[95%] bg-white/5 rounded-[1.5vw] flex justify-between items-center px-[1.5vw] py-[1vw] border border-[#ffffff20] border-solid">
      <div className="nav-left">
        <img src="/images/main-logo.png" alt="" />
      </div>
      <div className="nav-right relative">
        <BlackButton text="Menu"></BlackButton>
      </div>
    </div>
  );
};

export default Nav;
