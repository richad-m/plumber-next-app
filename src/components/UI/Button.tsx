import React from "react";
import WhatsappIcon from "../../../assets/WhatsappIcon";
import { WHATSAPP_PHONE_NUMBER } from "../../constants/phoneNumber";

function Button({
  text,
  styleType,
  as,
  type,
  href,
  isWhatsapp,
  onClick,
}: {
  text: string;
  styleType: string;
  as?: string;
  type?: "submit";
  href?: string;
  isWhatsapp?: boolean;
  onClick?: (value?: any) => void;
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
        href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
      >
        {text}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={`${styleType} flex items-center gap-3`}
      onClick={onClick}
    >
      {isWhatsapp && <WhatsappIcon />}
      {text}
    </button>
  );
}

export default Button;
