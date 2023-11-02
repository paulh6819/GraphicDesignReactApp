import React from "react";
import Carousel from "./carousel/Carousel";
import {
  cardDetailsSecondCaroselGrapicsPage,
  arrayOfPortraitsForCarosel,
  arrayOfPortraitsFor2ndCaroselGoingInReverse,
  arrayOfPortraitsFor3ndCaroselGoingRegularRotation,
} from "../utils/carousel-config";

const Portraits = () => {
  return (
    <div>
      <h1>Portrait Page for Paul</h1>
      <Carousel
        cardDetails={arrayOfPortraitsForCarosel}
        className={"firstCaroselPortraits"}
      />
      <Carousel
        cardDetails={arrayOfPortraitsFor2ndCaroselGoingInReverse}
        className={"secondPortraitsGoingInReverse"}
      />
      <Carousel
        cardDetails={arrayOfPortraitsFor3ndCaroselGoingRegularRotation}
        className={"secondFastest"}
      />
    </div>
  );
};

export default Portraits;
