import theme from '@/styles';
import type { ReactElement } from 'react';
import {
  type Control,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
  useController
} from 'react-hook-form';
import { StyleSheet, Text, View, type ViewProps } from 'react-native';

interface IFormLayoutProps<T extends FieldValues> extends Omit<
  ViewProps,
  'children'
> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T, FieldPath<T>>;
  title?: string;
  children: (args: {
    value: any;
    onChange: (value: any) => void;
  }) => ReactElement;
}

function FormLayout<T extends FieldValues>({
  control,
  name,
  rules,
  title,
  children,
  style,
  ...viewProps
}: IFormLayoutProps<T>) {
  const { field, fieldState } = useController({
    control,
    name,
    rules
  });

  return (
    <View {...viewProps}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children({
        value: field.value as string,
        onChange: field.onChange
      })}

      <View style={styles.errorContainer}>
        {fieldState.error?.message != null ? (
          <Text style={styles.error}>{String(fieldState.error.message)}</Text>
        ) : null}
      </View>
    </View>
  );
}

export default FormLayout;

const styles = StyleSheet.create({
  title: {
    color: theme.colors.Main.Black,
    marginBottom: 6,

    ...theme.typo.Body1_13_Bold
  },

  errorContainer: {
    minHeight: 18,
    marginTop: 2
  },

  error: {
    textAlign: 'right',
    color: theme.colors.Main.Warning,

    ...theme.typo.Body3_11_Regular
  }
});
