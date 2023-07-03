import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meal } from '../../models/Meal';

import { MEAL_COLLECTION } from '../storageConfig';
import { createRefMeal } from './createRefMeal';
import { createNewDate } from '../Dates/createNewDate';
import { createAllRefsMealByDate } from '../Dates/createAllRefsMealByDate';
import { updateAddMealStatistics } from '../Statistics/updateAddMealStatistics';

export async function createMeal(meal: Meal) {
  try {
    const refMeal = await createRefMeal();
    const date = await createNewDate(meal.date);
    await createAllRefsMealByDate(date, refMeal);
    await updateAddMealStatistics(meal.isDiet);
    
    const newMeal: Meal = {
      ...meal,
      date: date,
      id: refMeal,
    };

    await AsyncStorage.setItem(
      `${MEAL_COLLECTION}-${refMeal}`,
      JSON.stringify(newMeal)
    );
  } catch (error) {
    throw error;
  }
}
