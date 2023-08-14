import styled from "styled-components";

export const AppointmentModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const FileUploadsContainer = styled.div`
  border: 1px dashed blue;
  padding: 1.2rem;
  border-radius: 8px;

  display: flex;
  gap: 1.2rem;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const PhonePhotoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const DescriptionTextArea = styled.textarea`
  width: 100%;
  background-color: white;
  outline: none;
`;

export const DescriptionStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ConfirmationStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const StepBodyTitle = styled.h3`
  font-weight: 700;
`;
