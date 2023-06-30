import { FeedbackRouteParams } from '../screens/Feedback';
import { NewMealRouteProps } from '../screens/NewMeal';
import { StatisticsRouteParams } from '../screens/Statistics';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: StatisticsRouteParams;
      newMeal: NewMealRouteProps;
      feedback: FeedbackRouteParams;
      mealDetails: undefined;
    }
  }
}
