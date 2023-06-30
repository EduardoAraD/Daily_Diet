import AsyncStorage from '@react-native-async-storage/async-storage';

import { DATE_COLLECTION } from '../storageConfig';
import { getAllDates } from './getAllDates';

export async function createNewDate(date: string) {
  try {
    const dates = await getAllDates();
    if(!dates.includes(date)) {
      const listDate = [...dates, date];
      await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(listDate));
    }

    return date;
  } catch (error) {
    throw error;
  }
}
