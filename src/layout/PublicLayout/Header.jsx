import { closeCross, hamburger } from "../../assets/svgs";
import { tempProfileImg } from "../../assets";
import { useGlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <div className="h-[8.5%] 6xl:h-[6%] flex justify-between items-center px-6 5xl:px-9 6xl:px-[65px] py-3 md:py-5 5xl:py-8 border-b border-divider-color">
      <img
        className="cursor-pointer w-auto 6xl:w-10"
        src={isSidebarOpen ? closeCross : hamburger}
        alt="hamburger"
        onClick={toggleSidebar}
      />

      <div className="flex items-center gap-2 5xl:gap-4 text-right">
        <span className="grid gap-[2px] text-sm 5xl:text-sm2 6xl:text-xl font-medium text-text-color">
          John Doe
          <p className="text-xs 5xl:text-sm 6xl:text-lg font-normal text-light-text-color">Admin</p>
        </span>

        <img
          className="w-10 5xl:w-11 6xl:w-20 h-10 5xl:h-11 6xl:h-20 rounded-50"
          src={tempProfileImg}
          alt="tempProfileImg"
        />
      </div>
    </div>
  );
};

export default Header;
