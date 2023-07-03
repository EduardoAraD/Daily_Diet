import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { CardMealPorcentage } from '../../components/CardMealPorcentage';
import { EmptyList } from '../../components/EmptyList';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Spacing } from '../../components/Spacing';
import { TitleWithFlatlist } from '../../components/TitleWithFlatlist';

import { Statistic } from '../../models/Statistics';

import { getAllDates } from '../../storage/Dates/getAllDates';
import { getStatistics } from '../../storage/Statistics/getStatistics';

import { Container, TextMeal } from './styles';
import { ModalError } from '../../components/ModalError';

export function Home() {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [loadingStatiscs, setLoadingStatistic] = useState(false);
  const [isShowModalError, setIsShowModalError] = useState(false);

  const [statistics, setStatistics] = useState<Statistic>({
    numberAllOffDiet: 0,
    numberAllOnDiet: 0,
    sequence: 0,
    sequenceCurrent: 0,
  });
  const [listDate, setListDate] = useState<string[]>([]);

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

  const getDatesOfMeal = useCallback(async () => {
    try {
      setLoading(true);

      const listDates = await getAllDates();
      setListDate(listDates);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsShowModalError(true);
    }
  }, []);

  const getPorcentage = useCallback(async () => {
    try {
      setLoadingStatistic(true);
  
      const statisticStorage = await getStatistics();
      setStatistics(statisticStorage);
  
      setLoadingStatistic(false);
    } catch (error) {
      console.log(error);
      setIsShowModalError(true);
    }
  }, []);

  const useFocusCallback = useCallback(() => {
    getDatesOfMeal();
    getPorcentage();
  }, []);

  useFocusEffect(useFocusCallback);

  return (
    <Container>
      <Header />
      <Spacing height={32} />
      <CardMealPorcentage
        loading={loadingStatiscs}
        numberMealOnDiet={statistics.numberAllOnDiet}
        numberMealOffDiet={statistics.numberAllOffDiet}
        sequenceMealOnDiet={statistics.sequence}
      />
      
      <TextMeal>Refeições</TextMeal>
      <Button
        icon='plus'
        text='Nova refeição'
        activeOpacity={0.7}
        onPress={handleNewMeal}
      />
      <Spacing height={32} />
      {loading ? <Loading /> : (
        <FlatList
          data={listDate}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TitleWithFlatlist date={item} />
          )}
          ItemSeparatorComponent={() => <Spacing height={32} />}
          ListEmptyComponent={() => <EmptyList message='Não possui nenhuma refeição cadastrada.' />}
        />
      )}
      <ModalError
        visible={isShowModalError}
        onClose={() => setIsShowModalError(false)}
        title='Dados'
        subtitle='Não foi possível carregar os dados de refeição.'
        transparent
      />
    </Container>
  );
}
