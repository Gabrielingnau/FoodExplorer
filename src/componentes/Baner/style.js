import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center; 
  min-width: 40rem;

  > .Baner-wrapper {
    display: flex;
    width: 100%;
    height: 40.6rem;
    position: relative;
    align-items: flex-end;

    
    > img {
      z-index: 2;
      position: absolute;
    }

    > .text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      
      width: 100%;
      height: 26rem;
      border-radius: .8rem;
      background: ${({theme }) => theme.COLORS.GRADIENTS_100};
      z-index: -1;
      margin: 0 0 1.5rem 5.5rem;
      
      > .text {
        margin-right: clamp(7rem, 20rem + 40vw, 25rem);
        
        
        h1 {
          font-size: 4rem;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          line-height: 140%;
          color: ${({theme }) => theme.COLORS.GRAY_300};
          margin-bottom: .8rem;
        }
        p {
          font-size: 1.6rem;
          font-family: Roboto;
          font-style: normal;
          font-weight: 400;
          line-height: 100%;
          color: ${({theme }) => theme.COLORS.GRAY_300};
        }
      }
    }
  }
  
  
  @media(max-width: 70rem) {
    max-height: 30rem;
    .Baner-wrapper{
      max-height: 30rem;
      > img {
        max-width: 50rem;
        max-height: 30rem;
        top: 0;
      }
      .text-wrapper {
        margin: 0 0 .8rem 4rem;
        max-height: 20rem;
        .text {
          max-width: 60.5rem;
          margin-right: 6rem;

          h1 {
            font-size: 3rem;
          }
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
    }

    @media(max-width: 56rem) {
      max-height: 20rem;
    .Baner-wrapper{
      max-height: 20rem;
      > img {
        max-height: 20rem;
        top: 0;
      }
      .text-wrapper {
        max-height: 15rem;
        margin: 0 0 .8rem 3rem;
        .text {
          max-width: 30rem;
          margin-right: 5rem;

          h1 {
            font-size: 2.6rem;
          }
          p {
            font-size: 1.4rem;
          }
        }
      }
    }
    }

    @media(max-width: 39rem) {
      max-height: 14rem;
    .Baner-wrapper{
      max-height: 14rem;
      > img {
        max-height: 14rem;
        top: 0;
      }
      .text-wrapper {
        max-height: 10rem;
        margin: 0 0 .5rem 2rem;
        .text {
          max-width: 25rem;
          margin-right: 2rem;

          h1 {
            font-size: 2.6rem;
            line-height: 100%;
            margin-bottom: .6rem;
          }
          p {
            font-size: 1.4rem;
          }
        }
      }
    }
    }
    @media(max-width: 30rem) {
      max-height: 14rem;
    .Baner-wrapper{
      max-height: 14rem;
      > img {
        max-height: 14rem;
        top: 0;
      }
      .text-wrapper {
        max-height: 10rem;
        margin: 0 0 .5rem 2rem;
        .text {
          max-width: 18rem;
          margin-right: 3rem;

          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
    }
  
`;