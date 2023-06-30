import { ItOnDiet } from './Diet';

export interface Meal {
  id?: number;
  name: string;
  hour: string;
  date: string;
  description: string;
  isDiet: ItOnDiet;
}

export interface MealSmal {
  name: string;
  hour: string;
  isDiet: ItOnDiet;
}
