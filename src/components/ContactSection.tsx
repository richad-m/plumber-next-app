import { PHONE_NUMBER } from "../constants/phoneNumber";
import ContactForm from "./ContactForm";
import Button from "./UI/Button";
import logoWhatsapp from "../../assets/whatsapp-logo.png";
import WhatsappQrCode from "./WhatsappQrCode";
import Section from "./UI/Section";

function ContactSection() {
  return (
    <Section id="contact" title={"Nous contacter "} titleClassName="mt-0">
      <p className="m-5">N&apos;hésitez pas nous appeler au {PHONE_NUMBER}</p>

      <div className="contact-container">
        <div className="show-only-mobile">
          <Button
            styleType="whatsapp"
            text="Contactez nous via WhatsApp"
            isWhatsapp
          />
        </div>
        <ContactForm />
        <div className="show-only-desktop">
          <WhatsappQrCode />
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
