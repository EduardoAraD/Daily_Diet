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
  Touch,
  Active
} from './styles';

interface Props {
  position?: PositionArrowTypeStyleProps;
  numberMealOnDiet: number;
  numberMealOffDiet: number;
  sequenceMealOnDiet: number;
  loading?: boolean;
}

export function CardMealPorcentage({
  position = 'right',
  numberMealOffDiet,
  numberMealOnDiet,
  sequenceMealOnDiet,
  loading,
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
      {loading ?
        <Active /> :
        <Title>{porcentage.toPrecision(3)}%</Title>
      }
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}