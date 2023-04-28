import Button from "./UI/Button";
import FullLogo from "./UI/FullLogo";

const Banner = ({ message }: { message: string }) => {
  return (
    <>
      <section className="banner">
        <div className="p-5 text-white z-[2] ml-[5rem] mt-[5rem]">
          <FullLogo />
          <p className="py-5 text-xl ">{message}</p>
          <div className="button-container">
            <Button text="Appel urgence" styleType="primary" as="a" />
            <Button text="Nous contacter" styleType="primary" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
