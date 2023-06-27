import { useState } from 'react';
import { Button } from '../../components/Button';
import { CardMeal } from '../../components/CardMeal';
import { CardMealPorcentage } from '../../components/CardMealPorcentage';
import { Header } from '../../components/Header';
import { Spacing } from '../../components/Spacing';

import { Container, DateText, TextMeal } from './styles';
import { MealSmal } from '../../models/Meal';
import { FlatList } from 'react-native';
import { TitleWithFlatlist } from '../../components/TitleWithFlatlist';

export function Home() {
  const [listDate, setListDate] = useState(['18.08.22', '17.08.22', '16.08.22']);
  const [list, setList] = useState<MealSmal[]>([
    { hour: '08:00', isDiet: 'Yes', name: 'Tapioca' },
    { hour: '12:00', isDiet: 'Yes', name: 'Arroz e Macarrão' },
    { hour: '15:30', isDiet: 'Yes', name: 'Vitamina de Abacate' },
    { hour: '20:00', isDiet: 'No', name: 'Pão com ovo' },
  ]);

  return (
    <Container>
      <Header />
      <Spacing height={32} />
      <CardMealPorcentage porcetage={70.5674} />
      
      <TextMeal>Refeições</TextMeal>
      <Button
        icon='plus'
        text='Nova refeição'
        activeOpacity={0.7}
      />
      <Spacing height={32} />
      <FlatList
        data={listDate}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TitleWithFlatlist
            date={item}
            listMeal={list}
            onPressCardMeal={() => { console.log('meal');}}
          />
        )}
        ItemSeparatorComponent={() => <Spacing height={32} />}
      />
      
    </Container>
  );
}