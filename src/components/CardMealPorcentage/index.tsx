import { useCallback } from 'react';

import { ItOnDiet } from '../../models/Diet';
import {
  Container,
  IconArrowLeft,
  IconArrowUpRight,
  SubTitle,
  Title,
  PositionArrowTypeStyleProps,
  Touch
} from './styles';

interface Props {
  position?: PositionArrowTypeStyleProps;
  porcetage: number;
}

export function CardMealPorcentage({ position = 'right', porcetage } : Props) {
  const isDiet: ItOnDiet = porcetage >= 70 ? 'Yes' : 'No';

  const handlePressNavigate = useCallback(() => {
    console.log(position === 'left' ? 'GO BACK' : 'NAVIGATE');
  }, []);

  return (
    <Container isDiet={isDiet}>
      <Touch
        style={position === 'left' ? { left: 0 } : { right: 0 }}
        activeOpacity={0.7}
        onPress={handlePressNavigate}
      >
        {position === 'left' ? (
          <IconArrowLeft isDiet={isDiet} />
        ) : (
          <IconArrowUpRight isDiet={isDiet} />
        )}
      </Touch>
      <Title>{porcetage.toPrecision(4)}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}