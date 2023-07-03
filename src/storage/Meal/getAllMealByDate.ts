import { Meal } from '../../models/Meal';

import { getAllRefsByDate } from '../Dates/getAllRefsMealByDate';
import { getMealByRef } from './getMealByRef';

export async function getAllMealByDate(date: string) {
  try {
    const refsDate = await getAllRefsByDate(date);

    const meals: Meal[] = await Promise.all(
      refsDate.map(item => getMealByRef(item))
    );

    return meals;
  } catch (error) {
    throw error;
  }
}