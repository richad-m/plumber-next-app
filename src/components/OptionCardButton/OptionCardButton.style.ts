import styled from "styled-components";

export const FirstOptionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid grey;
  border-radius: 0.8rem;
  aspect-ratio: 1/1;
  height: 10rem;
  padding: 1.2rem;
  transition: background 0.5s;

  &:hover {
    background: #d9a962;
    color: white;
  }
`;
