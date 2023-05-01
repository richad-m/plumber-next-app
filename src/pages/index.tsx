import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SkillSection from "../components/SkillSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Banner message="01 00 00 00 00" />
        <ContactSection />
      </main>
    </>
  );
}
