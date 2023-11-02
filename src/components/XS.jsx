import React from "react";
import { useSpring, animated, config } from "react-spring";

const XS = ({ active }) => {
  const props = useSpring({
    backgroundColor: active ? "tomato" : "skyblue",
    config: { duration: 500 },
  });
  return (
    <animated.div style={props} className={"animated-box"}>
      {" "}
      XS Box
    </animated.div>
  );
};
export default XS;
