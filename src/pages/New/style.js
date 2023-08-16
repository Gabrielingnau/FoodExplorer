import styled from "styled-components"

export const Container = styled.div`
width: 100%;

display: grid;
justify-items: center;
grid-template-areas:
"header"
"content"
"footer";
align-content: space-between;
grid-template-rows: 7rem 100vh;


> header:nth-child(1) {
  position: fixed;
}
> header:nth-child(2) {
  display: none;
 }

@media(max-width: 60rem) {
  
  grid-template-rows: 9rem auto auto;
  > header:nth-child(1) {
    display: none;
  }
  > header:nth-child(2){
    display: flex;
    position: fixed;
  }
}
`;

export const Main = styled.div`
grid-area: content;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width:100%;
padding: 0 12.5rem ;
gap: 3.2rem;

>.titulo {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  
  > div {
    position: absolute;
    top: 14rem;
    left: 12rem;
  }
  >div .buttonText {
    justify-content: flex-start;
    
    font-family: Poppins;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    
    >svg {
      font-size: 3rem;
    }    
  }
  
  > h1 {
    font-family: Poppins;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
}

>.edite {
display: flex;
justify-content: center;
align-items: center;
gap: 3.2rem;
width: 100%;

>.image {
  >span {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    
    color: ${({theme}) => theme.COLORS.GRAY_400};
  }
  .inputImage{       
    width: 22.9rem;
    height: 5.1rem; 
    margin-top: 1.6rem;
    
    display: flex;
    justify-items: center;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    
    label{
      z-index: 2;
      position: absolute;
      margin-left: 6.4rem;
      width: max-content;
      
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      cursor: pointer;
      white-space: nowrap;
        
    }
    
    .file {
      display: flex;
      justify-items: flex end;
      align-items: center;
      img{
        margin-left: 3.2rem;
      }
      
      input {
        display: none;
      }
    }
    
    
    
    border-radius: .5rem;
    
  }
}

> .name {
  width: 100%;
  
  >div {
    div {
      margin-top: 1.6rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border-radius: .8rem;
    }
  }
}
> .category {
  width: 100%;
  
  >select {
    display: flex;
    justify-items: center;
    align-items: center;
    
    width: 100%;
    height: 5.1rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: .8rem;
    border: 0px;
    
    padding: 1.6rem;
    
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; 
    border: none; 
    cursor: pointer;
    transition: 0.2s;
  
    
    color: ${({theme}) => theme.COLORS.GRAY_300};
    
    &:focus {
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_100}; 
    }
    
    >option{
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; 
      border: none; 
      
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  >select:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
  
  >div {
    margin-bottom: 1.6rem;
  }
}
}

>.ingrediente {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 3.2rem;
  
  >.newItem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    
    >.Item {
  margin-top: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  padding: .95rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: .8rem;
  
  }

}

>.value div div {
  margin-top: 1.6rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: .8rem;
}
}

>.description {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
  >.textarea {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1.6rem;
}
}


>.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  
  button {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      transition: 0.2s;
    }
    button:hover {
      background: ${({ theme }) => theme.COLORS.BUTTON_400};
    }
}

@media (max-width: 60rem) {
  gap: 2.4rem;
  max-height: 1000px;
  margin-bottom: 5rem;
  margin-top: 1.1rem;
  padding: 0 3rem;
  
  >.titulo {
    >div {
      position: static;
      margin-bottom: 2.4rem;

      >.buttonText {
      font-size: 1.6rem;

      >svg {
        font-size: 2.2rem;
      }
    }
    }
    >h1 {
      font-size: 2.8rem;
    }
  }
  >.edite {
    flex-direction: column;

    >.image  {
      width: 100%;
      >.inputImage {
        margin-top: .8rem;
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        label {
          position: static;
          width: 100%;
          margin-left: .8rem;
        }

        .file {
          img {
            margin-left: 1.6rem;
          }
        }
      }
    }
    >.name {
      >div {
      div {
        margin-top: .8rem;
      }
  }
    }
    >.category {
      div {
        margin-bottom: .8rem;
      }
  }
}
  >.ingrediente { 
  >.newItem {
    >.Item {
  margin-top: .8rem;
  }
}
>.value div div {
  margin-top: .8rem;
}
}

>.description {
  >.textarea {
    margin-top: .8rem;
}
}

>.buttons .adicionar {
  width: 100%;
}
}

`;
