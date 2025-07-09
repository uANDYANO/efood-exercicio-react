import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#FFFFFF",
  sugarMilk: "#FFF8F2",
  flowerBed: "#FFEBD9",
  pureHearted: "#E66767",
  gray: "#4B4B4B",
};

export const breakpoints = {
  desktop: "1280px",
  laptop: "1024px",
  tablet: "768px",
  mobile: "500px",
};

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
list-style: none;
text-decoration: none;


body {
background-color: ${colors.sugarMilk};
color: ${colors.pureHearted};

}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
`;
