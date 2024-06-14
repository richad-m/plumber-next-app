import { PHONE_NUMBER } from "../constants/phoneNumber";
import ContactForm from "./ContactForm";
import Button from "./UI/Button";
import logoWhatsapp from "../../assets/whatsapp-logo.png";
import WhatsappQrCode from "./WhatsappQrCode";
import Section from "./UI/Section";

function ContactSection() {
  return (
    <Section id="contact" title={"Nous contacter "} titleClassName="mt-0">
      <div className="show-only-mobile w-full">
        <Button
          styleType="whatsapp"
          text="Contactez nous via WhatsApp"
          isWhatsapp
        />
      </div>
      <div className="show-only-desktop w-full">
        <p className="contact-title text-center">
          N&apos;hésitez pas nous appeler au <br />
          <span className="phone">{PHONE_NUMBER}</span>
          <br />
          <br />
          OU
        </p>
        <WhatsappQrCode />
      </div>
    </Section>
  );
}

export default ContactSection;
