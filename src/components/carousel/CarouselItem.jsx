import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div
      style={{
        width: 300,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={imgUrl}
        alt={imgTitle}
        style={{
          borderRadius: "6px",
          objectFit: "contain",
          width: "100%",
          height: "100%",
          padding: "15px",
          // margin: "20px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
