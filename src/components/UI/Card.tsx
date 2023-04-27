import React from "react";
import { FaHandHoldingWater } from "react-icons/fa";

function Card() {
  return (
    <div className="card-container shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600">
      <div className="card-logo m-auto">
        <FaHandHoldingWater size={100} color="darkblue" />
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
