import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  border-radius: 8px;
  gap: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LG}px;
    color: ${theme.colors.GRAY_2};
  `}
  text-align: center;
  margin-top: 12px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 12px;
`;
