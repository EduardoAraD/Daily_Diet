import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type ColorContainerStyleType = 'green' | 'red' | 'default';

interface ContainerProps {
  color: ColorContainerStyleType;
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, color }) =>
    color === 'green' ? theme.colors.GREEN_LIGHT :
      color === 'red' ? theme.colors.RED_LIGHT : theme.colors.GRAY_5  
};
`;

export const PaddingHeader = styled.View`
  padding: 10px 20px;
`;
