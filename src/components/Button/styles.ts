import styled, { css } from 'styled-components/native';

export type ColorContainerStyleProps = 'PRIMARY' | 'SECONDARY';

interface ColorProps {
  typeColor: ColorContainerStyleProps;
}

export const Container = styled.TouchableOpacity<ColorProps>`
  
  padding: 16px 24px;
  gap: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 1px;
  ${({ theme, typeColor }) => css`
    border-color: ${theme.colors.GRAY_1};
    background-color: ${typeColor === 'PRIMARY' ?
    theme.colors.GRAY_1 : theme.colors.WHITE
};
  `}
`;

export const Text = styled.Text<ColorProps>`
  ${({ theme, typeColor }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.SM}px;
    color: ${typeColor === 'PRIMARY' ?
    theme.colors.WHITE : theme.colors.GRAY_1
};
  `};
`;
