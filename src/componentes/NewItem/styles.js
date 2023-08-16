import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.GRAY_600};
    
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : "none"};

    
    border-radius:.8rem;
    padding-right:1rem;

    width: 11.8rem;
    height: 3.2rem;

    >button {
        display:flex;
        align-items:center;

        border:none;
        background:none;
        
    }

    .button-delete{
        color:${({theme}) => theme.COLORS.GRAY_100};
    }

    .button-add{
        color:${({theme}) => theme.COLORS.GRAY_500};
    }

    >input{
        height:3.2rem;
        width:100%;

        padding:1.2rem;

        color:${({theme}) => theme.COLORS.GRAY_300};
        
        background:transparent;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;

        border:none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_500};
        }

    }
`