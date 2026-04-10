import ToastMessage, {
  ToastConfig,
  BaseToast,
  ErrorToast
} from 'react-native-toast-message';
import theme from '@/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, View } from 'react-native';

const Toast = () => {
  const insets = useSafeAreaInsets();
  const top = insets.top;

  const contentContainerStyle = { paddingHorizontal: 10 };
  const textStyle = {
    ...theme.typo.M1_14_Bold,
    color: theme.colors.Main.White
  };

  const config: ToastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        renderLeadingIcon={() => (
          <View style={styles.iconContainer}>
            <AntDesign
              name="check-circle"
              size={18}
              color={theme.colors.Main.White}
            />
          </View>
        )}
        style={{
          borderLeftColor: theme.colors.Main.Green,
          backgroundColor: theme.colors.Main.Green
        }}
        contentContainerStyle={contentContainerStyle}
        text1Style={textStyle}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        renderLeadingIcon={() => (
          <View style={styles.iconContainer}>
            <AntDesign
              name="warning"
              size={18}
              color={theme.colors.Main.White}
            />
          </View>
        )}
        style={{
          borderLeftColor: theme.colors.Main.Warning,
          backgroundColor: theme.colors.Main.Warning
        }}
        contentContainerStyle={contentContainerStyle}
        text1Style={textStyle}
      />
    ),
    info: (props) => (
      <BaseToast
        {...props}
        renderLeadingIcon={() => (
          <View style={styles.iconContainer}>
            <AntDesign
              name="info-circle"
              size={18}
              color={theme.colors.Main.White}
            />
          </View>
        )}
        style={{
          borderLeftColor: theme.colors.Main.Primary,
          backgroundColor: theme.colors.Main.Primary
        }}
        contentContainerStyle={contentContainerStyle}
        text1Style={textStyle}
      />
    )
  };

  return <ToastMessage config={config} topOffset={top + 8} />;
};

export default Toast;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 14
  }
});
