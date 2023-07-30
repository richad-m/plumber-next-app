import dynamic from "next/dynamic";
import React from "react";
import {
  FirstStepOptions,
  LABEL_TO_ICON,
} from "../../constants/appointmentSteps";
import { Icons } from "../../constants/icons";
import { FirstOptionButton } from "./OptionCardButton.style";

function OptionCardButton({
  label,
  onClick,
}: {
  label: FirstStepOptions;
  onClick: () => void;
}) {
  const icon = LABEL_TO_ICON?.[label] || Icons.FaucetIcon;
  const OptionIconComponent = dynamic(
    () => import(`../../../assets/${icon}.tsx`)
  );

  return (
    <FirstOptionButton onClick={onClick}>
      <OptionIconComponent />
      {label}
    </FirstOptionButton>
  );
}

export default OptionCardButton;
