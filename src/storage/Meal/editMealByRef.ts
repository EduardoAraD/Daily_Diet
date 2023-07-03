import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meal } from '../../models/Meal';

import { MEAL_COLLECTION } from '../storageConfig';
import { getMealByRef } from './getMealByRef';
import { removeRefMealByDate } from '../Dates/removeRefMealByDate';
import { createAllRefsMealByDate } from '../Dates/createAllRefsMealByDate';
import { updateAddMealStatistics } from '../Statistics/updateAddMealStatistics';
import { updateRemoveMealStatistics } from '../Statistics/updateRemoveMealStaticts';

export async function editMealByRef(refMeal: number, meal: Meal) {
  try {
    const mealStorage = await getMealByRef(refMeal);
    if(mealStorage.date !== meal.date){
      await removeRefMealByDate(refMeal, mealStorage.date);
      await createAllRefsMealByDate(mealStorage.date, refMeal);
    }

    if(mealStorage.isDiet !== meal.isDiet) {
      await updateRemoveMealStatistics(mealStorage.isDiet);
      await updateAddMealStatistics(meal.isDiet);
    }

    const newMeal: Meal = {
      date: meal.date,
      description: meal.description,
      hour: meal.hour,
      isDiet: meal.isDiet,
      name: meal.name,
      id: refMeal,
    };

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${refMeal}`, JSON.stringify(newMeal));
  } catch (error) {
    throw error;
  }
}
