import React from "react";

const Image = ({ source, altText }) => {
  return (
    <div>
      <h3>{altText}</h3>
      <img src={source} alt={altText} />
    </div>
  );
};

export default Image;
