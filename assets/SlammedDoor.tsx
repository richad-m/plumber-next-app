import React from "react";

function SlammedDoor({
  width = "200px",
  height = "200px",
}: {
  width: string;
  height: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 125"
      width={width}
      height={height}
    >
      <g>
        <path
          fill="currentColor"
          d="M75.396,85.396H24.604V14.604h50.791V85.396z M25.396,84.604h49.209V15.396H25.396V84.604z"
        />
      </g>
      <g>
        <path
          fill="currentColor"
          d="M70.496,40.496H29.504V19.504h40.992V40.496z M30.496,39.504h39.008V20.496H30.496V39.504z"
        />
      </g>
      <g>
        <path
          fill="currentColor"
          d="M70.496,80.496H29.504V59.504h40.992V80.496z M30.496,79.504h39.008V60.496H30.496V79.504z"
        />
      </g>
      <g>
        <path
          fill="currentColor"
          d="M35,47.5V45h-5v10h5v-6.25h5V47.5H35z M32.5,53.503c-0.554,0-1.003-0.449-1.003-1.002   c0-0.554,0.449-1.003,1.003-1.003c0.554,0,1.002,0.449,1.002,1.003C33.503,53.054,33.054,53.503,32.5,53.503z"
        />
      </g>
      <g>
        <polygon
          fill="currentColor"
          points="25,54.689 25,42.249 19.936,31.711 22.952,44.663 7.604,31.779 21.194,46.999 8.942,48.256    21.145,49.923 14.049,56.064 22.824,52.317 18.422,70.552  "
        />
      </g>
    </svg>
  );
}

export default SlammedDoor;
