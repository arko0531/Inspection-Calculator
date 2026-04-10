import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  StyleProp,
  ViewStyle
} from 'react-native';

type IFlatScrollViewProps<T> = Omit<
  FlatListProps<T>,
  'data' | 'renderItem' | 'keyExtractor' | 'contentContainerStyle'
> & {
  data: T[];
  render: ListRenderItem<T>;
  itemKey: (item: T, index: number) => string;
  style?: StyleProp<ViewStyle>;
  showScrollbar?: boolean;
};
const FlatScrollView = <T,>({
  data,
  render,
  itemKey,
  style,
  showScrollbar = false,
  ...props
}: IFlatScrollViewProps<T>) => {
  return (
    <FlatList
      keyExtractor={itemKey}
      data={data}
      renderItem={render}
      showsVerticalScrollIndicator={showScrollbar}
      contentContainerStyle={[style, { paddingBottom: 26 }]}
      keyboardShouldPersistTaps="handled"
      {...props}
    />
  );
};

export default FlatScrollView;
