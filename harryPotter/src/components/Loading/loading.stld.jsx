import styled, { keyframes } from "styled-components";

const isRotating = keyframes`
   to {
    transform: rotate(1turn);
  }
`;

export const LoadingDivStyled = styled.div`
  animation: ${isRotating} 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #a6955a;
  height: 50px;
  width: 50px;
`;

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #031c29;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
`;
