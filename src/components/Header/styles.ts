import styled from "styled-components";

import backgroundHeader from "../../assets/backgroundHeader.svg";
import { breakpoints } from "../../styles";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 0;
  font-weight: 900;

  .container {
    gap: 8.5rem;

    @media (max-width: ${breakpoints.mobile}) {
      gap: 4.5rem;
    }
  }
`;

export const HeaderBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${breakpoints.laptop}) {
    padding: 0 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

  p {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  max-width: 30rem;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;
