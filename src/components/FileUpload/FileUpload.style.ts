import styled from "styled-components";

export const FileUploadImportContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px solid blue;
  border-radius: 8px;
  height: 100%;
  padding: 3.4rem;
  width: 100%;
  transition: background-color 0.4s;
  color: blue;

  &:hover {
    color: white;
    background-color: blue;
  }
`;
