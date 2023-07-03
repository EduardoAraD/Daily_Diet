import styled, { css } from 'styled-components/native';
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native';
import { ItOnDiet } from '../../models/Diet';

export type PositionArrowTypeStyleProps = 'left' | 'right';

interface PropsIsDiet {
  isDiet: ItOnDiet;
}

export const Container = styled.View<PropsIsDiet>`
  background-color: ${({ theme, isDiet }) =>
    isDiet === 'Yes' ? 
      theme.colors.GREEN_LIGHT :
      theme.colors.RED_LIGHT};
  width: 100%;
  border-radius: 8px;
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
`;

export const Touch = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const IconArrowUpRight = styled(ArrowUpRight).attrs<PropsIsDiet>(({ theme, isDiet }) => ({
  color: isDiet === 'Yes' ? theme.colors.GREEN_DARK : theme.colors.RED_DARK,
  size: 24,
}))``;

export const IconArrowLeft = styled(ArrowLeft).attrs<PropsIsDiet>(({ theme, isDiet }) => ({
  color: isDiet === 'Yes' ? theme.colors.GREEN_DARK : theme.colors.RED_DARK,
  size: 24,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.XXL}px;
    color: ${theme.colors.GRAY_1};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.SM}px;
    color: ${theme.colors.GRAY_2};
  `};
  text-align: center;
`;

export const Active = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.GRAY_1,
  size: 32,
}))`
  margin: 6px;
`;
