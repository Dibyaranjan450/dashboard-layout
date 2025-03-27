import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";

const ContentContainer = ({ children, className }) => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen
          ? "w-[81vw] md:w-[73vw] lg:w-[80.5vw] xl:w-[84vw] 2xl:w-[86.5vw] 4xl:w-[89vw] 5xl:w-[89vw] 6xl:w-[88vw]"
          : "w-[100vw] md:w-[89vw] lg:w-[91.2vw] xl:w-[93vw] 2xl:w-[94vw] 3xl:w-[94.2vw] 4xl:w-[95vw] 5xl:w-[95.2vw] 6xl:w-[94.5vw] 7xl:w-[95.2vw]"
      } pl-4 md:pl-8 5xl:pl-9 pt-4 md:pt-8 5xl:pt-9 h-full overflow-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
