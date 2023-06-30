import AsyncStorage from '@react-native-async-storage/async-storage';

import { Statistic } from '../../models/Statistics';

import { STATISTICS } from '../storageConfig';

export async function getStatistics() {
  try {
    const storage = await AsyncStorage.getItem(STATISTICS);
    const statistic: Statistic = storage ?
      JSON.parse(storage) :
      { numberAllOffDiet: 0, numberAllOnDiet: 0, sequence: 0, sequenceCurrent: 0 };

    return statistic;
  } catch (error) {
    throw error;
  }
}
