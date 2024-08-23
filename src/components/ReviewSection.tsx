import { ReviewSlider } from "./ReviewSlider";
import Section from "./UI/Section";

export function ReviewSection(): JSX.Element {
  return (
    <Section id="reviews" title="Avis de nos clients" titleClassName="mt-0">
      <ReviewSlider />
      <a
        className="text-center text-blue-500"
        target="_blank"
        href="https://www.google.com/search?sca_esv=2346eec244b06c07&rlz=1C5CHFA_enFR1033FR1033&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dHjRwTDFoaNjh2GSqlZF8yKknz45d2pz2rCC6AyTMwGYLWB853MTqf360btMtv3Mn90F6p9_ECDyUeD2qnYx_Czkjk-8I_DBcbF5iRw4HwJkmxa4M&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7veqf6wvHfKt8Qkav0FRxeynIZ_dh7rosAtn-BWPj9CpDHm7duq9PQ6d4jLUcgoPyfj1gEE%3D&q=Les+Artisans+D%C3%A9panneurs+Avis&sa=X&ved=2ahUKEwjB5KyD2YqIAxX5AvsDHQ2ZHZYQ3PALegQIQxAF&biw=1290&bih=748&dpr=2"
      >
        Voir tous nos avis
      </a>
    </Section>
  );
}
