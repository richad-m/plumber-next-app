import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SkillSection from "../components/SkillSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Banner message="01 00 00 00 00" />
        <SkillSection />
        <ContactForm />
      </main>
    </>
  );
}
