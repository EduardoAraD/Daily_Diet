import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  /* justify-content: space-between; */
`;

export const Form = styled.View`
  gap: 24px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`;

export const ViewLabelInput = styled.View`
  justify-content: space-between;
  min-height: 74px;
  max-height: 74px;
  flex: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LM}px;
    color: ${theme.colors.GRAY_2};
  `}
`;

type ColorButtonStyleType = 'green' | 'red' | 'default';

interface ColorStyleProps {
  background: ColorButtonStyleType;
}

export const TouchPress = styled.TouchableOpacity<ColorStyleProps>`
  flex: 1;
  gap: 8px;
  padding: 16px;
  border-width: 1px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: red;
  border-color: green;
  ${({ theme, background }) => css`
  background-color: ${background === 'green' ?
    theme.colors.GREEN_LIGHT : background === 'red' ?
      theme.colors.RED_LIGHT : theme.colors.GRAY_5
};
  border-color: ${background === 'green' ?
    theme.colors.GREEN_DARK : background === 'red' ?
      theme.colors.RED_DARK : theme.colors.GRAY_5
};
  `}
  
`;

export const Point = styled.View<ColorStyleProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${({ theme, background }) => background === 'green' ?
    theme.colors.GREEN_DARK : background === 'red' ?
      theme.colors.RED_DARK : theme.colors.GRAY_3
};
`;

export const TouchText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.LM}px;
    color: ${theme.colors.GRAY_1};
  `}
`;
