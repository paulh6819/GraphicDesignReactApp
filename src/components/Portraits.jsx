import React from "react";
import Carousel from "./carousel/Carousel";
import {
  cardDetailsSecondCaroselGrapicsPage,
  arrayOfPortraitsForCarosel,
} from "../utils/carousel-config";

const Portraits = () => {
  return (
    <div>
      <h1>Portrait Page for Paul</h1>
      <Carousel
        cardDetails={arrayOfPortraitsForCarosel}
        className={"secondFastest"}
      />
    </div>
  );
};

export default Portraits;
