import Navbar from "../../components/Navbar";
import ServicesSection from "../../components/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar isHomePage={false} />
      <main className="relative">
        <ServicesSection />
      </main>
    </>
  );
}
