import { FeedbackRouteParams } from '../screens/Feedback';
import { MealDetailsRouteParams } from '../screens/MealDetails';
import { NewMealRouteProps } from '../screens/NewMeal';
import { StatisticsRouteParams } from '../screens/Statistics';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: StatisticsRouteParams;
      newMeal: NewMealRouteProps;
      feedback: FeedbackRouteParams;
      mealDetails: MealDetailsRouteParams;
    }
  }
}
