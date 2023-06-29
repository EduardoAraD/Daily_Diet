import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  border-radius: 8px;
  border-width: 1px;
  padding: 14px;

  flex: 1;
  min-height: 54px;
  max-height: 54px;

  ${({ theme }) => css`
    border-color: ${({ theme }) => theme.colors.GRAY_5};
    font-family: ${theme.fontFamily.REGULAR};
    font-size: ${theme.fontSize.MD}px;
    color: ${theme.colors.GRAY_1};
  `}
`;
