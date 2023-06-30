import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAllRefsByDate } from './getAllRefsMealByDate';
import { DATE_REF_MEAL_COLLECTION } from '../storageConfig';

import { AppError } from '../../utils/AppError';

export async function createAllRefsMealByDate(date: string, refMeal: number) {
  try {
    const storageRefs = await getAllRefsByDate(date);
    const listRefs: number[] = storageRefs ? JSON.parse(storageRefs) : [];

    if(listRefs.includes(refMeal)) {
      throw new AppError('Id inválido');
    }

    await AsyncStorage.setItem(
      `${DATE_REF_MEAL_COLLECTION}-${date}`,
      JSON.stringify([...listRefs, refMeal])
    );
  } catch (error) {
    throw error;
  }
}
