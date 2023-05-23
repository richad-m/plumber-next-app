import React from "react";
import Button from "./UI/Button";
import DetailedServiceCard from "./UI/DetailedServiceCard";
import Section from "./UI/Section";

function PlumberSection() {
  return (
    <Section id="plomberie" title="dédié à l'excellence et au service">
      <p className="text-justify text-lg">
        <strong>
          Chez AC Pro Plomberie, nous savons à quel point il est important
          d&apos;être prêt à faire face à n&apos;importe quel scénario de
          plomberie.
        </strong>{" "}
        La plomberie de votre maison est un réseau complexe de tuyaux,
        d&apos;accessoires et d&apos;appareils qui sont tous vulnérables à leurs
        propres défaillances. Pour assurer la santé continue de l&apos;ensemble
        du système de plomberie de votre maison, nous arrivons toujours avec
        tout l&apos;équipement et les outils dont nous avons besoin pour faire
        le travail de la bonne façon, sans improviser ni prendre de raccourcis.
      </p>
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
              "Nous répondons rapidement à vos besoins avec des plombiers disponibles à tout moment. Faites confiance à notre expertise et à notre capacité de conseil pour des solutions de plomberie optimales et personnalisées."
            }
          />
        </div>
        <div className="detailed-service-cards-container">
          <DetailedServiceCard
            icon={"ShakingIcon"}
            subtitle={"Expertise et capacité de conseil"}
            text={
              "Nous nous engageons à vous offrir une expérience sans stress ni mauvaises surprises pendant les travaux. Nous veillons à une communication ouverte, une planification minutieuse et une exécution soignée, pour que chaque étape se déroule en toute transparence. Soyez rassuré ;) "
            }
          />
          <DetailedServiceCard
            icon={"ReviewIcon"}
            subtitle={"Certification / qualification"}
            text={
              "Nos plombiers sont certifiés et qualifiés, démontrant notre engagement envers l'excellence. Faites confiance à notre savoir-faire professionnel pour des interventions de plomberie conformes aux normes les plus strictes."
            }
          />
        </div>
        <Button
          text="Prendre rendez-vous"
          styleType="primary cta-primary-button"
          as="a"
          href="/contact"
        />
      </div>
    </Section>
  );
}

export default PlumberSection;
