import AsyncStorage from '@react-native-async-storage/async-storage';

import { ItOnDiet } from '../../models/Diet';
import { Statistic } from '../../models/Statistics';

import { STATISTICS } from '../storageConfig';
import { getStatistics } from './getStatistics';

export async function updateAddMealStatistics(itOnDiet: ItOnDiet) {
  try {
    const statistic = await getStatistics();
    const sequenceCurrent = itOnDiet === 'No' ? 0 : (1 + statistic.sequenceCurrent);
    const sequence = sequenceCurrent > statistic.sequence ? sequenceCurrent : statistic.sequence;

    const newStatistic: Statistic = {
      numberAllOffDiet: (itOnDiet === 'Yes' ? 0 : 1) + statistic.numberAllOffDiet,
      numberAllOnDiet: (itOnDiet === 'Yes' ? 1 : 0) + statistic.numberAllOnDiet,
      sequence,
      sequenceCurrent,
    };
    
    await AsyncStorage.setItem(STATISTICS, JSON.stringify(newStatistic));
    return newStatistic;
  } catch (error) {
    throw error;
  }
}
