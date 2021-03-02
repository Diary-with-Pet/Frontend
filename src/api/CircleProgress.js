import palette from "styles/palette";
import React from "react";

const CircleProgress = ({ size, max, cur }) => {
  const circleConfig = {
    viewBox: `0 0 38 38`,
    x: 19,
    y: 19,
    radio: 15.91549430918954,
  };

  const percentage = (cur / max) * 100;
  console.log(cur);
  const strokeDasharray = `${percentage} ${100 - percentage}`;

  return (
    <>
      <figure style={{ margin: "1rem 0.5rem" }}>
        <svg width="50" height="50">
          <circle
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            stroke-width="5"
            fill="transparent"
            stroke={palette.beige}
          />
          <circle
            cx={circleConfig.x}
            cy={circleConfig.y}
            r={circleConfig.radio}
            fill="transparent"
            stroke={palette.magenta}
            strokeWidth="5"
            strokeDasharray={strokeDasharray}
            strokeDashoffset="25"
          />
        </svg>
      </figure>
    </>
  );
};

export default CircleProgress;
