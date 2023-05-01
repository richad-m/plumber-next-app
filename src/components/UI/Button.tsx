import React from "react";

function Button({
  text,
  styleType,
  as,
  type,
}: {
  text: string;
  styleType: string;
  as?: string;
  type?: "submit";
}) {
  if (as === "a") {
    return (
      <a href="tel:0100000000" className={`${styleType} button-as-link`}>
        {text}
      </a>
    );
  }
  return (
    <button type={type} className={styleType}>
      {text}
    </button>
  );
}

export default Button;
