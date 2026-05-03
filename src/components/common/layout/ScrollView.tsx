import {
  ScrollView as RNScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle
} from 'react-native';

interface IScrollViewProps extends ScrollViewProps {
  children: React.ReactNode;
  showScrollbar?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ScrollView = ({
  children,
  showScrollbar = false,
  style,
  ...props
}: IScrollViewProps) => {
  return (
    <RNScrollView
      showsVerticalScrollIndicator={showScrollbar}
      contentContainerStyle={[style, { paddingBottom: 26 }]}
      keyboardShouldPersistTaps="handled"
      {...props}
    >
      {children}
    </RNScrollView>
  );
};

export default ScrollView;
