import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, Text } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  icon?: '' | keyof typeof Feather.glyphMap;
}

export function Button({ text, icon = '', ...rest }: Props) {
  const { colors, fontSize } = useTheme();

  return (
    <Container {...rest}>
      {icon !== '' && (
        <Feather 
          name={icon}
          size={fontSize.SM}
          color={colors.WHITE} 
        />
      )}
      <Text>{text}</Text>
    </Container>
  );
}