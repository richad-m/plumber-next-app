import ContactSection from "../../components/ContactSection";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar isHomePage={false} />
      <main className="relative">
        <ContactSection />
      </main>
    </>
  );
}
