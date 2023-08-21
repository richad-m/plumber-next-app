import { AppointmentSteps } from "../../../constants/appointmentSteps";
import {
  BreadcrumbContainer,
  BreadCrumbsContainer,
  Circle,
  CircleSpan,
  Desc,
  Dot,
  Line,
  Part,
  ProgressContainer,
  Round,
  StepContainer,
} from "./breadCrumbs.style";

function BreadCrumbs({
  appointmentStep,
}: {
  appointmentStep?: AppointmentSteps;
}) {
  const allSteps = Object.values(AppointmentSteps);
  return (
    <ProgressContainer id="progress">
      {allSteps.map((step, index) => (
        <Part key={step}>
          <Desc>
            <span>{step}</span>
          </Desc>
          <Circle>
            <CircleSpan isActive={appointmentStep === step}>{index}</CircleSpan>
          </Circle>
        </Part>
      ))}
    </ProgressContainer>
  );
}

export default BreadCrumbs;
