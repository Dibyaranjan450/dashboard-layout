import React from "react";
import { ContentContainer } from "../components/core";

const Home = () => {

  return (
    <ContentContainer>
      <div className="flex flex-col gap-10 md:gap-20">
        <h1 className="text-lg md:text-1xl 5xl:text-xl 6xl:text-2xl font-bold text-text-color">
          Hi, John! 👋
        </h1>
      </div>
    </ContentContainer>
  );
};

export default Home;
