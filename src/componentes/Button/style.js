import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center; 

> button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.8rem; 

    padding: 1.2rem 3.2rem;
    width: 100%;

    font-size: 1.6rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;    
    border: none;

    color: ${({theme }) => theme.COLORS.GRAY_100};
    background: ${({theme }) => theme.COLORS.BUTTON_100};
    border-radius: .5rem;

    > svg {
      margin-right: .8rem;
    }
}
`;