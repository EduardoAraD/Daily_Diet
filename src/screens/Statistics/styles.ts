import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { ItOnDiet } from '../../models/Diet';

interface ContainerProps {
  isDiet: ItOnDiet;
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, isDiet }) =>
    isDiet === 'Yes' ?
      theme.colors.GREEN_LIGHT :
      theme.colors.RED_LIGHT};
`;

export const ContainerInfo = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_7};
  flex: 1;
  padding: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  gap: 12px;
`;

export const ViewPadding = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.BOLD};
    font-size: ${theme.fontSize.SM}px;
    color: ${theme.colors.GRAY_1};
  `}
  text-align: center;
  margin-bottom: 10px;
`;

export const GroupView = styled.View`
  flex-direction: row;
  gap: 12px;
`;
