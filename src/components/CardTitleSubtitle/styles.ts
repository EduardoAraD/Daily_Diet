import { css, styled } from 'styled-components/native';

export type ColorCardStyleProps = 'green' | 'red' | 'default';
interface CardProps {
  color: ColorCardStyleProps;
}

export const Card = styled.View<CardProps>`
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  flex: 1;
  align-items: center;
  justify-content: center;
  max-height: 100px;
  background-color: ${({ theme, color }) =>
    color === 'default' ? theme.colors.GRAY_6 : 
      color === 'green' ? theme.colors.GREEN_LIGHT :
        theme.colors.RED_LIGHT
};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.XL}px;
    color: ${theme.colors.GRAY_1};
  `}
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.SM}px;
    color: ${theme.colors.GRAY_2};
  `}
  text-align: center;
  width: 90%;
`;
