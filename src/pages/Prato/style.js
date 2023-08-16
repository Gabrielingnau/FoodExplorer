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

grid-template-rows: 11rem 90vh 7rem;
align-content: space-between;

> header:nth-child(2) {
  display: none;
}
> header:nth-child(1) {
  position: fixed;
}

@media(max-width:  72rem) {
  > header:nth-child(2) {
  display: flex;
  position: fixed;
}
  > header:first-child {
  display: none;
}
}
`;
 
export const Main = styled.div`
grid-area: content;
display: flex;
justify-content: center;
align-items: center;
width:100%;
height: 100%;
padding: 0 12.3rem;

>.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

>.wraper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >img {
    margin-right: 5rem;
    width: 39rem;
    height: 39rem;
  }

  div {
    position: absolute;
    top: 14rem;
    left: 8%;
    >button {
      justify-content: flex-start;
      margin-bottom: 4rem;
     
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;

      >svg {
        font-size: 3.2rem;
      }
      
    }
  }
}

>.main-wraper {
  >.wrap {
    gap: 2.4rem;
    >.wrap {
      margin-bottom: 2.4rem;
      >h1 {
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_300} ;
      }
      >p {
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }
}

.main-wraper .wrap .ingrediente {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.main-wraper {
  > .butons-wraper  {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4.8rem;

    > .butons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      margin-right: 3.3rem;
      gap: 1.4rem;

      >h1 {
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
    >.button button svg {
      display: none;
    }
  }
}

@media(max-width:  72rem) {
  flex-direction: column;
  padding:0 6rem ;

  >.main-wraper {
  >.wrap {
    >.wrap {
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 2.4rem;
      >h1 {
        font-size: 2.7rem;
      }
      >p {
        font-size: 1.6rem;
        text-align: center;
      }
    }
    .ingrediente {
      justify-content: center;
    }
  }
}
>.wraper {
  div {
    >button {
      font-size: 2rem;
      >svg {
        font-size: 3rem;
      }
      
    }
  }
  >img {
    margin-right: 0;
    margin-bottom: 1.6rem;
    width: 30rem;
    height: 30rem;
  }
}
.main-wraper .butons-wraper .button button svg {
      display: flex;
      font-size: 2.1rem;
}
}
@media(max-width:  28.2rem){
  padding:0 3rem ;

  >.wraper {
  >img {
    width: 25rem;
    height: 25rem;
  }
}
}
`;
