import styled from "styled-components";

export const Container = styled.div`
width: 100%;


.section{
    display: flex;
    flex-direction: column;
    width: 95%;

    >span {
        color: ${({theme}) => theme.COLORS.GRAY_300};
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        margin-bottom: 2rem;
    }
    >.buttons{
        display: flex;
        align-items: flex-start;
        position: absolute;
        justify-content: space-between;
        border: 0;
        width: 96%;
        height: 1px;      

       >.left{
           display: flex;
           align-items: center;
           position: relative;
           width: 11.6rem;
           height: 47.5rem;
           border: none;
           background: ${({theme}) => theme.COLORS.GRADIENTS_400};
           justify-content: center;
           margin-top: 6.7rem;
           cursor: pointer;

           >svg{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 4rem;
           }
       }

       >.right{
           display: flex;
           align-items: center;
           position: relative;
           right: 0;
           width: 11.6rem;
           height: 47.5rem;
           border: none;
           background: ${({theme}) => theme.COLORS.GRADIENTS_300};
           justify-content: center;
           margin-top: 6.7rem;
           cursor: pointer;

           >svg{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 4rem;
           }
       }
    }
}
.wraperCarousel{
    display: flex;
    justify-content: center;
    .carousel{
       overflow-x: auto;
       scroll-behavior: smooth;
       display: flex;
       align-items: center;
       width: 90vw;
       flex-direction: row;

        >div:first-child{
            margin-left: 4.5rem;
        }
   } 
}

.carousel::-webkit-scrollbar{
    display: none;
    
}

@media(max-width:60rem){

.section{
    >span{
        font-size: 2.5rem;       
    }

>.buttons {
>.left{
    position: absolute;
    width: 8rem;
    height: 38rem;
    margin-top: 5.5rem;
    
    >svg{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 3rem;
        }
}
>.right{
    position: absolute;
    right: 0;
    width: 8rem;
    height: 38rem;
    margin-top: 5.5rem;

    >svg{
            font-size: 3rem;
        }
}
}
}
.wraperCarousel{
    .carousel{
        >div:first-child{
            margin-left: 3rem;
        }
   } 
}
} 


@media(max-width:44rem){


    .section{
        
        font-size: 1.8rem;
        
        >span{
            margin-left: 1.5rem;
            
        }
        >.buttons {
    >.left{
        position: absolute;
        left: -5px;
        width: 5rem;
        height: 28rem;
        margin-top: 5.5rem;
        
        >svg{
            font-size: 2rem;
        }
    }
    >.right{
        position: absolute;
        right: 0;
        width: 5rem;
        height: 28rem;
        margin-top: 5.5rem;
 
        >svg{
            font-size: 2rem;
        }
    }
}
}
.wraperCarousel{
    .carousel{
        >div:first-child{
            margin-left: 2rem;
        }
   } 
}
} 

`;

