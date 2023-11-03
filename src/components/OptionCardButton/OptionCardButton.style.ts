import styled from "styled-components";

export const FirstOptionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid grey;
  border-radius: 0.8rem;
  height: 9rem;
  width: 9rem;
  padding: 1.2rem;
  transition: background 0.5s;

  &:hover {
    background: var(--accentColor);
    color: white;
    border-color: var(--accentColor);
  }
`;
