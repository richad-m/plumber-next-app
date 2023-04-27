import React, { useEffect, useState } from "react";
import { FaHandHoldingWater } from "react-icons/fa";

function Numbers({
  bigNumber = 6503,
  subtitle = "litres d'eau économisés",
}: {
  bigNumber?: number;
  subtitle?: string;
}) {
  return (
    <div className="number-container increment">
      <FaHandHoldingWater size={100} color="red" />
      <div className="big-number teal">{bigNumber}</div>
      <div className="">{subtitle}</div>
    </div>
  );
}

export default Numbers;
