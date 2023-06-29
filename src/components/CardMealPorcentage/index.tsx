import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ItOnDiet } from '../../models/Diet';
import { calPorcentageMealDiet, itOnDietToNumberMealDiet } from '../../utils/CalcPorcentage';
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
  numberMealOnDiet: number;
  numberMealOffDiet: number;
  sequenceMealOnDiet: number;
}

export function CardMealPorcentage({
  position = 'right',
  numberMealOffDiet,
  numberMealOnDiet,
  sequenceMealOnDiet,
} : Props) {
  const { navigate } = useNavigation();

  const handlePressNavigate = useCallback(() => {
    if(position === 'left') {
      navigate('home');
    } else {
      navigate('statistics', { numberMealOffDiet, numberMealOnDiet, sequenceMealOnDiet });
    }
  }, [numberMealOffDiet, numberMealOnDiet, sequenceMealOnDiet]);

  const porcentage = calPorcentageMealDiet(numberMealOnDiet, numberMealOffDiet);
  const isDiet: ItOnDiet = itOnDietToNumberMealDiet(numberMealOnDiet, numberMealOffDiet);

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
      <Title>{porcentage.toPrecision(4)}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}