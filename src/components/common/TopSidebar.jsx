import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSidebarItems } from "../../hooks/getSidebarItems";
import { useGlobalContext } from "../../context/GlobalContext";

const TopSidebar = () => {
  const role = "admin";
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  const [sidebarArr, setSidebarArr] = useState(getSidebarItems(role));

  const onPageNavigate = (item) => {
    navigate(`/dashboard/${item.navigateTo}`);

    const newSidebarArr = sidebarArr.map((sidebar) => ({
      ...sidebar,
      isActive: sidebar.title === item.title,
    }));
    setSidebarArr(newSidebarArr);

    toggleSidebar();
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
      className={`block md:hidden absolute ${isSidebarOpen ? "h-[40%]" : "h-0"} w-full bg-white transition-all ease-in-out rounded-b-sm`}
    >
      <div className="h-full w-full bg-[rgba(12,12,14,0.2)] rounded-b-sm">
        {isSidebarOpen &&
          sidebarArr.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-6 pl-[35%] ${item.isActive ? "bg-primary-surface" : ""} cursor-pointer`}
              onClick={() => onPageNavigate(item)}
            >
              <img src={item.isActive ? item.slectedImg : item.img} alt="" />
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopSidebar;
