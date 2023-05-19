import React from "react";

function ReviewIcon({
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
      <defs>
        <symbol id="s" overflow="visible">
          <path d="m27.578-1.6562c-1.418 0.74219-2.8984 1.2969-4.4375 1.6719-1.543 0.375-3.1523 0.5625-4.8281 0.5625-5 0-8.9648-1.3945-11.891-4.1875-2.918-2.7891-4.375-6.582-4.375-11.375 0-4.7891 1.457-8.582 4.375-11.375 2.9258-2.8008 6.8906-4.2031 11.891-4.2031 1.6758 0 3.2852 0.1875 4.8281 0.5625 1.5391 0.375 3.0195 0.93359 4.4375 1.6719v6.2188c-1.4297-0.97656-2.8398-1.6953-4.2344-2.1562-1.3984-0.45703-2.8672-0.6875-4.4062-0.6875-2.7617 0-4.9336 0.88672-6.5156 2.6562-1.5859 1.7734-2.375 4.2109-2.375 7.3125 0 3.1055 0.78906 5.543 2.375 7.3125 1.582 1.7617 3.7539 2.6406 6.5156 2.6406 1.5391 0 3.0078-0.22266 4.4062-0.67188 1.3945-0.45703 2.8047-1.1758 4.2344-2.1562z" />
        </symbol>
        <symbol id="c" overflow="visible">
          <path d="m20.188-16.391c-0.63672-0.28906-1.2656-0.50391-1.8906-0.64062-0.61719-0.14453-1.2422-0.21875-1.875-0.21875-1.8438 0-3.2656 0.59375-4.2656 1.7812s-1.5 2.8867-1.5 5.0938v10.375h-7.2031v-22.516h7.2031v3.7031c0.92578-1.4766 1.9883-2.5547 3.1875-3.2344 1.1953-0.67578 2.6328-1.0156 4.3125-1.0156 0.23828 0 0.5 0.011719 0.78125 0.03125 0.28125 0.023438 0.6875 0.070312 1.2188 0.14062z" />
        </symbol>
        <symbol id="b" overflow="visible">
          <path d="m25.938-11.312v2.0469h-16.828c0.17578 1.6875 0.78516 2.9531 1.8281 3.7969 1.0391 0.84375 2.5 1.2656 4.375 1.2656 1.5195 0 3.0703-0.22266 4.6562-0.67188 1.5938-0.44531 3.2266-1.1289 4.9062-2.0469v5.5625c-1.7109 0.63672-3.418 1.1172-5.125 1.4375-1.6992 0.33203-3.3984 0.5-5.0938 0.5-4.0742 0-7.2422-1.0312-9.5-3.0938-2.2617-2.0703-3.3906-4.9766-3.3906-8.7188 0-3.6758 1.1094-6.5664 3.3281-8.6719 2.2188-2.1016 5.2695-3.1562 9.1562-3.1562 3.5391 0 6.375 1.0703 8.5 3.2031 2.125 2.125 3.1875 4.9766 3.1875 8.5469zm-7.4062-2.3906c0-1.375-0.40234-2.4766-1.2031-3.3125-0.79297-0.84375-1.8281-1.2656-3.1094-1.2656-1.3984 0-2.5312 0.39844-3.4062 1.1875-0.86719 0.78125-1.4062 1.9141-1.625 3.3906z" />
        </symbol>
        <symbol id="d" overflow="visible">
          <path d="m13.547-10.125c-1.5 0-2.6328 0.25781-3.3906 0.76562-0.75 0.5-1.125 1.25-1.125 2.25 0 0.90625 0.30078 1.6211 0.90625 2.1406 0.61328 0.51172 1.4609 0.76562 2.5469 0.76562 1.3516 0 2.4883-0.48438 3.4062-1.4531 0.92578-0.96875 1.3906-2.1875 1.3906-3.6562v-0.8125zm11-2.7188v12.844h-7.2656v-3.3438c-0.96094 1.375-2.043 2.375-3.25 3-1.2109 0.61328-2.6797 0.92188-4.4062 0.92188-2.3359 0-4.2305-0.67578-5.6875-2.0312-1.4492-1.3633-2.1719-3.1289-2.1719-5.2969 0-2.6445 0.90625-4.582 2.7188-5.8125 1.8203-1.2383 4.6758-1.8594 8.5625-1.8594h4.2344v-0.5625c0-1.1328-0.44922-1.9688-1.3438-2.5-0.89844-0.53125-2.2969-0.79688-4.2031-0.79688-1.543 0-2.9766 0.15625-4.2969 0.46875-1.3242 0.3125-2.5586 0.77734-3.7031 1.3906v-5.4844c1.5391-0.375 3.0859-0.66016 4.6406-0.85938 1.5625-0.19531 3.1172-0.29688 4.6719-0.29688 4.0625 0 6.9922 0.80469 8.7969 2.4062 1.8008 1.6055 2.7031 4.2109 2.7031 7.8125z" />
        </symbol>
        <symbol id="a" overflow="visible">
          <path d="m11.312-28.906v6.3906h7.4219v5.1406h-7.4219v9.5625c0 1.043 0.20703 1.75 0.625 2.125 0.41406 0.36719 1.2422 0.54688 2.4844 0.54688h3.6875v5.1406h-6.1719c-2.8438 0-4.8594-0.59375-6.0469-1.7812-1.1797-1.1875-1.7656-3.1953-1.7656-6.0312v-9.5625h-3.5781v-5.1406h3.5781v-6.3906z" />
        </symbol>
        <symbol id="h" overflow="visible">
          <path d="m18.781-19.219v-12.062h7.2344v31.281h-7.2344v-3.25c-1 1.3242-2.1016 2.293-3.2969 2.9062-1.1875 0.61328-2.5625 0.92188-4.125 0.92188-2.7734 0-5.0547-1.0977-6.8438-3.2969-1.7812-2.207-2.6719-5.0469-2.6719-8.5156s0.89062-6.3047 2.6719-8.5156c1.7891-2.207 4.0703-3.3125 6.8438-3.3125 1.5508 0 2.9258 0.3125 4.125 0.9375 1.1953 0.625 2.2969 1.5938 3.2969 2.9062zm-4.75 14.578c1.5391 0 2.7188-0.5625 3.5312-1.6875s1.2188-2.7578 1.2188-4.9062c0-2.1445-0.40625-3.7812-1.2188-4.9062s-1.9922-1.6875-3.5312-1.6875c-1.5312 0-2.7031 0.5625-3.5156 1.6875-0.80469 1.125-1.2031 2.7617-1.2031 4.9062 0 2.1484 0.39844 3.7812 1.2031 4.9062 0.8125 1.125 1.9844 1.6875 3.5156 1.6875z" />
        </symbol>
        <symbol id="g" overflow="visible">
          <path d="m15.438-4.6406c1.5391 0 2.7188-0.5625 3.5312-1.6875s1.2188-2.7578 1.2188-4.9062c0-2.1445-0.40625-3.7812-1.2188-4.9062s-1.9922-1.6875-3.5312-1.6875c-1.543 0-2.7266 0.57031-3.5469 1.7031-0.82422 1.125-1.2344 2.7578-1.2344 4.8906 0 2.125 0.41016 3.7578 1.2344 4.8906 0.82031 1.1367 2.0039 1.7031 3.5469 1.7031zm-4.7812-14.578c0.98828-1.3125 2.0859-2.2812 3.2969-2.9062 1.207-0.625 2.5938-0.9375 4.1562-0.9375 2.7812 0 5.0625 1.1055 6.8438 3.3125 1.7812 2.2109 2.6719 5.0469 2.6719 8.5156s-0.89062 6.3086-2.6719 8.5156c-1.7812 2.1992-4.0625 3.2969-6.8438 3.2969-1.5625 0-2.9492-0.30859-4.1562-0.92188-1.2109-0.625-2.3086-1.5938-3.2969-2.9062v3.25h-7.2031v-31.281h7.2031z" />
        </symbol>
        <symbol id="f" overflow="visible">
          <path d="m0.5-22.516h7.2031l6.0469 15.281 5.1406-15.281h7.2031l-9.4688 24.641c-0.94922 2.5078-2.0586 4.2656-3.3281 5.2656-1.2617 1-2.9336 1.5-5.0156 1.5h-4.1562v-4.7344h2.25c1.2188 0 2.1016-0.19531 2.6562-0.57812 0.5625-0.38672 0.99219-1.0859 1.2969-2.0938l0.20312-0.625z" />
        </symbol>
        <symbol id="e" overflow="visible">
          <path d="m0.20312-30.016h7.7812l7.9531 22.156 7.9531-22.156h7.7656l-11.109 30.016h-9.2344z" />
        </symbol>
        <symbol id="r" overflow="visible">
          <path d="m21.656-21.812v5.875c-0.98047-0.67578-1.9648-1.1719-2.9531-1.4844-0.98047-0.32031-2-0.48438-3.0625-0.48438-2.0117 0-3.5781 0.58984-4.7031 1.7656-1.1172 1.168-1.6719 2.8047-1.6719 4.9062 0 2.1055 0.55469 3.7461 1.6719 4.9219 1.125 1.168 2.6914 1.75 4.7031 1.75 1.125 0 2.1914-0.16406 3.2031-0.5 1.0078-0.33203 1.9453-0.82812 2.8125-1.4844v5.8906c-1.125 0.40625-2.2734 0.71094-3.4375 0.92188-1.1562 0.20703-2.3203 0.3125-3.4844 0.3125-4.0625 0-7.2422-1.0391-9.5312-3.125-2.293-2.082-3.4375-4.9766-3.4375-8.6875 0-3.7188 1.1445-6.6172 3.4375-8.7031 2.2891-2.082 5.4688-3.125 9.5312-3.125 1.1758 0 2.3359 0.10547 3.4844 0.3125 1.1445 0.21094 2.2891 0.52344 3.4375 0.9375z" />
        </symbol>
        <symbol id="q" overflow="visible">
          <path d="m14.172-17.906c-1.5938 0-2.8125 0.57422-3.6562 1.7188-0.83594 1.1484-1.25 2.7969-1.25 4.9531s0.41406 3.8086 1.25 4.9531c0.84375 1.1484 2.0625 1.7188 3.6562 1.7188 1.5703 0 2.7695-0.57031 3.5938-1.7188 0.83203-1.1445 1.25-2.7969 1.25-4.9531s-0.41797-3.8047-1.25-4.9531c-0.82422-1.1445-2.0234-1.7188-3.5938-1.7188zm0-5.1562c3.875 0 6.8984 1.0469 9.0781 3.1406 2.1758 2.0938 3.2656 4.9922 3.2656 8.6875 0 3.6992-1.0898 6.5938-3.2656 8.6875-2.1797 2.0859-5.2031 3.125-9.0781 3.125-3.8867 0-6.9297-1.0391-9.125-3.125-2.1875-2.0938-3.2812-4.9883-3.2812-8.6875 0-3.6953 1.0938-6.5938 3.2812-8.6875 2.1953-2.0938 5.2383-3.1406 9.125-3.1406z" />
        </symbol>
        <symbol id="p" overflow="visible">
          <path d="m21.047-21.812v5.4688c-1.543-0.64453-3.0312-1.1289-4.4688-1.4531-1.4297-0.32031-2.7773-0.48438-4.0469-0.48438-1.375 0-2.3984 0.17188-3.0625 0.51562-0.65625 0.34375-0.98438 0.87109-0.98438 1.5781 0 0.58594 0.25 1.0312 0.75 1.3438 0.5 0.30469 1.3984 0.52734 2.7031 0.67188l1.2656 0.1875c3.6875 0.46875 6.1641 1.2422 7.4375 2.3125 1.2812 1.0625 1.9219 2.7422 1.9219 5.0312 0 2.4062-0.88672 4.2148-2.6562 5.4219-1.7734 1.1992-4.4141 1.7969-7.9219 1.7969-1.4922 0-3.0312-0.12109-4.625-0.35938-1.5859-0.22656-3.2148-0.57812-4.8906-1.0469v-5.4688c1.4375 0.69922 2.9062 1.2266 4.4062 1.5781 1.5078 0.34375 3.0469 0.51562 4.6094 0.51562 1.4062 0 2.4609-0.19141 3.1719-0.57812 0.70703-0.39453 1.0625-0.97266 1.0625-1.7344 0-0.64453-0.24609-1.125-0.73438-1.4375-0.49219-0.3125-1.4648-0.55469-2.9219-0.73438l-1.2656-0.15625c-3.2109-0.40625-5.4609-1.1484-6.75-2.2344-1.2812-1.082-1.9219-2.7266-1.9219-4.9375 0-2.3828 0.81641-4.1562 2.4531-5.3125 1.6328-1.1562 4.1445-1.7344 7.5312-1.7344 1.3203 0 2.7109 0.10547 4.1719 0.3125 1.457 0.19922 3.0469 0.51172 4.7656 0.9375z" />
        </symbol>
        <symbol id="o" overflow="visible">
          <path d="m3.7812-30.016h9.8438l6.8438 16.062 6.875-16.062h9.8281v30.016h-7.3125v-21.953l-6.9219 16.188h-4.9062l-6.9062-16.188v21.953h-7.3438z" />
        </symbol>
        <symbol id="n" overflow="visible">
          <path d="m3.4531-31.281h7.2031v17.031l8.2812-8.2656h8.3594l-11 10.328 11.875 12.188h-8.7344l-8.7812-9.3906v9.3906h-7.2031z" />
        </symbol>
        <symbol id="m" overflow="visible">
          <path d="m18.281-31.281v4.7188h-3.9844c-1.0234 0-1.7344 0.1875-2.1406 0.5625-0.39844 0.36719-0.59375 1.0078-0.59375 1.9219v1.5625h6.1562v5.1406h-6.1562v17.375h-7.2031v-17.375h-3.5781v-5.1406h3.5781v-1.5625c0-2.457 0.67969-4.2695 2.0469-5.4375 1.375-1.1758 3.4922-1.7656 6.3594-1.7656z" />
        </symbol>
        <symbol id="l" overflow="visible">
          <path d="m26.094-13.703v13.703h-7.2344v-10.453c0-1.9688-0.046875-3.3203-0.14062-4.0625-0.085938-0.73828-0.23047-1.2812-0.4375-1.625-0.28125-0.46875-0.66797-0.83203-1.1562-1.0938-0.48047-0.25781-1.0273-0.39062-1.6406-0.39062-1.5 0-2.6836 0.57812-3.5469 1.7344-0.85547 1.1562-1.2812 2.7617-1.2812 4.8125v11.078h-7.2031v-31.281h7.2031v12.062c1.082-1.3125 2.2344-2.2812 3.4531-2.9062s2.5664-0.9375 4.0469-0.9375c2.5938 0 4.5625 0.79688 5.9062 2.3906 1.3516 1.5938 2.0312 3.918 2.0312 6.9688z" />
        </symbol>
        <symbol id="k" overflow="visible">
          <path d="m3.7812-30.016h8.6406l10.922 20.594v-20.594h7.3281v30.016h-8.6406l-10.906-20.594v20.594h-7.3438z" />
        </symbol>
        <symbol id="j" overflow="visible">
          <path d="m3.7812-30.016h12.844c3.8203 0 6.7539 0.85156 8.7969 2.5469 2.0391 1.6992 3.0625 4.1172 3.0625 7.25 0 3.1484-1.0234 5.5703-3.0625 7.2656-2.043 1.6992-4.9766 2.5469-8.7969 2.5469h-5.1094v10.406h-7.7344zm7.7344 5.6094v8.3906h4.2812c1.5 0 2.6562-0.36328 3.4688-1.0938 0.82031-0.73828 1.2344-1.7734 1.2344-3.1094 0-1.3438-0.41406-2.375-1.2344-3.0938-0.8125-0.72656-1.9688-1.0938-3.4688-1.0938z" />
        </symbol>
        <symbol id="i" overflow="visible">
          <path d="m3.4531-22.516h7.2031v22.109c0 3.0195-0.72656 5.3203-2.1719 6.9062-1.4492 1.5938-3.5469 2.3906-6.2969 2.3906h-3.5469v-4.7344h1.2344c1.375 0 2.3125-0.30859 2.8125-0.92188 0.50781-0.61719 0.76562-1.8281 0.76562-3.6406zm0-8.7656h7.2031v5.875h-7.2031z" />
        </symbol>
      </defs>
      <g>
        <path
          d="m594.59 8.2344h-489.18c-14.82 0-27.176 12.355-27.176 27.176v376.36c0 14.824 12.352 27.176 27.176 27.176h176.23l-25.531 47.766h-27.176c-4.9414 0-8.2344 3.293-8.2344 8.2344l0.003906 48.59c0 4.9414 3.293 8.2344 8.2344 8.2344h242.94c4.9414 0 8.2344-3.293 8.2344-8.2344v-48.59c0-4.9414-3.293-8.2344-8.2344-8.2344h-27.176l-25.531-47.766h176.23c14.824 0 27.176-12.352 27.176-27.176l0.003906-376.36c-0.82422-14.82-13.18-27.176-28-27.176zm-489.18 16.473h489.18c5.7656 0 10.707 4.9414 10.707 10.703v300.59h-510.59v-300.59c0-5.7617 4.9414-10.703 10.703-10.703zm358.24 510.59h-226.47v-32.117h226.47zm-38.707-48.586h-149.88l25.531-47.766h98.82zm169.65-64.238h-489.18c-5.7656 0-10.707-4.1172-10.707-10.703v-60.117h510.59l-0.003906 60.117c0 6.5859-4.9414 10.703-10.703 10.703z"
          fill="#010101"
        />
        <path
          d="m350 359.06c-14.824 0-27.176 12.352-27.176 27.176s12.352 27.176 27.176 27.176 27.176-12.352 27.176-27.176-12.352-27.176-27.176-27.176zm0 37.883c-5.7656 0-10.707-4.9414-10.707-10.707s4.9414-10.707 10.707-10.707 10.707 4.9414 10.707 10.707c0 6.5898-4.9414 10.707-10.707 10.707z"
          fill="#010101"
        />
        <path
          d="m312.94 125.18-6.5898 37.059c-0.82422 3.293 0.82422 6.5898 3.293 8.2344 2.4688 1.6484 5.7656 2.4688 9.0586 0.82422l33.766-17.293 33.766 17.293c2.4688 1.6484 5.7656 0.82422 9.0586-0.82422 2.4688-1.6484 4.1172-4.9414 3.293-8.2344l-7.4102-37.059 27.176-26.352c2.4688-2.4688 3.293-5.7656 2.4688-8.2344-0.82422-3.293-3.293-4.9414-6.5898-5.7656l-37.059-5.7656-16.469-33.766c-2.4688-5.7656-12.352-5.7656-14.824 0l-16.469 33.766-37.059 5.7656c-3.293 0.82422-5.7656 2.4688-6.5898 5.7656-0.82422 3.293 0 6.5898 2.4688 8.2344zm21.41-30.469c2.4688 0 4.9414-2.4688 6.5898-4.1172l11.531-23.059 11.531 23.059c0.82422 2.4688 3.293 4.1172 6.5898 4.1172l25.531 3.293-18.117 18.117c-3.3008 1.6484-4.125 4.9414-3.3008 7.4141l4.1172 24.707-22.234-11.531c-0.82422-0.82422-2.4688-0.82422-4.1172-0.82422-1.6484 0-2.4688 0-4.1172 0.82422l-22.238 11.527 4.1172-24.707c0.82422-2.4688-0.82422-5.7656-2.4688-7.4102l-18.117-18.117z"
          fill="#010101"
        />
        <path
          d="m471.88 125.18-6.5898 37.059c-0.82422 3.293 0.82422 6.5898 3.293 8.2344 2.4688 1.6484 5.7656 2.4688 9.0586 0.82422l33.766-17.293 33.766 17.293c2.4688 1.6484 5.7656 1.6484 9.0586-0.82422 2.4688-1.6484 4.1172-4.9414 3.293-8.2344l-6.5898-37.059 27.176-26.352c2.4688-2.4688 3.293-5.7656 2.4688-8.2344-0.82422-3.293-3.293-4.9414-6.5898-5.7656l-37.059-5.7656-16.469-33.766c-1.6484-2.4688-4.1172-4.9414-7.4102-4.9414-3.293 0-5.7656 1.6484-7.4102 4.9414l-16.469 33.766-37.059 5.7656c-3.293 0.82422-5.7656 2.4688-6.5898 5.7656-0.82422 3.293 0 6.5898 2.4688 8.2344zm21.41-30.469c2.4688 0 4.9414-2.4688 6.5898-4.1172l11.531-23.059 11.531 23.059c0.82422 2.4688 3.293 4.1172 6.5898 4.1172l25.531 3.293-18.117 18.117c-1.6484 1.6484-2.4688 4.9414-2.4688 7.4102l4.1172 24.707-23.891-11.527c-2.4688-1.6484-4.9414-1.6484-7.4102 0l-23.062 11.527 4.1172-24.707c0.82422-2.4688-0.82422-5.7656-2.4688-7.4102l-18.117-18.117z"
          fill="#010101"
        />
        <path
          d="m186.94 116.94-14.824-22.234c-2.4688-4.1172-7.4102-4.9414-11.531-2.4688-4.1172 2.4688-4.9414 7.4102-2.4688 11.531l19.766 29.648c1.6484 1.6484 3.293 3.293 5.7656 3.293 2.4688 0 4.9414 0 6.5898-1.6484l56-46.941c3.293-3.293 4.1172-8.2344 0.82422-11.531-3.293-3.293-8.2344-4.1172-11.531-0.82422z"
          fill="#010101"
        />
        <path
          d="m137.53 164.71h94.707c4.9414 0 8.2344-3.293 8.2344-8.2344v-37.059c0-4.9414-3.293-8.2344-8.2344-8.2344-4.9414 0-8.2344 3.293-8.2344 8.2344l-0.003906 28.82h-78.234v-78.234h86.469c4.9414 0 8.2344-3.293 8.2344-8.2344s-3.293-8.2344-8.2344-8.2344h-94.703c-4.9414 0-8.2344 3.293-8.2344 8.2344l-0.003906 94.703c0 4.9414 4.1172 8.2383 8.2383 8.2383z"
          fill="#010101"
        />
        <path
          d="m236.35 221.53-49.41 41.176-14.824-22.234c-2.4688-4.1172-7.4102-4.9414-11.531-2.4688-4.1172 2.4688-4.9414 7.4102-2.4688 11.531l19.766 29.648c1.6484 1.6484 3.293 3.293 5.7656 3.293 2.4688 0 4.9414 0 6.5898-1.6484l56-46.941c3.293-3.293 4.1172-8.2344 0.82422-11.531-2.4727-3.2969-7.4141-4.1211-10.711-0.82422z"
          fill="#010101"
        />
        <path
          d="m137.53 310.47h94.707c4.9414 0 8.2344-3.293 8.2344-8.2344v-37.059c0-4.9414-3.293-8.2344-8.2344-8.2344-4.9414 0-8.2344 3.293-8.2344 8.2344v28.824h-78.238v-79.059h86.469c4.9414 0 8.2344-3.293 8.2344-8.2344 0-4.9414-3.293-8.2344-8.2344-8.2344l-94.703-0.003906c-4.9414 0-8.2344 3.293-8.2344 8.2344v95.531c-0.003906 4.1172 4.1133 8.2344 8.2344 8.2344z"
          fill="#010101"
        />
        <path
          d="m291.53 212.47h279.18c4.9414 0 8.2344-3.293 8.2344-8.2344s-3.293-8.2344-8.2344-8.2344h-279.18c-4.9414 0-8.2344 3.293-8.2344 8.2344-0.003906 4.9414 4.1133 8.2344 8.2344 8.2344z"
          fill="#010101"
        />
        <path
          d="m291.53 261.06h279.18c4.9414 0 8.2344-3.293 8.2344-8.2344 0-4.9414-3.293-8.2344-8.2344-8.2344h-279.18c-4.9414 0-8.2344 3.293-8.2344 8.2344-0.003906 4.9414 4.1133 8.2344 8.2344 8.2344z"
          fill="#010101"
        />
        <path
          d="m291.53 310.47h279.18c4.9414 0 8.2344-3.293 8.2344-8.2344s-3.293-8.2344-8.2344-8.2344h-279.18c-4.9414 0-8.2344 3.293-8.2344 8.2344-0.003906 4.1172 4.1133 8.2344 8.2344 8.2344z"
          fill="#010101"
        />
        <g></g>
      </g>
    </svg>
  );
}

export default ReviewIcon;
