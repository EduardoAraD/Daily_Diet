import AsyncStorage from '@react-native-async-storage/async-storage';

import { Meal } from '../../models/Meal';

import { MEAL_COLLECTION } from '../storageConfig';

import { AppError } from '../../utils/AppError';

export async function getMealByRef(refMeal: number) {
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${refMeal}`);

    if(!storage) {
      throw new AppError('Essa refeição não existe!');
    }
    
    const meal: Meal = JSON.parse(storage);
    return meal;
  } catch (error) {
    throw error;
  }
}