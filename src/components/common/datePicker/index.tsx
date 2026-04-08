import Modal from '@/components/common/modal';
import theme from '@/styles';
import DateTimePicker, {
  type DateTimePickerEvent,
  DateTimePickerAndroid
} from '@react-native-community/datetimepicker';
import Feather from '@expo/vector-icons/Feather';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

dayjs.extend(customParseFormat);

const IOS_SHEET_WIDTH = Dimensions.get('window').width - 40;

type TPickerMode = 'date' | 'time' | 'datetime';

const VALUE_FORMAT: Record<TPickerMode, string> = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  datetime: 'YYYY-MM-DD HH:mm'
};

const PLACEHOLDER: Record<TPickerMode, string> = {
  date: '날짜 선택',
  time: '시간 선택',
  datetime: '날짜·시간 선택'
};

const parseValueToDate = (value: string, mode: TPickerMode): Date => {
  const trimmed = value.trim();
  if (!trimmed) return new Date();

  const strict = dayjs(trimmed, VALUE_FORMAT[mode], true);
  if (strict.isValid()) return strict.toDate();

  const loose = dayjs(trimmed);
  return loose.isValid() ? loose.toDate() : new Date();
};

const toNativeMode = (mode: TPickerMode): 'date' | 'time' | 'datetime' => {
  if (Platform.OS === 'android' && mode === 'datetime') return 'date';
  return mode;
};

interface IDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  mode?: TPickerMode;
}

const DatePicker = ({ value, onChange, mode = 'date' }: IDatePickerProps) => {
  const [iosOpen, setIosOpen] = useState(false);
  const [iosDraft, setIosDraft] = useState(() => parseValueToDate(value, mode));
  const fmt = VALUE_FORMAT[mode];
  const displayText = value.trim()
    ? dayjs(parseValueToDate(value, mode)).format(fmt)
    : '';

  const commit = (d: Date) => onChange(dayjs(d).format(fmt));

  const onPressRow = () => {
    if (Platform.OS === 'android') {
      const androidMode: 'date' | 'time' = mode === 'time' ? 'time' : 'date';
      DateTimePickerAndroid.open({
        value: parseValueToDate(value, mode),
        mode: androidMode,
        is24Hour: true,
        display: 'spinner',
        design: 'default',
        onChange: (event: DateTimePickerEvent, selected?: Date) => {
          if (event.type !== 'set' || selected == null) return;
          commit(selected);
        },
        positiveButton: {
          label: '확인',
          textColor: theme.colors.Main.Primary
        },
        negativeButton: {
          label: '취소',
          textColor: theme.colors.Main.Primary
        }
      });
    } else if (Platform.OS === 'ios') {
      setIosOpen(true);
    }
  };

  useEffect(() => {
    if (iosOpen) {
      setIosDraft(parseValueToDate(value, mode));
    }
  }, [iosOpen, value, mode]);

  const onIosPickerChange = (_e: DateTimePickerEvent, selected?: Date) => {
    if (selected != null) setIosDraft(selected);
  };

  const onIosConfirm = () => {
    commit(iosDraft);
    setIosOpen(false);
  };

  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={PLACEHOLDER[mode]}
        onPress={onPressRow}
        style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      >
        <Text
          style={[styles.valueText, !displayText && styles.placeholderText]}
        >
          {displayText || PLACEHOLDER[mode]}
        </Text>
        <Feather name="clock" size={20} color={theme.colors.Sub.Black[100]} />
      </Pressable>

      {Platform.OS === 'ios' ? (
        <Modal
          open={iosOpen}
          onClose={() => setIosOpen(false)}
          animationType="slide"
          width={IOS_SHEET_WIDTH}
          style={styles.iosModalPanel}
        >
          <View style={styles.iosSheet}>
            <View style={styles.iosToolbar}>
              <Pressable
                onPress={() => setIosOpen(false)}
                hitSlop={12}
                accessibilityRole="button"
                accessibilityLabel="취소"
              >
                <Text style={styles.iosToolbarSecondary}>취소</Text>
              </Pressable>
              <Pressable
                onPress={onIosConfirm}
                hitSlop={12}
                accessibilityRole="button"
                accessibilityLabel="확인"
              >
                <Text style={styles.iosToolbarPrimary}>확인</Text>
              </Pressable>
            </View>
            <DateTimePicker
              value={iosDraft}
              mode={toNativeMode(mode)}
              display="spinner"
              onChange={onIosPickerChange}
              locale="ko-KR"
            />
          </View>
        </Modal>
      ) : null}
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: theme.colors.Sub.Black[30],
    borderRadius: 10,
    backgroundColor: theme.colors.Main.White
  },

  rowPressed: {
    opacity: 0.85
  },

  valueText: {
    color: theme.colors.Main.Black,

    ...theme.typo.Body1_13_Regular
  },

  placeholderText: {
    color: theme.colors.Sub.Black[100]
  },

  iosModalPanel: {
    paddingHorizontal: 0,
    paddingVertical: 0
  },

  iosSheet: {
    backgroundColor: theme.colors.Main.White
  },

  iosToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.Sub.Black[30]
  },

  iosToolbarPrimary: {
    ...theme.typo.Body1_13_Regular,
    color: theme.colors.Main.Primary
  },

  iosToolbarSecondary: {
    ...theme.typo.Body1_13_Regular,
    color: theme.colors.Sub.Black[100]
  }
});
