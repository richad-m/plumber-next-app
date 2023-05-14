import Navbar from "../components/Navbar";
import PlumberSection from "../components/PlumberSection";
import PricingSection from "../components/PricingSection";
import Banner from "../components/Banner";
import PartnershipSection from "../components/PartnershipSection";

export default function Home() {
  return (
    <>
      <Navbar isHomePage />
      <main className="relative">
        <Banner />
        <PlumberSection />
        <PricingSection />
        <PartnershipSection />
      </main>
    </>
  );
}
