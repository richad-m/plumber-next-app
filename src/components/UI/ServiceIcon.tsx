import Image from "next/image";
import logo from "../../../assets/water-heater.svg";

function ServiceIcon() {
  return (
    <div className="mt-4 w-full">
      <div className="flex-col items-center flex gap-4 m-4">
        <div className="round">
          <Image src={logo} width={50} alt={""} className="service-icon" />
        </div>
        <div>
          <h3 className="font-bold">Nom du service</h3>
        </div>
      </div>
    </div>
  );
}

export default ServiceIcon;
