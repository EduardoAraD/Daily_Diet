import { ItOnDiet } from '../models/Diet';

export function calPorcentageMealDiet(
  numberMealOnDiet: number,
  numberMealOffDiet: number
) {
  return (numberMealOnDiet / (numberMealOnDiet + numberMealOffDiet)) * 100;
}

export function itOnDietToNumberMealDiet(
  numberMealOnDiet: number,
  numberMealOffDiet: number
): ItOnDiet {
  const porcentage = calPorcentageMealDiet(numberMealOnDiet, numberMealOffDiet);
  return porcentage >= 70 ? 'Yes' : 'No';
}
