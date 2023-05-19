import React from "react";
import Button from "./UI/Button";
import DetailedServiceCard from "./UI/DetailedServiceCard";
import Section from "./UI/Section";

function PlumberSection() {
  return (
    <Section id="plomberie" title="dédié à l'excellence et au service">
      <p className="text-center text-lg">
        <strong>
          Chez AC Pro Plomberie, nous savons à quel point il est important
          d&apos;être prêt à faire face à n&apos;importe quel scénario de
          plomberie.
        </strong>
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
            subtitle={"take care of your home"}
            text={
              "Your home will be left as clean, if not cleaner, as when we arrived."
            }
          />
          <DetailedServiceCard
            icon={"ReviewIcon"}
            subtitle={"five star service"}
            text={
              "We aim for a five-star experience every time. We work hard to provide helpful, convenient, and high-quality service to every client."
            }
          />
        </div>
        <div className="detailed-service-cards-container">
          <DetailedServiceCard
            icon={"ShieldIcon"}
            subtitle={"trusted advisors"}
            text={
              "You can rely on us for expert plumbing solutions, fair pricing, and referrals to quality contractors, electricians, and more."
            }
          />
          <DetailedServiceCard
            icon={"ShakingIcon"}
            subtitle={"experienced and professional"}
            text={
              "Our Journeymen Plumbers have years of extensive plumbing knowledge and intricate, hands-on training."
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
