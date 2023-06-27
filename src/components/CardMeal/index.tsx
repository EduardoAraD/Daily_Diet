import { TouchableOpacityProps } from 'react-native';
import { ItOnDiet } from '../../models/Diet';

import { Container,
  DietBoll,
  Hour,
  Line,
  NameMeal
} from './styles';

type Props = TouchableOpacityProps & {
  name: string;
  hour: string;
  isDiet: ItOnDiet;
}

export function CardMeal({ hour, isDiet, name, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>
      <Line />
      <NameMeal>{name}</NameMeal>
      <DietBoll isDiet={isDiet} />
    </Container>
  );
}
