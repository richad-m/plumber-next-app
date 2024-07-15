import Navbar from "../components/Navbar";
import PlumberSection from "../components/PlumberSection";
import Banner from "../components/Banner";
import PartnershipSection from "../components/PartnershipSection";
import ServiceSection from "../components/ServiceSection";
import { useState } from "react";
import AppointmentModal from "../components/AppointmentModal/AppointmentModal";
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import { FloatingWhatsappButton } from "../components/FloatingWhatsappButton/FloatingWhatsappButton";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Artisans dépanneurs - Plomberie Paris</title>
      </Head>
      <Navbar isHomePage setIsModalOpen={setIsModalOpen} />
      <main className="relative">
        <Banner openAppointmentModal={() => setIsModalOpen(true)} />
        <ServiceSection />
        <PlumberSection openAppointmentModal={() => setIsModalOpen(true)} />
        <PartnershipSection />
      </main>
      <AppointmentModal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
      <Footer />
      <FloatingWhatsappButton />
    </>
  );
}
