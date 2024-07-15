import React from "react";

function WaterIcon({
  width = "150px",
  height = "150px",
}: {
  width: string;
  height: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 700 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <path d="m351.57 61.648c2.6641 0.41797 5.0898 1.7852 6.8242 3.8516 70.434 80.828 137.2 176.77 137.2 267.57 0 90.414-64.473 165.38-145.6 165.38-81.125 0-145.6-74.957-145.6-165.38 0-90.801 66.77-186.75 137.2-267.57h0.007812c2.457-2.8906 6.2109-4.3398 9.9727-3.8516zm-1.5742 29.047c-65.59 77.152-123.2 166.28-123.2 242.38 0 79.852 55.957 142.98 123.2 142.98s123.2-63.121 123.2-142.98c0-76.098-57.609-165.22-123.2-242.38zm85.398 226.62c5.7266 0.16406 10.406 4.6172 10.852 10.328 3.293 36.586-13.992 77.289-41.477 97.301v-0.003907c-2.3867 1.8086-5.3984 2.5859-8.3633 2.1602-2.9648-0.42969-5.6328-2.0273-7.4141-4.4375-1.7773-2.4102-2.5156-5.4297-2.0508-8.3906 0.46484-2.957 2.0977-5.6094 4.5312-7.3555 18.426-13.418 34.992-50.023 32.551-77.176h-0.003906c-0.35156-3.207 0.69531-6.4102 2.875-8.7891 2.1758-2.3789 5.2773-3.7031 8.5-3.6367z" />
      </g>
    </svg>
  );
}

export default WaterIcon;
