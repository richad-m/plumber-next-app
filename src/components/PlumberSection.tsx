import React from "react";
import Separator from "./UI/Separator";

function PlumberSection() {
  return (
    <>
      <section id="numbers">
        <h2
          className="skill-title text-4xl teal uppercase text-center"
          style={{ marginTop: "7rem" }}
        >
          dédié à l&apos;excellence et au service
        </h2>
        <div
          style={{
            width: "70px",
            background: "blue",
            height: "5px",
            margin: "24px",
          }}
        />
        <div className="py-3">
          <p className="text-center text-lg">
            <strong>
              Chez AC Pro Plomberie, nous savons à quel point il est important
              d&apos;être prêt à faire face à n&apos;importe quel scénario de
              plomberie.
            </strong>
            La plomberie de votre maison est un réseau complexe de tuyaux,
            d&apos;accessoires et d&apos;appareils qui sont tous vulnérables à
            leurs propres défaillances. Pour assurer la santé continue de
            l&apos;ensemble du système de plomberie de votre maison, nous
            arrivons toujours avec tout l&apos;équipement et les outils dont
            nous avons besoin pour faire le travail de la bonne façon, sans
            improviser ni prendre de raccourcis.
          </p>
        </div>
      </section>
    </>
  );
}

export default PlumberSection;
