import styled from "styled-components";
import { colors } from "../../styles";

import { Props } from ".";

export const Button = styled.button<Omit<Props, "text">>`
  cursor: pointer;
  padding: 0.25rem 0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) =>
    props.buttonFor === "restaurant" ? colors.flowerBed : colors.pureHearted};
  background-color: ${(props) =>
    props.buttonFor === "restaurant" ? colors.pureHearted : colors.flowerBed};
  border: none;

  ${(props) =>
    props.buttonFor === "restaurant" &&
    `
      max-width: 10rem;
  `}

  ${(props) =>
    props.buttonFor === "dish" &&
    `
      width: 100%;
  `}
`;
