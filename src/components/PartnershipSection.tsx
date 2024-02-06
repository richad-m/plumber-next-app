import React from "react";
import LogoSlider from "./LogoSlider";
import Section from "./UI/Section";

function PartnershipSection() {
  return (
    <Section id="partenaires" title="Nos partenaires de marque">
      <p className="text-justify text-lg">
        Chez Les Artisans Dépanneurs, nous sommes conscients de l&apos;impact
        que peut avoir une plomberie défaillante sur le fonctionnement de votre
        appartement ou maison. C&apos;est pourquoi nous nous engageons à vous
        offrir des services haut de gamme, professionnels et abordables, pour
        que votre plomberie fonctionne toujours à son meilleur niveau. Que vous
        ayez besoin d&apos;une intervention en urgence ou pour tout autre
        besoin, notre équipe de professionnels est à votre disposition pour vous
        aider à résoudre tous vos problèmes de plomberie de manière rapide et
        efficace.
      </p>
      <LogoSlider />
    </Section>
  );
}

export default PartnershipSection;
