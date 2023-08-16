import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: transparent;

    resize: none;
    
    border-radius: .5rem;
    padding: 1.4rem;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_500};
    }

    &:focus {
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_100}; 
    }

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

`