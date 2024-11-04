import Button from "./utils/BlackButton";

const Nav = () => {
  return (
    <div className="fixed left-[50%] top-[2%] -translate-x-[50%] w-[95%] bg-white/5 rounded-[1.5vw] flex justify-between items-center px-[1.5vw] py-[1vw] border border-[#ffffff20] border-solid">
      <div className="nav-left">
        <img src="/images/main-logo.png" alt="" />
      </div>
      <div className="nav-right relative">
        <Button></Button>
      </div>
    </div>
  );
};

export default Nav;
