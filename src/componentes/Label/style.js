import Styled from "styled-components";

export const Container = Styled.div`
  width: 100%;

  label {

    color: ${({ theme }) => theme.COLORS.GRAY_400};

    font-size: 1.6rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;    
  }
`;