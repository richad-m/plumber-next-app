import React from "react";

function Button({
  text,
  styleType,
  as,
}: {
  text: string;
  styleType: string;
  as?: string;
}) {
  if (as === "a") {
    return (
      <a href="tel:0100000000" className={`${styleType} button-as-link`}>
        {text}
      </a>
    );
  }
  return <button className={styleType}>{text}</button>;
}

export default Button;
