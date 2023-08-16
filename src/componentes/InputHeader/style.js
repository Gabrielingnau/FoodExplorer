import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  
  border-radius: 10px;

  > input {
    width: 100%;
    border-radius: 5px;
    padding: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_500};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
  
  > svg {
    margin-left: 16px;
  }
`;
