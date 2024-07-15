import WhatsappIcon from "../../../assets/WhatsappIcon";
import { WHATSAPP_PHONE_NUMBER } from "../../constants/phoneNumber";
import {
  RoundedButton,
  FloatingWhatsappButtonContainer,
  ToolTipContainer,
} from "./FloatingWhatsappButton.style";

export function FloatingWhatsappButton(): JSX.Element {
  return (
    <FloatingWhatsappButtonContainer>
      <ToolTipContainer>Discuter sur WhatsApp avec Antoine</ToolTipContainer>
      <RoundedButton
        forwardedAs={"a"}
        href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
      >
        <WhatsappIcon />
      </RoundedButton>
    </FloatingWhatsappButtonContainer>
  );
}
