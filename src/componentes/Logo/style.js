import Styled from "styled-components";

export const Container = Styled.div`

display: flex;
flex-direction: column;
align-items: flex-end;

>.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 2.4rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;

    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > img {
    width: 30px;
    height: 30px;

    margin-right: 1rem;
  }
  @media(max-width: 40rem) {
    > img {
    width: 2rem;
    height: 2rem;
    }
    > p {
    font-size: 2rem;
    }
}
}

div {
  >p {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; 
    color: ${({theme}) => theme.COLORS.BLUE_200};
  }
}
`;