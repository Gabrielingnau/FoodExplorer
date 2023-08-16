import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center; 

  width: 100%;

> button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    border: none;

    font-size: 1.4rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    white-space: nowrap;

    color: ${({theme }) => theme.COLORS.GRAY_100};
    background: transparent;

    >svg {
      color: ${({theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`;