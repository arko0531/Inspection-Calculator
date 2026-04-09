import AsyncStorage from '@react-native-async-storage/async-storage';

// 저장하기
export const setData = async <T>(key: string, value: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('데이터 저장 실패', e);
  }
};

// 불러오기
export const getData = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value === null) return null;
    return JSON.parse(value) as T;
  } catch (e) {
    console.error('데이터 불러오기 실패', e);
    return null;
  }
};

// 삭제하기
export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('데이터 삭제 실패', e);
  }
};
