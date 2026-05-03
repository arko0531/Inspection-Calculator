import theme from '@/styles';
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';

interface IInputProps {
  value: string | number;
  onChange: (text: string) => void;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  number?: boolean;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = 'default',
  number = false
}: IInputProps) => {
  return (
    <View style={styles.wrap}>
      {number && type === 'numeric' ? (
        <CurrencyInput
          style={styles.input}
          placeholder={placeholder}
          value={value === '' ? null : Number(value)}
          onChangeValue={(num) => onChange(num == null ? '' : String(num))}
          delimiter=","
          separator="."
          precision={0}
          keyboardType={type}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={String(value)}
          onChangeText={onChange}
          keyboardType={type}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'stretch',
    width: '100%',
    minWidth: 0
  },

  input: {
    alignSelf: 'stretch',
    width: '100%',
    minWidth: 0,
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.Sub.Black[30],
    borderRadius: 10,
    paddingHorizontal: 16,

    ...theme.typo.Body1_13_Regular
  }
});
