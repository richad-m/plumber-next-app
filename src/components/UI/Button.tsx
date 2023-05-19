import React from "react";
import Image from "next/image";
import whatsappLogo from "../../../assets/whatsapp-logo.png";
import WhatsappIcon from "../../../assets/WhatsappIcon";

function Button({
  text,
  styleType,
  as,
  type,
  href,
  isWhatsapp,
}: {
  text: string;
  styleType: string;
  as?: string;
  type?: "submit";
  href?: string;
  isWhatsapp?: boolean;
}) {
  if (as === "a" && href) {
    return (
      <a href={href} className={`${styleType} button-as-link`}>
        {text}
      </a>
    );
  }

  if (styleType === "whatsapp" && href) {
    return (
      <button type={type} className="whatsapp">
        {text}
      </button>
    );
  }
  return (
    <button type={type} className={`${styleType} flex items-center gap-3`}>
      {isWhatsapp && <WhatsappIcon />}
      {text}
    </button>
  );
}

export default Button;
