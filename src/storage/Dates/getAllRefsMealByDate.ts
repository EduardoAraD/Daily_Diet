import AsyncStorage from '@react-native-async-storage/async-storage';

import { DATE_REF_MEAL_COLLECTION } from '../storageConfig';

export async function getAllRefsByDate(date: string) {
  try {
    const storage = await AsyncStorage.getItem(`${DATE_REF_MEAL_COLLECTION}-${date}`);

    const listRefByDate: number[] = storage ? JSON.parse(storage) : [];
    return listRefByDate;

  } catch (error) {
    throw error;
  }
}
