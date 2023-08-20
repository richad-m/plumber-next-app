import styled, { keyframes } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  border-radius: 0.8rem;
  position: relative;
  flex-direction: column;
  width: 50rem;
  background: white;
  height: 35rem;
  overflow: hidden;

  @media screen and (max-width: 780px) {
    height: 100vh;
    width: fit-content;
    overflow: auto;
  }
`;

export const slideIn = keyframes`
  0% {
    transform:translateX(300%);
  }
  100% {
    transform:translateX(0%);
  }
  `;

export const ModalHeader = styled.div`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 1.25rem /* 20px */;
  transition: transform 300ms ease 120ms;

  p {
    margin: 0 auto;
    animation: ${slideIn} 0.4s;
  }
`;

export const ModalBodyContainer = styled.div`
  position: relative;
  flex: 1 1 auto;
  animation: ${slideIn} 0.4s;

  @media screen and (max-width: 780px) {
  }
`;

export const ModalFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem /* 24px */;
  border-style: solid;
`;

export const PrimaryButton = styled.button`
  background: black;
  color: white;
  font-weight: 700;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  padding: 0.8rem 1.2rem;
  border-radius: 0.25rem /* 4px */;
  transition-timing-function: linear;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 150ms;
  margin: 0 0 0 auto;

  &:disabled {
    background: grey;
  }
`;

export const CloseModalButton = styled.button`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 100%;
  padding: 0.8rem;
  width: 2rem;
  height: 2rem;
`;

export const TertiaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  color: black;
  font-weight: 700;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  padding: 0.8rem 1.2rem;
  border-radius: 0.25rem /* 4px */;
  outline: none;
  background: transparent;
`;
