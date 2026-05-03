import theme from '@/styles';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from 'react-native';

type TRadioOptionValue = string | number;
type TRadioType = 'radio' | 'button';

type TRadioButtonStyle = 'outline' | 'solid';

export interface IRadioOption<T extends TRadioOptionValue = TRadioOptionValue> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface IRadioProps<T extends TRadioOptionValue> {
  options: IRadioOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  type?: TRadioType;
  buttonStyle?: TRadioButtonStyle;
  style?: StyleProp<ViewStyle>;
}

const Radio = <T extends TRadioOptionValue>({
  options,
  value,
  onChange,
  type: radioType = 'radio',
  buttonStyle = 'outline',
  style
}: IRadioProps<T>) => {
  const isButton = radioType === 'button';
  const isSolid = buttonStyle === 'solid';

  return (
    <View
      style={[
        styles.group,
        isButton && styles.groupBlock,
        !isButton && styles.groupFitContent,
        isButton ? styles.groupButtonRow : styles.groupDefaultBase,
        style
      ]}
    >
      {options.map((opt, index) => {
        const selected = value === opt.value;
        const disabled = opt.disabled === true;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        if (isButton) {
          return (
            <View
              key={String(opt.value)}
              style={[
                styles.buttonSegmentSlot,
                !isFirst && styles.buttonOverlap,
                selected && styles.buttonSegmentSelectedZ
              ]}
            >
              <Pressable
                disabled={disabled}
                accessibilityRole="radio"
                accessibilityState={{ selected, disabled }}
                style={({ pressed }) => [
                  styles.buttonOption,
                  styles.buttonPressableFill,
                  styles.buttonConnectedBase,
                  isFirst && styles.buttonEndLeft,
                  isLast && styles.buttonEndRight,
                  selected
                    ? isSolid
                      ? styles.buttonSelectedSolid
                      : styles.buttonSelectedOutline
                    : styles.buttonUnselected,
                  disabled && styles.disabled,
                  pressed && !disabled && !selected && styles.buttonPressed
                ]}
                onPress={() => onChange(opt.value)}
              >
                <Text
                  style={[
                    styles.buttonLabel,
                    styles.buttonLabelInCell,
                    selected
                      ? isSolid
                        ? styles.buttonLabelSolid
                        : styles.buttonLabelOutlineSelected
                      : styles.buttonLabelUnselected
                  ]}
                  numberOfLines={1}
                >
                  {opt.label}
                </Text>
              </Pressable>
            </View>
          );
        }

        return (
          <Pressable
            key={String(opt.value)}
            disabled={disabled}
            accessibilityRole="radio"
            accessibilityState={{ selected, disabled }}
            style={({ pressed }) => [
              styles.defaultRow,
              disabled && styles.disabled,
              pressed && !disabled && styles.defaultRowPressed
            ]}
            onPress={() => onChange(opt.value)}
          >
            <View
              style={[styles.radioOuter, selected && styles.radioOuterSelected]}
            >
              {selected ? <View style={styles.radioInner} /> : null}
            </View>
            <Text style={styles.defaultLabel}>{opt.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Radio;

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  groupBlock: {
    width: '100%',
    alignSelf: 'stretch'
  },
  groupFitContent: {
    alignSelf: 'flex-start',
    flexGrow: 0
  },

  groupDefaultBase: {
    flexWrap: 'wrap',
    gap: 12
  },

  groupButtonRow: {
    flexWrap: 'nowrap',
    gap: 0,
    alignItems: 'stretch'
  },

  defaultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  defaultRowPressed: {
    opacity: 0.85
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: theme.colors.Sub.Black[30],
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioOuterSelected: {
    borderColor: theme.colors.Main.Primary
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.Main.Primary
  },
  defaultLabel: {
    color: theme.colors.Main.Black,
    ...theme.typo.Body1_13_Regular
  },

  buttonSegmentSlot: {
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0
  },
  buttonSegmentSelectedZ: {
    zIndex: 1
  },
  buttonPressableFill: {
    width: '100%',
    flexGrow: 1,
    minHeight: 48
  },
  buttonOption: {
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  buttonConnectedBase: {
    borderRadius: 0
  },
  buttonOverlap: {
    marginLeft: -1
  },
  buttonEndLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  buttonEndRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  buttonUnselected: {
    backgroundColor: theme.colors.Main.White,
    borderColor: theme.colors.Sub.Black[30]
  },
  buttonSelectedSolid: {
    backgroundColor: theme.colors.Main.Primary,
    borderColor: theme.colors.Main.Primary
  },
  buttonSelectedOutline: {
    backgroundColor: theme.colors.Main.White,
    borderColor: theme.colors.Main.Primary
  },
  buttonPressed: {
    backgroundColor: theme.colors.Sub.Black[10]
  },
  buttonLabel: {
    ...theme.typo.Body1_13_Regular
  },
  buttonLabelInCell: {
    width: '100%',
    flexShrink: 1,
    textAlign: 'center'
  },
  buttonLabelUnselected: {
    color: theme.colors.Main.Black
  },
  buttonLabelSolid: {
    color: theme.colors.Main.White,
    ...theme.typo.Body1_13_Bold
  },
  buttonLabelOutlineSelected: {
    color: theme.colors.Main.Primary,
    ...theme.typo.Body1_13_Bold
  },

  disabled: {
    opacity: 0.45
  }
});
