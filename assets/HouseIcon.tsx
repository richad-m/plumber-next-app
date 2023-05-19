import React from "react";

function HouseIcon({
  width = "100px",
  height = "100px",
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
      <defs>
        <symbol id="n" overflow="visible">
          <path d="m29.312-1.75c-1.5117 0.78125-3.0898 1.3711-4.7344 1.7656-1.6367 0.40625-3.3398 0.60938-5.1094 0.60938-5.3125 0-9.5273-1.4844-12.641-4.4531-3.1055-2.9688-4.6562-7-4.6562-12.094s1.5508-9.125 4.6562-12.094c3.1133-2.9688 7.3281-4.4531 12.641-4.4531 1.7695 0 3.4727 0.19922 5.1094 0.59375 1.6445 0.39844 3.2227 0.99219 4.7344 1.7812v6.5938c-1.5312-1.0391-3.0391-1.8008-4.5156-2.2812-1.4805-0.48828-3.0391-0.73438-4.6719-0.73438-2.9375 0-5.2461 0.94531-6.9219 2.8281-1.6797 1.875-2.5156 4.4648-2.5156 7.7656 0 3.293 0.83594 5.8828 2.5156 7.7656 1.6758 1.875 3.9844 2.8125 6.9219 2.8125 1.6328 0 3.1914-0.23828 4.6719-0.71875 1.4766-0.48828 2.9844-1.2539 4.5156-2.2969z" />
        </symbol>
        <symbol id="h" overflow="visible">
          <path d="m21.453-17.406c-0.67969-0.3125-1.3516-0.53906-2.0156-0.6875-0.65625-0.15625-1.3203-0.23438-1.9844-0.23438-1.9688 0-3.4844 0.63281-4.5469 1.8906-1.0547 1.2617-1.5781 3.0703-1.5781 5.4219v11.016h-7.6562v-23.922h7.6562v3.9219c0.97656-1.5625 2.1016-2.7031 3.375-3.4219 1.2812-0.71875 2.8125-1.0781 4.5938-1.0781 0.25 0 0.52344 0.011719 0.82812 0.03125 0.30078 0.023438 0.73438 0.070312 1.2969 0.14062z" />
        </symbol>
        <symbol id="c" overflow="visible">
          <path d="m27.562-12.031v2.1875h-17.891c0.1875 1.793 0.83203 3.1367 1.9375 4.0312 1.1133 0.89844 2.6719 1.3438 4.6719 1.3438 1.6016 0 3.25-0.23438 4.9375-0.70312 1.6875-0.47656 3.4219-1.2031 5.2031-2.1719v5.8906c-1.8047 0.6875-3.6094 1.2031-5.4219 1.5469-1.8125 0.35156-3.6211 0.53125-5.4219 0.53125-4.3359 0-7.7031-1.0977-10.109-3.2969-2.3984-2.207-3.5938-5.2969-3.5938-9.2656 0-3.9062 1.1758-6.9727 3.5312-9.2031 2.3633-2.2383 5.6094-3.3594 9.7344-3.3594 3.7578 0 6.7695 1.1367 9.0312 3.4062 2.2578 2.2617 3.3906 5.2812 3.3906 9.0625zm-7.8594-2.5312c0-1.457-0.42969-2.6289-1.2812-3.5156-0.84375-0.89453-1.9492-1.3438-3.3125-1.3438-1.4922 0-2.6992 0.41797-3.625 1.25-0.91797 0.83594-1.4922 2.0391-1.7188 3.6094z" />
        </symbol>
        <symbol id="a" overflow="visible">
          <path d="m14.391-10.766c-1.5938 0-2.793 0.27344-3.5938 0.8125-0.80469 0.54297-1.2031 1.3398-1.2031 2.3906 0 0.96875 0.32031 1.7305 0.96875 2.2812 0.64453 0.54297 1.5469 0.8125 2.7031 0.8125 1.4375 0 2.6445-0.51562 3.625-1.5469 0.98828-1.0312 1.4844-2.3203 1.4844-3.875v-0.875zm11.688-2.8906v13.656h-7.7031v-3.5469c-1.0312 1.4492-2.1875 2.5078-3.4688 3.1719s-2.8398 1-4.6719 1c-2.4805 0-4.4961-0.72266-6.0469-2.1719-1.543-1.4453-2.3125-3.3203-2.3125-5.625 0-2.8125 0.96094-4.8672 2.8906-6.1719 1.9375-1.3125 4.9688-1.9688 9.0938-1.9688h4.5156v-0.60938c0-1.207-0.48047-2.0938-1.4375-2.6562-0.94922-0.5625-2.4375-0.84375-4.4688-0.84375-1.6367 0-3.1562 0.16797-4.5625 0.5-1.4062 0.32422-2.7188 0.8125-3.9375 1.4688v-5.8281c1.6445-0.40625 3.2891-0.70703 4.9375-0.90625 1.6562-0.20703 3.3047-0.3125 4.9531-0.3125 4.3203 0 7.4375 0.85547 9.3438 2.5625 1.9141 1.6992 2.875 4.4609 2.875 8.2812z" />
        </symbol>
        <symbol id="g" overflow="visible">
          <path d="m12.031-30.719v6.7969h7.875v5.4688h-7.875v10.141c0 1.1172 0.21875 1.8711 0.65625 2.2656 0.4375 0.38672 1.3125 0.57812 2.625 0.57812h3.9375v5.4688h-6.5625c-3.0234 0-5.1641-0.62891-6.4219-1.8906-1.2617-1.2578-1.8906-3.3984-1.8906-6.4219v-10.141h-3.7969v-5.4688h3.7969v-6.7969z" />
        </symbol>
        <symbol id="b" overflow="visible">
          <path d="m19.953-20.422v-12.812h7.6875v33.234h-7.6875v-3.4531c-1.0547 1.4062-2.2148 2.4375-3.4844 3.0938-1.2734 0.65625-2.7422 0.98438-4.4062 0.98438-2.9492 0-5.3711-1.1719-7.2656-3.5156-1.8867-2.3438-2.8281-5.3594-2.8281-9.0469s0.94141-6.7031 2.8281-9.0469c1.8945-2.3438 4.3164-3.5156 7.2656-3.5156 1.6562 0 3.1172 0.33594 4.3906 1 1.2812 0.65625 2.4453 1.6836 3.5 3.0781zm-5.0469 15.484c1.6445 0 2.8945-0.59766 3.75-1.7969 0.86328-1.1953 1.2969-2.9297 1.2969-5.2031 0-2.2812-0.43359-4.0195-1.2969-5.2188-0.85547-1.1953-2.1055-1.7969-3.75-1.7969-1.625 0-2.8711 0.60156-3.7344 1.7969-0.85547 1.1992-1.2812 2.9375-1.2812 5.2188 0 2.2734 0.42578 4.0078 1.2812 5.2031 0.86328 1.1992 2.1094 1.7969 3.7344 1.7969z" />
        </symbol>
        <symbol id="f" overflow="visible">
          <path d="m16.406-4.9375c1.6328 0 2.8828-0.59766 3.75-1.7969 0.86328-1.1953 1.2969-2.9297 1.2969-5.2031 0-2.2812-0.43359-4.0195-1.2969-5.2188-0.86719-1.1953-2.1172-1.7969-3.75-1.7969-1.6367 0-2.8906 0.60547-3.7656 1.8125-0.875 1.1992-1.3125 2.9336-1.3125 5.2031 0 2.2617 0.4375 3.9961 1.3125 5.2031 0.875 1.1992 2.1289 1.7969 3.7656 1.7969zm-5.0781-15.484c1.0508-1.3945 2.2188-2.4219 3.5-3.0781 1.2812-0.66406 2.7539-1 4.4219-1 2.9453 0 5.3672 1.1719 7.2656 3.5156 1.8945 2.3438 2.8438 5.3594 2.8438 9.0469s-0.94922 6.7031-2.8438 9.0469c-1.8984 2.3438-4.3203 3.5156-7.2656 3.5156-1.668 0-3.1406-0.33594-4.4219-1s-2.4492-1.6914-3.5-3.0781v3.4531h-7.6562v-33.234h7.6562z" />
        </symbol>
        <symbol id="e" overflow="visible">
          <path d="m0.53125-23.922h7.6562l6.4219 16.234 5.4688-16.234h7.6562l-10.062 26.188c-1.0117 2.6641-2.1953 4.5234-3.5469 5.5781-1.3438 1.0625-3.1211 1.5938-5.3281 1.5938h-4.4219v-5.0156h2.3906c1.3008 0 2.2422-0.21094 2.8281-0.625 0.59375-0.40625 1.0547-1.1484 1.3906-2.2188l0.20312-0.65625z" />
        </symbol>
        <symbol id="d" overflow="visible">
          <path d="m4.0156-31.891h22.203v6.2188h-13.984v5.9375h13.141v6.2188h-13.141v13.516h-8.2188z" />
        </symbol>
        <symbol id="m" overflow="visible">
          <path d="m3.6719-23.922h7.6562v23.922h-7.6562zm0-9.3125h7.6562v6.2344h-7.6562z" />
        </symbol>
        <symbol id="l" overflow="visible">
          <path d="m15.703-17.75c1.7188 0 2.9531-0.31641 3.7031-0.95312 0.75-0.64453 1.125-1.7031 1.125-3.1719 0-1.4453-0.375-2.4844-1.125-3.1094-0.75-0.63281-1.9844-0.95312-3.7031-0.95312h-3.4688v8.1875zm-3.4688 5.6875v12.062h-8.2188v-31.891h12.562c4.1953 0 7.2734 0.70312 9.2344 2.1094 1.957 1.4062 2.9375 3.6367 2.9375 6.6875 0 2.1055-0.51172 3.8359-1.5312 5.1875-1.0117 1.3555-2.543 2.3555-4.5938 3 1.125 0.25 2.1289 0.82812 3.0156 1.7344 0.89453 0.90625 1.7969 2.2773 2.7031 4.1094l4.4688 9.0625h-8.7656l-3.875-7.9219c-0.79297-1.5938-1.5898-2.6797-2.3906-3.2656-0.80469-0.58203-1.875-0.875-3.2188-0.875z" />
        </symbol>
        <symbol id="k" overflow="visible">
          <path d="m27.734-14.562v14.562h-7.7031v-11.109c0-2.0938-0.046875-3.5312-0.14062-4.3125-0.085937-0.78125-0.24219-1.3594-0.46875-1.7344-0.30469-0.5-0.71094-0.88281-1.2188-1.1562-0.51172-0.28125-1.0938-0.42188-1.75-0.42188-1.5938 0-2.8516 0.61719-3.7656 1.8438-0.90625 1.2305-1.3594 2.9375-1.3594 5.125v11.766h-7.6562v-33.234h7.6562v12.812c1.1445-1.3945 2.3633-2.4219 3.6562-3.0781 1.3008-0.66406 2.7383-1 4.3125-1 2.7578 0 4.8516 0.85156 6.2812 2.5469 1.4375 1.6875 2.1562 4.1523 2.1562 7.3906z" />
        </symbol>
        <symbol id="j" overflow="visible">
          <path d="m25.844-19.953c0.96875-1.4766 2.1172-2.6016 3.4531-3.375 1.332-0.78125 2.7969-1.1719 4.3906-1.1719 2.75 0 4.8438 0.85156 6.2812 2.5469 1.4375 1.6875 2.1562 4.1523 2.1562 7.3906v14.562h-7.6875v-12.469c0.007812-0.1875 0.019531-0.37891 0.03125-0.57812 0.007812-0.19531 0.015625-0.48438 0.015625-0.85938 0-1.6953-0.25-2.9258-0.75-3.6875-0.5-0.75781-1.3086-1.1406-2.4219-1.1406-1.4492 0-2.5703 0.60156-3.3594 1.7969-0.79297 1.1992-1.2031 2.9297-1.2344 5.1875v11.75h-7.6875v-12.469c0-2.6562-0.23047-4.3633-0.6875-5.125-0.44922-0.75781-1.2578-1.1406-2.4219-1.1406-1.4688 0-2.6055 0.60547-3.4062 1.8125-0.79297 1.1992-1.1875 2.918-1.1875 5.1562v11.766h-7.7031v-23.922h7.7031v3.5c0.9375-1.3516 2.0156-2.3672 3.2344-3.0469 1.2188-0.6875 2.5547-1.0312 4.0156-1.0312 1.6562 0 3.1133 0.40234 4.375 1.2031 1.2695 0.79297 2.2344 1.9062 2.8906 3.3438z" />
        </symbol>
        <symbol id="i" overflow="visible">
          <path d="m27.734-14.562v14.562h-7.7031v-11.156c0-2.0625-0.046875-3.4844-0.14062-4.2656-0.085937-0.78125-0.24219-1.3594-0.46875-1.7344-0.30469-0.5-0.71094-0.88281-1.2188-1.1562-0.51172-0.28125-1.0938-0.42188-1.75-0.42188-1.5938 0-2.8516 0.61719-3.7656 1.8438-0.90625 1.2305-1.3594 2.9375-1.3594 5.125v11.766h-7.6562v-23.922h7.6562v3.5c1.1445-1.3945 2.3633-2.4219 3.6562-3.0781 1.3008-0.66406 2.7383-1 4.3125-1 2.7578 0 4.8516 0.85156 6.2812 2.5469 1.4375 1.6875 2.1562 4.1523 2.1562 7.3906z" />
        </symbol>
      </defs>
      <g>
        <path d="m173.43 301.96c4.9883 0 10.062-1.2266 14.699-3.5v172.02h-24.762c-4.6367 0-8.4883 3.7617-8.4883 8.4883v46.375c0 4.6367 3.7617 8.4883 8.4883 8.4883h373.19c4.6367 0 8.4883-3.7617 8.4883-8.4883v-46.375c0-4.6367-3.7617-8.4883-8.4883-8.4883h-24.676v-171.94c13.387 6.6484 30.012 3.5859 39.898-8.3125 5.8633-7 8.4883-15.836 7.5234-24.852-1.0508-9.1016-5.6016-17.062-12.863-22.574l-44.801-33.949 0.003907-86.008c0-4.6367-3.7617-8.4883-8.4883-8.4883h-59.238c-4.6367 0-8.4883 3.7617-8.4883 8.4883v28l-55.562-42.176c-11.727-8.9258-28.176-8.9258-39.898 0l-176.48 134.05c-7.2617 5.5117-11.812 13.562-12.863 22.574-1.0508 9.1016 1.6641 17.852 7.5234 24.852 6.4766 7.7891 15.836 11.812 25.289 11.812zm354.64 214.9-356.21 0.003906v-29.488h356.3v29.488zm-323.05-46.375v-184.1l135.19-102.64c5.6875-4.375 13.738-4.375 19.426 0l135.27 102.64v184.01l-289.8 0.003907zm237.39-339.15h42.352v64.574l-42.352-32.199zm-284.9 135.89c0.52344-4.375 2.7109-8.3125 6.2109-11.023l176.58-134.05c2.8867-2.1875 6.3008-3.2383 9.7109-3.2383 3.4141 0 6.8242 1.0508 9.7109 3.2383l176.57 134.05c3.5 2.7109 5.7734 6.5625 6.2109 11.023 0.52344 4.375-0.78906 8.75-3.6758 12.074-5.5117 6.5625-15.137 7.6133-21.961 2.4492l-146.91-111.56c-11.727-8.9258-28.176-8.9258-39.898 0l-146.91 111.56c-6.8242 5.1641-16.539 4.1133-21.961-2.4492-2.8867-3.4141-4.1133-7.6992-3.6758-12.074z" />
        <path d="m445.29 318.5c-2.8008-34.387-18.812-56.262-42.875-58.625-3.3242-0.35156-6.3867-0.4375-9.3633-0.4375-21 0-32.988 12.773-43.051 25.113-10.148-12.336-22.051-25.113-43.137-25.113-2.8867 0-6.0391 0.17578-9.2734 0.4375-24.062 2.3633-40.074 24.238-42.875 59.324v11.375c2.8008 35 22.227 57.664 90.477 105.52 1.4883 1.0508 3.1484 1.5742 4.8984 1.5742s3.4141-0.52344 4.8984-1.5742c68.25-47.863 87.676-70.523 90.477-106.23v-11.375zm-95.289 100.36c-64.926-46.023-76.477-64.398-78.398-88.898v-10.062c2.0117-25.898 12.164-41.648 27.648-43.137 2.7109-0.26172 5.25-0.4375 7.6992-0.4375 14.613 0 22.836 10.148 32.375 21.875 1.3984 1.75 2.8008 3.5 4.2891 5.1641 3.2383 3.8516 9.7109 3.8516 12.949 0 1.3984-1.75 2.8867-3.4141 4.2891-5.1641 9.5391-11.727 17.676-21.789 32.375-21.789 2.3633 0 4.9883 0.085938 7.6992 0.4375 15.488 1.4883 25.551 17.238 27.648 42.438v10.062c-1.9258 25.199-13.477 43.574-78.398 89.602z" />
        <path d="m482.39 26.426c-10.148-0.96094-16.273 2.5391-20.914 7-4.6367-4.4609-10.586-7.9609-20.914-7-12.074 1.1367-20.039 11.461-21.352 28.176v4.8125c1.3125 17.062 12.164 27.211 37.363 44.887 1.4883 1.0508 3.1484 1.5742 4.8984 1.5742s3.4141-0.52344 4.8984-1.5742c25.289-17.762 36.051-27.914 37.363-45.586v-4.8125c-1.3125-16.102-9.2734-26.336-21.352-27.562zm-20.914 60.637c-22.75-16.449-24.852-21.961-25.289-28.262v-3.5c0.4375-5.6016 2.2734-11.637 6.0391-12.074 0.875 0 1.75-0.17578 2.5391-0.17578 2.9766 0 4.7266 1.8359 8.5742 6.5625l1.75 2.1016c3.2383 3.8516 9.7109 3.8516 12.949 0l1.75-2.1016c3.8516-4.8125 5.6016-6.5625 8.5742-6.5625 0.78906 0 1.5742 0 2.4492 0.085938 3.8516 0.35156 5.6875 6.4766 6.0391 11.375v3.5c-0.52344 6.9141-2.625 12.426-25.375 28.875z" />
      </g>
    </svg>
  );
}

export default HouseIcon;
