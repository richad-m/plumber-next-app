import React from "react";

function Button({
  text,
  styleType,
  as,
  type,
  href,
}: {
  text: string;
  styleType: string;
  as?: string;
  type?: "submit";
  href?: string;
}) {
  if (as === "a" && href) {
    return (
      <a href={href} className={`${styleType} button-as-link`}>
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
