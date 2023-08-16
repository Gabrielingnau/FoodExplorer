import Styled from "styled-components";

export const Container = Styled.header`
  display: flex;
  width: 100%;
  height: 11.4rem;
  justify-content: center;
  align-items: center; 
  margin-bottom: 3.2rem;
  position: fixed;
  grid-area: header;
  z-index: 50;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  >div {
    >.buttonText {
      > svg {
        font-size: 3.2rem;
      }
    }
  }

  @media(max-width: 60rem) {
    height: 9rem;
  }

  @media(max-width: 40rem) {
    >div:last-child {
    width: 32rem;
  }
  
  a {
    >div {
      width: 7rem;
    }
  }
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    svg {
      width: 2rem;
      height: 2rem;
    }
}
`;