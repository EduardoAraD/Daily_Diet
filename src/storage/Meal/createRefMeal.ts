import AsyncStorage from '@react-native-async-storage/async-storage';

import { getLastRefMeal } from './getLastRefMeal';
import { REF_MEAL } from '../storageConfig';

export async function createRefMeal() {
  try {
    const refMeal = await getLastRefMeal();

    const newRefMeal = refMeal + 1;
    await AsyncStorage.setItem(REF_MEAL, String(newRefMeal));

    return newRefMeal;
  } catch (error) {
    throw error;
  }
}