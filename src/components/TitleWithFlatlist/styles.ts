import { css, styled } from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LG}px;
    color: ${theme.colors.GRAY_1};
  `}
  margin-bottom: 8px;
`;
