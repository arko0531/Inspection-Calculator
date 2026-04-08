import Header from '@/components/common/header';
import ScrollView from '@/components/common/layout/ScrollView';
import HistoryCard from '@/components/history/item';
import theme from '@/styles';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const History = () => {
  const deleteHandler = () => {};

  return (
    <View style={styles.container}>
      <Header
        title="계산 기록"
        description="최근 계산 기록이에요."
        topComp={
          <Pressable onPress={deleteHandler}>
            <Text style={styles.deleteButton}>전체 삭제</Text>
          </Pressable>
        }
      />

      <ScrollView style={styles.scrollContainer}>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 26
  },

  scrollContainer: {
    gap: 18
  },

  deleteButton: {
    color: theme.colors.Main.Warning,
    textAlign: 'right',

    ...theme.typo.Body2_12_Bold
  }
});
