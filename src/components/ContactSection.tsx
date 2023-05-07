import { PHONE_NUMBER } from "../constants/phoneNumber";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="skill-section py-5" id="contact">
      <h2 className="skill-title text-4xl teal uppercase font-bold ">
        Nous contacter
      </h2>
      <p className="m-5">N&apos;hésitez pas nous appeler au {PHONE_NUMBER}</p>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
