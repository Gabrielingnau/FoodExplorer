import Styled from "styled-components";

export const Container = Styled.div`

>.ingrediente {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: .8rem;
  border-radius: .5rem;
  background: ${({theme}) => theme.COLORS.BACKGROUND_1000};

  > p {
    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    white-space: nowrap;

    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
}
`;
