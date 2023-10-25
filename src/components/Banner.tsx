import Carrousel from "./Carrousel";

function Banner({
  openAppointmentModal,
}: {
  openAppointmentModal: () => void;
}) {
  return (
    <section className="new-banner">
      <Carrousel openAppointmentModal={openAppointmentModal} />
    </section>
  );
}

export default Banner;
