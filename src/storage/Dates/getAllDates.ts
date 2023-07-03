import AsyncStorage from '@react-native-async-storage/async-storage';

import { DATE_COLLECTION } from '../storageConfig';

export async function getAllDates() {
  try {
    const storage = await AsyncStorage.getItem(DATE_COLLECTION);

    const dates: string[] = storage ? JSON.parse(storage) : [];
    return dates.sort((a, b) => {
      if(a > b) return 1;
      else if(b > a) return -1;
      else return 0;
    });
  } catch (error) {
    throw(error);
  }
}
