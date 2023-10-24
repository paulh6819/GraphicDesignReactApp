import React from "react";
//import "./autoplaycarousel.scss";
//import { cardDetails, cardDetailsSecondCaroselGrapicsPage } from "../../utils/carousel-config";
import CarouselItem from "./CarouselItem";
import "./carousel.css";

export default function Carousel({ cardDetails, className }) {
  return (
    <div
      className={`carousel-container `}
      style={{ width: cardDetails.length * 300 }}
    >
      <div
        className={`carousel-track ${className ? className : ""}`}
        //style={{ border: "2px solid blue" }}
      >
        {cardDetails.map((detailKey, index) => {
          return (
            <CarouselItem
              key={`a${index}`}
              imgUrl={detailKey.imgUrl}
              imgTitle={detailKey.title}
            />
          );
        })}

        {cardDetails.map((detailKey, index) => {
          return (
            <CarouselItem
              key={`b${index}`}
              imgUrl={detailKey.imgUrl}
              imgTitle={detailKey.title}
            />
          );
        })}
      </div>
    </div>
  );
}
