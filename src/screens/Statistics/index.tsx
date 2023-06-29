import { useMemo } from 'react';
import { useRoute } from '@react-navigation/native';

import { CardMealPorcentage } from '../../components/CardMealPorcentage';
import { CardTitleSubtitle } from '../../components/CardTitleSubtitle';

import { ItOnDiet } from '../../models/Diet';
import { itOnDietToNumberMealDiet } from '../../utils/CalcPorcentage';

import { Container, ContainerInfo, GroupView, Title, ViewPadding } from './styles';

export type StatisticsRouteParams = {
  numberMealOnDiet: number;
  numberMealOffDiet: number;
  sequenceMealOnDiet: number;
}

export function Statistics () {
  const {
    numberMealOffDiet,
    numberMealOnDiet,
    sequenceMealOnDiet
  } = useRoute().params as StatisticsRouteParams;

  const isDiet: ItOnDiet = itOnDietToNumberMealDiet(numberMealOnDiet, numberMealOffDiet);

  return (
    <Container isDiet={isDiet}>
      <ViewPadding>
        <CardMealPorcentage
          position='left'
          numberMealOffDiet={numberMealOffDiet}
          numberMealOnDiet={numberMealOnDiet}
          sequenceMealOnDiet={0}
        />
      </ViewPadding>
      <ContainerInfo>
        <Title>Estatísticas gerais</Title>
        <CardTitleSubtitle
          subtitle='melhor sequência de pratos dentro da dieta'
          title={String(sequenceMealOnDiet)}
        />
        <CardTitleSubtitle
          subtitle='refeições registradas'
          title={(numberMealOnDiet + numberMealOffDiet).toString()}
        />
        <GroupView>
          <CardTitleSubtitle
            title={String(numberMealOnDiet)}
            subtitle='refeições dentro da dieta'
            colorCard='green'
          />
          <CardTitleSubtitle
            subtitle='refeições fora da dieta'
            title={String(numberMealOffDiet)}
            colorCard='red'
          />
        </GroupView>
      </ContainerInfo>
    </Container>
  );
}
