import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  padding: 20px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
`;

export const TextMeal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.GRAY_1};
  `}
  margin-top: 32px;
  margin-bottom: 12px;
`;

export const DateText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LG}px;
    color: ${theme.colors.GRAY_1};
  `}
  margin-top: 32px;
  margin-bottom: 8px;
`;
