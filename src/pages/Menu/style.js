import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
justify-items: center;
grid-template-areas:
"header"
"content"
"footer";
grid-template-rows:
11.4rem
auto
auto;
align-items: end;
`;
 

export const Header = styled.header`
grid-area: header;
display: flex;
justify-content: flex-start;
align-items: center;
width:100%;
height: 11.4rem;
background:${({ theme }) => theme.COLORS.BACKGROUND_1000};

> .header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;


  > button {
    margin-right: 1.6rem;
    margin-left: 2.8rem;

    display: flex;
    justify-content: center;
    align-items: center;
   
    border: none;

    background: transparent;
      >svg {
        color: ${({theme }) => theme.COLORS.GRAY_100};
        font-size: 1.8rem;
      }
  }

  > h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-size: 21.163px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_100} ;
  }
}

`;


export const Main = styled.div`
grid-area: content;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0 2.8rem;
width:100%;
height: 100%;
justify-content: flex-start;

> .main {
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 3.6rem;

  >.button {
    width:4;
    margin-left: 1rem;
    a {
      > div {
        >button {
          margin-top: 3.6rem;
          justify-content: flex-start;
        }
      }
    }
  }
  
  > .line {
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    width: 100%;
  
    margin-top: 1rem;
  }
}
`;
