import WhatsappIcon from "../../../assets/WhatsappIcon";
import { WHATSAPP_PHONE_NUMBER } from "../../constants/phoneNumber";
import {
  WhatsappLink,
  FloatingWhatsappButtonContainer,
  ToolTipContainer,
} from "./FloatingWhatsappButton.style";

export function FloatingWhatsappButton(): JSX.Element {
  return (
    <FloatingWhatsappButtonContainer>
      <ToolTipContainer>Discuter sur WhatsApp avec Antoine</ToolTipContainer>
      <WhatsappLink
        href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
        target="_blank"
      >
        <WhatsappIcon />
      </WhatsappLink>
    </FloatingWhatsappButtonContainer>
  );
}
