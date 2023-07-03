import AsyncStorage from '@react-native-async-storage/async-storage';

import { ItOnDiet } from '../../models/Diet';
import { Statistic } from '../../models/Statistics';

import { STATISTICS } from '../storageConfig';
import { getStatistics } from './getStatistics';

export async function updateRemoveMealStatistics(itOnDiet: ItOnDiet) {
  try {
    const statistic = await getStatistics();
    
    const newStatistic: Statistic = {
      ...statistic,
      numberAllOffDiet: statistic.numberAllOffDiet - (itOnDiet === 'Yes' ? 0 : 1),
      numberAllOnDiet: statistic.numberAllOnDiet - (itOnDiet === 'Yes' ? 1 : 0),
    };
    
    await AsyncStorage.setItem(STATISTICS, JSON.stringify(newStatistic));
    return newStatistic;
  } catch (error) {
    throw error;
  }
}
