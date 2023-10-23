import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div
      style={{
        width: 300,
        display: "flex",
        justifyContent: "center",
        border: "2px solid red",
      }}
    >
      <img
        src={imgUrl}
        alt={imgTitle}
        // width={300}
        style={{ objectFit: "cover", borderRadius: "3px" }}
      />
    </div>
  );
}
