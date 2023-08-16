import styled from "styled-components"

export const Container = styled.div`
display: grid;
justify-items: center;
grid-template-areas:
"header"
"main"
"footer";
grid-template-rows: 10rem auto;

> header:nth-child(2) {
  display: none;
}

@media(max-width: 60rem) {
  > header:nth-child(2) {
  display: flex;
}
  > header:first-child {
  display: none;
}
}
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: main;
  align-items: center;
  margin-bottom: 4.6rem;

  width: 100%;

  > div {
    width: 95%;
    margin-top: 5rem;
  }
  > div:first-child {
    width: 100%;
  }
  > div:nth-child(2) {
    margin-top: 5rem;
  }
`;
