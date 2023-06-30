import { useCallback, useState } from 'react';

import { BackgroundHeader } from '../../components/BackgroundHeader';
import { Button } from '../../components/Button';

import { ItOnDiet } from '../../models/Diet';

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
import { ModalRemoveMeal } from '../../components/ModalRemoveMeal';
import { useNavigation } from '@react-navigation/native';

export function MealDetails() {
  const { navigate } = useNavigation();

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const itOnDiet: ItOnDiet = 'Yes';

  const textDiet = itOnDiet === 'Yes' ? 'dentro da dieta' : 'fora da dieta';

  const handleEditMeal = useCallback(() => {
    navigate('newMeal', {
      date: '',
      description: '',
      hour: '',
      id: 1,
      isDiet: 'No',
      name: ''
    });
  }, []);

  const handleRemoveMeal = useCallback(() => {
    console.log('Abrir Modal');
  }, []);

  return(
    <BackgroundHeader title='Refeição' color={itOnDiet === 'Yes' ? 'green' : 'red'}>
      <Container>
        <Title>Sanduiche</Title>
        <SubTitle>Sanduíche de pão integral com atum e salada de alface e tomate</SubTitle>
        <DateHour>Data e hora</DateHour>
        <SubTitle>12/08/2022 às 16:00</SubTitle>
        <ViewDiet>
          <Point background={itOnDiet} />
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
    </BackgroundHeader>
  );
}
