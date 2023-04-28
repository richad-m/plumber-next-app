import { Inter } from "next/font/google";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SkillSection from "../components/SkillSection";
import ReviewSection from "../components/ReviewSection";
import NumbersSection from "../components/NumbersSection";
import ContactForm from "../components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Banner message="01 00 00 00 00" />
        <SkillSection />
        <ReviewSection />
        <NumbersSection />
        <ContactForm />
      </main>
    </>
  );
}
