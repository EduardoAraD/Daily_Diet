import { useMemo } from 'react';
import { CardMealPorcentage } from '../../components/CardMealPorcentage';
import { CardTitleSubtitle } from '../../components/CardTitleSubtitle';
import { ItOnDiet } from '../../models/Diet';

import { Container, ContainerInfo, GroupView, Title, ViewPadding } from './styles';

export function Statistics () {
  const numberMealOnDiet = 77;
  const numberMealOffDiet = 32;

  const porcetage = useMemo(() => {
    return (numberMealOnDiet / (numberMealOnDiet + numberMealOffDiet)) * 100;
  }, []);

  const isDiet: ItOnDiet = useMemo(() => {
    return porcetage >= 70 ? 'Yes' : 'No';
  }, [porcetage]);

  return (
    <Container isDiet={isDiet}>
      <ViewPadding>
        <CardMealPorcentage porcetage={porcetage} position='left' />
      </ViewPadding>
      <ContainerInfo>
        <Title>Estatísticas gerais</Title>
        <CardTitleSubtitle
          subtitle='melhor sequência de pratos dentro da dieta'
          title='4'
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
