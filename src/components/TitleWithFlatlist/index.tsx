import { FlatList } from 'react-native';

import { CardMeal } from '../CardMeal';
import { Spacing } from '../Spacing';
import { MealSmal } from '../../models/Meal';

import { Container, Title } from './styles';

type Props = {
  date: string;
  listMeal: MealSmal[];
  onPressCardMeal: () => void;
}

export function TitleWithFlatlist ({ date, listMeal, onPressCardMeal }: Props) {
  return (
    <Container>
      <Title>{date}</Title>
      <FlatList
        data={listMeal}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CardMeal
            hour={item.hour}
            isDiet={item.isDiet}
            name={item.name}
            activeOpacity={0.7}
            onPress={onPressCardMeal}
          />
        )}
        ItemSeparatorComponent={() => <Spacing height={8} />}
      />
    </Container>
  );
}