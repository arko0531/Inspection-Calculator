import theme from '@/styles';
import { getHexOpacity } from '@/utils/getHexOpacity';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Modal as RNModal,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const WINDOW_HEIGHT = Dimensions.get('window').height;

interface IModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  /** `slide`: 배경 즉시 + 패널만 아래에서 올림. `none`: 전부 즉시. */
  animationType?: 'slide' | 'none';
  modalStyle?: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen';
}

const Modal = ({
  children,
  open,
  onClose,
  width,
  height,
  animationType = 'slide',
  modalStyle,
  style
}: IModalProps) => {
  const [internalVisible, setInternalVisible] = useState(
    () => !usePanelSlide && open
  );

  const slideAnim = useRef(new Animated.Value(WINDOW_HEIGHT)).current;

  const insets = useSafeAreaInsets();

  const usePanelSlide = animationType === 'slide';

  const presentationStyle =
    modalStyle ?? (Platform.OS === 'ios' ? 'overFullScreen' : undefined);

  const panelSize = {
    width: width ?? '90%',
    height: height ?? 'auto'
  } as const;

  useEffect(() => {
    if (!usePanelSlide) {
      setInternalVisible(open);
      return;
    }

    if (open) {
      setInternalVisible(true);
      slideAnim.setValue(WINDOW_HEIGHT);
      requestAnimationFrame(() => {
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          tension: 65,
          friction: 11
        }).start();
      });
    } else {
      Animated.timing(slideAnim, {
        toValue: WINDOW_HEIGHT,
        duration: 220,
        useNativeDriver: true
      }).start(({ finished }) => {
        if (finished) setInternalVisible(false);
      });
    }
  }, [open, slideAnim, usePanelSlide]);

  const modalVisible = usePanelSlide ? internalVisible : open;

  return (
    <RNModal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
      {...(presentationStyle !== undefined ? { presentationStyle } : {})}
    >
      <View style={styles.root}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onClose}
          accessibilityLabel="모달 닫기"
          accessibilityRole="button"
        />
        <View
          style={[
            styles.modalContainer,
            { paddingBottom: Math.max(insets.bottom, 16) }
          ]}
          pointerEvents="box-none"
        >
          {usePanelSlide ? (
            <Animated.View
              style={[
                styles.modal,
                panelSize,
                style,
                { transform: [{ translateY: slideAnim }] }
              ]}
            >
              {children}
            </Animated.View>
          ) : (
            <View style={[styles.modal, panelSize, style]}>{children}</View>
          )}
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: getHexOpacity(theme.colors.Main.Black, 0.3)
  },

  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  modal: {
    backgroundColor: theme.colors.Main.White,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 16,
    overflow: 'hidden'
  }
});

export default Modal;
