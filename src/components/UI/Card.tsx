import React from "react";
import Image from "next/image";
import someting from "../../../assets/water-tap.png";

function Card() {
  return (
    <div className="card-container">
      <div className="card-logo m-auto">
        <Image
          src={someting}
          alt="Picture of the author"
          width={150}
          height={150}
          color="red"
        />
      </div>
      <h2 className="text-2xl card-title font-bold">Card title</h2>
      <div className="card-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est
        ducimus doloremque nesciunt ab facilis, ut fuga consectetur odio
        corporis, mollitia accusantium, libero quo provident? Deserunt impedit
        officia tempore veritatis?
      </div>
    </div>
  );
}

export default Card;
