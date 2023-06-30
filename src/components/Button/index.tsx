import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ColorContainerStyleProps, Container, Text } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  icon?: '' | keyof typeof Feather.glyphMap;
  typeColor?: ColorContainerStyleProps;
}

export function Button({ text, icon = '', typeColor = 'PRIMARY', ...rest }: Props) {
  const { colors, fontSize } = useTheme();

  return (
    <Container typeColor={typeColor} {...rest}>
      {icon !== '' && (
        <Feather 
          name={icon}
          size={fontSize.SM}
          color={typeColor === 'PRIMARY' ? colors.WHITE : colors.GRAY_1} 
        />
      )}
      <Text typeColor={typeColor}>{text}</Text>
    </Container>
  );
}