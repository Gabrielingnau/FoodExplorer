import Styled from "styled-components";

export const Container = Styled.footer`
grid-area: footer;
display: flex;
padding: 2.4rem 12.3rem;
width: 100%;
justify-content: space-between;
align-items: center;
background-color:${({theme}) => theme.COLORS.BACKGROUND_600};

>div {
  > .logo {
    > p {
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }
  }
}

>p {
  font-family: Roboto;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  white-space: nowrap;
}

@media(max-width: 60rem) {
  padding: 2rem 6rem;
}
@media(max-width: 40rem) {
  padding: 1.3rem 3rem;

  >p {
    font-size: 1rem;
  }
}

@media(max-width: 25rem) {
  justify-content: center;
  
  >div {
    display: none;
  } 
}
  
`;
