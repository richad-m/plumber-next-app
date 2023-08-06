import React from "react";

function TrustIcon({
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
        <symbol id="v" overflow="visible">
          <path d="m1.0938-0.0625c-0.054688 0.03125-0.10938 0.054688-0.17188 0.0625s-0.125 0.015625-0.1875 0.015625c-0.19922 0-0.35938-0.050781-0.48438-0.15625-0.11719-0.11328-0.17188-0.26562-0.17188-0.45312 0-0.19531 0.054687-0.34766 0.17188-0.45312 0.125-0.11328 0.28516-0.17188 0.48438-0.17188 0.0625 0 0.125 0.011719 0.1875 0.03125 0.0625 0.011719 0.11719 0.03125 0.17188 0.0625v0.25c-0.054688-0.039062-0.10938-0.070312-0.17188-0.09375-0.054687-0.019531-0.10938-0.03125-0.17188-0.03125-0.10547 0-0.1875 0.039062-0.25 0.10938-0.0625 0.074219-0.09375 0.17188-0.09375 0.29688s0.03125 0.22656 0.09375 0.29688c0.0625 0.0625 0.14453 0.09375 0.25 0.09375 0.0625 0 0.11719-0.003906 0.17188-0.015625 0.0625-0.019531 0.11719-0.050781 0.17188-0.09375z" />
        </symbol>
        <symbol id="c" overflow="visible">
          <path d="m0.79688-0.65625c-0.023437-0.007812-0.046875-0.015625-0.078125-0.015625-0.023438-0.007813-0.042969-0.015625-0.0625-0.015625-0.074219 0-0.13281 0.027344-0.17188 0.078125-0.042969 0.042969-0.0625 0.10938-0.0625 0.20312v0.40625h-0.28125v-0.89062h0.28125v0.14062c0.039063-0.0625 0.082031-0.10156 0.125-0.125 0.050781-0.03125 0.10938-0.046875 0.17188-0.046875h0.03125c0.007812 0 0.023438 0.007813 0.046875 0.015625z" />
        </symbol>
        <symbol id="b" overflow="visible">
          <path d="m1.0312-0.45312v0.078125h-0.67188c0.007813 0.074219 0.035156 0.125 0.078125 0.15625 0.039062 0.03125 0.097656 0.046875 0.17188 0.046875 0.0625 0 0.125-0.003906 0.1875-0.015625 0.0625-0.019531 0.125-0.050781 0.1875-0.09375v0.23438c-0.0625 0.023438-0.13281 0.039062-0.20312 0.046875-0.0625 0.0078125-0.13281 0.015625-0.20312 0.015625-0.15625 0-0.28125-0.035156-0.375-0.10938-0.085937-0.082031-0.125-0.20312-0.125-0.35938 0-0.14453 0.039063-0.25781 0.125-0.34375 0.082031-0.082031 0.20312-0.125 0.35938-0.125 0.14453 0 0.25781 0.042969 0.34375 0.125 0.082031 0.085937 0.125 0.19922 0.125 0.34375zm-0.29688-0.09375c0-0.050781-0.015625-0.09375-0.046875-0.125-0.03125-0.039063-0.074219-0.0625-0.125-0.0625-0.054688 0-0.10156 0.015625-0.14062 0.046875-0.03125 0.03125-0.054687 0.078125-0.0625 0.14062z" />
        </symbol>
        <symbol id="a" overflow="visible">
          <path d="m0.54688-0.40625c-0.0625 0-0.10938 0.011719-0.14062 0.03125-0.03125 0.023438-0.046875 0.054688-0.046875 0.09375 0 0.03125 0.007813 0.058594 0.03125 0.078125 0.03125 0.023437 0.066406 0.03125 0.10938 0.03125 0.050781 0 0.09375-0.015625 0.125-0.046875 0.039062-0.039062 0.0625-0.09375 0.0625-0.15625v-0.03125zm0.4375-0.10938v0.51562h-0.29688v-0.14062c-0.042969 0.0625-0.089844 0.10547-0.14062 0.125-0.042969 0.019531-0.09375 0.03125-0.15625 0.03125-0.09375 0-0.17188-0.023438-0.23438-0.078125-0.054688-0.050781-0.078125-0.11719-0.078125-0.20312 0-0.10156 0.03125-0.17969 0.09375-0.23438 0.070313-0.050781 0.1875-0.078125 0.34375-0.078125h0.17188v-0.015625c0-0.050781-0.023438-0.085938-0.0625-0.10938-0.03125-0.019531-0.085938-0.03125-0.15625-0.03125-0.0625 0-0.12109 0.011719-0.17188 0.03125-0.054687 0.011719-0.10156 0.027344-0.14062 0.046875v-0.21875c0.050781-0.007812 0.10938-0.019531 0.17188-0.03125 0.0625-0.007812 0.125-0.015625 0.1875-0.015625 0.16406 0 0.28516 0.03125 0.35938 0.09375 0.070312 0.0625 0.10938 0.16797 0.10938 0.3125z" />
        </symbol>
        <symbol id="d" overflow="visible">
          <path d="m0.45312-1.1562v0.26562h0.29688v0.20312h-0.29688v0.375c0 0.042969 0.003906 0.074219 0.015625 0.09375 0.019531 0.011719 0.054688 0.015625 0.10938 0.015625h0.14062v0.20312h-0.25c-0.10547 0-0.18359-0.019531-0.23438-0.0625-0.042969-0.050781-0.0625-0.13281-0.0625-0.25v-0.375h-0.15625v-0.20312h0.15625v-0.26562z" />
        </symbol>
        <symbol id="i" overflow="visible">
          <path d="m0.75-0.76562v-0.48438h0.28125v1.25h-0.28125v-0.125c-0.042969 0.054688-0.089844 0.089844-0.14062 0.10938-0.042969 0.019531-0.09375 0.03125-0.15625 0.03125-0.11719 0-0.21094-0.039062-0.28125-0.125-0.0625-0.082031-0.09375-0.19531-0.09375-0.34375 0-0.13281 0.03125-0.24219 0.09375-0.32812 0.070313-0.09375 0.16406-0.14062 0.28125-0.14062 0.0625 0 0.11328 0.015625 0.15625 0.046875 0.050781 0.023438 0.097656 0.058594 0.14062 0.10938zm-0.1875 0.57812c0.0625 0 0.10938-0.019531 0.14062-0.0625 0.03125-0.039062 0.046875-0.10938 0.046875-0.20312 0-0.082031-0.015625-0.14453-0.046875-0.1875-0.03125-0.039063-0.078125-0.0625-0.14062-0.0625s-0.10938 0.023437-0.14062 0.0625c-0.03125 0.042969-0.046875 0.10547-0.046875 0.1875 0 0.09375 0.015625 0.16406 0.046875 0.20312 0.03125 0.042969 0.078125 0.0625 0.14062 0.0625z" />
        </symbol>
        <symbol id="h" overflow="visible">
          <path d="m0.60938-0.1875c0.0625 0 0.10938-0.019531 0.14062-0.0625 0.03125-0.039062 0.046875-0.10938 0.046875-0.20312 0-0.082031-0.015625-0.14453-0.046875-0.1875-0.03125-0.039063-0.078125-0.0625-0.14062-0.0625s-0.10938 0.023437-0.14062 0.0625c-0.03125 0.042969-0.046875 0.10547-0.046875 0.1875 0 0.085937 0.015625 0.15234 0.046875 0.20312 0.03125 0.042969 0.078125 0.0625 0.14062 0.0625zm-0.1875-0.57812c0.039063-0.050781 0.082031-0.085937 0.125-0.10938 0.050781-0.03125 0.10938-0.046875 0.17188-0.046875 0.11328 0 0.20312 0.046875 0.26562 0.14062 0.070313 0.085938 0.10938 0.19531 0.10938 0.32812 0 0.14844-0.039062 0.26172-0.10938 0.34375-0.0625 0.085938-0.15234 0.125-0.26562 0.125-0.0625 0-0.12109-0.011719-0.17188-0.03125-0.042969-0.019531-0.085937-0.054688-0.125-0.10938v0.125h-0.28125v-1.25h0.28125z" />
        </symbol>
        <symbol id="l" overflow="visible">
          <path d="m0.015625-0.89062h0.29688l0.23438 0.60938 0.20312-0.60938h0.29688l-0.39062 0.96875c-0.03125 0.10156-0.074219 0.17578-0.125 0.21875-0.054688 0.039063-0.12109 0.0625-0.20312 0.0625h-0.15625v-0.1875h0.078125c0.050781 0 0.085938-0.011719 0.10938-0.03125 0.019531-0.011719 0.035156-0.039063 0.046875-0.078125l0.015625-0.03125z" />
        </symbol>
        <symbol id="k" overflow="visible">
          <path d="m0.15625-1.2031h0.39062l0.26562 0.64062 0.28125-0.64062h0.39062v1.2031h-0.29688v-0.875l-0.28125 0.64062h-0.1875l-0.28125-0.64062v0.875h-0.28125z" />
        </symbol>
        <symbol id="j" overflow="visible">
          <path d="m0.125-0.34375v-0.54688h0.29688v0.078125 0.1875 0.14062 0.15625c0 0.03125 0.003906 0.058594 0.015625 0.078125 0.007812 0.023438 0.023438 0.039062 0.046875 0.046875 0.019531 0.011719 0.039063 0.015625 0.0625 0.015625 0.0625 0 0.10938-0.019531 0.14062-0.0625 0.039062-0.050781 0.0625-0.11719 0.0625-0.20312v-0.4375h0.28125v0.89062h-0.28125v-0.125c-0.054688 0.054688-0.10547 0.089844-0.15625 0.10938-0.042969 0.019531-0.089844 0.03125-0.14062 0.03125-0.10547 0-0.1875-0.03125-0.25-0.09375-0.054687-0.0625-0.078125-0.14844-0.078125-0.26562z" />
        </symbol>
        <symbol id="g" overflow="visible">
          <path d="m1.0469-0.54688v0.54688h-0.29688v-0.42188c0-0.070313-0.007812-0.125-0.015625-0.15625v-0.0625c-0.011719-0.019531-0.027344-0.035156-0.046875-0.046875-0.023438-0.007812-0.046875-0.015625-0.078125-0.015625-0.054687 0-0.10156 0.027344-0.14062 0.078125-0.03125 0.042969-0.046875 0.10547-0.046875 0.1875v0.4375h-0.28125v-1.25h0.28125v0.48438c0.039063-0.050781 0.085937-0.085937 0.14062-0.10938 0.050781-0.03125 0.10156-0.046875 0.15625-0.046875 0.10156 0 0.17969 0.03125 0.23438 0.09375 0.0625 0.0625 0.09375 0.15625 0.09375 0.28125z" />
        </symbol>
        <symbol id="f" overflow="visible">
          <path d="m0.96875-0.75c0.039062-0.050781 0.082031-0.09375 0.125-0.125 0.050781-0.03125 0.10938-0.046875 0.17188-0.046875 0.10156 0 0.17969 0.03125 0.23438 0.09375 0.050781 0.0625 0.078125 0.15625 0.078125 0.28125v0.54688h-0.28125v-0.46875-0.015625-0.03125c0-0.0625-0.011719-0.10938-0.03125-0.14062-0.023437-0.03125-0.054687-0.046875-0.09375-0.046875-0.054687 0-0.09375 0.027344-0.125 0.078125-0.03125 0.042969-0.046875 0.10547-0.046875 0.1875v0.4375h-0.28125v-0.46875c0-0.09375-0.011719-0.15625-0.03125-0.1875-0.023438-0.03125-0.054688-0.046875-0.09375-0.046875-0.054688 0-0.09375 0.027344-0.125 0.078125-0.03125 0.042969-0.046875 0.10547-0.046875 0.1875v0.4375h-0.28125v-0.89062h0.28125v0.125c0.039063-0.050781 0.082031-0.085937 0.125-0.10938 0.039063-0.03125 0.09375-0.046875 0.15625-0.046875s0.11328 0.015625 0.15625 0.046875c0.050781 0.03125 0.085937 0.074219 0.10938 0.125z" />
        </symbol>
        <symbol id="u" overflow="visible">
          <path d="m0.98438-1.1562v0.25c-0.0625-0.03125-0.125-0.050781-0.1875-0.0625-0.0625-0.019531-0.125-0.03125-0.1875-0.03125-0.074219 0-0.13281 0.011719-0.17188 0.03125-0.03125 0.023438-0.046875 0.054688-0.046875 0.09375 0 0.03125 0.007813 0.058594 0.03125 0.078125 0.03125 0.023437 0.078125 0.039063 0.14062 0.046875l0.125 0.03125c0.13281 0.023438 0.22656 0.0625 0.28125 0.125 0.0625 0.054688 0.09375 0.125 0.09375 0.21875 0 0.13672-0.042969 0.23438-0.125 0.29688-0.074219 0.0625-0.19531 0.09375-0.35938 0.09375-0.074219 0-0.14844-0.0078125-0.21875-0.015625-0.074219-0.0078125-0.15234-0.03125-0.23438-0.0625v-0.26562c0.082031 0.042969 0.15625 0.074219 0.21875 0.09375 0.070312 0.023437 0.14453 0.03125 0.21875 0.03125 0.0625 0 0.10938-0.007813 0.14062-0.03125 0.039063-0.019531 0.0625-0.050781 0.0625-0.09375 0-0.039063-0.015625-0.070313-0.046875-0.09375-0.023438-0.019531-0.070312-0.035156-0.14062-0.046875l-0.10938-0.03125c-0.125-0.019531-0.21484-0.054688-0.26562-0.10938-0.054687-0.0625-0.078125-0.14062-0.078125-0.23438 0-0.125 0.035156-0.21875 0.10938-0.28125 0.070313-0.0625 0.17969-0.09375 0.32812-0.09375 0.0625 0 0.12891 0.007812 0.20312 0.015625 0.070313 0.011719 0.14453 0.027344 0.21875 0.046875z" />
        </symbol>
        <symbol id="t" overflow="visible">
          <path d="m0.14062-0.89062h0.28125v0.89062h-0.28125zm0-0.35938h0.28125v0.23438h-0.28125z" />
        </symbol>
        <symbol id="s" overflow="visible">
          <path d="m0.09375-0.89062h0.78125v0.1875l-0.46875 0.5h0.46875v0.20312h-0.79688v-0.20312l0.46875-0.48438h-0.45312z" />
        </symbol>
        <symbol id="r" overflow="visible">
          <path d="m0.73438-1.25v0.1875h-0.17188c-0.03125 0-0.058594 0.011719-0.078125 0.03125-0.023437 0.011719-0.03125 0.039062-0.03125 0.078125v0.0625h0.25v0.20312h-0.25v0.6875h-0.28125v-0.6875h-0.14062v-0.20312h0.14062v-0.0625c0-0.10156 0.023437-0.17578 0.078125-0.21875 0.0625-0.050781 0.14844-0.078125 0.26562-0.078125z" />
        </symbol>
        <symbol id="e" overflow="visible">
          <path d="m0.5625-0.71875c-0.0625 0-0.10938 0.027344-0.14062 0.078125-0.03125 0.042969-0.046875 0.10547-0.046875 0.1875 0 0.09375 0.015625 0.16406 0.046875 0.20312 0.03125 0.042969 0.078125 0.0625 0.14062 0.0625s0.10938-0.019531 0.14062-0.0625c0.039063-0.039062 0.0625-0.10938 0.0625-0.20312 0-0.082031-0.023437-0.14453-0.0625-0.1875-0.03125-0.050781-0.078125-0.078125-0.14062-0.078125zm0-0.20312c0.15625 0 0.27344 0.042969 0.35938 0.125 0.09375 0.085937 0.14062 0.19922 0.14062 0.34375 0 0.14844-0.046875 0.26172-0.14062 0.34375-0.085937 0.085938-0.20312 0.125-0.35938 0.125s-0.27734-0.039062-0.35938-0.125c-0.085937-0.082031-0.125-0.19531-0.125-0.34375 0-0.14453 0.039063-0.25781 0.125-0.34375 0.082031-0.082031 0.20312-0.125 0.35938-0.125z" />
        </symbol>
        <symbol id="q" overflow="visible">
          <path d="m0.15625-1.2031h0.34375l0.4375 0.82812v-0.82812h0.28125v1.2031h-0.34375l-0.4375-0.82812v0.82812h-0.28125z" />
        </symbol>
        <symbol id="p" overflow="visible">
          <path d="m1.0469-0.54688v0.54688h-0.29688v-0.42188c0-0.070313-0.007812-0.125-0.015625-0.15625v-0.0625c-0.011719-0.019531-0.027344-0.035156-0.046875-0.046875-0.023438-0.007812-0.046875-0.015625-0.078125-0.015625-0.054687 0-0.10156 0.027344-0.14062 0.078125-0.03125 0.042969-0.046875 0.10547-0.046875 0.1875v0.4375h-0.28125v-0.89062h0.28125v0.125c0.039063-0.050781 0.085937-0.085937 0.14062-0.10938 0.050781-0.03125 0.10156-0.046875 0.15625-0.046875 0.10156 0 0.17969 0.03125 0.23438 0.09375 0.0625 0.0625 0.09375 0.15625 0.09375 0.28125z" />
        </symbol>
        <symbol id="o" overflow="visible">
          <path d="m0.15625-1.2031h0.5c0.15625 0 0.27344 0.039063 0.35938 0.10938 0.082031 0.0625 0.125 0.15625 0.125 0.28125s-0.042969 0.22656-0.125 0.29688c-0.085937 0.0625-0.20312 0.09375-0.35938 0.09375h-0.20312v0.42188h-0.29688zm0.29688 0.23438v0.32812h0.17188c0.0625 0 0.10938-0.007813 0.14062-0.03125 0.03125-0.03125 0.046875-0.078125 0.046875-0.14062 0-0.050781-0.015625-0.085938-0.046875-0.10938-0.03125-0.03125-0.078125-0.046875-0.14062-0.046875z" />
        </symbol>
        <symbol id="n" overflow="visible">
          <path d="m0.14062-0.89062h0.28125v0.875c0 0.125-0.03125 0.21875-0.09375 0.28125-0.054687 0.0625-0.13281 0.09375-0.23438 0.09375h-0.14062v-0.1875h0.046875c0.050781 0 0.085938-0.015625 0.10938-0.046875 0.019531-0.023438 0.03125-0.070312 0.03125-0.14062zm0-0.35938h0.28125v0.23438h-0.28125z" />
        </symbol>
        <symbol id="m" overflow="visible">
          <path d="m0.85938-0.875v0.23438c-0.042969-0.019531-0.085937-0.035156-0.125-0.046875-0.03125-0.019531-0.070313-0.03125-0.10938-0.03125-0.085938 0-0.14844 0.027344-0.1875 0.078125-0.042969 0.042969-0.0625 0.10547-0.0625 0.1875 0 0.085937 0.019531 0.15234 0.0625 0.20312 0.039062 0.042969 0.10156 0.0625 0.1875 0.0625 0.039062 0 0.082031-0.003906 0.125-0.015625 0.039062-0.007813 0.078125-0.03125 0.10938-0.0625v0.23438c-0.042969 0.023438-0.089844 0.03125-0.14062 0.03125-0.042969 0.0078125-0.085938 0.015625-0.125 0.015625-0.16797 0-0.29688-0.035156-0.39062-0.10938-0.085937-0.082031-0.125-0.20312-0.125-0.35938 0-0.14453 0.039063-0.25781 0.125-0.34375 0.09375-0.082031 0.22266-0.125 0.39062-0.125 0.039062 0 0.082031 0.007813 0.125 0.015625 0.050781 0.011719 0.097656 0.023438 0.14062 0.03125z" />
        </symbol>
      </defs>
      <g>
        <path
          d="m349.51 368.41h-0.98437c-40.68-3.9375-73.156-21.324-97.434-51.176-63.645-80.375-46.258-222.75-45.602-228.66 0.65625-3.6094 3.9375-6.2344 7.5469-6.8906 105.31-8.8594 128.6-45.93 129.59-47.242 0.32812-1.3125 1.6406-2.2969 3.2812-2.9531 3.6094-2.2969 8.5312-0.65625 10.824 2.9531 0.32813 0.98438 23.621 38.383 130.24 47.242 3.6094 0.65625 6.5625 3.2812 7.2188 6.8906 0.65625 5.9062 18.043 148.29-45.602 228.66-23.949 30.18-57.41 47.57-97.762 51.176h-1.3125zm-128.93-270.98c-2.625 28.215-9.5156 144.02 42.977 209.63 21.324 26.902 49.867 41.992 85.953 45.602 35.758-3.6094 64.957-19.355 85.953-45.602 52.16-65.613 45.273-181.42 42.648-209.63-81.359-8.2031-115.8-32.805-128.6-45.93-13.449 13.121-47.57 37.727-128.93 45.93z"
          fillRule="evenodd"
        />
        <path
          d="m349.51 327.41h-0.98437c-30.836-2.625-55.441-15.746-74.141-39.039-48.227-60.363-35.102-167.31-34.773-171.9 0.65625-3.6094 3.9375-6.8906 7.5469-6.8906 77.094-6.2344 94.48-33.133 95.137-34.117 0.65625-1.3125 1.6406-2.2969 2.9531-3.2812 3.6094-2.2969 8.8594-0.32812 10.824 3.2812 0.65625 0.98438 18.043 27.887 95.793 34.117 3.6094 0.32812 6.8906 3.2812 7.2188 6.8906 0.32812 4.5938 13.777 111.54-34.445 171.9-18.699 23.293-43.961 36.414-74.469 39.039h-0.65625zm-94.152-202.41c-1.9688 23.621-5.9062 106.62 31.82 153.86 15.418 19.684 36.414 30.508 62.332 33.133 25.918-2.625 47.242-13.449 62.66-33.133 37.727-47.242 33.789-130.24 31.82-153.86-57.41-5.9062-83.656-22.637-94.48-33.133-11.152 10.496-37.07 27.23-94.152 33.133z"
          fillRule="evenodd"
        />
        <path
          d="m332.45 254.25c-0.32812 0-0.32812 0 0 0-2.2969 0-4.2656-0.98438-5.9062-2.2969-0.32812-0.32812-0.65625-0.98438-1.3125-1.3125l-41.008-41.008c-8.2031-8.2031-8.2031-20.996 0-29.199 3.6094-3.6094 8.8594-5.9062 13.777-5.9062 5.5781 0 10.824 2.2969 14.434 5.9062l19.684 19.355 54.129-53.801c3.6094-3.6094 8.5312-5.9062 13.777-5.9062 5.25 0 10.824 2.2969 14.434 5.9062 3.9375 4.2656 5.9062 9.1875 5.9062 14.434 0 5.5781-2.2969 10.496-6.2344 14.105l-74.797 76.109c-0.32812 0.32813-0.98438 0.98438-1.3125 1.3125-1.3125 1.3125-3.6094 2.2969-5.5781 2.2969zm-34.117-63.645c-0.65625 0-1.6406 0-2.625 1.3125-1.9688 1.9688-1.9688 4.9219 0 6.8906l36.742 36.414 71.516-71.516c0.98438-0.98438 1.3125-2.2969 1.3125-2.625 0-0.98438 0-1.9688-1.3125-3.2812s-2.2969-1.3125-3.2812-1.3125c-0.65625 0-1.6406 0-2.625 1.3125l-58.723 57.738c-0.32813 0.65625-0.98438 0.98438-1.3125 1.3125-1.9688 1.9688-3.6094 2.2969-5.9062 2.2969-2.2969 0-3.9375-0.65625-5.9062-2.2969-0.32813-0.32812-0.98438-0.65625-1.3125-1.3125l-23.621-22.965c-0.98438-1.6406-2.2969-1.9688-2.9531-1.9688z"
          fillRule="evenodd"
        />
        <path
          d="m484.01 488.16c-0.98438 0-2.2969 0-3.2812-0.98438-3.9375-1.6406-5.9062-6.2344-3.9375-10.496 15.09-33.461 31.492-44.945 47.242-55.77 25.59-17.715 54.785-38.383 89.234-176.17 0.98438-3.6094 0.32812-6.8906-1.3125-9.5156-1.3125-2.2969-4.2656-4.2656-7.2188-4.9219-5.5781-1.6406-12.465 0-14.762 8.5312-2.2969 9.5156-4.5938 18.043-6.2344 26.246-14.105 62.332-23.621 103.34-106.95 133.52-3.9375 1.3125-8.5312-0.65625-9.8438-4.9219-1.6406-4.2656 0.32812-8.8594 4.9219-10.168 28.543-10.496 47.57-21.98 60.363-35.102 0.65625-0.32812 0.98438-1.3125 1.3125-1.6406 2.9531-2.9531 1.6406-6.8906 0-8.2031-1.3125-1.9688-3.9375-4.2656-8.2031-1.9688l-50.52 27.23c-21.652 11.809-25.918 23.621-33.133 45.602-1.6406 5.5781-3.9375 11.809-6.2344 19.027-1.3125 4.2656-6.5625 6.5625-10.496 4.5938-4.2656-1.3125-6.5625-6.2344-4.5938-10.496 2.2969-6.2344 4.5938-12.793 6.2344-18.043 7.5469-22.309 13.449-40.023 40.68-54.785l50.52-27.23c10.496-5.25 21.652-2.625 28.543 6.5625 10.496-18.371 15.418-40.023 21.98-67.582 1.6406-8.5312 3.9375-17.059 6.2344-26.902 4.5938-17.715 20.668-23.621 34.117-20.012 6.8906 1.9688 12.793 5.9062 17.059 11.48 3.9375 6.5625 5.25 14.105 3.6094 22.309-36.086 143.36-67.582 165.67-95.137 185.36-15.09 10.168-28.215 20.012-41.992 49.539-2.2969 2.9531-4.9219 4.9219-8.2031 4.9219z"
          fillRule="evenodd"
        />
        <path
          d="m451.21 529.49c-3.9375 0-7.5469-1.3125-10.824-3.9375l-56.426-54.785c-3.2812-2.625-4.9219-6.8906-4.9219-10.824 0-3.9375 1.3125-8.2031 3.9375-11.48v-0.32812l27.559-27.887c2.625-2.9531 6.5625-4.9219 10.824-4.9219 3.9375 0 8.2031 1.3125 11.152 4.2656l56.426 54.457c3.2812 2.625 5.25 6.8906 5.25 10.824 0 4.2656-1.3125 8.2031-4.2656 11.48l-27.23 28.215c-2.625 2.625-6.8906 4.5938-11.48 4.9219zm-55.77-70.531 55.77 54.785 27.559-28.215-56.426-54.129z"
          fillRule="evenodd"
        />
        <path
          d="m215.33 488.16c-3.2812 0-5.9062-1.9688-7.5469-4.5938-13.121-29.527-26.246-39.039-41.664-49.539-27.887-19.684-59.379-41.992-95.137-185.36-2.2969-7.875-0.98438-15.746 3.6094-21.98 3.6094-5.5781 9.5156-9.8438 16.73-11.48 13.777-3.6094 29.527 2.2969 34.117 20.012 2.2969 9.5156 4.5938 18.699 6.5625 26.902 6.2344 27.23 11.152 48.883 21.652 67.254 6.8906-9.1875 18.371-11.809 28.871-6.2344l50.52 27.23c27.23 14.434 33.133 32.148 40.352 54.457 1.9688 5.9062 3.6094 11.809 6.5625 18.371 1.3125 3.9375-0.65625 8.5312-4.5938 10.496-4.2656 1.3125-8.8594-0.65625-10.496-4.5938-2.9531-6.8906-4.5938-13.449-6.5625-19.355-7.2188-21.652-10.824-33.461-32.805-45.273l-50.191-27.23c-4.2656-2.2969-6.8906 0-8.2031 1.6406-1.6406 1.9688-2.9531 5.5781 0 8.2031 0.32812 0.32812 0.65625 0.98437 1.3125 1.9688 13.121 13.449 31.82 24.934 60.363 34.773 4.2656 1.6406 6.5625 5.9062 4.9219 10.168-1.3125 3.9375-5.9062 6.2344-9.8438 4.9219-83.328-29.855-92.512-70.859-106.95-133.19-1.9688-8.2031-3.9375-17.387-6.2344-26.902-2.2969-8.5312-9.1875-10.168-14.762-8.5312-2.9531 0.65625-5.9062 2.625-7.2188 4.9219-1.9688 2.625-2.2969 5.9062-1.3125 9.5156 33.461 137.79 62.332 158.45 87.922 176.17 15.746 10.824 31.82 22.309 47.242 55.77 1.6406 4.2656 0 8.8594-4.2656 10.496-0.65625 0.98438-2.2969 0.98438-2.9531 0.98438z"
          fillRule="evenodd"
        />
        <path
          d="m247.81 529.49c-3.9375 0-8.2031-1.6406-11.152-4.9219l-26.902-27.887c-3.2812-2.9531-4.5938-7.2188-4.5938-11.152 0-4.5938 1.9688-8.2031 4.9219-11.48l56.098-54.129c2.625-2.625 7.2188-4.5938 11.48-4.5938 3.9375 0 8.2031 1.9688 11.152 4.9219l26.902 27.887v0.32812c5.9062 6.5625 5.5781 16.074-0.32812 22.309l-56.098 54.785c-3.6094 2.2969-7.5469 3.9375-11.48 3.9375zm29.199-98.09-55.77 54.129 26.574 27.559 56.098-54.129z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TrustIcon;