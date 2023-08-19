import Styled from "styled-components";

export const Container = Styled.header`
  display: flex;
  width: 100%;
  height: 11.4rem;
  justify-content: space-around;
  align-items: center; 
  margin-bottom: 3.2rem;
  position: fixed;
  z-index: 50;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  >div:last-child {
    flex-direction: row;
    width: 45rem;
    padding-left: 3rem;
    >.logo {
      >p {
        margin-right: .8rem;
      }
    }
  }
  
  a {
    >div {
      width: 15rem;
      >.buttonText {
        > svg {
          font-size: 3.2rem;
        }
      }
    }
  }

  @media(max-width: 60rem) {
    height: 9rem;
  }

  @media(max-width: 40rem) {
    height: 7rem;
  
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