import styled from "styled-components";

export const ProgressContainer = styled.div`
  overflow: hidden;
  padding-bottom: 2em;
  text-align: center;
`;

export const Part = styled.div`
  border-bottom: 3px solid red;
  float: left;
  margin-bottom: 0.75em;
  position: relative;
  width: 20%;

  span {
    color: white;
  }
`;

export const Desc = styled.div`
  height: 1.1875em;
  padding-bottom: 1em;
`;

export const Circle = styled.div`
  left: 0;
  position: absolute;
  right: 0;
  top: 1.5em;
`;

export const CircleSpan = styled.span<{ isActive?: boolean }>`
  background: ${({ isActive }) => (isActive ? "blue" : "red")};
  border-radius: 2em;
  color: #ffffff;
  display: inline-block;
  font-size: 0.75em;
  height: 2em;
  line-height: 2;
  width: 2em;
`;

export const OnPart = styled(Part)`
  border-bottom-color: #ff4f00;
`;
