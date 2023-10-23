import React from "react";
import Image from "./Image";
import Carousel from "./carousel/Carousel";
import {
  cardDetails,
  cardDetailsSecondCaroselGrapicsPage,
} from "../utils/carousel-config";

const Graphics = () => {
  return (
    <div>
      <h1>This is my graphics page</h1>
      <p>This is graphics page content</p>

      <Carousel cardDetails={cardDetails} />
      <Carousel
        cardDetails={cardDetailsSecondCaroselGrapicsPage}
        className={"secondFastest"}
      />
    </div>
  );
};

export default Graphics;
