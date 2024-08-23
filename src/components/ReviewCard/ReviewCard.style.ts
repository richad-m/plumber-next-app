import styled from "styled-components";

export const ReviewCardContainer = styled.div`
  border: 1px solid var(--accentColor);
  padding: 1.4rem;
  border-radius: 0.4rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 40rem;
  gap: 1.2rem;

  @media screen and (max-width: 780px) {
    width: fit-content;
    padding: 0.8rem;
    gap: 0.8rem;
  }
`;
