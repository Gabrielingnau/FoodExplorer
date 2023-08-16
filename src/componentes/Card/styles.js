import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-right: 2.7rem;
    padding: 2.4rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    border-radius: .8rem;
    border: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR4};

    div {
        > .buttonText {
            justify-content: flex-end;
        }
    }
    

    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image{
            cursor: pointer;
            transition: 0.2s; 
            height: 20rem;
            display: flex;

            img{
                max-width: 17.6rem;
                
           }
           button{
            background: transparent;
            border: none;
           }
        }

    .image:hover{
        transform: scale(1.1); 
    }
    .request{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
       
        gap: 1.6rem;

        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 160%;

        color:${({theme}) => theme.COLORS.GRAY_300};
    }

    .name button{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 140%;
        white-space: nowrap;
        
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background: transparent;

        border: none;
    }
    .info{
        p{
            width: 22rem;
    
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 160%;
    
    
            text-align: center;
    
            margin-top: 1.6rem;
    
            color: ${({ theme }) => theme.COLORS.GRAY_400};
            word-wrap: break-word;
        }
    }

    .price{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 3.2rem;
        line-height: 160%;

        margin-bottom: 1.7rem;
        margin-top: 1.6rem;

        color: ${({theme}) => theme.COLORS.BLUE_200};

        >span:first-child{
            margin-right: 1rem;
        }

      
    }

    @media(max-width:60rem){

margin-right: 2.7rem;

>div .buttonText svg {
    font-size: 1.8rem;
}

.item{
    width: 17rem;
}

.image{
  
  margin-bottom: 1.2rem;
  height: 10rem;

    img{
        max-width: 10rem;

   }
 
}
.image:hover{

    transform: none; 

}

.name button{

    font-size: 1.4rem;
        
}
.info{
    font-size: 1rem;
}

.price{
    
    font-size: 1.8rem;


    margin-bottom: 1.7rem;
    margin-top: .5rem;


    >span:first-child{
        margin-right: 1.3rem;
    }
}

.request{

    gap: .6rem;

    font-size: 1.3rem;

    >div {
        button {
            >svg {
                font-size: 1.5rem;
            }
        }
    }
}
}


    @media(max-width:44rem){

        margin-right: 2.7rem;

      
        .item{
            width: 17rem;     
        }

        .fav{
            width: 2.2rem;
        
        }

        .image{
          
            height: 10rem;
            margin-bottom: 1rem;

            img{
                max-width: 10rem;
    
           }
         
        }
        .image:hover{
        
            transform: none; 
        
        }

        .name button{
        
            font-size: 1.4rem;
                
        }
        .info{

            display: none;
        }

        .price{
            
            font-size: 1.8rem;
        

            margin-bottom: 1.7rem;
            margin-top: .5rem;

        
            >span:first-child{
                margin-right: 1.3rem;
            }
        }

        .request{
        
            gap: .6rem;

            width: 10.8rem;
            height: 2.8rem;

            font-size: 1.3rem;
        
            >button{
                background: transparent;
                border: 0;
                
                >img{
                    width: 1.4rem;
                }
            
            }
            >button:first-child{
                margin-top: -1rem;
            }

    }
    } 
`