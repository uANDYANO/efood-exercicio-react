import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { Button } from "../Button/styles";
import dump from "../../assets/icon/dump.svg";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 10;

  &.is-open {
    display: flex;
  }

  form {
    width: 100%;
    max-width: 22.5rem;
    height: 100%;

    background-color: ${colors.pureHearted};
    z-index: 20;
    padding: 2.5rem 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;

    form {
      height: 75%;
      max-width: 100%;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    height: 25%;
  }
`;

export const Sidebar = styled.aside`
  ${Button} {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    ${Button} {
      padding: 1rem 0.5rem;
      font-size: 1rem;
    }
  }
`;

export const Prices = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.875rem;
  color: ${colors.flowerBed};
  margin: 2.5rem 0 1rem;

  span {
    display: block;
    font-size: 0.75rem;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 0.5rem;
  background-color: ${colors.flowerBed};
  gap: 1.25rem;
  margin-bottom: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  h3 {
    font-weight: 900;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;
  }

  button {
    background-image: url(${dump});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  color: ${colors.flowerBed};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;

  gap: 0.5rem;
  color: ${colors.flowerBed};
  margin-top: 0.5rem;

  label {
    display: block;
  }

  input {
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;

    color: ${colors.gray};
    background-color: ${colors.flowerBed};
    border: none;
  }

  label,
  input {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 100%;
    letter-spacing: 0%;

    &.error {
      border: 0.0625rem solid red;
    }
  }

  input::placeholder {
    font-style: italic;
    opacity: 0.4;
  }
`;

export const DoubleInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .flex-grow--2 {
    flex-grow: 2;
  }
`;

export const DeliveryButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;
  letter-spacing: 0%;
  text-align: justify;

  margin-top: 1rem;

  color: ${colors.flowerBed};
`;
