import { useCallback, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackgroundHeader } from '../../components/BackgroundHeader';
import { Button } from '../../components/Button';
import { ModalError } from '../../components/ModalError';
import { ModalRemoveMeal } from '../../components/ModalRemoveMeal';

import { Meal } from '../../models/Meal';

import { removeMealByRef } from '../../storage/Meal/removeMealByRef';

import {
  Container,
  ContainerButton,
  DateHour,
  Point,
  SubTitle,
  TextDiet,
  Title,
  ViewDiet
} from './styles';

export type MealDetailsRouteParams = {
  meal: Meal;
}

export function MealDetails() {
  const { meal } = useRoute().params as MealDetailsRouteParams;
  const { navigate } = useNavigation();

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isShowModalError, setIsShowModalError] = useState(false);

  const textDiet = meal.isDiet === 'Yes' ? 'dentro da dieta' : 'fora da dieta';

  const handleEditMeal = useCallback(() => {
    navigate('newMeal', {
      date: meal.date,
      description: meal.description,
      hour: meal.hour,
      id: meal.id ?? 1,
      isDiet: meal.isDiet,
      name: meal.name,
    });
  }, []);

  const handleRemoveMeal = useCallback(async () => {
    try {
      await removeMealByRef(meal.id ?? 0);

      navigate('home');
    } catch (error) {
      console.log(error);
      setIsShowModalError(true);
    }
  }, []);

  return(
    <BackgroundHeader title='Refeição' color={meal.isDiet === 'Yes' ? 'green' : 'red'}>
      <Container>
        <Title>{meal.name}</Title>
        <SubTitle>{meal.description}</SubTitle>
        <DateHour>Data e hora</DateHour>
        <SubTitle>{meal.date} às {meal.hour}</SubTitle>
        <ViewDiet>
          <Point background={meal.isDiet} />
          <TextDiet>{textDiet}</TextDiet>
        </ViewDiet>
      </Container>
      <ContainerButton>
        <Button
          text='Editar refeição'
          icon='edit-3'
          activeOpacity={0.7}
          onPress={handleEditMeal}
        />
        <Button
          text='Excluir refeição'
          icon='trash-2'
          typeColor='SECONDARY'
          activeOpacity={0.7}
          onPress={() => setIsVisibleModal(true)}
        />
      </ContainerButton>
      <ModalRemoveMeal
        onClose={() => setIsVisibleModal(false)}
        visible={isVisibleModal}
        animationType='fade'
        transparent
        onConfirm={handleRemoveMeal}
      />
      <ModalError
        visible={isShowModalError}
        onClose={() => setIsShowModalError(false)}
        title='Refeição'
        subtitle='Não foi possível remover a refeição.'
        transparent
      />
    </BackgroundHeader>
  );
}
