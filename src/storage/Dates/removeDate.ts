import AsyncStorage from '@react-native-async-storage/async-storage';

import { DATE_COLLECTION } from '../storageConfig';
import { getAllDates } from './getAllDates';

export async function removeDate(dateDelete: string) {
  try {
    const listDates = await getAllDates();
    const listResult = listDates.filter(date => date !== dateDelete);

    await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(listResult));
  } catch (error) {
    throw error;
  }
}