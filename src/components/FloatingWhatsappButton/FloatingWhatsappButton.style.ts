import styled from "styled-components";

export const ToolTipContainer = styled.div`
  color: black;
  background-color: white;
  border-radius: 1rem;
  padding: 0.8rem;
  visibility: hidden;
  opacity: 0;
  margin-bottom: 0.4rem;
  position: absolute;
  right: 0rem;
  bottom: 4rem;
  width: 15rem;
`;
export const WhatsappLink = styled.a`
  position: relative;
`;

export const FloatingWhatsappButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 5;
  right: 0;
  margin: 1.2rem;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  background-color: var(--whatsapp-green);
  width: 4rem;
  justify-content: center;
  border-radius: 100%;

  &:hover ${ToolTipContainer} {
    visibility: visible;
    transition: opacity 0.4s;
    opacity: 1;
  }

  &:hover {
    background-color: var(--whatsapp-dark-green);
    transition: background-color 0.4s;
  }
`;
