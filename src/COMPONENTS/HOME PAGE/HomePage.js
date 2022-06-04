import React from "react";
import CarouselComp from "./CarouselComp";
import Destinations from "./Destinations";
import FindTickets from "./FindTickets";
import OurAdvantage from "./OurAdvantage";

const HomePage = () => {
  return (
    <div>
      <div className="h-[100vh] mx-auto">
        <CarouselComp></CarouselComp>
      </div>
      <div>
        <FindTickets></FindTickets>
      </div>
      <OurAdvantage></OurAdvantage>
      <Destinations></Destinations>
    </div>
  );
};

export default HomePage;
