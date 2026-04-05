import theme from '@styles';
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';

interface IInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  type?: KeyboardTypeOptions;
}

const Input = ({
  value,
  onChangeText,
  placeholder,
  type = 'default'
}: IInputProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={type}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.Sub.Black[30],
    borderRadius: 8,
    paddingHorizontal: 16,

    ...theme.typo.Body1_13_Regular
  }
});
