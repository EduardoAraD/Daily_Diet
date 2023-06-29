import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { ItOnDiet } from '../../models/Diet';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

interface TitleProps {
  itOnDiet: ItOnDiet;
}

export const Title = styled.Text<TitleProps>`
  ${({ theme, itOnDiet }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.XL}px;
    color: ${itOnDiet === 'Yes' ? theme.colors.GREEN_DARK : theme.colors.RED_DARK};
  `}
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.GRAY_1};
  `}
  text-align: center;
`;

export const SubTitleBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.GRAY_1};
  `}
`;

export const Image = styled.Image`
  margin: 40px;
  height: 348px;
  width: 311px;
`;
