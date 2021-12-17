import React from "react";
import "./loader.css";

const LoadingNote = () => {
    return (
      <div className="loading-note">
        <div className="content">
          <div className="title"></div>
          <div className="desc">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };
  
const Loader = () => {
  return (
    <>
      <LoadingNote />
      <LoadingNote />
      <LoadingNote />
      <LoadingNote />
      <LoadingNote />
    </>
  );
};

const Spinner = (props) => {
  return (
    <svg
      width={props.width ? props.width : "60px"}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.619514713474445s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(27.692307692307693 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.5678884873515746s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(55.38461538461539 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.5162622612287041s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(83.07692307692308 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.46463603510583373s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(110.76923076923077 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.4130098089829633s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(138.46153846153845 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.3613835828600929s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(166.15384615384616 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.3097573567372225s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(193.84615384615384 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.25813113061435206s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(221.53846153846155 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.20650490449148165s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(249.23076923076923 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.15487867836861124s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(276.9230769230769 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.10325245224574083s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(304.61538461538464 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="-0.05162622612287041s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(332.3076923076923 50 50)">
        <rect
          x={47}
          y={10.5}
          rx={1.68}
          ry={1.68}
          width={6}
          height={21}
          fill="#000000"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.8s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
};

export { Spinner };
export default Loader;
