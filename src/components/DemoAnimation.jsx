import React, { useState } from "react";
import "../App.css";

function DemoAnimation() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <svg
        id="svg_css_ex1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="red"
          d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z
           "
        />
        <path
          fill="none"
          stroke="red"
          d="M 10,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 50,50 h 10
       m-20,10 h 10
       m-20,10 h 10
       m-20,10 h 10"
        />
      </svg>
      <svg width="1000" height="1000" id="test">
        <circle
          id="myCircle"
          cx="500"
          cy="500"
          r="300"
          stroke="green"
          stroke-width="4"
          fill={isClicked ? "gold" : "pink"}
          onClick={() => setIsClicked(!isClicked)}
          className={isClicked ? "clicked" : ""}
        >
          <animate
            attributeName="cx"
            from="500"
            to="800"
            dur="2s"
            begin="myCircle.click"
            fill="freeze"
          />
        </circle>
      </svg>
      <svg width="500" height="500" id="lineSvg">
        <rect width="500" height="500" fill="#e0e0e0" />
        <line
          x1="50"
          y1="250"
          x2="450"
          y2="250"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="400"
          strokeDashoffset="400"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="400"
            to="0"
            dur="2s"
            fill="freeze"
            begin="lineSvg.click"
          />
        </line>
      </svg>
    </div>
  );
}

export default DemoAnimation;
