import React from "react";
import BrandCarrousel from "./BrandCarrousel";
import Section from "./UI/Section";
import Separator from "./UI/Separator";

function PartnershipSection() {
  return (
    <Section id="partenaires" title="Nos partenaires de marque">
      <p>
        Chez AC Pro, nous sommes conscients de l&apos;impact que peut avoir une
        plomberie défaillante sur le fonctionnement de votre appartement ou
        maison. C&apos;est pourquoi nous nous engageons à vous offrir des
        services haut de gamme, professionnels et abordables, pour que votre
        plomberie fonctionne toujours à son meilleur niveau. Que vous ayez
        besoin d&apos;une intervention en urgence ou pour toute autre besoin,
        notre équipe de professionnels est à votre disposition pour vous aider à
        résoudre tous vos problèmes de plomberie de manière rapide et efficace.
      </p>
      <BrandCarrousel />
    </Section>
  );
}

export default PartnershipSection;
