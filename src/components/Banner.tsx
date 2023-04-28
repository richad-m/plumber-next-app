import Button from "./UI/Button";
import FullLogo from "./UI/FullLogo";

const Banner = ({ message }: { message: string }) => {
  return (
    <>
      <section className="banner">
        <div className="sm:p-5 text-white z-[2] sm:ml-[5rem] sm:mt-[5rem] ">
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
