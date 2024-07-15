import React from "react";

function WindowGlazing({
  width = "150px",
  height = "150px",
}: {
  width: string;
  height: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      x="0px"
      y="0px"
      height={height}
      width={width}
    >
      <path
        fill="currentColor"
        d="M29.27,81a1.23,1.23,0,0,0,1.05.2L68.91,70.44a1.21,1.21,0,0,0,.87-1.16V30.73a1.2,1.2,0,0,0-.87-1.16L30.32,18.81A1.2,1.2,0,0,0,28.8,20V80A1.2,1.2,0,0,0,29.27,81ZM31.2,21.54l36.18,10.1V68.37L31.2,78.46Z"
      />
      <path
        fill="currentColor"
        d="M14,86.72l10.87,1.1a1.08,1.08,0,0,0,.44,0L73.91,74.23a1.2,1.2,0,0,0,.87-1.15V51.24a1.85,1.85,0,0,1,1.4,1.27l2.49,7.86A1.2,1.2,0,0,0,81,59.65l-2.49-7.87a4.24,4.24,0,0,0-3.69-3V26.93a1.21,1.21,0,0,0-.87-1.16L25.35,12.23a1.41,1.41,0,0,0-.46-.05L14,13.28a1.2,1.2,0,0,0-1.08,1.2V85.53A1.2,1.2,0,0,0,14,86.72ZM23.8,85.3l-3-.31V15l3-.3ZM72.38,48.8h-.57a1.2,1.2,0,0,0,0,2.4h.57v21L26.2,85.05V15L72.38,27.84Zm-57-33.24,3-.31v69.5l-3-.31Z"
      />
      <path
        fill="currentColor"
        d="M35,32.66a1.2,1.2,0,0,0,.85-.35l3.58-3.58a1.2,1.2,0,0,0-1.7-1.7l-3.58,3.58A1.21,1.21,0,0,0,35,32.66Z"
      />
      <path
        fill="currentColor"
        d="M43.31,27.57,34.17,36.7a1.2,1.2,0,0,0,0,1.7,1.22,1.22,0,0,0,1.7,0L45,29.26A1.2,1.2,0,0,0,43.31,27.57Z"
      />
    </svg>
  );
}

export default WindowGlazing;
