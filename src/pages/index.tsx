import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { PHONE_NUMBER } from "../constants/phoneNumber";
import PlumberSection from "../components/PlumberSection";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar isHomePage />
      <main className="relative overflow-y-hidden">
        <Banner message={PHONE_NUMBER} />
        <PlumberSection />
        <PricingSection />
      </main>
    </>
  );
}
