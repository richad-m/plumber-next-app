import ContactSection from "../../components/ContactSection";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar isHomePage={false} setIsModalOpen={() => null} />
      <main className="relative">
        <ContactSection />
      </main>
    </>
  );
}
