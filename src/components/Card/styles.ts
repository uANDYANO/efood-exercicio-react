import styled, { css } from "styled-components";
import { breakpoints, colors } from "../../styles";

type Props = {
  listFor: string;
};

const dishStyles = css`
  background-color: ${colors.pureHearted};
`;

const restaurantStyles = css`
  background-color: ${colors.white};
`;

const dishImageStyles = css`
  border-width: 0.5rem 0.5rem 0 0.5rem;
  border-style: solid;
  border-color: ${colors.pureHearted};
`;

export const Container = styled.div<Omit<Props, "backgroundImage">>`
  max-width: 29.5rem;
  ${(props) => props.listFor === "dish" && dishStyles};
  ${(props) => props.listFor === "restaurant" && restaurantStyles};
`;

export const ImageContainer = styled.div<Props>`
  min-width: 19rem;
  width: 100%;
  height: ${(props) =>
    props.listFor === "restaurant" ? "13.5rem" : "10.5rem"};
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1rem;

  ${(props) => props.listFor === "dish" && dishImageStyles};
`;

export const Tags = styled.div`
  max-height: 7%;
  display: flex;
  align-items: start;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.375rem 0.25rem;
  background-color: ${colors.pureHearted};
  color: ${colors.flowerBed};
`;

export const InfosContainer = styled.div<Omit<Props, "backgroundImage">>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: ${(props) => (props.listFor === "restaurant" ? "1rem" : "0.5rem")};
  border: 0 solid #e66767;
  border-width: 0 1px 1px 1px;

  ${(props) => props.listFor === "restaurant" && restaurantStyles};
  ${(props) => props.listFor === "dish" && dishStyles};

  ${(props) =>
    props.listFor === "dish" &&
    css`
      color: ${colors.flowerBed};
    `}
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Description = styled.p<Omit<Props, "backgroundImage">>`
  width: 95%;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;

  @media (max-width: ${breakpoints.laptop}) {
    min-height: ${(props) =>
      props.listFor === "restaurant" ? "11rem" : "4.5rem"};
  }
`;
