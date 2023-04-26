import Button from "./UI/Button";

const Banner = ({ heading, message }: { heading: string; message: string }) => {
  return (
    <section className="banner">
      <div className="p-5 text-white z-[2] ml-[5rem] mt-[5rem]">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="py-5 text-xl ">{message}</p>
        <div className="button-container">
          <Button text="Appel urgence" styleType="primary" />
          <Button text="Nous contacter" styleType="primary" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
