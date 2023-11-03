import Navbar from "../../components/Navbar";
import Section from "../../components/UI/Section";
import { PHONE_NUMBER } from "../../constants/phoneNumber";

export default function Home() {
  return (
    <>
      <Navbar isHomePage={false} />

      <Section id="partenaires" title="Mentions légales">
        <div className="flex flex-col gap-3">
          <p>
            Les Artisans Dépanneurs, 45 rue Notre dame de Nazareth 75003, Paris,
            France.
          </p>
          <p>Téléphone : {PHONE_NUMBER}. </p>
          <p>Courrier électronique : vosartisansdepanneurs@gmail.com.</p>
          <p>
            L&apos;entreprise est immatriculée au RCS de Paris avec le numéro
            980 232 482. Le numéro d&apos;identification de TVA est le
            FR62980232482.
          </p>
          <p>
            Ce site est hébergé par la société Vercel Inc., située 340 S Lemon
            Ave Walnut, CA 91789, et joignable au (559) 288-7060.
          </p>
        </div>
      </Section>
    </>
  );
}
