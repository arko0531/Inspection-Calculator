import Toast from 'react-native-toast-message';

const defaultVisibility = 2000;

export const toast = {
  success: (text1: string, text2?: string) =>
    Toast.show({
      type: 'success',
      text1,
      text2,
      visibilityTime: defaultVisibility
    }),
  error: (text1: string, text2?: string) =>
    Toast.show({
      type: 'error',
      text1,
      text2,
      visibilityTime: defaultVisibility
    }),
  info: (text1: string, text2?: string) =>
    Toast.show({
      type: 'info',
      text1,
      text2,
      visibilityTime: defaultVisibility
    })
};
