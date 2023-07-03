import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '../storageConfig';
import { removeRefMealByDate } from '../Dates/removeRefMealByDate';
import { getMealByRef } from './getMealByRef';
import { updateRemoveMealStatistics } from '../Statistics/updateRemoveMealStaticts';

export async function removeMealByRef(refMeal: number) {
  try {
    const mealStorage = await getMealByRef(refMeal);
    await Promise.all([
      removeRefMealByDate(refMeal, mealStorage.date),
      updateRemoveMealStatistics(mealStorage.isDiet),
      AsyncStorage.removeItem(`${MEAL_COLLECTION}-${refMeal}`)
    ]);
  } catch (error) {
    throw error;
  }
}
