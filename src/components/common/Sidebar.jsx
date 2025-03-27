import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSidebarItems } from "../../hooks/getSidebarItems";
import { useGlobalContext } from "../../context/GlobalContext";

const Sidebar = () => {
  const role = "admin";
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen } = useGlobalContext();

  const [sidebarArr, setSidebarArr] = useState(getSidebarItems(role));

  const onPageNavigate = (item) => {
    navigate(`/dashboard/${item.navigateTo}`);

    const newSidebarArr = sidebarArr.map((sidebar) => ({
      ...sidebar,
      isActive: sidebar.title === item.title,
    }));
    setSidebarArr(newSidebarArr);
  };

  const activeTab = () => {
    const endPoint = location.pathname.split("/").pop();

    const newSidebarArr = sidebarArr.map((sidebar) => ({
      ...sidebar,
      isActive:
        sidebar.navigateTo ===
        (endPoint === "dashboard" || endPoint === "" ? "" : endPoint),
    }));
    setSidebarArr(newSidebarArr);
  };

  useEffect(() => {
    activeTab();
  }, [navigate]);

  return (
    <div
      className={`hidden md:block h-full p-6 6xl:p-[40px] border-r border-divider-color transition-all ease-in-out ${
        isSidebarOpen
          ? "w-[19vw] md:w-[27vw] lg:w-[19.5vw] xl:w-[16vw] 2xl:w-[13.5vw] 4xl:w-[11vw] 5xl:w-[11vw] 6xl:w-[12vw]"
          : "w-[11vw] lg:w-[8.8vw] xl:w-[7vw] 2xl:w-[6vw] 3xl:w-[5.8vw] 4xl:w-[5vw] 5xl:w-[4.8vw] 6xl:w-[5.5vw] 7xl:w-[4.8vw]"
      }`}
    >
      <div className="flex flex-col gap-3 6xl:gap-8 transition-all">
        {sidebarArr?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 relative cursor-pointer"
            onClick={() => onPageNavigate(item)}
          >
            <div
              className={`w-10 6xl:w-20 h-10 6xl:h-20 rounded-xs-12 6xl:rounded-sm flex justify-center items-center ${item.isActive ? "bg-primary-surface" : ""}`}
            >
              <img
                className="w-auto h-auto 6xl:w-10 6xl:h-10"
                src={item.isActive ? item.slectedImg : item.img}
                alt={item.title}
              />
            </div>

            <p
              className={`absolute left-14 6xl:left-28 text-base 6xl:text-1xl ${item.isActive ? "font-semibold text-primary" : "font-normal"}`}
            >
              {isSidebarOpen && item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
