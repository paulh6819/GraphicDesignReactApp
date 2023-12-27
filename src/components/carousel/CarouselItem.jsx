import React from "react";
import { useSpring, animated } from "react-spring";

export default function CarouselItem({ imgUrl, imgTitle }) {
  const [wobbleStyle, trigger] = useSpring(() => ({
    from: { transform: "scale(1)", opacity: 0.9 },
    config: { tension: 250, friction: 10 },
  }));

  const wobble = () => {
    trigger({
      to: [
        { transform: "scale(1.22) ", opacity: 0.98 },
        { transform: "scale(1) ", opacity: 0.9 },
      ],
      config: { tension: 10, friction: 7 },
    });
  };
  return (
    <div
      style={{
        width: 300,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <animated.div style={wobbleStyle} onClick={wobble}>
        <img
          src={imgUrl}
          alt={imgTitle}
          style={{
            borderRadius: "30px",
            objectFit: "contain",
            width: "100%",
            height: "100%",
            padding: "15px",
            // margin: "20px",
            boxSizing: "border-box",
          }}
        />
      </animated.div>
    </div>
  );
}
