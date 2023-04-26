import React from "react";

function Button({ text, styleType }: { text: string; styleType: string }) {
  return <button className={styleType}>{text}</button>;
}

export default Button;
