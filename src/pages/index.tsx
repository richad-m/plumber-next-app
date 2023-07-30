import Navbar from "../components/Navbar";
import PlumberSection from "../components/PlumberSection";
import Banner from "../components/Banner";
import PartnershipSection from "../components/PartnershipSection";
import ServiceSection from "../components/ServiceSection";
import { useState } from "react";
import AppointmentModal from "../components/AppointmentModal/AppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar isHomePage />
      <main className="relative">
        <Banner />
        <ServiceSection />
        <PlumberSection openAppointmentModal={() => setIsModalOpen(true)} />
        <PartnershipSection />
      </main>

      <AppointmentModal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </>
  );
}
