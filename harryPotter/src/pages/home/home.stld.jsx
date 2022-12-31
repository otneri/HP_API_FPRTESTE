import styled from "styled-components";
import background from "../../assets/background.png";
import { Link } from "react-router-dom";

export const Bar = styled.div`
  background-color: #a6955a;
  padding: 1em;
`;

export const HomeBackground = styled.div`
  background-image: url(${background});
  position: absolute;
  height: max-content;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DivLogo = styled.div`
  padding: 0em 0em;
  display: flex;
  flex-direction: column;
  gap: 5em;
  align-items: center;
`;
export const DivEscudo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`;
export const DivCasas = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  flex-grow: 3;
  flex-shrink: 6;
`;
export const DivConteinerStld = styled.div`
  margin: 0em 5em;
  padding: 4em 0em;
  gap: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LinhaStld = styled.img`
  @media screen and (max-width: 1400px) {
    max-width: 50%;
  }

  @media screen and (max-width: 540px) {
    max-width: 10%;
  }
`;
