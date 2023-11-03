import styled from "styled-components";

export const OptionButton = styled.button`
  color: var(--accentColor);
  border: 1px solid var(--accentColor);
  padding: 0.4rem;
  width: fit-content;
  border-radius: 0.8rem;
  transition: background 0.5s;

  &:hover {
    color: white;
    background: var(--accentColor);
  }
`;
