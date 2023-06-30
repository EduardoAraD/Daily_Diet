import AsyncStorage from '@react-native-async-storage/async-storage';

import { REF_MEAL } from '../storageConfig';

export async function getLastRefMeal() {
  try {
    const storageRefMeal = await AsyncStorage.getItem(REF_MEAL);

    const refMeal: number = storageRefMeal ? Number(storageRefMeal) : 1;

    return refMeal;
  } catch (error) {
    throw error;
  }
}
