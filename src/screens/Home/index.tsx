import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { CardMealPorcentage } from '../../components/CardMealPorcentage';
import { Header } from '../../components/Header';
import { Spacing } from '../../components/Spacing';
import { TitleWithFlatlist } from '../../components/TitleWithFlatlist';

import { MealSmal } from '../../models/Meal';

import { Container, TextMeal } from './styles';

export function Home() {
  const { navigate } = useNavigation();

  const [listDate, setListDate] = useState(['18.08.22', '17.08.22', '16.08.22']);
  const [list, setList] = useState<MealSmal[]>([
    { hour: '08:00', isDiet: 'Yes', name: 'Tapioca' },
    { hour: '12:00', isDiet: 'Yes', name: 'Arroz e Macarrão' },
    { hour: '15:30', isDiet: 'Yes', name: 'Vitamina de Abacate' },
    { hour: '20:00', isDiet: 'No', name: 'Pão com ovo' },
  ]);

  const handleNewMeal = useCallback(() => {
    navigate('newMeal', {
      date: '',
      description: '',
      hour: '',
      id: null,
      isDiet: 'No',
      name: ''
    });
  }, []);

  return (
    <Container>
      <Header />
      <Spacing height={32} />
      <CardMealPorcentage
        numberMealOnDiet={77}
        numberMealOffDiet={32}
        sequenceMealOnDiet={4}
      />
      
      <TextMeal>Refeições</TextMeal>
      <Button
        icon='plus'
        text='Nova refeição'
        activeOpacity={0.7}
        onPress={handleNewMeal}
      />
      <Spacing height={32} />
      <FlatList
        data={listDate}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TitleWithFlatlist
            date={item}
            listMeal={list}
          />
        )}
        ItemSeparatorComponent={() => <Spacing height={32} />}
      />
      
    </Container>
  );
}
