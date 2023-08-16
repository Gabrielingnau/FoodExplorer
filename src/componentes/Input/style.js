import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  border-radius: 10px;

  > input {
    width: 100%3
    border-radius: 5px;
    padding: 16px;

    width: 100%;
    border-radius: .8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100}; 
    height: 5.09rem;
  }
  
  > svg {
    margin-left: 16px;
  }
`;
