import theme from '@/styles';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IButtonProps {
  title: string;
  onPress: () => void;
  btnType?: 'primary' | 'outline' | 'warning';
}

const Button = ({ title, onPress, btnType = 'primary' }: IButtonProps) => {
  const buttonStyle = useMemo(() => {
    switch (btnType) {
      case 'primary':
        return {
          button: {
            backgroundColor: theme.colors.Main.Primary
          },
          buttonPressed: {
            backgroundColor: theme.colors.Sub.Blue[100]
          },
          buttonText: {
            color: theme.colors.Main.White
          }
        };
      case 'outline':
        return {
          button: {
            backgroundColor: theme.colors.Main.White,
            borderWidth: 1,
            borderColor: theme.colors.Sub.Black[30]
          },
          buttonPressed: {
            backgroundColor: theme.colors.Sub.Black[10]
          },
          buttonText: {
            color: theme.colors.Main.Black
          }
        };
      case 'warning':
        return {
          button: {
            backgroundColor: theme.colors.Main.Warning
          },
          buttonPressed: {
            backgroundColor: theme.colors.Sub.Red[100]
          },
          buttonText: {
            color: theme.colors.Main.White
          }
        };
    }
  }, [btnType]);

  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          buttonStyle.button,
          pressed && buttonStyle.buttonPressed
        ]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, buttonStyle.buttonText]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    ...theme.typo.B1_15_Bold
  }
});
