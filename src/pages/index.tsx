import OldBanner from "../components/OldBanner";
import Navbar from "../components/Navbar";
import { PHONE_NUMBER } from "../constants/phoneNumber";
import PlumberSection from "../components/PlumberSection";
import PricingSection from "../components/PricingSection";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <Navbar isHomePage />
      <main className="relative">
        {/* <OlcBanner message={PHONE_NUMBER} /> */}
        <Banner />
        <PlumberSection />
        <PricingSection />
      </main>
    </>
  );
}
