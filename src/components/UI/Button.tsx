import React from "react";
import WhatsappIcon from "../../../assets/WhatsappIcon";
import { PHONE_NUMBER } from "../../constants/phoneNumber";

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
      <a
        type={type}
        className="whatsapp"
        href={`https://wa.me/${PHONE_NUMBER}`}
      >
        {text}
      </a>
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
