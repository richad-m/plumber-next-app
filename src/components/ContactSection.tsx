import { PHONE_NUMBER } from "../constants/phoneNumber";
import ContactForm from "./ContactForm";
import Button from "./UI/Button";

function ContactSection() {
  return (
    <section className="skill-section py-5" id="contact">
      <Button styleType="whatsapp" text="ICI"></Button>
      <h2>Nous contacter</h2>
      <p className="m-5">N&apos;hésitez pas nous appeler au {PHONE_NUMBER}</p>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
