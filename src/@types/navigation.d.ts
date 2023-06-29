import { FeedbackRouteParams } from '../screens/Feedback';
import { StatisticsRouteParams } from '../screens/Statistics';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: StatisticsRouteParams;
      newMeal: undefined;
      feedback: FeedbackRouteParams;
    }
  }
}
