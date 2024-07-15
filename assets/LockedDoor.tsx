import React from "react";

function LockedDoor({
  width = "175px",
  height = "175px",
}: {
  width: string;
  height: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      height={height}
      width={width}
    >
      <g transform="translate(0,-952.36218) ">
        <path
          d="m 23.812569,959.36216 c -0.4584,0.088 -0.82072,0.5334 -0.8125,1 l 0,76.00004 c 5e-5,0.5236 0.47642,0.9999 1,1 l 22,0 0,-2 -21,0 0,-74.00004 42,0 0,40.06254 c 0.69228,0.3168 1.36911,0.6979 2,1.1875 l 0,-42.25004 c -5e-5,-0.5236 -0.47642,-0.9999 -1,-1 -14.72427,0 -29.47838,0 -44.1875,0 z m 9.90625,12 c -0.5236,0.074 -0.93301,0.617 -0.85937,1.1406 0.0736,0.5236 0.61702,0.933 1.14062,0.8594 l 24,0 c 0.52831,0.01 1.01424,-0.4716 1.01424,-1 0,-0.5284 -0.48593,-1.0075 -1.01424,-1 -8.0845,0 -16.21841,0 -24.28125,0 z m -3.71875,22 c -1.10457,0 -2,0.8954 -2,2 0,1.1046 0.89543,2 2,2 1.10457,0 2,-0.8954 2,-2 0,-1.1046 -0.89543,-2 -2,-2 z m 32,8.00004 c -2.7,0 -5.53547,0.8194 -7.625,3.1875 -1.96897,2.2315 -3.20548,5.7503 -3.34375,10.875 -2.2542,0.2393 -4.03125,2.1224 -4.03125,4.4375 l 0,21 c 0,2.4757 2.02431,4.5 4.5,4.5 l 21,0 c 2.47569,0 4.5,-2.0243 4.5,-4.5 l 0,-21 c 0,-2.3151 -1.77705,-4.1982 -4.03125,-4.4375 -0.13827,-5.1247 -1.37478,-8.6435 -3.34375,-10.875 -2.08953,-2.3681 -4.925,-3.1875 -7.625,-3.1875 z m 0,2 c 2.3,0 4.46453,0.6494 6.125,2.5312 1.55159,1.7586 2.69801,4.7266 2.84375,9.4688 l -17.9375,0 c 0.14574,-4.7422 1.29216,-7.7102 2.84375,-9.4688 1.66047,-1.8818 3.825,-2.5312 6.125,-2.5312 z m -10.5,14 21,0 c 1.40231,0 2.5,1.0978 2.5,2.5 l 0,21 c 0,1.4022 -1.09769,2.5 -2.5,2.5 l -21,0 c -1.40231,0 -2.5,-1.0978 -2.5,-2.5 l 0,-21 c 0,-1.4022 1.09769,-2.5 2.5,-2.5 z m 10.5,5 c -1.45695,0 -2.72387,0.6608 -3.59375,1.5625 -0.86988,0.9017 -1.40625,2.026 -1.40625,3.1875 0,1.7804 0.89232,3.2702 2,4.4375 l 0,5.8125 c 5e-5,0.5236 0.47642,0.9999 1,1 l 4,0 c 0.52358,-10e-5 0.99995,-0.4764 1,-1 l 0,-5.8125 c 1.10768,-1.1673 2,-2.6571 2,-4.4375 0,-1.1615 -0.56762,-2.2858 -1.4375,-3.1875 -0.86988,-0.9017 -2.10555,-1.5625 -3.5625,-1.5625 z m 0,2 c 0.82876,0 1.56631,0.3895 2.125,0.9688 0.55869,0.579 0.875,1.3272 0.875,1.7812 0,1.2615 -0.68083,2.4263 -1.6875,3.375 -0.20259,0.1917 -0.31906,0.4712 -0.3125,0.75 l 0,5.125 -2,0 0,-5.125 c 0.007,-0.2788 -0.10991,-0.5583 -0.3125,-0.75 -1.00667,-0.9487 -1.6875,-2.1135 -1.6875,-3.375 0,-0.454 0.28506,-1.2022 0.84375,-1.7812 0.55869,-0.5793 1.32749,-0.9688 2.15625,-0.9688 z"
          fill="currentColor"
          fill-opacity="1"
          stroke="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </svg>
  );
}

export default LockedDoor;
