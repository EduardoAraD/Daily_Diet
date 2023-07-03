import { FlatList } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { CardMeal } from '../CardMeal';
import { Loading } from '../Loading';
import { ModalError } from '../ModalError';
import { Spacing } from '../Spacing';

import { Meal } from '../../models/Meal';

import { getAllMealByDate } from '../../storage/Meal/getAllMealByDate';

import { Container, Title } from './styles';

type Props = {
  date: string;
}

export function TitleWithFlatlist ({ date }: Props) {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Meal[]>([]);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleGoMealDetails = useCallback((item: Meal) => {
    navigate('mealDetails', { meal: item });
  }, []);

  const getMealByDate = useCallback(async () => {
    try {
      setLoading(true);

      const list = await getAllMealByDate(date);
      setList(list);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsShowModal(true);
    }
  }, [date]);

  useEffect(() => {
    getMealByDate();
  }, []);

  return (
    <Container>
      <Title>{date}</Title>
      {loading ? <Loading /> : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <CardMeal
              hour={item.hour}
              isDiet={item.isDiet}
              name={item.name}
              activeOpacity={0.7}
              onPress={() => handleGoMealDetails(item)}
            />
          )}
          ItemSeparatorComponent={() => <Spacing height={8} />}
        />
      )}
      <ModalError
        visible={isShowModal}
        onClose={() => setIsShowModal(false)}
        title='Refeições'
        subtitle='Não foi possível carregar as refeições.'
        transparent
      />
    </Container>
  );
}
