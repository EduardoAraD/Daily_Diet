import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

import { ColorContainerStyleType } from '../BackgroundHeader/styles';

interface ContainerProps {
  color: ColorContainerStyleType;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;

  background-color: ${({ theme, color }) =>
    color === 'green' ? theme.colors.GREEN_LIGHT :
      color === 'red' ? theme.colors.RED_LIGHT : theme.colors.GRAY_5  
};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LG}px;
    color: ${theme.colors.GRAY_1};
  `}
`;

export const Touch = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  margin-left: -10px;
  padding: 10px;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.colors.GRAY_2,
  size: 24,
}))``;
