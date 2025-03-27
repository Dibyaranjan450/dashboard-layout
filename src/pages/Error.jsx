import { useNavigate } from "react-router-dom";
import { backArrow } from "../assets/svgs";

const Error = () => {
  const navigate = useNavigate(0);

  return (
    <div className="w-full h-screen relative flex items-center justify-center text-center bg-sky-50 text-lg 6xl:text-1x2 7xl:text-2l font-semibold">
      <img
        className="absolute w-auto md:w-[86px] top-0 left-0 p-6 md:p-8 5xl:p-9 6xl:p-[65px] 6xl:w-44 cursor-pointer"
        src={backArrow}
        alt="backArrow"
        onClick={() => navigate(-1)}
      />
      Page not found!
    </div>
  );
};

export default Error;
