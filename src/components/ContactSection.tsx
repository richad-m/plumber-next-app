import { PHONE_NUMBER } from "../constants/phoneNumber";
import ContactForm from "./ContactForm";
import Button from "./UI/Button";
import logoWhatsapp from "../../assets/whatsapp-logo.png";
import WhatsappQrCode from "./WhatsappQrCode";
import Section from "./UI/Section";

function ContactSection() {
  return (
    <Section id="contact" title={"Nous contacter "} titleClassName="mt-0">
      <div className="contact-container">
        <div className="show-only-mobile w-full">
          <Button
            styleType="whatsapp"
            text="Contactez nous via WhatsApp"
            isWhatsapp
          />
        </div>
        <div className="show-only-desktop w-1/4">
          <p className="contact-title text-center">
            N&apos;hésitez pas nous appeler au <br />
            <span className="phone">{PHONE_NUMBER}</span>
            <br />
            <br />
            OU
          </p>
          <WhatsappQrCode />
        </div>
        <div className="sm:w-4/5 w-full">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
