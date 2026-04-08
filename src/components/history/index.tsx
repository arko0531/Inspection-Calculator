import Header from '@/components/common/header';
import HistoryCard from '@/components/history/item';
import theme from '@/styles';
import { STORAGE_KEYS } from '@/constants/keys';
import { getData, setData } from '@/utils/storage/asyncStorage';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { THistoryItem } from '@/types/common';
import { useEffect, useMemo, useState } from 'react';

const History = () => {
  const [historyData, setHistoryData] = useState<THistoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const data = await getData<THistoryItem[]>(STORAGE_KEYS.CALC_HISTORY);

      if (data) {
        setHistoryData(data);
      } else {
        setHistoryData([]);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const deleteHandler = () => {
    setHistoryData([]);
    setData<THistoryItem[]>(STORAGE_KEYS.CALC_HISTORY, []);
  };

  return (
    <View style={styles.container}>
      <Header
        title="계산 기록"
        description="최근 계산 기록 최대 50개를 볼 수 있어요."
        topComp={
          <Pressable onPress={deleteHandler}>
            <Text style={styles.deleteButton}>전체 삭제</Text>
          </Pressable>
        }
      />

      <FlatList
        data={historyData}
        renderItem={({ item }) => <HistoryCard item={item} />}
        keyExtractor={(item, index) => item.updateTs + index}
      />
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
