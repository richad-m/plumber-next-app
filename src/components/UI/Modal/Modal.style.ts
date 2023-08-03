import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  border-radius: 0.8rem;
  position: relative;
  flex-direction: column;
  width: 50rem;
  background: white;
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
`;

export const ModalBodyContainer = styled.div`
  position: relative;
  flex: 1 1 auto;
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
