import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LG}px;
    color: ${theme.colors.GRAY_1};
  `}
  text-align: center;
`;
