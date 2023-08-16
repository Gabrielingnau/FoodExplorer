import Styled from "styled-components";

export const Container = Styled.header`
  display: grid;
  width: 100%;
  align-items: center; 
  grid-template-areas: "imagem input button svg";
  grid-template-columns: 23rem 63rem 23rem 3rem;
  grid-area: header;
  align-content: center;
  justify-content: space-between;
  height: 10rem;
  gap: 3.2rem;
  padding: 0 12.3rem;
  position: fixed;
  z-index: 50;
  
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  >div {
    >.buttonText {
      > svg {
        font-size: 3.2rem;
      }
    }
  }

  @media (max-width: 100rem) {
    grid-template-columns: 20rem 57rem 20rem 2.5rem;
  }
  @media (max-width: 84rem) {
    grid-template-columns: 17rem 45rem 17rem 2.5rem;
  }
  @media (max-width: 71.7rem) {
    grid-template-columns: 15rem 35rem 15rem 2.5rem;
  }
  
`;



