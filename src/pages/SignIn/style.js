import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;

padding: 3rem;

display: grid;
justify-items: center;
grid-template-areas:
"left right";
align-items: center;

@media (max-width:55rem) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

grid-template-rows: 50rem 50rem;

}
`;
 

export const Cadastrar = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    padding: 6.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 1.6rem;

    width: auto;

    >div:nth-child(2) div  {
      margin-top: .8rem;
    }
    >div:nth-child(3) div  {
      margin-top: .8rem;
    }

    > h1 {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 3.2rem;

      font-size: 3.2rem;
      width: clamp(29rem, 34.8vw, 50rem);
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_100} ;
    }

    > div {
      margin-bottom: 3.2rem;
    }

    >  div:last-child {
      margin: 0;
    }

    @media (max-width:55rem) {
      background: transparent;

      > h1 {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      > div {
        width: clamp(28.9rem, 30vw, 50rem);
        margin-bottom: 2rem;
      }
    }
  }
  
`;
