import React from "react";
import BrandCarrousel from "./BrandCarrousel";
import Separator from "./UI/Separator";

function PartnershipSection() {
  return (
    <>
      <section id="pricing">
        <h2 className="skill-title text-4xl teal uppercase font-bold">
          Nos partenaires de marque
        </h2>
        <br />
        <div className="">
          Chez AC Pro, nous sommes conscients de l&apos;impact que peut avoir
          une plomberie défaillante sur le fonctionnement de votre appartement
          ou maison. C&apos;est pourquoi nous nous engageons à vous offrir des
          services haut de gamme, professionnels et abordables, pour que votre
          plomberie fonctionne toujours à son meilleur niveau. Que vous ayez
          besoin d&apos;une intervention en urgence ou pour toute autre besoin,
          notre équipe de professionnels est à votre disposition pour vous aider
          à résoudre tous vos problèmes de plomberie de manière rapide et
          efficace.
        </div>
        <BrandCarrousel />
      </section>

      <Separator />
    </>
  );
}

export default PartnershipSection;
