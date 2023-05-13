import Button from "./UI/Button";
import FullLogo from "./UI/FullLogo";

const OldBanner = ({ message }: { message: string }) => {
  return (
    <>
      <section className="banner">
        <div className="sm:p-5 text-white z-[2] sm:ml-[5rem] sm:mt-[5rem] flex flex-col items-center anim-lineup">
          <FullLogo />
          <p className="py-5 text-4xl sm:text-6xl">{message}</p>
          <div className="button-container">
            <Button
              text="Une urgence ?"
              styleType="primary"
              as="a"
              href="tel:0100000000"
            />
            <Button
              text="Nous contacter"
              styleType="primary"
              as="a"
              href="/contact"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OldBanner;
