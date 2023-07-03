import AsyncStorage from '@react-native-async-storage/async-storage';

import { DATE_REF_MEAL_COLLECTION } from '../storageConfig';
import { getAllRefsByDate } from './getAllRefsMealByDate';
import { removeDate } from './removeDate';

export async function removeRefMealByDate(refMealDelete: number, date: string) {
  try {
    const refs = await getAllRefsByDate(date);
    const refsResult = refs.filter(refMeal => refMeal !== refMealDelete);

    if(refsResult.length === 0) {
      await AsyncStorage.removeItem(`${DATE_REF_MEAL_COLLECTION}-${date}`);
      await removeDate(date);
    } else {
      await AsyncStorage.setItem(`${DATE_REF_MEAL_COLLECTION}-${date}`, JSON.stringify(refsResult));
    }
  } catch (error) {
    throw (error);
  }
}
