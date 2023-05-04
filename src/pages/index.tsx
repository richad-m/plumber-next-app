import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import { PHONE_NUMBER } from "../constants/phoneNumber";

export default function Home() {
  return (
    <>
      <Navbar isHomePage />
      <main className="relative">
        <Banner message={PHONE_NUMBER} />
      </main>
    </>
  );
}
