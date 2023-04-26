import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import SkillSection from "../components/SkillSection";
import ReviewSection from "../components/ReviewSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner heading="Logo + nom" message="01 00 00 00 00" />
      <SkillSection />
      <ReviewSection />
    </>
  );
}
