import React from "react";
import Button from "./UI/Button";
import DetailedServiceCard from "./UI/DetailedServiceCard";
import Section from "./UI/Section";

function PlumberSection({
  openAppointmentModal,
}: {
  openAppointmentModal: () => void;
}) {
  return (
    <Section
      id="plomberie"
      title="dédié à l'excellence et au service"
      titleClassName="mt-0"
    >
      <br />
      <div className="detailed-service-cards-content-container">
        <div className="detailed-service-cards-container">
          <DetailedServiceCard
            icon={"HouseIcon"}
            subtitle={"Nous prenons soin de votre logement"}
            text={
              "Votre domicile sera laissé aussi propre, voire plus propre, qu'à notre arrivée."
            }
          />
          <DetailedServiceCard
            icon={"ShieldIcon"}
            subtitle={"Réactivité et disponibilité"}
            text={
              "Nous répondons rapidement à vos besoins avec des plombiers et serruriers disponibles à tout moment. Faites confiance à notre expertise et à notre capacité de conseil pour des solutions de plomberie optimales et personnalisées."
            }
          />
        </div>
        <div className="detailed-service-cards-container">
          <DetailedServiceCard
            icon={"ShakingIcon"}
            subtitle={"Expertise et capacité de conseil"}
            text={
              "Nous nous engageons à vous offrir une expérience sans stress ni mauvaises surprises pendant les travaux. Nous veillons à une communication ouverte, une planification minutieuse et une exécution soignée, pour que chaque étape se déroule en toute transparence. Soyez rassurés ;) "
            }
          />
          <DetailedServiceCard
            icon={"ReviewIcon"}
            subtitle={"Certification / qualification"}
            text={
              "Nos plombiers et serruriers sont certifiés et qualifiés, démontrant notre engagement envers l'excellence. Faites confiance à notre savoir-faire professionnel pour des interventions de plomberie conformes aux normes les plus strictes."
            }
          />
        </div>
      </div>
      <Button
        text="Prendre rendez-vous"
        styleType="primary cta-primary-button m-auto mb-20"
        onClick={openAppointmentModal}
      />
    </Section>
  );
}

export default PlumberSection;
