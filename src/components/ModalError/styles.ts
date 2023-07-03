import styled, { css } from 'styled-components/native';
import { XCircle } from 'phosphor-react-native';

export const Container = styled.View`
  margin: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  border-radius: 8px;
  gap: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.X}px;
    color: ${theme.colors.GRAY_1};
  `}
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.GRAY_2};
  `}
  text-align: center;
  margin-bottom: 12px;
`;

export const Icon = styled(XCircle).attrs(({ theme }) => ({
  size: 60,
  color: theme.colors.RED_MID,
}))`
  margin-top: 12px;
  align-self: center;
`;
